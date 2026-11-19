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
      const config = { transparent: value, flow_colormap: value, sensor_boost_co2: value, show_icons: { api_connected: value } };
      const result = card(config);
      for (const key of ["transparent", "flow_colormap", "sensor_boost_co2"]) assert.equal(result._config[key], expected);
      assert.equal(result._config.show_icons.api_connected, expected);
      assert.equal(config.show_icons.api_connected, value);
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
      assert.equal(result._ids[key], undefined);
    } else {
      assert.equal(result._ids[key], `${domain}.${group === "esp" ? "royalclima" : "vent"}_${suffix}`);
    }
  }
  assert.equal(card({ entities: { exhaust_temp: "sensor.custom_exhaust" } })._ids.exhaust_temp, "sensor.custom_exhaust");
  assert.throws(() => card({ entities: { defrost_temperature: "sensor.old_key" } }), /Unknown entity role/);
});

test("power and fan commands use the same entities as their confirmed readings", async () => {
  const result = card();
  const calls = [];
  result._hass = { states: {}, async callService(...args) { calls.push(args); } };
  for (const [key, id] of Object.entries(result._ids)) {
    if (id) result._hass.states[id] = { state: id.startsWith("select.") ? "4" : "on", attributes: { options: ["0", "4", "7", "10"] } };
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
  assert.equal(result._ids.supply_temp, "sensor.vent_supply_temp");
  assert.equal(card({ entities: { supply_temp: "sensor.custom_supply" } })._ids.supply_temp, "sensor.custom_supply");
});

test("new cards detect unique entity prefixes even when states are unavailable", () => {
  const states=Object.fromEntries(["sensor.office_outdoor_temp","sensor.office_return_temp","sensor.office_supply_temp","sensor.office_exhaust_temp","binary_sensor.office_online","binary_sensor.bridge_api_connected"].map(id=>[id,{state:"unavailable"}]));
  const config=context.cardClass.getStubConfig({states});
  assert.equal(config.prefix,"office");assert.equal(config.esp_prefix,"bridge");
});
test("ambiguous units do not select an arbitrary prefix", () => {
  const states={};
  for(const prefix of ["office","bedroom"]) for(const id of ["sensor."+prefix+"_outdoor_temp","sensor."+prefix+"_return_temp","sensor."+prefix+"_supply_temp","sensor."+prefix+"_exhaust_temp","binary_sensor."+prefix+"_online"]) states[id]={state:"on"};
  assert.equal(context.cardClass.getStubConfig({states}).prefix,"vent");
});
test("device registry links resolve the ESP32 among multiple candidates", () => {
  const states=Object.fromEntries(["sensor.office_outdoor_temp","sensor.office_return_temp","sensor.office_supply_temp","sensor.office_exhaust_temp","binary_sensor.office_online","binary_sensor.bridge_api_connected","binary_sensor.other_api_connected"].map(id=>[id,{state:"on"}]));
  const hass={states,entities:{"sensor.office_outdoor_temp":{device_id:"unit"},"binary_sensor.bridge_api_connected":{device_id:"esp"},"binary_sensor.other_api_connected":{device_id:"other"}},devices:{unit:{via_device_id:"esp"}}};
  assert.equal(context.cardClass.getStubConfig(hass).esp_prefix,"bridge");
  assert.equal(context.cardClass.getStubConfig().prefix,"vent");
});

test("default readings share the public control entities without duplicate RO sensors", () => {
  const result = card();
  assert.equal(result._ids.power, "switch.vent_power");
  assert.equal(result._ids.power, result._ids.power_control);
  for (const role of ["supply_speed", "exhaust_speed"]) {
    assert.equal(result._ids[role], "select.vent_" + role);
    assert.equal(result._ids[role], result._ids[role + "_control"]);
  }
  assert.equal(result._ids.humidity_target, "number.vent_humidity_target");
  assert.equal(result._ids.heater_target, "number.vent_heater_target");
  // Explicit independent feedback bindings remain supported for installations that need them.
  assert.equal(card({entities:{power:"binary_sensor.custom_feedback"}})._ids.power, "binary_sensor.custom_feedback");
});
vm.runInNewContext("globalThis.recovery = temperatureRecovery;", context);
const recoveryInput={outdoor:0,indoor:20,supply:16,connected:true,power:"on",bypass:"off",defrost:"off",fault:"off",fire:"off",supplySpeed:3,exhaustSpeed:3,dataAge:2};
test("temperature recovery works for heating and cooling without display rounding",()=>{
  assert.equal(context.recovery(recoveryInput).value,80);
  assert.equal(context.recovery({...recoveryInput,outdoor:30,indoor:20,supply:22}).value,80);
  assert.equal(context.recovery({...recoveryInput,outdoor:6,indoor:10,supply:9.1}).value,78);
});
test("temperature recovery rejects invalid or unsuitable operating conditions",()=>{
 for(const change of [{bypass:"on"},{bypass:"unknown"},{defrost:"on"},{preheater:"on"},{preheater:"unknown"},{power:"off"},{connected:false},{supplySpeed:0},{exhaustSpeed:NaN},{fault:"on"},{fire:"on"},{supply:NaN},{outdoor:19},{supply:25},{supply:-1}]) assert.equal(context.recovery({...recoveryInput,...change}).value,undefined,JSON.stringify(change));
 assert.equal(context.recovery({...recoveryInput,preheater:"off"}).value,80);
});

test("data age does not suppress available temperature recovery",()=>{
 for(const dataAge of [undefined,NaN,61,3600]) assert.equal(context.recovery({...recoveryInput,dataAge}).value,80);
});

test("recovery distinguishes disconnection from confirmed power off",()=>{
 assert.equal(context.recovery({...recoveryInput,connected:false,power:"off"}).reason,"offline");
 assert.equal(context.recovery({...recoveryInput,power:"off"}).reason,"powered_off");
 assert.equal(context.recovery({...recoveryInput,power:"unknown"}).reason,"offline");
});
