const VERSION = "0.0.1";
const DEFAULT_ENTITY = "sensor.ventilation_system_supply_air_temperature";

class RoyalClimaCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; }
        ha-card { display: block; padding: 20px; }
        h2 { margin: 0 0 12px; font-size: 20px; font-weight: 500; }
        p { margin: 8px 0; }
        .muted { color: var(--secondary-text-color, #666); font-size: 13px; overflow-wrap: anywhere; }
        .value { font-size: 28px; color: var(--primary-text-color, #212121); }
      </style>
      <ha-card>
        <h2></h2>
        <p class="message"></p>
        <p class="value"></p>
        <p class="entity muted"></p>
        <p class="version muted">Royal Clima Card · v${VERSION}</p>
      </ha-card>`;
  }

  static getStubConfig() {
    return { entity: DEFAULT_ENTITY };
  }

  setConfig(config) {
    if (!config || (config.entity !== undefined &&
        (typeof config.entity !== "string" || !config.entity.trim()))) {
      throw new Error("entity must be a non-empty entity ID");
    }
    this._config = { ...config, entity: config.entity ?? DEFAULT_ENTITY };
    this._render();
  }

  set hass(hass) {
    this._hass = hass;
    this._render();
  }

  getCardSize() {
    return 3;
  }

  getGridOptions() {
    return { columns: 12, rows: "auto", min_columns: 6 };
  }

  _render() {
    if (!this._config || !this._hass) return;
    const ru = (this._hass.locale?.language || this._hass.language || "en")
      .toLowerCase().startsWith("ru");
    const state = this._hass.states[this._config.entity];
    this.shadowRoot.querySelector("h2").textContent = this._config.name || "Royal Clima";
    this.shadowRoot.querySelector(".message").textContent = ru
      ? "Тестовая карточка установлена. Управление пока не реализовано."
      : "Test card installed. Controls are not implemented yet.";
    let value;
    if (!state) value = ru ? "Сущность не найдена" : "Entity not found";
    else if (["unknown", "unavailable"].includes(state.state)) {
      value = ru ? "Нет данных" : "No data";
    } else {
      value = [state.state, state.attributes?.unit_of_measurement].filter(Boolean).join(" ");
    }
    this.shadowRoot.querySelector(".value").textContent = value;
    this.shadowRoot.querySelector(".entity").textContent = this._config.entity;
  }
}

if (!customElements.get("royal-clima-card")) {
  customElements.define("royal-clima-card", RoyalClimaCard);
  window.customCards = window.customCards || [];
  window.customCards.push({
    type: "royal-clima-card",
    name: "Royal Clima",
    description: "Royal Clima ERV · installation test",
    preview: true,
    documentationURL: "https://github.com/alidonet/ha-royal-clima-card",
  });
}
