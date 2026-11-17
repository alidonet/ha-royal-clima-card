const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const source = fs.readFileSync(require("node:path").join(__dirname, "../dist/ha-royal-clima-card.js"), "utf8");
const context = { HTMLElement: class {}, customElements: { get: () => true }, setTimeout, clearTimeout };
vm.runInNewContext(source + "\nglobalThis.cardClass = RoyalClimaCard; globalThis.roles = ROLES;", context);

function card(config = {}) {
  const result = Object.create(context.cardClass.prototype);
  Object.assign(result, {
    dataset: {},
    _clearPending() {}, _clearSpeeds() {}, _clearErrors() {}, _applyLayout() {}, _render() {},
  });
  result.setConfig(config);
  return result;
}

test("boolean forms normalize without mutating the caller's configuration", () => {
  for (const [expected, values] of [[true, [true, "true", 1]], [false, [false, "false", 0]]]) {
    for (const value of values) {
      const config = { transparent: value, flow_colormap: value, sensor_boost_co2: value, show_icons: { esp_connection: value } };
      const result = card(config);
      for (const key of ["transparent", "flow_colormap", "sensor_boost_co2"]) assert.equal(result._config[key], expected);
      assert.equal(result._config.show_icons.esp_connection, expected);
      assert.equal(config.show_icons.esp_connection, value);
      assert.equal(config.transparent, value);
    }
  }
});

test("ambiguous boolean values and unknown icon keys are rejected", () => {
  for (const value of ["yes", "", 2, null, [], {}]) {
    assert.throws(() => card({ transparent: value }), /true or false/);
    assert.throws(() => card({ show_icons: { preheater: value } }), /true or false/);
  }
  assert.throws(() => card({ show_icons: { missing: true } }), /show_icons/);
});

test("entity keys preserve generated entity IDs", () => {
  const result = card();
  for (const [key, [domain, suffix, group]] of Object.entries(context.roles)) {
    if (key === "preheater") {
      assert.equal(result._ids[key], null);
    } else {
      assert.equal(result._ids[key], `${domain}.${group === "esp" ? "royal_clima" : "ventilation_system"}_${suffix}`);
    }
  }
  assert.equal(card({ entities: { exhaust_temperature: "sensor.custom_exhaust" } })._ids.exhaust_temperature, "sensor.custom_exhaust");
  assert.throws(() => card({ entities: { defrost_temperature: "sensor.old_key" } }), /Unknown entity role/);
});

test("power and fan commands use renamed readings and original control entities", async () => {
  const result = card();
  const calls = [];
  result._hass = { states: {}, async callService(...args) { calls.push(args); } };
  for (const [key, id] of Object.entries(result._ids)) {
    if (id) result._hass.states[id] = { state: key.endsWith("speed") ? "4" : "on", attributes: { options: ["0", "4", "7", "10"] } };
  }
  result.shadowRoot = { querySelector: () => ({ close() {} }) };
  assert.equal(result._powerReady(), true);
  for (const role of ["supply_speed", "exhaust_speed"]) {
    assert.equal(result._speedReady(role), true);
    await result._setSpeed(role, 7);
    const [domain, action, data] = calls.at(-1);
    assert.equal(domain, "select");
    assert.equal(action, "select_option");
    assert.equal(data.entity_id, result._ids[role + "_control"]);
    assert.equal(data.option, "7");
    clearTimeout(result._speedPending[role].timer);
  }
  await result._togglePower();
  assert.equal(calls.at(-1)[0], "switch");
  assert.equal(calls.at(-1)[1], "turn_off");
  assert.equal(calls.at(-1)[2].entity_id, result._ids.power_control);
  clearTimeout(result._pending.timer);
  result._hass.states[result._ids.power].state = "off";
  assert.equal(result._speedProblem("supply_speed"), "power");
});

test("legacy entity option no longer overrides the supply sensor", () => {
  const result = card({ entity: "sensor.legacy_supply" });
  assert.equal(result._ids.supply_temperature, "sensor.ventilation_system_supply_air_temperature");
  assert.equal(card({ entities: { supply_temperature: "sensor.custom_supply" } })._ids.supply_temperature, "sensor.custom_supply");
});
