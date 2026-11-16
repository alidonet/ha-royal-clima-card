const PANEL = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"680\" height=\"681\" viewBox=\"0 0 680 681\"><defs>\n<linearGradient id=\"body\" x2=\"1\" y2=\"1\"><stop stop-color=\"#fafcfd\"/><stop offset=\"1\" stop-color=\"#dce6eb\"/></linearGradient>\n<linearGradient id=\"lcd\" x2=\"0\" y2=\"1\"><stop stop-color=\"#d5decc\"/><stop offset=\".2\" stop-color=\"#edf0e7\"/><stop offset=\"1\" stop-color=\"#e0e6d7\"/></linearGradient>\n<linearGradient id=\"btn\" x2=\"0\" y2=\"1\"><stop stop-color=\"#fff\"/><stop offset=\"1\" stop-color=\"#e3ebef\"/></linearGradient>\n<marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"5\" markerHeight=\"5\" orient=\"auto-start-reverse\"><path d=\"M1 1 9 5 1 9\" fill=\"none\" stroke=\"#505b48\" stroke-width=\"1.5\"/></marker></defs>\n<rect class=\"body-layer\" width=\"680\" height=\"681\" fill=\"#f5f6f7\"/>\n<rect class=\"body-layer\" x=\"22\" y=\"16\" width=\"636\" height=\"649\" rx=\"29\" fill=\"url(#body)\" stroke=\"#c8d3d9\"/>\n\n<g transform=\"translate(0 -35)\"><rect class=\"screen-layer\" data-screen-shell=\"\" x=\"47\" y=\"76\" width=\"586\" height=\"493\" rx=\"9\" fill=\"#c3cdbb\"/>\n<rect class=\"screen-layer\" data-screen-surface=\"\" x=\"51\" y=\"81\" width=\"578\" height=\"483\" rx=\"6\" fill=\"#e9ede2\" stroke=\"#f8faf3\" stroke-width=\"2\"/>\n<path class=\"screen-layer\" d=\"M55 87H625V110L55 139Z\" fill=\"#fff\" opacity=\".22\"/>\n<!-- Дом и наружная зона. Левая стена проходит через теплообменник. -->\n\n<g transform=\"translate(0 8)\" fill=\"none\" stroke=\"#a6ae9c\" stroke-width=\"3.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M324 194 466 112Q469 110 472 112L612 194\"/><path d=\"M340 184.76V257 M340 345V434 M598 185.8V434\"/></g>\n\n<g class=\"airflow-lines\" transform=\"translate(38 -56)\" fill=\"none\" stroke=\"#56614d\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n<path d=\"m302 327 38 38-38 38-38-38Z\" stroke-width=\"2\"/>\n<path d=\"M371 335H334L324 344 M318 349 284 380 M278 385 268 394H229\"/>\n<path d=\"M229 335H268L278 344 M285 350 298 362 M305 369 318 380 M325 386 334 394H371\"/><path d=\"m237 390-8 4 8 4 M363 390l8 4-8 4\" stroke-width=\"1.8\"/>\n</g><text class=\"airflow-label\" x=\"276\" y=\"267\" text-anchor=\"middle\" fill=\"#3b4533\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\">OA</text><text class=\"airflow-label\" x=\"403\" y=\"267\" text-anchor=\"middle\" fill=\"#3b4533\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\">RA</text><text class=\"airflow-label\" x=\"276\" y=\"362\" text-anchor=\"middle\" fill=\"#3b4533\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\">FR</text><text class=\"airflow-label\" x=\"403\" y=\"362\" text-anchor=\"middle\" fill=\"#3b4533\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\">SA</text>\n\n<path class=\"screen-layer fan-divider\" d=\"M74 449H606\" stroke=\"#d0d7ca\"/><path class=\"screen-layer compact-bottom-line\" d=\"M74 552H606\" stroke=\"#c8d0be\" opacity=\".5\"/><rect class=\"body-layer\" x=\"47\" y=\"595\" width=\"184.667\" height=\"77\" rx=\"12\" fill=\"#cbd6dc\"/><rect class=\"body-layer\" x=\"49\" y=\"597\" width=\"180.667\" height=\"72\" rx=\"11\" fill=\"url(#btn)\" stroke=\"#abbac3\"/><rect class=\"body-layer\" x=\"247.667\" y=\"595\" width=\"184.667\" height=\"77\" rx=\"12\" fill=\"#cbd6dc\"/><rect class=\"body-layer\" x=\"249.667\" y=\"597\" width=\"180.667\" height=\"72\" rx=\"11\" fill=\"url(#btn)\" stroke=\"#abbac3\"/><rect class=\"body-layer\" x=\"448.333\" y=\"595\" width=\"184.667\" height=\"77\" rx=\"12\" fill=\"#cbd6dc\"/><rect class=\"body-layer\" x=\"450.333\" y=\"597\" width=\"180.667\" height=\"72\" rx=\"11\" fill=\"url(#btn)\" stroke=\"#abbac3\"/><g class=\"preheater\" transform=\"translate(45.58 -2.1) scale(.82)\" stroke=\"#77836b\" opacity=\".35\" fill=\"none\" stroke-width=\"1.7\" stroke-linecap=\"round\"><path d=\"M274 295q-5-5 0-10t0-10m7 20q-5-5 0-10t0-10m7 20q-5-5 0-10t0-10\"/><rect x=\"269\" y=\"300\" width=\"24\" height=\"5\" rx=\"1\"/></g><g fill=\"#66705d\" font-family=\"Arial,sans-serif\" font-size=\"15\"><text x=\"208\" y=\"245\">°C</text><text x=\"542\" y=\"245\">°C</text><text x=\"208\" y=\"386\">°C</text><text x=\"542\" y=\"386\">°C</text></g></g></svg>";
const ICONS = {"chip": "<path d=\"M6,4H18V5H21V7H18V9H21V11H18V13H21V15H18V17H21V19H18V20H6V19H3V17H6V15H3V13H6V11H3V9H6V7H3V5H6V4M11,15V18H12V15H11M13,15V18H14V15H13M15,15V18H16V15H15Z\" />", "hvac": "<path d=\"M8.58 14C8.3 13.55 8.11 13.03 8.06 12.5H15.94C15.89 13.03 15.7 13.55 15.47 14H8.58M12 16C10.97 16 10.08 15.61 9.38 15H14.63C13.92 15.61 13.03 16 12 16M12 8C13.03 8 13.92 8.39 14.63 9H9.38C10.08 8.39 10.97 8 12 8M8.58 10H15.42C15.7 10.45 15.89 10.97 15.94 11.5H8.06C8.11 10.97 8.3 10.45 8.58 10M3 3V21H21V3H3M12 18C8.67 18 6 15.33 6 12S8.67 6 12 6 18 8.67 18 12 15.33 18 12 18Z\" />", "air-filter": "<path d=\"M4 3h16v18H4zm2 2v14h12V5zm1 2h10v2H7zm0 4h10v2H7zm0 4h10v2H7z\"/>", "alert-circle-outline": "<path d=\"M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z\" />", "fire-alert": "<path d=\"M15.66 11.2C15.43 10.9 15.15 10.64 14.89 10.38C14.22 9.78 13.46 9.35 12.82 8.72C11.33 7.26 11 4.85 11.95 3C11 3.23 10.17 3.75 9.46 4.32C6.87 6.4 5.85 10.07 7.07 13.22C7.11 13.32 7.15 13.42 7.15 13.55C7.15 13.77 7 13.97 6.8 14.05C6.57 14.15 6.33 14.09 6.14 13.93C6.08 13.88 6.04 13.83 6 13.76C4.87 12.33 4.69 10.28 5.45 8.64C3.78 10 2.87 12.3 3 14.47C3.06 14.97 3.12 15.47 3.29 15.97C3.43 16.57 3.7 17.17 4 17.7C5.08 19.43 6.95 20.67 8.96 20.92C11.1 21.19 13.39 20.8 15.03 19.32C16.86 17.66 17.5 15 16.56 12.72L16.43 12.46C16.22 12 15.66 11.2 15.66 11.2M12.5 17.5C12.22 17.74 11.76 18 11.4 18.1C10.28 18.5 9.16 17.94 8.5 17.28C9.69 17 10.4 16.12 10.61 15.23C10.78 14.43 10.46 13.77 10.33 13C10.21 12.26 10.23 11.63 10.5 10.94C10.69 11.32 10.89 11.7 11.13 12C11.9 13 13.11 13.44 13.37 14.8C13.41 14.94 13.43 15.08 13.43 15.23C13.46 16.05 13.1 16.95 12.5 17.5H12.5M21 13H19V7H21V13M21 17H19V15H21V17Z\" />", "valve": "<path d=\"M4 22H2V2H4M22 2H20V22H22M17.24 5.34L13.24 9.34A3 3 0 0 0 9.24 13.34L5.24 17.34L6.66 18.76L10.66 14.76A3 3 0 0 0 14.66 10.76L18.66 6.76Z\" />", "snowflake-melt": "<path d=\"M8 17.85C8 19.04 7.11 20 6 20S4 19.04 4 17.85C4 16.42 6 14 6 14S8 16.42 8 17.85M16.46 12V10.56L18.46 9.43L20.79 10.05L21.31 8.12L19.54 7.65L20 5.88L18.07 5.36L17.45 7.69L15.45 8.82L13 7.38V5.12L14.71 3.41L13.29 2L12 3.29L10.71 2L9.29 3.41L11 5.12V7.38L8.5 8.82L6.5 7.69L5.92 5.36L4 5.88L4.47 7.65L2.7 8.12L3.22 10.05L5.55 9.43L7.55 10.56V12H2V13H22V12H16.46M9.5 12V10.56L12 9.11L14.5 10.56V12H9.5M20 17.85C20 19.04 19.11 20 18 20S16 19.04 16 17.85C16 16.42 18 14 18 14S20 16.42 20 17.85M14 20.85C14 22.04 13.11 23 12 23S10 22.04 10 20.85C10 19.42 12 17 12 17S14 19.42 14 20.85Z\" />", "fan-plus": "<path d=\"M13 19C13 17.59 13.5 16.3 14.3 15.28C14.17 14.97 14.03 14.65 13.86 14.34C14.26 14 14.57 13.59 14.77 13.11C15.26 13.21 15.78 13.39 16.25 13.67C17.07 13.25 18 13 19 13C20.05 13 21.03 13.27 21.89 13.74C21.95 13.37 22 12.96 22 12.5C22 8.92 18.03 8.13 14.33 10.13C14 9.73 13.59 9.42 13.11 9.22C13.3 8.29 13.74 7.24 14.73 6.75C17.09 5.57 17 2 12.5 2C8.93 2 8.14 5.96 10.13 9.65C9.72 9.97 9.4 10.39 9.21 10.87C8.28 10.68 7.23 10.25 6.73 9.26C5.56 6.89 2 7 2 11.5C2 15.07 5.95 15.85 9.64 13.87C9.96 14.27 10.39 14.59 10.88 14.79C10.68 15.71 10.24 16.75 9.26 17.24C6.9 18.42 7 22 11.5 22C12.31 22 13 21.78 13.5 21.41C13.19 20.67 13 19.86 13 19M12 13C11.43 13 11 12.55 11 12S11.43 11 12 11C12.54 11 13 11.45 13 12S12.54 13 12 13M20 15V18H23V20H20V23H18V20H15V18H18V15H20Z\" />", "molecule-co2": "<path d=\"M5,7A2,2 0 0,0 3,9V15A2,2 0 0,0 5,17H8V15H5V9H8V7H5M11,7A2,2 0 0,0 9,9V15A2,2 0 0,0 11,17H13A2,2 0 0,0 15,15V9A2,2 0 0,0 13,7H11M11,9H13V15H11V9M16,10.5V12H19V13.5H17.5A1.5,1.5 0 0,0 16,15V18H20.5V16.5H17.5V15H19A1.5,1.5 0 0,0 20.5,13.5V12A1.5,1.5 0 0,0 19,10.5H16Z\" />", "power": "<path d=\"M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13\" />", "fan-chevron-up": "<path d=\"M13 19C13 17.59 13.5 16.3 14.3 15.28C14.17 14.97 14.03 14.65 13.86 14.34C14.26 14 14.57 13.59 14.77 13.11C15.26 13.21 15.78 13.39 16.25 13.67C17.07 13.25 18 13 19 13C20.05 13 21.03 13.27 21.89 13.74C21.95 13.37 22 12.96 22 12.5C22 8.92 18.03 8.13 14.33 10.13C14 9.73 13.59 9.42 13.11 9.22C13.3 8.29 13.74 7.24 14.73 6.75C17.09 5.57 17 2 12.5 2C8.93 2 8.14 5.96 10.13 9.65C9.72 9.97 9.4 10.39 9.21 10.87C8.28 10.68 7.23 10.25 6.73 9.26C5.56 6.89 2 7 2 11.5C2 15.07 5.95 15.85 9.64 13.87C9.96 14.27 10.39 14.59 10.88 14.79C10.68 15.71 10.24 16.75 9.26 17.24C6.9 18.42 7 22 11.5 22C12.31 22 13 21.78 13.5 21.41C13.19 20.67 13 19.86 13 19M12 13C11.43 13 11 12.55 11 12S11.43 11 12 11C12.54 11 13 11.45 13 12S12.54 13 12 13M19 17.83L15.83 21L14.41 19.59L19 15L23.59 19.59L22.17 21L19 17.83\" />", "fan-chevron-down": "<path d=\"M13 19C13 17.59 13.5 16.3 14.3 15.28C14.17 14.97 14.03 14.65 13.86 14.34C14.26 14 14.57 13.59 14.77 13.11C15.26 13.21 15.78 13.39 16.25 13.67C17.07 13.25 18 13 19 13C20.05 13 21.03 13.27 21.89 13.74C21.95 13.37 22 12.96 22 12.5C22 8.92 18.03 8.13 14.33 10.13C14 9.73 13.59 9.42 13.11 9.22C13.3 8.29 13.74 7.24 14.73 6.75C17.09 5.57 17 2 12.5 2C8.93 2 8.14 5.96 10.13 9.65C9.72 9.97 9.4 10.39 9.21 10.87C8.28 10.68 7.23 10.25 6.73 9.26C5.56 6.89 2 7 2 11.5C2 15.07 5.95 15.85 9.64 13.87C9.96 14.27 10.39 14.59 10.88 14.79C10.68 15.71 10.24 16.75 9.26 17.24C6.9 18.42 7 22 11.5 22C12.31 22 13 21.78 13.5 21.41C13.19 20.67 13 19.86 13 19M12 13C11.43 13 11 12.55 11 12S11.43 11 12 11C12.54 11 13 11.45 13 12S12.54 13 12 13M19 19.17L22.17 16L23.59 17.41L19 22L14.41 17.41L15.83 16L19 19.17\" />"};
const VERSION = "0.0.6";
const ROLES = {
  preheater: ["binary_sensor", "preheater_active"],
  outdoor_temperature: ["sensor", "outdoor_air_temperature"],
  return_temperature: ["sensor", "return_air_temperature"],
  defrost_temperature: ["sensor", "defrost_temperature"],
  supply_temperature: ["sensor", "supply_air_temperature"],
  exhaust_speed: ["sensor", "exhaust_fan_speed"],
  exhaust_speed_control: ["select", "exhaust_speed_control"],
  supply_speed_control: ["select", "supply_speed_control"],
  supply_speed: ["sensor", "supply_fan_speed"],
  power: ["binary_sensor", "ventilation_power"],
  power_control: ["switch", "ventilation_control"],
  online: ["binary_sensor", "vent_system_online"],
  esp_connection: ["binary_sensor", "esp32_connection", "esp"],
  error: ["binary_sensor", "ventilation_error"],
  fire_alarm: ["binary_sensor", "fire_alarm"],
  bypass: ["binary_sensor", "bypass_open"],
  defrost: ["binary_sensor", "defrost_active"],
  external_boost: ["binary_sensor", "external_boost_active"],
  co2_boost: ["binary_sensor", "co2_boost_active"],
  filter_replacement: ["binary_sensor", "filter_replacement_recommended", "esp"],
};
const INDICATORS = [
  ["esp_connection", "chip", 96.5, 78.5, "Связь ESP32", "ESP32 connection"],
  ["online", "hvac", 133.5, 78.5, "Связь ПВУ", "Ventilation connection"],
  ["filter_replacement", "air-filter", 170.5, 78.5, "Фильтр", "Filter"],
  ["error", "alert-circle-outline", 207.5, 78.5, "Ошибка", "Error"],
  ["fire_alarm", "fire-alert", 244.5, 78.5, "Пожарный вход", "Fire input"],
  ["bypass", "valve", 96.5, 116.5, "Байпас", "Bypass"],
  ["defrost", "snowflake-melt", 133.5, 116.5, "Разморозка", "Defrost"],
  ["external_boost", "fan-plus", 170.5, 116.5, "Внешнее форсирование", "External boost"],
  ["co2_boost", "molecule-co2", 207.5, 116.5, "Форсирование CO₂", "CO₂ boost"],
];
const DISPLAYS = [
  ["outdoor_temperature", 143, 222, 124, "УЛИЦА", "OUTDOOR", 155, 177.5],
  ["return_temperature", 471, 222, 124, "ВОЗВРАТ", "RETURN", 483, 177.5],
  ["defrost_temperature", 143, 363, 124, "ВЫТЯЖКА", "EXHAUST", 155, 317.6],
  ["supply_temperature", 471, 363, 124, "ПРИТОК", "SUPPLY", 483, 317.6],
  ["exhaust_speed", 263.5, 473, 90],
  ["supply_speed", 560, 473, 90],
];
const SEGMENTS = ["4,1 20,1 22,3 20,5 4,5 2,3", "21,5 23,3 25,5 25,19 23,21 21,19", "21,23 23,21 25,23 25,37 23,39 21,37", "4,37 20,37 22,39 20,41 4,41 2,39", "1,23 3,21 5,23 5,37 3,39 1,37", "1,5 3,3 5,5 5,19 3,21 1,19", "4,19 20,19 22,21 20,23 4,23 2,21"];
const MASKS = [63, 6, 91, 79, 102, 109, 125, 7, 127, 111];
function digits(value, right) {
  const str = value === null ? "88" : String(Math.round(value * 10) / 10);
  let x = 0, parts = "";
  for (const c of str) {
    if (c === ".") { parts += `<circle cx="${x + 2}" cy="39" r="2"/>`; x += 7; continue; }
    const mask = c === "-" ? 64 : MASKS[Number(c)];
    parts += `<g transform="translate(${x} 0)">${SEGMENTS.map((p, i) => mask & (1 << i) ? `<polygon points="${p}"/>` : "").join("")}</g>`;
    x += 29;
  }
  const scale = Math.min(1, 100 / x);
  return `<g transform="translate(${right ? 100 - x * scale : (100 - x * scale) / 2} 1) scale(${scale})" fill="#30392b" opacity="${value === null ? .1 : 1}">${parts}</g>`;
}
function icon(name, x, y, size = 25) {
  return `<g transform="translate(${x - size / 2} ${y - size / 2}) scale(${size / 24})">${ICONS[name]}</g>`;
}
class RoyalClimaCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    let overlay = "";
    for (const [role, x, y, width, ru, en, lx, ly] of DISPLAYS) {
      overlay += `<svg data-display="${role}" x="${x - width / 2}" y="${y - width * .23}" width="${width}" height="${width * .46}" viewBox="0 0 100 46" aria-label="${role}"><title></title><g class="segments"></g></svg>`;
      if (ru) overlay += `<text class="caption" data-ru="${ru}" data-en="${en}" x="${lx}" y="${ly}"/>`;
    }
    for (const [role, name, x, y] of INDICATORS) overlay += `<g class="indicator-action" data-indicator="${role}" data-history="${role}" role="button" tabindex="0"><title></title>${icon(name, x, y, name === "molecule-co2" ? 32 : 24)}<rect class="indicator-hit" x="${x - 17}" y="${y - 17}" width="34" height="34" rx="4" fill="transparent"/></g>`;
    for (const [role, x] of [["exhaust_speed", 111.5], ["supply_speed", 408]]) {
      overlay += `<g data-fan="${role}" transform="translate(${x} 473)"><g class="rotor"><svg x="-22" y="-22" width="44" height="44" viewBox="0 0 40 40"><g fill="#42483b"><path id="${role}-blade" d="M20 18C12 16 9 8 15 5C22 1 29 8 23 18Z"/><use href="#${role}-blade" transform="rotate(120 20 20)"/><use href="#${role}-blade" transform="rotate(240 20 20)"/><circle cx="20" cy="20" r="4"/></g></svg></g></g>`;
      const start = role === "exhaust_speed" ? 144.5 : 441;
      for (let n = 1; n <= 10; n++) overlay += `<rect data-bar="${role}" data-step="${n}" x="${start + (n - 1) * 8}" y="${490 - (8 + (n - 1) * 2.7)}" width="5" height="${8 + (n - 1) * 2.7}" rx=".7" fill="#56614d"/>`;
    }
    for (const [x, name, ru, en] of [[139.333, "fan-chevron-up", "ВЫТЯЖКА", "EXHAUST"], [340, "power", "ПИТАНИЕ", "POWER"], [540.667, "fan-chevron-down", "ПРИТОК", "SUPPLY"]]) {
      overlay += `<g class="inactive-button" ${name === "power" ? 'data-power-icon=""' : `data-speed-icon="${name === "fan-chevron-up" ? "exhaust_speed" : "supply_speed"}"`} fill="#596561">${icon(name, x, 590, 33.333)}<text class="caption button-caption" data-ru="${ru}" data-en="${en}" x="${x}" y="616.6"/></g>`;
    }
    for (const [role, , , , ru, en, x, y] of DISPLAYS.filter(d => d[4])) {
      overlay += `<g class="temperature-action" data-history="${role}" role="button" tabindex="0"><title></title><rect x="${x > 340 ? x - 59 : x - 88}" y="${y - 22}" width="${x > 340 ? 150 : 176}" height="110" rx="8" fill="transparent"/></g>`;
    }
    for (const [role, x] of [["exhaust_speed", 82], ["supply_speed", 378.5]]) {
      overlay += `<g class="temperature-action" data-history="${role}" role="button" tabindex="0"><title></title><rect x="${x}" y="435" width="225" height="74" rx="8" fill="transparent"/></g>`;
    }
    overlay += `<g class="power-action" data-power="" role="button" tabindex="0"><title></title><rect x="249.5" y="562" width="181" height="72" rx="11" fill="transparent"/><circle class="waiting" cx="340" cy="598" r="16" fill="none" stroke="#596561" stroke-width="3" stroke-dasharray="62 39"/></g><g class="command-notice" role="button" tabindex="0" style="display:none"><title></title><rect fill="white" stroke="#c5cbc2" stroke-width="1" rx="9"/><text class="command-message" x="340" y="549" text-anchor="middle" font-family="Arial,sans-serif" font-size="16" fill="#a43b2c" role="status"></text></g>`;
    overlay += `<g class="temperature-action" data-history="preheater" role="button" tabindex="0"><title></title><rect x="260" y="173" width="40" height="48" rx="4" fill="transparent"/></g>`;
    for (const [role, x, cx] of [["exhaust_speed", 49, 139.333], ["supply_speed", 450, 540.667]]) {
      overlay += `<g class="speed-action" data-speed-action="${role}" role="button" tabindex="0"><title></title><rect x="${x}" y="562" width="181" height="72" rx="11" fill="transparent"/><circle cx="${cx}" cy="598" r="16" fill="none" stroke="#596561" stroke-width="3" stroke-dasharray="62 39" style="transform-origin:${cx}px 598px"/></g>`;
    }
    this.shadowRoot.innerHTML = `<style>
      :host{display:block}ha-card{display:block;background:transparent;border:0;box-shadow:none;overflow:hidden;border-radius:14px}
      ha-card.compact .compact-bottom-line,ha-card.compact .body-layer,ha-card.compact .inactive-button,ha-card.compact .speed-action{display:none}
      ha-card.compact [data-screen-shell]{display:none}ha-card.compact [data-screen-surface]{stroke:none}
      ha-card.compact [data-power-icon]{display:inline}ha-card.compact [data-power-icon] text{display:none}
      ha-card.transparent .screen-layer:not(.fan-divider){display:none}ha-card.transparent{border-radius:0}
      .temperature-action.pending rect{stroke:#56614d;stroke-width:1.5;stroke-dasharray:4 4}
      svg.panel{display:block;width:100%;height:auto}.caption{font-family:Arial,sans-serif;font-size:16px;fill:#444e3c;text-anchor:middle;dominant-baseline:central}
      .button-caption{font-size:13px;font-weight:600}.inactive-button{pointer-events:none}.rotor{transform-box:fill-box;transform-origin:center;animation:spin 2s linear infinite;animation-play-state:paused}
      @keyframes spin{to{transform:rotate(360deg)}}@media(prefers-reduced-motion:reduce){.rotor{animation:none}}
      .temperature-action,.indicator-action{cursor:pointer}.temperature-action[aria-disabled="true"],.indicator-action[aria-disabled="true"]{cursor:default}
      :where(ha-card.compact) .power-action rect{stroke:#c5cbc2;stroke-width:1.5}
      .power-action{cursor:pointer}.power-action[aria-disabled="true"]{cursor:default}.power-action rect{pointer-events:all}.power-action:focus-visible{outline:none}.power-action:focus-visible rect{stroke:#56614d;stroke-width:2}
      .command-notice{cursor:pointer;animation:notice-pulse 1.8s ease-in-out 3}.command-notice:focus-visible{outline:none}.command-notice:focus-visible rect{stroke:#56614d;stroke-width:2}@keyframes notice-pulse{50%{opacity:.6}}@media(prefers-reduced-motion:reduce){.command-notice{animation:none}}
      .waiting,.speed-action circle{stroke:#3e9ed6}
      .waiting{display:none;transform-origin:340px 598px;animation:spin 1s linear infinite}.power-action.pending .waiting{display:block}
      .indicator-action{pointer-events:none}.indicator-hit{pointer-events:all}.indicator-action:focus-visible{outline:2px solid #56614d;outline-offset:3px}
      .temperature-action rect{pointer-events:all}.temperature-action:focus-visible{outline:none}.temperature-action:focus-visible rect{stroke:#56614d;stroke-width:2}
      .speed-action{cursor:pointer}.speed-action[aria-disabled="true"]{cursor:default}.speed-action rect{pointer-events:all}.speed-action:focus-visible{outline:none}.speed-action:focus-visible rect{stroke:#56614d;stroke-width:2}
      .speed-action circle{display:none;animation:spin 1s linear infinite}.speed-action.pending circle{display:block}
      dialog{border:1px solid var(--divider-color,#ccd3d7);border-radius:16px;padding:24px;max-width:calc(100vw - 32px);width:320px;box-sizing:border-box;background:var(--card-background-color,#fff);color:var(--primary-text-color,#222);font:16px Arial,sans-serif}dialog::backdrop{background:#0006}dialog h3{font-size:20px;margin:0 0 18px;font-weight:500}.speed-choices{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}dialog button{font:inherit;min-height:44px;border:1px solid var(--divider-color,#ccd3d7);border-radius:8px;background:var(--secondary-background-color,#f2f5f5);color:inherit;cursor:pointer}dialog button[aria-pressed="true"]{background:var(--primary-color,#0385bd);color:white}dialog button:disabled{opacity:.35;cursor:default}[data-speed-close]{display:block;margin:18px 0 0 auto;padding:0 14px}
    </style><ha-card>${PANEL.replace('<svg ', '<svg class="panel" role="img" ').replace('</svg>', overlay + '</svg>')}</ha-card><dialog aria-labelledby="speed-dialog-title"><h3 id="speed-dialog-title"></h3><div class="speed-choices">${Array.from({length:11},(_,i)=>`<button type="button" data-step-choice="${i}">${i}</button>`).join("")}</div><button type="button" data-speed-close></button></dialog>`;
    const openHistory = event => {
      const block = event.target.closest?.("[data-history]");
      if (!block || (event.type === "keydown" && !["Enter", " "].includes(event.key))) return;
      if (event.type === "keydown") event.preventDefault();
      if (this._config?.compact && ["supply_speed", "exhaust_speed"].includes(block.dataset.history)) {
        this._openSpeed(block.dataset.history); return;
      }
      const entityId = this._ids?.[block.dataset.history];
      if (!entityId || !this._hass?.states?.[entityId]) return;
      this.dispatchEvent(new CustomEvent("hass-more-info", { detail: { entityId }, bubbles: true, composed: true }));
    };
    this.shadowRoot.addEventListener("click", openHistory);
    this.shadowRoot.addEventListener("keydown", openHistory);
    const powerAction = event => {
      if (!event.target.closest?.("[data-power]") || (event.type === "keydown" && !["Enter", " "].includes(event.key))) return;
      event.preventDefault();
      if (!event.repeat) this._togglePower();
    };
    this.shadowRoot.addEventListener("click", powerAction);
    this.shadowRoot.addEventListener("keydown", powerAction);
    const speedAction = event => {
      const block = event.target.closest?.("[data-speed-action]");
      if (!block || (event.type === "keydown" && !["Enter", " "].includes(event.key))) return;
      event.preventDefault();
      if (!event.repeat) this._openSpeed(block.dataset.speedAction);
    };
    this.shadowRoot.addEventListener("click", speedAction);
    this.shadowRoot.addEventListener("keydown", speedAction);
    const notice = this.shadowRoot.querySelector(".command-notice");
    const dismissError = event => {
      if (event.type === "keydown" && !["Enter", " "].includes(event.key)) return;
      event.preventDefault(); this._clearErrors(); this._render();
    };
    notice.addEventListener("click", dismissError); notice.addEventListener("keydown", dismissError);
    const dialog = this.shadowRoot.querySelector("dialog");
    dialog.addEventListener("click", event => {
      const choice = event.target.closest?.("[data-step-choice]");
      if (choice) this._setSpeed(dialog.dataset.role, Number(choice.dataset.stepChoice));
      if (event.target.closest?.("[data-speed-close]")) dialog.close();
    });
  }
  static getStubConfig() { return { prefix: "ventilation_system", esp_prefix: "royal_clima" }; }
  setConfig(config) {
    if (!config || typeof config !== "object" || Array.isArray(config)) throw new Error("Invalid card configuration");
    const prefix = (key, fallback) => {
      const value = config[key] ?? fallback;
      if (typeof value !== "string" || !/^[a-z0-9_]+$/.test(value.trim().replace(/_+$/, ""))) throw new Error(`${key} must be an entity ID prefix`);
      return value.trim().replace(/_+$/, "");
    };
    const overrides = config.entities ?? {};
    if (typeof overrides !== "object" || Array.isArray(overrides)) throw new Error("entities must be a mapping");
    for (const key of Object.keys(overrides)) if (!Object.hasOwn(ROLES, key)) throw new Error(`Unknown entity role: ${key}`);
    const main = prefix("prefix", "ventilation_system"), esp = prefix("esp_prefix", "royal_clima");
    const ids = {};
    for (const [key, [domain, suffix, group]] of Object.entries(ROLES)) {
      // Keep the entity option used by the original installation test.
      const value = overrides[key] !== undefined ? overrides[key] : key === "supply_temperature" && config.entity !== undefined ? config.entity : key === "preheater" ? null : `${domain}.${group === "esp" ? esp : main}_${suffix}`;
      if (value !== null && (typeof value !== "string" || !/^[a-z_]+\.[a-z0-9_]+$/.test(value))) throw new Error(`Invalid entity ID for ${key}`);
      ids[key] = value;
    }
    if (config.name !== undefined && typeof config.name !== "string") throw new Error("name must be a string");
    if (config.language !== undefined && typeof config.language !== "string") throw new Error("language must be a string");
    for (const key of ["compact", "transparent"]) if (config[key] !== undefined && typeof config[key] !== "boolean") throw new Error(`${key} must be true or false`);
    this._clearPending(); this._clearSpeeds(); this._clearErrors();
    this.dataset.version = VERSION;
    this._config = config; this._ids = ids; this._applyLayout(); this._render();
  }
  _applyLayout() {
    const compact = !!this._config.compact;
    const card = this.shadowRoot.querySelector("ha-card"), svg = this.shadowRoot.querySelector("svg.panel");
    card.classList.toggle("compact", compact); card.classList.toggle("transparent", compact && !!this._config.transparent);
    svg.setAttribute("viewBox", compact ? "47 41 586 465" : "0 0 680 681");
    svg.setAttribute("width", compact ? "586" : "680"); svg.setAttribute("height", compact ? "465" : "681");
    this.shadowRoot.querySelector("[data-screen-shell]").setAttribute("height", compact ? "465" : "493");
    const surface = this.shadowRoot.querySelector("[data-screen-surface]");
    for (const [name, value] of Object.entries(compact ? {x:47,y:76,width:586,height:465} : {x:51,y:81,width:578,height:483})) surface.setAttribute(name, value);
    for (const [role, x] of [["exhaust_speed", 111.5], ["supply_speed", 408]]) {
      const dx = compact ? 0 : role === "exhaust_speed" ? -5.5 : -9;
      this.shadowRoot.querySelector(`[data-fan="${role}"]`).setAttribute("transform", `translate(${x + (compact ? 6 : dx)} ${compact ? 465 : 473})`);
      const display = this.shadowRoot.querySelector(`[data-display="${role}"]`);
      display.setAttribute("transform", `translate(${dx} ${compact ? -8 : 0})`);
      for (const bar of this.shadowRoot.querySelectorAll(`[data-bar="${role}"]`)) bar.setAttribute("transform", `translate(${dx} ${compact ? -8 : 0})`);
      const hit = this.shadowRoot.querySelector(`[data-history="${role}"] rect`);
      hit.setAttribute("y", compact ? "427" : "435"); hit.setAttribute("transform", `translate(${dx} 0)`);
    }
    const glyph = this.shadowRoot.querySelector("[data-power-icon]");
    if (compact) glyph.setAttribute("transform", "translate(340 465) scale(1.5) translate(-340 -590)");
    else glyph.removeAttribute("transform");
    const power = this.shadowRoot.querySelector("[data-power]"), rect = power.querySelector("rect"), spinner = power.querySelector("circle");
    for (const [name, value] of Object.entries(compact ? {x:312,y:437,width:56,height:56} : {x:249.5,y:562,width:181,height:72})) rect.setAttribute(name, value);
    spinner.setAttribute("cy", compact ? "465" : "598"); spinner.style.transformOrigin = compact ? "340px 465px" : "340px 598px";
    this.shadowRoot.querySelector(".command-message").setAttribute("y", compact ? "420" : "549");
  }
  set hass(value) { this._hass = value; this._render(); }
  disconnectedCallback() { this._clearPending(); this._clearSpeeds(); this._clearErrors(); this._render(); }
  _clearErrors() {
    clearTimeout(this._errorTimer); this._errorTimer = null; this._errorKey = null;
    this._powerError = null; this._speedErrors = {};
  }
  _clearPending() {
    if (this._pending) clearTimeout(this._pending.timer);
    this._pending = null;
  }
  _powerReady() {
    const state = key => this._hass?.states?.[this._ids?.[key]]?.state;
    return state("esp_connection") === "on" && state("online") === "on" &&
      ["on", "off"].includes(state("power")) && ["on", "off"].includes(state("power_control")) &&
      this._ids.power_control.startsWith("switch.") && typeof this._hass.callService === "function";
  }
  async _togglePower() {
    if (this._pending || !this._powerReady()) return;
    const expected = this._hass.states[this._ids.power].state === "on" ? "off" : "on";
    this._clearErrors();
    const pending = { expected };
    this._pending = pending;
    pending.timer = setTimeout(() => {
      if (this._pending !== pending) return;
      this._clearPending(); this._powerError = "timeout"; this._render();
    }, 20000);
    this._render();
    try {
      await this._hass.callService("switch", expected === "on" ? "turn_on" : "turn_off", { entity_id: this._ids.power_control });
    } catch {
      if (this._pending !== pending) return;
      this._clearPending(); this._powerError = "failed"; this._render();
    }
  }
  _clearSpeeds() {
    for (const pending of Object.values(this._speedPending || {})) clearTimeout(pending.timer);
    this._speedPending = {};
    this.shadowRoot.querySelector("dialog").close();
  }
  _speedProblem(role) {
    if (!["supply_speed", "exhaust_speed"].includes(role)) return "control";
    const state = key => this._hass?.states?.[this._ids?.[key]]?.state;
    if (state("esp_connection") !== "on" || state("online") !== "on") return "connection";
    const speed = state(role);
    if (speed == null || String(speed).trim() === "" || !Number.isInteger(Number(speed)) || Number(speed) < 0 || Number(speed) > 10) return "reading";
    const target = state(role + "_control");
    if (target == null || ["unknown", "unavailable"].includes(target) || !this._ids[role + "_control"].startsWith("select.")) return "control";
    return typeof this._hass.callService === "function" ? null : "service";
  }
  _speedReady(role) { return this._speedProblem(role) === null; }
  _openSpeed(role) {
    if (!this._speedReady(role) || this._speedPending?.[role]) return;
    const dialog = this.shadowRoot.querySelector("dialog");
    dialog.dataset.role = role; this._render(); dialog.showModal();
  }
  async _setSpeed(role, step) {
    if (!this._speedReady(role) || this._speedPending?.[role] || !Number.isInteger(step) || step < 0 || step > 10) return;
    const entity = this._hass.states[this._ids[role + "_control"]];
    if (Array.isArray(entity.attributes?.options) && !entity.attributes.options.includes(String(step))) return;
    this.shadowRoot.querySelector("dialog").close();
    if (Number(this._hass.states[this._ids[role]].state) === step) return;
    this._clearErrors();
    this._speedPending ||= {};
    const pending = { expected: step };
    this._speedPending[role] = pending;
    pending.timer = setTimeout(() => {
      if (this._speedPending[role] !== pending) return;
      delete this._speedPending[role]; this._speedErrors[role] = "timeout"; this._render();
    }, 20000);
    this._render();
    try {
      await this._hass.callService("select", "select_option", { entity_id: this._ids[role + "_control"], option: String(step) });
    } catch {
      if (this._speedPending[role] !== pending) return;
      clearTimeout(pending.timer); delete this._speedPending[role]; this._speedErrors[role] = "failed"; this._render();
    }
  }
  getCardSize() { return this._config?.compact ? 5 : 7; }
  getGridOptions() { return { columns: 12, rows: "auto", min_columns: 6 }; }
  _render() {
    if (!this._ids || !this._hass) return;
    const systemLanguage = (this._hass.locale?.language || this._hass.language || "en").toLowerCase();
    const ru = this._config.language === undefined
      ? systemLanguage.startsWith("ru")
      : this._config.language.trim().toLowerCase() === "ru";
    const raw = key => this._hass.states?.[this._ids[key]]?.state;
    const known = key => raw(key) != null && !["unknown", "unavailable", ""].includes(raw(key));
    const on = key => raw(key) === "on";
    const connected = on("esp_connection") && on("online");
    if (this._pending && raw("power") === this._pending.expected) this._clearPending();
    for (const [role, pending] of Object.entries(this._speedPending || {})) {
      if (connected && known(role) && Number(raw(role)) === pending.expected) { clearTimeout(pending.timer); delete this._speedPending[role]; }
    }
    const flowing = connected && on("power");
    const flow = this.shadowRoot.querySelector(".airflow-lines");
    flow.setAttribute("stroke", flowing ? "#56614d" : "#c2c8bc");
    for (const label of this.shadowRoot.querySelectorAll(".airflow-label")) label.setAttribute("fill", flowing ? "#3b4533" : "#c2c8bc");
    this.shadowRoot.querySelector("ha-card").setAttribute("aria-label", this._config.name || "Royal Clima ERV");
    for (const el of this.shadowRoot.querySelectorAll(".caption")) el.textContent = el.dataset[ru ? "ru" : "en"];
    for (const [role] of DISPLAYS) {
      let value = connected && known(role) && String(raw(role)).trim() !== "" ? Number(raw(role)) : NaN;
      if (!Number.isFinite(value) || (role.endsWith("speed") && (!Number.isInteger(value) || value < 0 || value > 10))) value = null;
      const el = this.shadowRoot.querySelector(`[data-display="${role}"]`);
      const content = digits(value, !role.endsWith("speed"));
      const segments = el.querySelector(".segments");
      if (segments.innerHTML !== content) segments.innerHTML = content;
      el.dataset.value = value === null ? "unknown" : String(value);
      el.querySelector("title").textContent = `${value === null ? (ru ? "Нет данных" : "No data") : value}`;
    }
    for (const [key, , , , russian, english] of INDICATORS) {
      const el = this.shadowRoot.querySelector(`[data-indicator="${key}"]`);
      const enabled = key === "esp_connection" ? on(key) : connected && on(key);
      el.setAttribute("fill", enabled ? (["error", "fire_alarm"].includes(key) ? "#c24632" : key === "esp_connection" || key === "online" ? "#3e89bb" : "#56614d") : "#77836b");
      el.setAttribute("opacity", enabled ? "1" : ".35");
      const exists = !!this._hass.states?.[this._ids[key]];
      el.setAttribute("aria-disabled", String(!exists));
      el.setAttribute("tabindex", exists ? "0" : "-1");
      el.setAttribute("aria-label", ru ? russian : english);
      el.querySelector("title").textContent = `${ru ? russian : english}: ${known(key) ? (ru && ["on", "off"].includes(raw(key)) ? (on(key) ? "Включено" : "Выключено") : raw(key)) : ru ? "Нет данных" : "No data"}`;
    }
    for (const role of ["exhaust_speed", "supply_speed"]) {
      const speed = Number(raw(role));
      const running = connected && on("power") && known(role) && Number.isInteger(speed) && speed > 0 && speed <= 10;
      const fan = this.shadowRoot.querySelector(`[data-fan="${role}"]`);
      fan.setAttribute("opacity", running ? "1" : ".3");
      fan.querySelector(".rotor").style.animationPlayState = running ? "running" : "paused";
      fan.querySelector(".rotor").style.animationDuration = `${(3.2 - Math.max(1, Math.min(10, Number.isFinite(speed) ? speed : 1)) * .25).toFixed(2)}s`;
      for (const bar of this.shadowRoot.querySelectorAll(`[data-bar="${role}"]`)) bar.setAttribute("opacity", running && speed >= Number(bar.dataset.step) ? "1" : ".18");
    }
    const preheater = this.shadowRoot.querySelector(".preheater");
    const heaterAvailable = !!this._ids.preheater;
    preheater.style.display = heaterAvailable ? "" : "none";
    const heating = connected && on("preheater");
    preheater.setAttribute("opacity", heating ? "1" : ".35");
    preheater.setAttribute("stroke", heating ? "#c24632" : "#77836b");
    for (const [role, , , , russian, english] of DISPLAYS) {
      const block = this.shadowRoot.querySelector(`[data-history="${role}"]`);
      const exists = !!this._hass.states?.[this._ids[role]];
      block.setAttribute("aria-disabled", String(!exists));
      block.setAttribute("tabindex", exists ? "0" : "-1");
      const label = `${(ru ? russian : english) || (role === "supply_speed" ? (ru ? "Скорость притока" : "Supply speed") : (ru ? "Скорость вытяжки" : "Exhaust speed"))}: ${ru ? "История" : "History"}`;
      block.setAttribute("aria-label", label);
      block.querySelector("title").textContent = label;
    }
    const heaterAction = this.shadowRoot.querySelector('[data-history="preheater"]');
    const heaterExists = heaterAvailable;
    heaterAction.style.display = heaterAvailable ? "" : "none";
    heaterAction.setAttribute("aria-disabled", String(!heaterExists));
    heaterAction.setAttribute("tabindex", heaterExists ? "0" : "-1");
    const heaterLabel = ru ? "Предподогрев: история" : "Preheater: history";
    heaterAction.setAttribute("aria-label", heaterLabel);
    heaterAction.querySelector("title").textContent = heaterLabel;
    const power = this.shadowRoot.querySelector("[data-power]");
    const disabled = !!this._pending || !this._powerReady();
    power.setAttribute("aria-disabled", String(disabled));
    power.setAttribute("aria-busy", String(!!this._pending));
    power.setAttribute("tabindex", disabled ? "-1" : "0");
    power.classList.toggle("pending", !!this._pending);
    power.querySelector("title").textContent = this._pending ? (ru ? "Ожидание подтверждения" : "Waiting for confirmation") : (ru ? "Включить / выключить ПВУ" : "Turn ventilation on / off");
    power.setAttribute("aria-label", power.querySelector("title").textContent);
    const powerGlyph = this.shadowRoot.querySelector("[data-power-icon]");
    powerGlyph.setAttribute("opacity", this._pending ? "0" : this._config.compact ? "1" : this._powerReady() ? "1" : ".4");
    powerGlyph.setAttribute("fill", this._config.compact ? (!this._powerReady() ? "#9a9a9a" : on("power") ? "#23863f" : "#111111") : "#596561");
    let error = this._powerError, context = "";
    for (const [role, message] of Object.entries(this._speedErrors || {})) {
      error = message; context = role === "supply_speed" ? (ru ? "Приток: " : "Supply: ") : (ru ? "Вытяжка: " : "Exhaust: ");
    }
    const notice = this.shadowRoot.querySelector(".command-notice"), message = notice.querySelector("text");
    message.textContent = !error ? "" : context + (error === "timeout" ? (ru ? "Команда не подтверждена" : "Command not confirmed") : (ru ? "Ошибка отправки команды" : "Could not send command"));
    notice.style.display = error ? "" : "none";
    if (error) {
      const box = message.getBBox(), frame = notice.querySelector("rect");
      for (const [name, value] of Object.entries({x:box.x-12,y:box.y-6,width:box.width+24,height:box.height+12})) frame.setAttribute(name,value);
      const label = ru ? "Скрыть сообщение об ошибке" : "Dismiss error message";
      notice.setAttribute("aria-label",label); notice.querySelector("title").textContent=label;
      const key = context + error;
      if (this._errorKey !== key) {
        clearTimeout(this._errorTimer); this._errorKey = key;
        this._errorTimer = setTimeout(() => { this._clearErrors(); this._render(); }, 45000);
      }
    }
    for (const role of ["exhaust_speed", "supply_speed"]) {
      const button = this.shadowRoot.querySelector(`[data-speed-action="${role}"]`);
      const pending = !!this._speedPending?.[role], ready = this._speedReady(role);
      button.setAttribute("aria-disabled", String(pending || !ready)); button.setAttribute("aria-busy", String(pending));
      button.setAttribute("tabindex", ready && !pending ? "0" : "-1"); button.classList.toggle("pending", pending);
      const label = role === "supply_speed" ? (ru ? "Скорость притока" : "Supply speed") : (ru ? "Скорость вытяжки" : "Exhaust speed");
      const problem = this._speedProblem(role);
      const reasons = ru ? { connection: "Нет связи с ПВУ", reading: "Нет корректного показания скорости 0–10", control: "Сущность управления select недоступна или не настроена", service: "Вызов действия HA недоступен" } : { connection: "No ventilation connection", reading: "No valid speed reading 0–10", control: "Control select entity unavailable or not configured", service: "HA action unavailable" };
      const hint = pending ? (ru ? "Ожидание подтверждения" : "Waiting for confirmation") : reasons[problem];
      button.setAttribute("aria-label", label); button.querySelector("title").textContent = hint ? `${label}: ${hint}` : label;
      this.shadowRoot.querySelector(`[data-speed-icon="${role}"]`).setAttribute("opacity", pending ? "0" : ready ? "1" : ".4");
      const block = this.shadowRoot.querySelector(`[data-history="${role}"]`);
      block.classList.toggle("pending", !!this._config.compact && pending);
      block.setAttribute("aria-busy", String(!!this._config.compact && pending));
      if (this._config.compact) {
        block.setAttribute("aria-disabled", String(pending || !ready)); block.setAttribute("tabindex", ready && !pending ? "0" : "-1");
        block.setAttribute("aria-label", label); block.querySelector("title").textContent = button.querySelector("title").textContent;
      }
    }
    const dialog = this.shadowRoot.querySelector("dialog"), role = dialog.dataset.role;
    dialog.querySelector("h3").textContent = role === "supply_speed" ? (ru ? "Скорость притока" : "Supply speed") : (ru ? "Скорость вытяжки" : "Exhaust speed");
    dialog.querySelector("[data-speed-close]").textContent = ru ? "Отмена" : "Cancel";
    const options = this._hass.states?.[this._ids[role + "_control"]]?.attributes?.options;
    for (const choice of dialog.querySelectorAll("[data-step-choice]")) {
      choice.disabled = !this._speedReady(role) || !!this._speedPending?.[role] || (Array.isArray(options) && !options.includes(choice.dataset.stepChoice));
      choice.setAttribute("aria-pressed", String(known(role) && Number(raw(role)) === Number(choice.dataset.stepChoice)));
    }
  }
}
if (!customElements.get("royal-clima-card")) {
  customElements.define("royal-clima-card", RoyalClimaCard);
  window.customCards = window.customCards || [];
  window.customCards.push({ type: "royal-clima-card", name: "Royal Clima ERV Card", description: "Royal Clima ERV · control panel", preview: true, documentationURL: "https://github.com/alidonet/ha-royal-clima-card" });
}
