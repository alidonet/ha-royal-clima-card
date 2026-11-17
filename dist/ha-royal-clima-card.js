const AIRFLOW = "<svg class=\"airflow-art\" x=\"80\" y=\"-16\" xmlns=\"http://www.w3.org/2000/svg\" width=\"640\" height=\"512\" viewBox=\"80 -16 640 512\" role=\"img\" aria-labelledby=\"title\">\n  <title id=\"title\">Температуры и воздушные потоки</title>\n  <defs>\n    <linearGradient id=\"supply\">\n      <stop stop-color=\"#25b9df\" />\n      <stop offset=\"1\" stop-color=\"#ef8450\" />\n    </linearGradient>\n    <linearGradient id=\"exhaust\">\n      <stop stop-color=\"#639ed0\" />\n      <stop offset=\"1\" stop-color=\"#ce6998\" />\n    </linearGradient>\n    <linearGradient id=\"case\" x2=\"0\" y2=\"1\">\n      <stop stop-color=\"#f8fbfe\" />\n      <stop offset=\"1\" stop-color=\"#dce6f0\" />\n    </linearGradient>\n    <linearGradient id=\"rim\" x2=\"0\" y2=\"1\">\n      <stop stop-color=\"#b0c1d1\" />\n      <stop offset=\"1\" stop-color=\"#8da2b8\" />\n    </linearGradient>\n    <linearGradient id=\"cover\" x2=\"0\" y2=\"1\">\n      <stop stop-color=\"#fff\" stop-opacity=\".24\" />\n      <stop offset=\"1\" stop-color=\"#fff\" stop-opacity=\".04\" />\n    </linearGradient>\n    <linearGradient id=\"duct\" x2=\"0\" y2=\"1\">\n      <stop stop-color=\"#fff\" stop-opacity=\".65\" />\n      <stop offset=\".5\" stop-color=\"#d9e3ed\" stop-opacity=\".25\" />\n      <stop offset=\"1\" stop-color=\"#99acc0\" stop-opacity=\".55\" />\n    </linearGradient>\n    <mask id=\"exhaust-gap\" maskUnits=\"userSpaceOnUse\" x=\"265\" y=\"115\" width=\"270\" height=\"190\">\n      <rect x=\"265\" y=\"115\" width=\"270\" height=\"190\" fill=\"#fff\" />\n      <path d=\"M265 170H305C370 170 430 260 495 260H535\" fill=\"none\" stroke=\"#000\" stroke-width=\"32\" />\n    </mask>\n    <linearGradient id=\"off-off-face\" x2=\"0\" y2=\"1\">\n      <stop stop-color=\"#91a4b7\" />\n      <stop offset=\"1\" stop-color=\"#c8d4e0\" />\n    </linearGradient>\n    <path id=\"off-power\" d=\"M34 32A38 38 0 1 0 86 32M60 16V58\" />\n    <filter id=\"off-inset\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\" color-interpolation-filters=\"sRGB\">\n      <feComponentTransfer in=\"SourceAlpha\">\n        <feFuncA type=\"table\" tableValues=\"1 0\" />\n      </feComponentTransfer>\n      <feGaussianBlur stdDeviation=\".8\" />\n      <feOffset dx=\"1\" dy=\"1\" />\n      <feComposite in2=\"SourceAlpha\" operator=\"in\" result=\"inner-edge\" />\n      <feFlood flood-color=\"#52687e\" flood-opacity=\".45\" />\n      <feComposite in2=\"inner-edge\" operator=\"in\" />\n      <feMerge>\n        <feMergeNode in=\"SourceGraphic\" />\n        <feMergeNode />\n      </feMerge>\n    </filter>\n    <linearGradient id=\"disconnected-link-face\" x2=\"0\" y2=\"1\">\n      <stop stop-color=\"#91a4b7\" />\n      <stop offset=\"1\" stop-color=\"#c8d4e0\" />\n    </linearGradient>\n    <path id=\"disconnected-broken-link\" d=\"M70 63L84 49A18 18 0 0 0 59 24L45 38M50 57L36 71A18 18 0 0 0 61 96L75 82M34 25 29 18M23 39 15 36M86 95 91 102M97 81 105 84\" />\n    <filter id=\"disconnected-inset\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\" color-interpolation-filters=\"sRGB\">\n      <feComponentTransfer in=\"SourceAlpha\">\n        <feFuncA type=\"table\" tableValues=\"1 0\" />\n      </feComponentTransfer>\n      <feGaussianBlur stdDeviation=\".8\" />\n      <feOffset dx=\"1\" dy=\"1\" />\n      <feComposite in2=\"SourceAlpha\" operator=\"in\" result=\"inner-edge\" />\n      <feFlood flood-color=\"#52687e\" flood-opacity=\".45\" />\n      <feComposite in2=\"inner-edge\" operator=\"in\" />\n      <feMerge>\n        <feMergeNode in=\"SourceGraphic\" />\n        <feMergeNode />\n      </feMerge>\n    </filter>\n    <style>\n.when-running,.when-off,.when-disconnected{display:none}\n.airflow-running .when-running{display:inline}\n.airflow-off .when-off{display:inline}\n.airflow-disconnected .when-disconnected{display:inline}\n</style>\n  </defs>\n  <g id=\"idle\" />\n  <g id=\"running\" />\n  <g id=\"off\" />\n  <g id=\"disconnected\" />\n  <g class=\"scene\">\n    <rect class=\"airflow-background\" x=\"80\" y=\"-16\" width=\"640\" height=\"512\" rx=\"22\" fill=\"#f8fafc\" />\n    <g font-family=\"Arial, sans-serif\">\n      <g transform=\"translate(0 -15)\">\n        <rect x=\"265\" y=\"115\" width=\"270\" height=\"190\" rx=\"7\" fill=\"url(#case)\" />\n        <g id=\"internals\" opacity=\".3\" stroke=\"#8da0b3\" stroke-width=\"1\" stroke-linejoin=\"round\" class=\"when-running\">\n          <rect x=\"270\" y=\"120\" width=\"260\" height=\"180\" rx=\"5\" fill=\"#d3dde7\" fill-opacity=\".24\" />\n          <g fill=\"#d3dde7\" fill-opacity=\".45\">\n            <path d=\"M270 208H320L322 210 320 212H270Z\" />\n            <path d=\"M480 208H530V212H480L478 210Z\" />\n            <path d=\"M398 120H402V130L400 132 398 130Z\" />\n            <path d=\"M400 288 402 290V300H398V290Z\" />\n          </g>\n          <path class=\"airflow-exchanger\" d=\"M400 132 478 210 400 288 322 210Z\" fill=\"#cedae7\" fill-opacity=\".45\" />\n          <path d=\"M400 136 474 210 400 284 326 210Z\" fill=\"none\" />\n        </g>\n        <path d=\"M535 170H495C430 170 370 260 305 260H265\" fill=\"none\" stroke=\"url(#exhaust)\" stroke-width=\"22\" opacity=\".45\" mask=\"url(#exhaust-gap)\" class=\"when-running\" />\n        <path d=\"M265 170H305C370 170 430 260 495 260H535\" fill=\"none\" stroke=\"url(#supply)\" stroke-width=\"22\" opacity=\".45\" class=\"when-running\" />\n        <path d=\"M148.5 159H265V181H148.5L156.5 170Z\" fill=\"#25b9df\" class=\"when-running\" />\n        <path d=\"M651.5 159H535V181H651.5L643.5 170Z\" fill=\"#ce6998\" class=\"when-running\" />\n        <path d=\"M265 249H166.5V244L148.5 260 166.5 276V271H265Z\" fill=\"#639ed0\" class=\"when-running\" />\n        <path d=\"M535 249H633.5V244L651.5 260 633.5 276V271H535Z\" fill=\"#ef8450\" class=\"when-running\" />\n        <rect x=\"265\" y=\"115\" width=\"270\" height=\"190\" rx=\"7\" fill=\"url(#cover)\" />\n        <g fill=\"url(#duct)\" stroke=\"#91a5ba\" stroke-opacity=\".65\" stroke-width=\"1.5\">\n          <rect x=\"253\" y=\"151\" width=\"12\" height=\"38\" rx=\"2\" />\n          <rect x=\"535\" y=\"151\" width=\"12\" height=\"38\" rx=\"2\" />\n          <rect x=\"253\" y=\"241\" width=\"12\" height=\"38\" rx=\"2\" />\n          <rect x=\"535\" y=\"241\" width=\"12\" height=\"38\" rx=\"2\" />\n        </g>\n        <rect x=\"265\" y=\"115\" width=\"270\" height=\"190\" rx=\"7\" fill=\"none\" stroke=\"url(#rim)\" stroke-width=\"1.25\" />\n        <rect x=\"267\" y=\"117\" width=\"266\" height=\"186\" rx=\"5\" fill=\"none\" stroke=\"#fff\" stroke-opacity=\".5\" />\n      </g>\n      \n      <g fill=\"#edf2f7\" stroke=\"#dce4ed\">\n        <rect x=\"155\" y=\"430\" width=\"210\" height=\"38\" rx=\"10\" />\n        <rect x=\"381\" y=\"430\" width=\"38\" height=\"38\" rx=\"10\" />\n        <rect x=\"435\" y=\"430\" width=\"210\" height=\"38\" rx=\"10\" />\n      </g>\n      \n      \n      <svg x=\"340\" y=\"135\" width=\"120\" height=\"120\" viewBox=\"0 0 120 120\" class=\"when-off\">\n        <g fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\".5\">\n          <use href=\"#off-power\" transform=\"translate(.7 1)\" stroke=\"#fff\" stroke-width=\"12\" opacity=\".65\" />\n          <use href=\"#off-power\" stroke=\"url(#off-off-face)\" stroke-width=\"10\" filter=\"url(#off-inset)\" />\n        </g>\n      </svg>\n      <svg x=\"340\" y=\"135\" width=\"120\" height=\"120\" viewBox=\"0 0 120 120\" class=\"when-disconnected\">\n        <g fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\".5\">\n          <use href=\"#disconnected-broken-link\" transform=\"translate(.7 1)\" stroke=\"#fff\" stroke-width=\"10\" opacity=\".65\" />\n          <use href=\"#disconnected-broken-link\" stroke=\"url(#disconnected-link-face)\" stroke-width=\"8\" filter=\"url(#disconnected-inset)\" />\n        </g>\n      </svg>\n    </g>\n  </g>\n</svg>";
const PANEL = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"680\" height=\"681\" viewBox=\"0 0 680 681\"><defs>\n\n\n\n<marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"5\" markerHeight=\"5\" orient=\"auto-start-reverse\"><path d=\"M1 1 9 5 1 9\" fill=\"none\" stroke=\"#505b48\" stroke-width=\"1.5\"/></marker></defs>\n\n\n\n<g transform=\"translate(0 -35)\">\n<rect class=\"screen-layer\" data-screen-surface=\"\" x=\"51\" y=\"81\" width=\"578\" height=\"483\" rx=\"6\" fill=\"#e9ede2\" stroke=\"#f8faf3\" stroke-width=\"2\"/>\n\n<!-- Дом и наружная зона. Левая стена проходит через теплообменник. -->\n\n<g transform=\"translate(0 8)\" fill=\"none\" stroke=\"#a6ae9c\" stroke-width=\"3.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M324 194 466 112Q469 110 472 112L612 194\"/><path d=\"M340 184.76V257 M340 345V434 M598 185.8V434\"/></g>\n\n<g class=\"airflow-lines\" transform=\"translate(38 -56)\" fill=\"none\" stroke=\"#56614d\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n<path d=\"m302 327 38 38-38 38-38-38Z\" stroke-width=\"2\"/>\n<path d=\"M371 335H334L324 344 M318 349 284 380 M278 385 268 394H229\"/>\n<path d=\"M229 335H268L278 344 M285 350 298 362 M305 369 318 380 M325 386 334 394H371\"/><path d=\"m237 390-8 4 8 4 M363 390l8 4-8 4\" stroke-width=\"1.8\"/>\n</g><text class=\"airflow-label\" x=\"276\" y=\"267\" text-anchor=\"middle\" fill=\"#3b4533\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\">OA</text><text class=\"airflow-label\" x=\"403\" y=\"267\" text-anchor=\"middle\" fill=\"#3b4533\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\">RA</text><text class=\"airflow-label\" x=\"276\" y=\"362\" text-anchor=\"middle\" fill=\"#3b4533\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\">FR</text><text class=\"airflow-label\" x=\"403\" y=\"362\" text-anchor=\"middle\" fill=\"#3b4533\" font-family=\"Arial,sans-serif\" font-size=\"16\" font-weight=\"700\">SA</text>\n\n<path class=\"screen-layer fan-divider\" d=\"M74 449H606\" stroke=\"#d0d7ca\"/><g class=\"preheater\" transform=\"translate(45.58 -2.1) scale(.82)\" stroke=\"#77836b\" opacity=\".35\" fill=\"none\" stroke-width=\"1.7\" stroke-linecap=\"round\"><path d=\"M274 295q-5-5 0-10t0-10m7 20q-5-5 0-10t0-10m7 20q-5-5 0-10t0-10\"/><rect x=\"269\" y=\"300\" width=\"24\" height=\"5\" rx=\"1\"/></g><g fill=\"#66705d\" font-family=\"Arial,sans-serif\" font-size=\"15\"><text x=\"208\" y=\"245\">°C</text><text x=\"542\" y=\"245\">°C</text><text x=\"208\" y=\"386\">°C</text><text x=\"542\" y=\"386\">°C</text></g></g></svg>";
const ICONS = {"chip": "<path d=\"M6,4H18V5H21V7H18V9H21V11H18V13H21V15H18V17H21V19H18V20H6V19H3V17H6V15H3V13H6V11H3V9H6V7H3V5H6V4M11,15V18H12V15H11M13,15V18H14V15H13M15,15V18H16V15H15Z\" />", "hvac": "<path d=\"M8.58 14C8.3 13.55 8.11 13.03 8.06 12.5H15.94C15.89 13.03 15.7 13.55 15.47 14H8.58M12 16C10.97 16 10.08 15.61 9.38 15H14.63C13.92 15.61 13.03 16 12 16M12 8C13.03 8 13.92 8.39 14.63 9H9.38C10.08 8.39 10.97 8 12 8M8.58 10H15.42C15.7 10.45 15.89 10.97 15.94 11.5H8.06C8.11 10.97 8.3 10.45 8.58 10M3 3V21H21V3H3M12 18C8.67 18 6 15.33 6 12S8.67 6 12 6 18 8.67 18 12 15.33 18 12 18Z\" />", "air-filter": "<path d=\"M4 3h16v18H4zm2 2v14h12V5zm1 2h10v2H7zm0 4h10v2H7zm0 4h10v2H7z\"/>", "alert-circle-outline": "<path d=\"M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z\" />", "fire-alert": "<path d=\"M15.66 11.2C15.43 10.9 15.15 10.64 14.89 10.38C14.22 9.78 13.46 9.35 12.82 8.72C11.33 7.26 11 4.85 11.95 3C11 3.23 10.17 3.75 9.46 4.32C6.87 6.4 5.85 10.07 7.07 13.22C7.11 13.32 7.15 13.42 7.15 13.55C7.15 13.77 7 13.97 6.8 14.05C6.57 14.15 6.33 14.09 6.14 13.93C6.08 13.88 6.04 13.83 6 13.76C4.87 12.33 4.69 10.28 5.45 8.64C3.78 10 2.87 12.3 3 14.47C3.06 14.97 3.12 15.47 3.29 15.97C3.43 16.57 3.7 17.17 4 17.7C5.08 19.43 6.95 20.67 8.96 20.92C11.1 21.19 13.39 20.8 15.03 19.32C16.86 17.66 17.5 15 16.56 12.72L16.43 12.46C16.22 12 15.66 11.2 15.66 11.2M12.5 17.5C12.22 17.74 11.76 18 11.4 18.1C10.28 18.5 9.16 17.94 8.5 17.28C9.69 17 10.4 16.12 10.61 15.23C10.78 14.43 10.46 13.77 10.33 13C10.21 12.26 10.23 11.63 10.5 10.94C10.69 11.32 10.89 11.7 11.13 12C11.9 13 13.11 13.44 13.37 14.8C13.41 14.94 13.43 15.08 13.43 15.23C13.46 16.05 13.1 16.95 12.5 17.5H12.5M21 13H19V7H21V13M21 17H19V15H21V17Z\" />", "valve": "<path d=\"M4 22H2V2H4M22 2H20V22H22M17.24 5.34L13.24 9.34A3 3 0 0 0 9.24 13.34L5.24 17.34L6.66 18.76L10.66 14.76A3 3 0 0 0 14.66 10.76L18.66 6.76Z\" />", "snowflake-melt": "<path d=\"M8 17.85C8 19.04 7.11 20 6 20S4 19.04 4 17.85C4 16.42 6 14 6 14S8 16.42 8 17.85M16.46 12V10.56L18.46 9.43L20.79 10.05L21.31 8.12L19.54 7.65L20 5.88L18.07 5.36L17.45 7.69L15.45 8.82L13 7.38V5.12L14.71 3.41L13.29 2L12 3.29L10.71 2L9.29 3.41L11 5.12V7.38L8.5 8.82L6.5 7.69L5.92 5.36L4 5.88L4.47 7.65L2.7 8.12L3.22 10.05L5.55 9.43L7.55 10.56V12H2V13H22V12H16.46M9.5 12V10.56L12 9.11L14.5 10.56V12H9.5M20 17.85C20 19.04 19.11 20 18 20S16 19.04 16 17.85C16 16.42 18 14 18 14S20 16.42 20 17.85M14 20.85C14 22.04 13.11 23 12 23S10 22.04 10 20.85C10 19.42 12 17 12 17S14 19.42 14 20.85Z\" />", "fan-plus": "<path d=\"M13 19C13 17.59 13.5 16.3 14.3 15.28C14.17 14.97 14.03 14.65 13.86 14.34C14.26 14 14.57 13.59 14.77 13.11C15.26 13.21 15.78 13.39 16.25 13.67C17.07 13.25 18 13 19 13C20.05 13 21.03 13.27 21.89 13.74C21.95 13.37 22 12.96 22 12.5C22 8.92 18.03 8.13 14.33 10.13C14 9.73 13.59 9.42 13.11 9.22C13.3 8.29 13.74 7.24 14.73 6.75C17.09 5.57 17 2 12.5 2C8.93 2 8.14 5.96 10.13 9.65C9.72 9.97 9.4 10.39 9.21 10.87C8.28 10.68 7.23 10.25 6.73 9.26C5.56 6.89 2 7 2 11.5C2 15.07 5.95 15.85 9.64 13.87C9.96 14.27 10.39 14.59 10.88 14.79C10.68 15.71 10.24 16.75 9.26 17.24C6.9 18.42 7 22 11.5 22C12.31 22 13 21.78 13.5 21.41C13.19 20.67 13 19.86 13 19M12 13C11.43 13 11 12.55 11 12S11.43 11 12 11C12.54 11 13 11.45 13 12S12.54 13 12 13M20 15V18H23V20H20V23H18V20H15V18H18V15H20Z\" />", "molecule-co2": "<path d=\"M5,7A2,2 0 0,0 3,9V15A2,2 0 0,0 5,17H8V15H5V9H8V7H5M11,7A2,2 0 0,0 9,9V15A2,2 0 0,0 11,17H13A2,2 0 0,0 15,15V9A2,2 0 0,0 13,7H11M11,9H13V15H11V9M16,10.5V12H19V13.5H17.5A1.5,1.5 0 0,0 16,15V18H20.5V16.5H17.5V15H19A1.5,1.5 0 0,0 20.5,13.5V12A1.5,1.5 0 0,0 19,10.5H16Z\" />", "power": "<path d=\"M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13\" />", "fan-chevron-up": "<path d=\"M13 19C13 17.59 13.5 16.3 14.3 15.28C14.17 14.97 14.03 14.65 13.86 14.34C14.26 14 14.57 13.59 14.77 13.11C15.26 13.21 15.78 13.39 16.25 13.67C17.07 13.25 18 13 19 13C20.05 13 21.03 13.27 21.89 13.74C21.95 13.37 22 12.96 22 12.5C22 8.92 18.03 8.13 14.33 10.13C14 9.73 13.59 9.42 13.11 9.22C13.3 8.29 13.74 7.24 14.73 6.75C17.09 5.57 17 2 12.5 2C8.93 2 8.14 5.96 10.13 9.65C9.72 9.97 9.4 10.39 9.21 10.87C8.28 10.68 7.23 10.25 6.73 9.26C5.56 6.89 2 7 2 11.5C2 15.07 5.95 15.85 9.64 13.87C9.96 14.27 10.39 14.59 10.88 14.79C10.68 15.71 10.24 16.75 9.26 17.24C6.9 18.42 7 22 11.5 22C12.31 22 13 21.78 13.5 21.41C13.19 20.67 13 19.86 13 19M12 13C11.43 13 11 12.55 11 12S11.43 11 12 11C12.54 11 13 11.45 13 12S12.54 13 12 13M19 17.83L15.83 21L14.41 19.59L19 15L23.59 19.59L22.17 21L19 17.83\" />", "fan-chevron-down": "<path d=\"M13 19C13 17.59 13.5 16.3 14.3 15.28C14.17 14.97 14.03 14.65 13.86 14.34C14.26 14 14.57 13.59 14.77 13.11C15.26 13.21 15.78 13.39 16.25 13.67C17.07 13.25 18 13 19 13C20.05 13 21.03 13.27 21.89 13.74C21.95 13.37 22 12.96 22 12.5C22 8.92 18.03 8.13 14.33 10.13C14 9.73 13.59 9.42 13.11 9.22C13.3 8.29 13.74 7.24 14.73 6.75C17.09 5.57 17 2 12.5 2C8.93 2 8.14 5.96 10.13 9.65C9.72 9.97 9.4 10.39 9.21 10.87C8.28 10.68 7.23 10.25 6.73 9.26C5.56 6.89 2 7 2 11.5C2 15.07 5.95 15.85 9.64 13.87C9.96 14.27 10.39 14.59 10.88 14.79C10.68 15.71 10.24 16.75 9.26 17.24C6.9 18.42 7 22 11.5 22C12.31 22 13 21.78 13.5 21.41C13.19 20.67 13 19.86 13 19M12 13C11.43 13 11 12.55 11 12S11.43 11 12 11C12.54 11 13 11.45 13 12S12.54 13 12 13M19 19.17L22.17 16L23.59 17.41L19 22L14.41 17.41L15.83 16L19 19.17\" />", "water": "<path d=\"M12 2C10 5 5 10.5 5 15a7 7 0 0 0 14 0c0-4.5-5-10-7-13Z\"/>"};
const VERSION = "0.0.8";
const COLORS = {"inactive": "#77836b", "fault": "#c24632", "blue": "#3e9dc4", "healthy": "#329455", "warning": "#e89828", "fan": "#42483b"};
const ROLES = {
  uptime: ["sensor", "uptime", "esp"],
  wifi_signal: ["sensor", "wifi_signal", "esp"],
  data_age: ["sensor", "data_age"],
  offline_count: ["sensor", "offline_count"],
  fan_runtime: ["sensor", "runtime"],
  filter_interval: ["sensor", "filter_interval"],
  status: ["sensor", "status"],
  fault_details: ["sensor", "fault_details"],
  humidity_target: ["sensor", "humidity_target"],
  heater_target: ["sensor", "heater_target"],
  preheater: ["binary_sensor", "preheater_active"],
  outdoor_temp: ["sensor", "outdoor_temp"],
  return_temp: ["sensor", "return_temp"],
  exhaust_temp: ["sensor", "exhaust_temp"],
  supply_temp: ["sensor", "supply_temp"],
  exhaust_speed: ["sensor", "exhaust_speed"],
  exhaust_speed_control: ["select", "exhaust_speed"],
  supply_speed_control: ["select", "supply_speed"],
  supply_speed: ["sensor", "supply_speed"],
  power: ["binary_sensor", "power"],
  power_control: ["switch", "power"],
  online: ["binary_sensor", "online"],
  api_connected: ["binary_sensor", "api_connected", "esp"],
  fault: ["binary_sensor", "fault"],
  fire_alarm: ["binary_sensor", "fire_alarm"],
  bypass: ["binary_sensor", "bypass_open"],
  defrost: ["binary_sensor", "defrost"],
  external_boost: ["binary_sensor", "external_boost"],
  sensor_boost: ["binary_sensor", "sensor_boost"],
  filter_usage: ["sensor", "filter_usage"],
};
const INDICATORS = [
  ["api_connected", "chip", 96.5, 78.5, "Связь ESP32", "ESP32 connection"],
  ["online", "hvac", 133.5, 78.5, "Связь ПВУ", "Ventilation connection"],
  ["filter_usage", "air-filter", 170.5, 78.5, "Фильтр", "Filter"],
  ["fault", "alert-circle-outline", 207.5, 78.5, "Ошибка", "Error"],
  ["fire_alarm", "fire-alert", 244.5, 78.5, "Пожарный вход", "Fire input"],
  ["bypass", "valve", 96.5, 116.5, "Байпас", "Bypass"],
  ["defrost", "snowflake-melt", 133.5, 116.5, "Разморозка", "Defrost"],
  ["external_boost", "fan-plus", 170.5, 116.5, "Внешнее форсирование", "External boost"],
  ["sensor_boost", "molecule-co2", 207.5, 116.5, "Форсирование CO₂", "CO₂ boost"],
];
const DISPLAYS = [
  ["outdoor_temp", 143, 222, 124, "УЛИЦА", "OUTDOOR", 155, 177.5],
  ["return_temp", 471, 222, 124, "ВОЗВРАТ", "RETURN", 483, 177.5],
  ["exhaust_temp", 143, 337.6, 124, "ВЫТЯЖКА", "EXHAUST", 155, 383],
  ["supply_temp", 471, 337.6, 124, "ПРИТОК", "SUPPLY", 483, 383],
  ["exhaust_speed", 263.5, 473, 90],
  ["supply_speed", 560, 473, 90],
];
const SEGMENTS = ["4,1 20,1 22,3 20,5 4,5 2,3", "21,5 23,3 25,5 25,19 23,21 21,19", "21,23 23,21 25,23 25,37 23,39 21,37", "4,37 20,37 22,39 20,41 4,41 2,39", "1,23 3,21 5,23 5,37 3,39 1,37", "1,5 3,3 5,5 5,19 3,21 1,19", "4,19 20,19 22,21 20,23 4,23 2,21"];
const MASKS = [63, 6, 91, 79, 102, 109, 125, 7, 127, 111];
function configBoolean(value, key) {
  if (value === true || value === 1 || value === "true") return true;
  if (value === false || value === 0 || value === "false") return false;
  throw new Error(`${key} must be true or false`);
}
function stateNumber(value) {
  if(typeof value !== "string" && typeof value !== "number") return NaN;
  if(typeof value === "string" && !/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i.test(value.trim())) return NaN;
  const number=Number(value);
  return Number.isFinite(number) ? number : NaN;
}
function setAttributeIfChanged(element,name,value) {
  const text=String(value);
  if(element.getAttribute(name)!==text) element.setAttribute(name,text);
}
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
  const offset = right ? 100 - x * scale : Math.max(0,58-x*scale);
  const ghost = value === null ? "" : `<g transform="translate(${right ? 42 : 0} 1)" fill="#30392b" opacity=".04">${[0,29].map(dx=>`<g transform="translate(${dx} 0)">${SEGMENTS.map(p=>`<polygon points="${p}"/>`).join("")}</g>`).join("")}</g>`;
  return `${ghost}<g class="active-digits" transform="translate(${offset} 1) scale(${scale})" fill="#30392b" opacity="${value === null ? .1 : 1}">${parts}</g>`;
}
function icon(name, x, y, size = 25) {
  return `<g transform="translate(${x - size / 2} ${y - size / 2}) scale(${size / 24})">${ICONS[name]}</g>`;
}
const TEMPERATURE_COLORS = [[-30,"#4810DF"],[-20,"#305FEA"],[-10,"#209DE8"],[0,"#20C8D0"],[10,"#50CF85"],[20,"#BCD34B"],[25,"#EDC33C"],[30,"#F79132"],[40,"#D90818"]];
function temperatureColor(value) {
  const t = Math.max(-30, Math.min(40, value));
  for(let i=1;i<TEMPERATURE_COLORS.length;i++) {
    const [a,ca]=TEMPERATURE_COLORS[i-1], [b,cb]=TEMPERATURE_COLORS[i];
    if(t<=b) {
      const ratio=(t-a)/(b-a);
      return "#"+[1,3,5].map(j=>Math.round(parseInt(ca.slice(j,j+2),16)*(1-ratio)+parseInt(cb.slice(j,j+2),16)*ratio).toString(16).padStart(2,"0")).join("");
    }
  }
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
    overlay += `<g class="power-glyph" data-power-icon="" fill="#596561">${icon("power",340,590,33.333)}</g>`;
    for (const [role, , , , ru, en, x, y] of DISPLAYS.filter(d => d[4])) {
      overlay += `<g class="temperature-action" data-history="${role}" role="button" tabindex="0"><title></title><rect x="${x > 340 ? x - 59 : x - 88}" y="${(role === "exhaust_temp" || role === "supply_temp" ? 337.6 : y) - 22}" width="${x > 340 ? 150 : 176}" height="110" rx="8" fill="transparent"/></g>`;
    }
    for (const [role, x] of [["exhaust_speed", 82], ["supply_speed", 378.5]]) {
      overlay += `<g class="temperature-action" data-history="${role}" role="button" tabindex="0"><title></title><rect x="${x}" y="435" width="225" height="74" rx="8" fill="transparent"/></g>`;
    }
    overlay += `<g class="power-action" data-power="" role="button" tabindex="0"><title></title><rect x="249.5" y="562" width="181" height="72" rx="11" fill="transparent"/><circle class="waiting" cx="340" cy="598" r="16" fill="none" stroke="#596561" stroke-width="3" stroke-dasharray="62 39"/></g><g class="command-notice" role="button" tabindex="0" style="display:none"><title></title><rect fill="white" fill-opacity=".9" stroke="#c5cbc2" stroke-width="1" rx="9"/><text class="command-message" x="340" y="549" text-anchor="middle" font-family="Arial,sans-serif" font-size="16" fill="#a43b2c" role="status"></text></g>`;
    overlay += `<g class="temperature-action" data-history="preheater" role="button" tabindex="0"><title></title><rect x="260" y="173" width="40" height="48" rx="4" fill="transparent"/></g>`;
    for (const [role, x, cx] of [["exhaust_speed", 49, 139.333], ["supply_speed", 450, 540.667]]) {
      overlay += `<g class="speed-action" data-speed-action="${role}" role="button" tabindex="0"><title></title><rect x="${x}" y="562" width="181" height="72" rx="11" fill="transparent"/><circle cx="${cx}" cy="598" r="16" fill="none" stroke="#596561" stroke-width="3" stroke-dasharray="62 39" style="transform-origin:${cx}px 598px"/></g>`;
    }
    this.shadowRoot.innerHTML = `<style>
      ha-card.airflow #internals:has(.exchanger-error){opacity:1}ha-card.airflow .airflow-exchanger.exchanger-error{stroke-width:3}
      .speed-pixels{display:none}ha-card.airflow .speed-pixels{display:inline}
      .fan-background{display:none}ha-card.airflow .fan-background{display:inline}
      .airflow-art{display:none}ha-card.airflow .airflow-art{display:inline}ha-card.airflow .panel-art,ha-card.airflow [data-bar]{display:none}
      ha-card.airflow.transparent .airflow-background{display:none}ha-card.airflow .caption{fill:#34465b;font-size:18px}ha-card.airflow [data-fan]{opacity:.38}ha-card.airflow .segments text{font-weight:600}ha-card.airflow [data-power-icon]{display:inline}ha-card.airflow .when-off{display:none!important}ha-card.airflow #internals{display:inline}
      ha-card.airflow .power-action{pointer-events:none}ha-card.airflow .power-action rect{pointer-events:all}ha-card.airflow .speed-action rect{stroke:none}ha-card.airflow .speed-action circle{r:12}
      .preheater{pointer-events:none}
      ha-card.compact:not(.transparent){background:#e9ede2}
      [data-screen-surface],.airflow-background{display:none}
      :host{display:block}ha-card{display:block;background:#f8fafc;border:0;box-shadow:none;overflow:hidden;border-radius:10px}
      ha-card.compact .speed-action{display:none}
      ha-card.compact [data-screen-surface]{stroke:none}
      ha-card.compact [data-power-icon]{display:inline}
      ha-card.transparent .screen-layer:not(.fan-divider){display:none}ha-card.transparent{background:transparent}
      .temperature-action.pending rect{stroke:#56614d;stroke-width:1.5;stroke-dasharray:4 4}
      svg.panel{display:block;width:100%;height:auto}.caption{font-family:Arial,sans-serif;font-size:16px;fill:#444e3c;text-anchor:middle;dominant-baseline:central}
      .preheater{pointer-events:none}.power-glyph{pointer-events:none}.rotor{transform-box:fill-box;transform-origin:center;animation:spin 2s linear infinite;animation-play-state:paused}
      @keyframes spin{to{transform:rotate(360deg)}}@media(prefers-reduced-motion:reduce){.rotor{animation:none}}
      .temperature-action,.indicator-action{cursor:pointer}.temperature-action[aria-disabled="true"],.indicator-action[aria-disabled="true"]{cursor:default}
      :where(ha-card.compact) .power-action rect{stroke:#c5cbc2;stroke-width:1.5}
      .power-action{cursor:pointer}.power-action[aria-disabled="true"]{cursor:default}.power-action rect{pointer-events:all}.power-action:focus-visible{outline:none}.power-action:focus-visible rect{stroke:#56614d;stroke-width:2}
      .fire-active{animation:fire-alert-blink 1s ease-in-out infinite}@keyframes fire-alert-blink{50%{opacity:.15}}@media(prefers-reduced-motion:reduce){.fire-active{animation:none}}
      .command-notice{cursor:pointer;animation:notice-pulse 1.8s ease-in-out 3}.command-notice:focus-visible{outline:none}.command-notice:focus-visible rect{stroke:#56614d;stroke-width:2}@keyframes notice-pulse{50%{opacity:.6}}@media(prefers-reduced-motion:reduce){.command-notice{animation:none}}
      .waiting,.speed-action circle{stroke:#3e9ed6}
      .waiting{display:none;transform-origin:340px 598px;animation:spin 1s linear infinite}.power-action.pending .waiting{display:block}
      .indicator-action{pointer-events:none}.indicator-hit{pointer-events:all}.indicator-action:focus-visible{outline:2px solid #56614d;outline-offset:3px}
      .temperature-action rect{pointer-events:all}.temperature-action:focus-visible{outline:none}.temperature-action:focus-visible rect{stroke:#56614d;stroke-width:2}
      .speed-action{cursor:pointer}.speed-action[aria-disabled="true"]{cursor:default}.speed-action rect{pointer-events:all}.speed-action:focus-visible{outline:none}.speed-action:focus-visible rect{stroke:#56614d;stroke-width:2}
      .speed-action circle{display:none;animation:spin 1s linear infinite}.speed-action.pending circle{display:block}
      dialog{border:1px solid var(--divider-color,#ccd3d7);border-radius:16px;padding:24px;max-width:calc(100vw - 32px);width:380px;box-sizing:border-box;background:var(--card-background-color,#fff);color:var(--primary-text-color,#222);font:16px Arial,sans-serif}dialog::backdrop{background:#0006}dialog h3{font-size:20px;margin:0 0 18px;font-weight:500}.speed-choices{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:6px}.speed-choices button{min-height:36px;font-size:14px;padding:0 2px}.speed-choices [data-step-choice="6"]{grid-column:2}.speed-choices [data-step-choice="0"]{font-size:12px}dialog button{font:inherit;min-height:44px;border:1px solid var(--divider-color,#ccd3d7);border-radius:8px;background:var(--secondary-background-color,#f2f5f5);color:inherit;cursor:pointer}dialog button[aria-pressed="true"]{background:var(--primary-color,#0385bd);color:white}dialog button:disabled{opacity:.35;cursor:default}[data-speed-close]{display:block;margin:18px 0 0 auto;padding:0 14px}
ha-card.dark{background:#19212c}ha-card.dark.compact:not(.transparent){background:#24362a}ha-card.dark.transparent{background:transparent}ha-card.dark .caption,ha-card.dark.airflow .caption{fill:#d5ded8}ha-card.dark .flow-port-label{fill:#9baebf}ha-card.dark [fill="#30392b"]{fill:#d5dfcb}ha-card.dark [stroke="#30392b"]{stroke:#d5dfcb}ha-card.dark [stop-color="#30392b"]{stop-color:#d5dfcb}ha-card.dark [fill="#444e3c"]{fill:#c6d1c2}ha-card.dark [stroke="#444e3c"]{stroke:#c6d1c2}ha-card.dark [stop-color="#444e3c"]{stop-color:#c6d1c2}ha-card.dark [fill="#66705d"]{fill:#9aab94}ha-card.dark [stroke="#66705d"]{stroke:#9aab94}ha-card.dark [stop-color="#66705d"]{stop-color:#9aab94}ha-card.dark [fill="#77836b"]{fill:#b0bdb0}ha-card.dark [stroke="#77836b"]{stroke:#b0bdb0}ha-card.dark [stop-color="#77836b"]{stop-color:#b0bdb0}ha-card.dark [fill="#a6ae9c"]{fill:#697d6c}ha-card.dark [stroke="#a6ae9c"]{stroke:#697d6c}ha-card.dark [stop-color="#a6ae9c"]{stop-color:#697d6c}ha-card.dark [fill="#56614d"]{fill:#b0c3a5}ha-card.dark [stroke="#56614d"]{stroke:#b0c3a5}ha-card.dark [stop-color="#56614d"]{stop-color:#b0c3a5}ha-card.dark [fill="#3b4533"]{fill:#becdb4}ha-card.dark [stroke="#3b4533"]{stroke:#becdb4}ha-card.dark [stop-color="#3b4533"]{stop-color:#becdb4}ha-card.dark [fill="#42483b"]{fill:#bfccbc}ha-card.dark [stroke="#42483b"]{stroke:#bfccbc}ha-card.dark [stop-color="#42483b"]{stop-color:#bfccbc}ha-card.dark [fill="#c2c8bc"]{fill:#77867b}ha-card.dark [stroke="#c2c8bc"]{stroke:#77867b}ha-card.dark [stop-color="#c2c8bc"]{stop-color:#77867b}ha-card.dark [fill="#34465b"]{fill:#d1dfed}ha-card.dark [stroke="#34465b"]{stroke:#d1dfed}ha-card.dark [stop-color="#34465b"]{stop-color:#d1dfed}ha-card.dark [fill="#52677a"]{fill:#9ab0c4}ha-card.dark [stroke="#52677a"]{stroke:#9ab0c4}ha-card.dark [stop-color="#52677a"]{stop-color:#9ab0c4}ha-card.dark [fill="#edf2f7"]{fill:#2b3849}ha-card.dark [stroke="#edf2f7"]{stroke:#2b3849}ha-card.dark [stop-color="#edf2f7"]{stop-color:#2b3849}ha-card.dark [fill="#dce4ed"]{fill:#46566a}ha-card.dark [stroke="#dce4ed"]{stroke:#46566a}ha-card.dark [stop-color="#dce4ed"]{stop-color:#46566a}ha-card.dark [fill="#c8d0d7"]{fill:#556372}ha-card.dark [stroke="#c8d0d7"]{stroke:#556372}ha-card.dark [stop-color="#c8d0d7"]{stop-color:#556372}ha-card.dark [fill="#aeb9c2"]{fill:#738190}ha-card.dark [stroke="#aeb9c2"]{stroke:#738190}ha-card.dark [stop-color="#aeb9c2"]{stop-color:#738190}ha-card.dark [fill="#e5e8ea"]{fill:#26303d}ha-card.dark [stroke="#e5e8ea"]{stroke:#26303d}ha-card.dark [stop-color="#e5e8ea"]{stop-color:#26303d}ha-card.dark [fill="#596561"]{fill:#b2c2b6}ha-card.dark [stroke="#596561"]{stroke:#b2c2b6}ha-card.dark [stop-color="#596561"]{stop-color:#b2c2b6}ha-card.dark [fill="#c5cbc2"]{fill:#526054}ha-card.dark [stroke="#c5cbc2"]{stroke:#526054}ha-card.dark [stop-color="#c5cbc2"]{stop-color:#526054}ha-card.dark [fill="#f8fbfe"]{fill:#35475a}ha-card.dark [stroke="#f8fbfe"]{stroke:#35475a}ha-card.dark [stop-color="#f8fbfe"]{stop-color:#35475a}ha-card.dark [fill="#dce6f0"]{fill:#253443}ha-card.dark [stroke="#dce6f0"]{stroke:#253443}ha-card.dark [stop-color="#dce6f0"]{stop-color:#253443}ha-card.dark [fill="#b0c1d1"]{fill:#6b8197}ha-card.dark [stroke="#b0c1d1"]{stroke:#6b8197}ha-card.dark [stop-color="#b0c1d1"]{stop-color:#6b8197}ha-card.dark [fill="#8da2b8"]{fill:#50677d}ha-card.dark [stroke="#8da2b8"]{stroke:#50677d}ha-card.dark [stop-color="#8da2b8"]{stop-color:#50677d}ha-card.dark [fill="#d3dde7"]{fill:#7e94a9}ha-card.dark [stroke="#d3dde7"]{stroke:#7e94a9}ha-card.dark [stop-color="#d3dde7"]{stop-color:#7e94a9}ha-card.dark [fill="#cedae7"]{fill:#6d8298}ha-card.dark [stroke="#cedae7"]{stroke:#6d8298}ha-card.dark [stop-color="#cedae7"]{stop-color:#6d8298}ha-card.dark [fill="#8da0b3"]{fill:#71899e}ha-card.dark [stroke="#8da0b3"]{stroke:#71899e}ha-card.dark [stop-color="#8da0b3"]{stop-color:#71899e}ha-card.dark [data-indicator][opacity=".35"],ha-card.dark .preheater[opacity=".35"]{opacity:.55}ha-card.dark .fan-background{fill:#273442}ha-card.dark [data-power-icon][fill="#23863f"]{fill:#51dc7d}ha-card.dark [data-power-icon][fill="#111111"]{fill:#c5d2ca}ha-card.dark .power-action rect{stroke:#58685c}ha-card.dark .segments g[opacity=".04"]{opacity:.065}ha-card.dark.airflow [data-fan]{opacity:.56}ha-card.dark.airflow [data-speed-pixels] rect[opacity=".38"]{fill:#c4d0d8;opacity:.66}ha-card.dark.airflow [data-speed-pixels] rect[opacity=".65"]{fill:#8b9ba8;opacity:.48}ha-card.dark.airflow rect[fill="url(#case)"]{fill-opacity:.48}ha-card.dark.airflow rect[fill="url(#cover)"]{opacity:.4}ha-card.dark.airflow [data-display="outdoor_temp"] text{fill:#42c5e9}ha-card.dark.airflow [data-display="return_temp"] text{fill:#ed82b6}ha-card.dark.airflow [data-display="exhaust_temp"] text{fill:#79b6ed}ha-card.dark.airflow [data-display="supply_temp"] text{fill:#ffad72}ha-card.dark .command-notice rect{fill:#273442;stroke:#627080}ha-card.dark .command-message{fill:#ff9b8a}
    </style><ha-card>${PANEL.replace('</svg>', '</g></svg>').replace('</defs>', '</defs><g class="panel-art">').replace('<svg ', '<svg class="panel" role="img" ').replace('</svg>', AIRFLOW + overlay + '</svg>')}</ha-card><dialog aria-labelledby="speed-dialog-title"><h3 id="speed-dialog-title"></h3><div class="speed-choices">${Array.from({length:11},(_,i)=>`<button type="button" data-step-choice="${i}">${i}</button>`).join("")}</div><button type="button" data-speed-close></button></dialog>`;
    for(const fan of this.shadowRoot.querySelectorAll('[data-fan]')) {
      const background=document.createElementNS("http://www.w3.org/2000/svg","circle");background.classList.add("fan-background");background.setAttribute("r",28);background.setAttribute("fill","#f8fafc");background.setAttribute("fill-opacity",".65");fan.prepend(background);
    }
    const airflowScene=this.shadowRoot.querySelector(".airflow-art .scene");
    for(const [label,x,y] of [["OA",200.75,129],["RA",599.25,129],["FR",200.75,267],["SA",599.25,267]]) {
      const text=document.createElementNS("http://www.w3.org/2000/svg","text");text.classList.add('flow-port-label');text.textContent=label;
      for(const [key,value] of Object.entries({x,y,"text-anchor":"middle","font-family":"Arial,sans-serif","font-size":15,fill:"#52677a"})) text.setAttribute(key,value);
      airflowScene.append(text);
    }
    for(const [x,ru,en] of [[210,"Вытяжка","Exhaust"],[490,"Приток","Supply"]]) {
      const label=document.createElementNS("http://www.w3.org/2000/svg","text");label.classList.add("caption");label.dataset.ru=ru;label.dataset.en=en;label.setAttribute("x",x);label.setAttribute("y",449);airflowScene.append(label);
    }
    for(const role of ["exhaust_speed","supply_speed"]) {
      const arrow=document.createElementNS("http://www.w3.org/2000/svg","path");arrow.dataset.fanDirection=role;
      arrow.setAttribute("d","M9 0H-9M-4 -4-9 0-4 4");arrow.setAttribute("fill","none");arrow.setAttribute("stroke","#77836b");arrow.setAttribute("stroke-width","1.8");arrow.setAttribute("stroke-linecap","round");arrow.setAttribute("stroke-linejoin","round");arrow.setAttribute("pointer-events","none");
      this.shadowRoot.querySelector("svg.panel").append(arrow);
    }
    const miniFlow=this.shadowRoot.querySelector('.airflow-lines');
    const miniPaths=miniFlow.querySelectorAll('path');
    miniPaths[1].setAttribute('d','M371 335H334L324 344 M278 385 268 394H229');
    miniPaths[2].setAttribute('d','M229 335H268L278 344 M325 386 334 394H371');
    const crossing=document.createElementNS('http://www.w3.org/2000/svg','path');crossing.classList.add('exchanger-crossing');crossing.setAttribute('d','M318 349 284 380 M285 350 298 362 M305 369 318 380');miniFlow.append(crossing);
    const supplyCross=crossing.cloneNode(false);supplyCross.classList.add('supply-crossing');miniFlow.append(supplyCross);
    for(const diamond of [miniPaths[0],this.shadowRoot.querySelector('.airflow-exchanger')]) {
      const title=document.createElementNS('http://www.w3.org/2000/svg','title');diamond.append(title);diamond.style.pointerEvents='all';
    }
    for(const [role,x] of [["exhaust_speed",310],["supply_speed",490]]) {
      const pixels=document.createElementNS("http://www.w3.org/2000/svg","g");pixels.classList.add("speed-pixels");pixels.dataset.speedPixels=role;
      for(let i=0;i<10;i++) {
        const pixel=document.createElementNS("http://www.w3.org/2000/svg","rect");
        for(const [key,value] of Object.entries({x:x-27.5+i*5.7,y:277,width:3.7,height:3.7,rx:.5,fill:"#c8d0d7"})) pixel.setAttribute(key,value);
        pixels.append(pixel);
      }
      this.shadowRoot.querySelector("svg.panel").append(pixels);
    }
    for(const fan of this.shadowRoot.querySelectorAll('[data-fan]')) {
      fan.setAttribute('role','button');fan.setAttribute('tabindex','0');fan.style.cursor='pointer';
      const hit=document.createElementNS('http://www.w3.org/2000/svg','rect');
      for(const [key,value] of Object.entries({x:-28,y:-28,width:56,height:56,fill:'transparent'})) hit.setAttribute(key,value);
      hit.style.pointerEvents='all';fan.append(hit);
    }
    for(const name of ['supply','exhaust']) {
      const gradient=this.shadowRoot.querySelector(`.airflow-art [id="${name}"]`).cloneNode(true);
      gradient.replaceChildren();gradient.setAttribute("href",`#${name}`);
      gradient.id=`mini-${name}`;gradient.setAttribute('gradientUnits','userSpaceOnUse');gradient.setAttribute('x1',209);gradient.setAttribute('x2',391);gradient.setAttribute('y1',365);gradient.setAttribute('y2',365);
      this.shadowRoot.querySelector('svg.panel defs').append(gradient);
    }
    const heaterSetpoint = document.createElementNS("http://www.w3.org/2000/svg","text");
    heaterSetpoint.classList.add("heater-setpoint");
    for(const [key,value] of Object.entries({x:280,y:169,"text-anchor":"middle","font-family":"Arial,sans-serif","font-size":14,fill:"#c24632","pointer-events":"none"})) heaterSetpoint.setAttribute(key,value);
    this.shadowRoot.querySelector("svg.panel").append(heaterSetpoint);
    const heater = this.shadowRoot.querySelector(".preheater"), heaterWrapper = document.createElementNS("http://www.w3.org/2000/svg","g");
    heaterWrapper.setAttribute("transform","translate(0 -35)"); heater.parentNode.removeChild(heater); heaterWrapper.append(heater); this.shadowRoot.querySelector("svg.panel").append(heaterWrapper);
    const fanHistory = event => {
      const fan=event.target.closest?.('[data-fan]');
      if(!fan || (event.type==='keydown' && !['Enter',' '].includes(event.key))) return;
      const entityId=this._ids?.[fan.dataset.fan];
      if(!entityId || !this._hass?.states?.[entityId]) return;
      event.preventDefault();this.dispatchEvent(new CustomEvent('hass-more-info',{detail:{entityId},bubbles:true,composed:true}));
    };
    this.shadowRoot.addEventListener('click',fanHistory);this.shadowRoot.addEventListener('keydown',fanHistory);
    const openHistory = event => {
      const block = event.target.closest?.("[data-history]");
      if (!block || (event.type === "keydown" && !["Enter", " "].includes(event.key))) return;
      if (event.type === "keydown") event.preventDefault();
      if (this._config?.view !== "airflow" && ["supply_speed", "exhaust_speed"].includes(block.dataset.history)) {
        this._openSpeed(block.dataset.history); return;
      }
      const entityId = this._ids?.[block.dataset.history];
      if (!entityId || !this._hass?.states?.[entityId]) return;
      this.dispatchEvent(new CustomEvent("hass-more-info", { detail: { entityId }, bubbles: true, composed: true }));
    };
    for(const fan of this.shadowRoot.querySelectorAll('[data-fan]')) this.shadowRoot.querySelector('svg.panel').append(fan);
    this._initialLayout = [...this.shadowRoot.querySelectorAll("svg.panel *")].map(el=>[el,[...el.attributes].map(a=>[a.name,a.value])]);
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
  static getStubConfig() { return { prefix: "vent", esp_prefix: "royalclima" }; }
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
    const main = prefix("prefix", "vent"), esp = prefix("esp_prefix", "royalclima");
    const ids = {};
    for (const [key, [domain, suffix, group]] of Object.entries(ROLES)) {
      const value = overrides[key] !== undefined ? overrides[key] : key === "preheater" ? null : `${domain}.${group === "esp" ? esp : main}_${suffix}`;
      if (value !== null && (typeof value !== "string" || !/^[a-z_]+\.[a-z0-9_]+$/.test(value))) throw new Error(`Invalid entity ID for ${key}`);
      ids[key] = value;
    }
    if (config.view !== undefined && !["control", "airflow"].includes(config.view)) throw new Error("view must be control or airflow");
    if(config.theme !== undefined && !["auto","light","dark"].includes(config.theme)) throw new Error("theme must be auto, light or dark");
    if (config.language !== undefined && typeof config.language !== "string") throw new Error("language must be a string");
    config = { ...config };
    for (const key of ["transparent", "flow_colormap", "sensor_boost_co2"]) if (config[key] !== undefined) config[key] = configBoolean(config[key], key);
    const icons = config.show_icons ?? {};
    const iconKeys = [...INDICATORS.map(item=>item[0]), "preheater"];
    if(typeof icons !== "object" || Array.isArray(icons) || Object.keys(icons).some(key=>!iconKeys.includes(key))) throw new Error("show_icons must map icon names to booleans");
    config.show_icons = Object.fromEntries(Object.entries(icons).map(([key, value]) => [key, configBoolean(value, `show_icons.${key}`)]));
    this._clearPending(); this._clearSpeeds(); this._clearErrors();
    this.dataset.version = VERSION;
    this._config = config; this._ids = ids; this._applyLayout(); this._render();
  }
  _applyLayout() {
    this._gradientKeys = {}; this._displayKeys = {}; this._captionKey = null; this._noticeKey = null; this._topLayoutKey = null;
    for(const [el,attributes] of this._initialLayout) { for(const a of [...el.attributes]) el.removeAttribute(a.name); for(const [name,value] of attributes) el.setAttribute(name,value); }
    const airflow = this._config.view === "airflow";
    const compact = !airflow;
    const card=this.shadowRoot.querySelector('ha-card'),svg=this.shadowRoot.querySelector('svg.panel');
    card.classList.toggle('airflow',airflow);card.classList.toggle('compact',compact);card.classList.toggle('transparent',!!this._config.transparent);
    svg.setAttribute('viewBox','63.75 36.5 576 432');svg.setAttribute('width',640);svg.setAttribute('height',480);
    const surface=this.shadowRoot.querySelector('[data-screen-surface]');
    for(const [key,value] of Object.entries({x:63.75,y:71.5,width:576,height:432})) surface.setAttribute(key,value);
    for(const [role,x] of [['exhaust_speed',117.5],['supply_speed',414]]) {
      this.shadowRoot.querySelector(`[data-fan="${role}"]`).setAttribute('transform',`translate(${x} 465)`);
      this.shadowRoot.querySelector(`[data-display="${role}"]`).setAttribute('transform','translate(0 -8)');
      for(const bar of this.shadowRoot.querySelectorAll(`[data-bar="${role}"]`)) bar.setAttribute('transform','translate(0 -8)');
      this.shadowRoot.querySelector(`[data-history="${role}"] rect`).setAttribute('y',427);
    }
    this.shadowRoot.querySelector('[data-power-icon]').setAttribute('transform','translate(340 465) scale(1.5) translate(-340 -590)');
    const power=this.shadowRoot.querySelector('[data-power]');
    for(const [key,value] of Object.entries({x:312,y:437,width:56,height:56})) power.querySelector('rect').setAttribute(key,value);
    power.querySelector('circle').setAttribute('cy',465);power.querySelector('circle').style.transformOrigin='340px 465px';
    this.shadowRoot.querySelector('.command-message').setAttribute('y',385);
    for(const [role,x] of [["exhaust_speed",117.5],["supply_speed",414]]) {
      this.shadowRoot.querySelector(`[data-fan-direction="${role}"]`).setAttribute("transform",`translate(${x} ${439})`);
      this.shadowRoot.querySelector(`[data-fan-direction="${role}"]`).style.display=airflow?"none":"";
    }
    this.shadowRoot.querySelector('[data-display="exhaust_speed"]').setAttribute('x',237);
    this.shadowRoot.querySelector('[data-display="supply_speed"]').setAttribute('x',540);
    const rightArrow=this.shadowRoot.querySelector('[data-fan-direction="supply_speed"]');rightArrow.setAttribute('transform',rightArrow.getAttribute('transform')+' scale(-1 1)');
    if (!airflow) {
      const shift = el => el.setAttribute('transform',`translate(0 -18) ${el.getAttribute('transform')||''}`);
      const art=this.shadowRoot.querySelector('.panel-art');
      for(const unit of art.querySelectorAll('text[y="386"]')) unit.setAttribute('y',361);
      for(const el of art.querySelectorAll(':scope > g > *')) {
        if((!el.classList.contains('screen-layer') || el.classList.contains('fan-divider') || el.classList.contains('compact-bottom-line')) && !el.classList.contains('body-layer')) shift(el);
      }
      for(const el of this.shadowRoot.querySelectorAll('svg.panel > *')) {
        if(el.matches('.caption,[data-display],[data-fan],[data-bar],[data-history],[data-fan-direction],.heater-setpoint,.command-notice') || (compact && el.matches('.power-action,.power-glyph'))) shift(el);
      }
      // Preheater was moved out of the static artwork to share both views.
      const heaterParent=this.shadowRoot.querySelector('.preheater').parentElement;
      shift(heaterParent);
    }
    if (airflow) this._applyAirflowLayout();
    if(!airflow) {
      for(const role of ['outdoor_temp','return_temp']) {
        const display=this.shadowRoot.querySelector(`[data-display="${role}"]`),hit=this.shadowRoot.querySelector(`[data-history="${role}"]`);
        for(const el of [display,hit]) el.setAttribute('transform',`translate(0 -8) ${el.getAttribute('transform')||''}`);
      }
      for(const caption of [...this.shadowRoot.querySelectorAll('svg.panel > .caption')].slice(0,2)) caption.setAttribute('transform',`translate(0 -8) ${caption.getAttribute('transform')||''}`);
    }
    if(!airflow) {
      const flow=this.shadowRoot.querySelector('.airflow-lines');
      for(const el of [flow.querySelector('path'),flow.querySelector('.exchanger-crossing'),flow.querySelector('.supply-crossing')]) el.setAttribute('transform','translate(302 365) scale(1.24) translate(-302 -365)');
      const paths=flow.querySelectorAll('path');
      this.shadowRoot.querySelector('.fan-divider').style.display='none';
      flow.setAttribute('stroke-width','2.6');
      flow.querySelector('path').setAttribute('stroke-width','1.3');
      flow.querySelector('.exchanger-crossing').setAttribute('stroke-width',String(2.6/1.24));
      flow.querySelectorAll('path')[3].setAttribute('stroke-width','2.6');
      flow.querySelector('.exchanger-crossing').setAttribute('d','M319.74194 347.25806 284.25806 382.74194');
      flow.querySelector('.supply-crossing').setAttribute('d','M284.25806 347.25806 298.77419 361.77419 M305.22581 368.22581 319.74194 382.74194');
      paths[1].setAttribute('d','M391 330H337L328 339 M276 391 267 400H209');
      paths[2].setAttribute('d','M209 330H267L276 339 M328 391 337 400H391');
      const wall=this.shadowRoot.querySelector('.panel-art path[d^="M340 184.76"]');
      // One coordinate system: walls at 340/594, roof centered at 467, equal 16-unit eaves.
      wall.setAttribute('d','');
      this.shadowRoot.querySelector('.panel-art path[d^="M324 194"]').setAttribute('d','M324 194L467 112L610 194 M340 184.825174825V247 M340 355V414 M594 184.825174825V414');
    }
    if(!airflow) {
      this.shadowRoot.querySelector('.preheater').parentElement.setAttribute('transform','');
      this.shadowRoot.querySelector('.preheater').setAttribute('transform','translate(73.9 37) scale(.7)');
      const hit=this.shadowRoot.querySelector('[data-history="preheater"]');hit.setAttribute('transform','');
      for(const [key,value] of Object.entries({x:248,y:230,width:36,height:40})) hit.querySelector('rect').setAttribute(key,value);
      this.shadowRoot.querySelector('.heater-setpoint').setAttribute('transform','');
      for(const label of this.shadowRoot.querySelectorAll('.airflow-label')) {
        label.setAttribute('x',['OA','FR'].includes(label.textContent)?276:402);
        label.setAttribute('text-anchor','middle');
        if(['FR','SA'].includes(label.textContent)) label.setAttribute('y',363);
      }
      this.shadowRoot.querySelector('.airflow-lines path:nth-child(4)').setAttribute('d','m217 396-8 4 8 4 M383 396l8 4-8 4');
    }
    if(!airflow) {
      for(const role of ['return_temp','supply_temp']) {
        const display=this.shadowRoot.querySelector(`[data-display="${role}"]`),hit=this.shadowRoot.querySelector(`[data-history="${role}"]`);
        for(const el of [display,hit]) el.setAttribute('transform',`translate(8 0) ${el.getAttribute('transform')||''}`);
      }
      for(const index of [1,3]) {
        const label=this.shadowRoot.querySelectorAll('svg.panel > .caption')[index];label.setAttribute('transform',`translate(8 0) ${label.getAttribute('transform')||''}`);
      }
    }
    if(!airflow) {
      for(const el of this.shadowRoot.querySelectorAll('svg.panel > [data-fan],svg.panel > [data-bar],svg.panel > [data-fan-direction],svg.panel > .power-action,svg.panel > .power-glyph,svg.panel > [data-display$="speed"],svg.panel > [data-history$="speed"]')) el.setAttribute('transform',`translate(0 -32) ${el.getAttribute('transform')||''}`);
    }
    const defrostSpec=INDICATORS.find(d=>d[0]==="defrost");
    this.shadowRoot.querySelector('[data-indicator="defrost"]').setAttribute('transform',`translate(${(airflow?233.5:271)-defrostSpec[2]} ${(airflow?211:273)-defrostSpec[3]})`);
    if(airflow) {
      const shift=el=>el.setAttribute('transform',`translate(0 20) ${el.getAttribute('transform')||''}`);
      for(const el of this.shadowRoot.querySelectorAll('.airflow-art .scene > g,.airflow-art .scene > text')) shift(el);
      for(const el of this.shadowRoot.querySelectorAll('svg.panel > .caption,svg.panel > [data-display],svg.panel > [data-fan],svg.panel > [data-history]:not([data-indicator]),svg.panel > .speed-pixels,svg.panel > .power-action,svg.panel > .power-glyph,svg.panel > .speed-action,svg.panel > .heater-setpoint,svg.panel > .command-notice')) shift(el);
      shift(this.shadowRoot.querySelector('.preheater').parentElement);
      const defrost=this.shadowRoot.querySelector('[data-indicator="defrost"]');shift(defrost);
    }
    // Resolve accumulated layout translations once; rendering only updates states.
    for(const element of this.shadowRoot.querySelectorAll('svg.panel [transform]')) {
      if(element.transform?.baseVal.numberOfItems>1) element.transform.baseVal.consolidate();
    }
  }
  _applyAirflowLayout() {
    const root = this.shadowRoot;
    const attrs = (el, values) => { for (const [key,value] of Object.entries(values)) el.setAttribute(key,value); };
    attrs(root.querySelector("svg.panel"), {viewBox:"80 -16 640 512",width:640,height:512});
    const positions = [["outdoor_temp",205,66,27,"#087f9f"],["return_temp",595,66,27,"#a34172"],["exhaust_temp",205,332,367,"#3674a7"],["supply_temp",595,332,367,"#bb5529"],["exhaust_speed",315,449,null,"#34465b"],["supply_speed",595,449,null,"#34465b"]];
    for (const [role,x,y,labelY,color] of positions) {
      const display=root.querySelector(`[data-display="${role}"]`);
      attrs(display,{x:x-65,y:y-23,width:130,height:46,transform:""}); display.dataset.color=color;
      const hit=root.querySelector(`[data-history="${role}"] rect`);
      attrs(hit,{x:x-85,y:y-26,width:170,height:52,transform:""});
      if(labelY!==null) { const caption=root.querySelector(`[data-history="${role}"]`); const index=DISPLAYS.findIndex(d=>d[0]===role); attrs(root.querySelectorAll("svg.panel > .caption")[index],{x,y:labelY}); }
    }
    for(const [key,x,y] of [["api_connected",383,27],["online",417,27],["filter_usage",298,120],["fault",332,120],["fire_alarm",366,120],["bypass",400,120],["defrost",434,120],["external_boost",468,120],["sensor_boost",502,120]]) {
      const spec=INDICATORS.find(d=>d[0]===key);attrs(root.querySelector(`[data-indicator="${key}"]`),{transform:`translate(${x-spec[2]} ${y-spec[3]})`});
    }
    for(const [role,x] of [["exhaust_speed",310],["supply_speed",490]]) {
      attrs(root.querySelector(`[data-fan="${role}"]`),{transform:`translate(${x} 245)`});
      const button=root.querySelector(`[data-speed-action="${role}"]`), bx=role==="exhaust_speed"?155:435;
      attrs(button.querySelector("rect"),{x:bx,y:430,width:210,height:38});attrs(button.querySelector("circle"),{cx:bx+105,cy:449});button.querySelector("circle").style.transformOrigin=`${bx+105}px 449px`;
    }
    attrs(root.querySelector("[data-power-icon]"),{transform:"translate(400 449) scale(.7) translate(-340 -590)"});
    attrs(root.querySelector("[data-power] rect"),{x:381,y:430,width:38,height:38});
    attrs(root.querySelector(".waiting"),{cx:400,cy:449,r:12});root.querySelector(".waiting").style.transformOrigin="400px 449px";
    for(const el of root.querySelectorAll('.airflow-art .scene > g > g, .airflow-art .scene > g > path')) {
      if(el.querySelector('rect[y="430"]') || el.querySelector('text[y="449"]')) el.setAttribute("transform","translate(0 -35)");
    }
    for(const el of root.querySelectorAll('.airflow-art .scene > text.caption')) el.setAttribute("transform","translate(0 -35)");
    for(const role of ["exhaust_speed","supply_speed"]) {
      root.querySelector(`[data-display="${role}"]`).setAttribute("transform","translate(0 -35)");
      root.querySelector(`[data-history="${role}"]`).setAttribute("transform","translate(0 -35)");
      root.querySelector(`[data-speed-action="${role}"]`).setAttribute("transform","translate(0 -35)");
    }
    root.querySelector('[data-power]').setAttribute("transform","translate(0 -35)");
    root.querySelector('[data-power-icon]').setAttribute("transform","translate(400 414) scale(.7) translate(-340 -590)");
    attrs(root.querySelector(".command-message"),{x:400,y:382});
    attrs(root.querySelector("svg.panel"),{viewBox:"120 6 560 420",height:480});
    root.querySelector('.airflow-background').setAttribute("height",480);
    root.querySelector('.airflow-art .scene > g > g').setAttribute('transform','translate(0 -23)');
    for(const role of ["exhaust_speed","supply_speed"]) {
      root.querySelector(`[data-fan="${role}"]`).setAttribute('transform',`translate(${role==="exhaust_speed"?310:490} 237)`);
      root.querySelector(`[data-speed-pixels="${role}"]`).setAttribute('transform','translate(0 -8)');
    }
    for(const index of [2,3]) {
      root.querySelectorAll('svg.panel > .caption')[index].setAttribute('transform','translate(0 -8)');
      const role=DISPLAYS[index][0];
      root.querySelector(`[data-display="${role}"]`).setAttribute('transform','translate(0 -8)');
      root.querySelector(`[data-history="${role}"]`).setAttribute('transform','translate(0 -8)');
    }
    // One control row aligned with the lower temperature captions.
    for(const label of root.querySelectorAll('.airflow-art .scene > text.caption')) label.style.display='none';
    const buttonBackgrounds=root.querySelectorAll('.airflow-art .scene > g > g[fill="#edf2f7"] rect');
    for(const [i,rect] of [...buttonBackgrounds].entries()) {
      rect.parentElement.setAttribute('transform','');
      attrs(rect,{x:[277,381,435][i],y:340,width:i===1?38:88,height:38});
    }
    for(const [role,x,cx] of [['exhaust_speed',277,321],['supply_speed',435,479]]) {
      const button=root.querySelector(`[data-speed-action="${role}"]`);button.removeAttribute('transform');
      attrs(button.querySelector('rect'),{x,y:340,width:88,height:38});
      attrs(button.querySelector('circle'),{cx,cy:359});button.querySelector('circle').style.transformOrigin=`${cx}px 359px`;
      attrs(root.querySelector(`[data-display="${role}"]`),{x:cx-44,y:336,width:88,height:46,transform:''});
      const history=root.querySelector(`[data-history="${role}"]`);history.removeAttribute('transform');attrs(history.querySelector('rect'),{x,y:340,width:88,height:38,transform:''});
    }
    root.querySelector('[data-power]').removeAttribute('transform');attrs(root.querySelector('[data-power] rect'),{x:381,y:340,width:38,height:38});
    attrs(root.querySelector('[data-power-icon]'),{transform:'translate(400 359) scale(.7) translate(-340 -590)'});
    attrs(root.querySelector('.waiting'),{cx:400,cy:359,r:12});root.querySelector('.waiting').style.transformOrigin='400px 359px';
    attrs(root.querySelector('.command-message'),{x:400,y:318});
    attrs(root.querySelector(".preheater"),{transform:"translate(47.13 18.25) scale(.66)"});attrs(root.querySelector('[data-history="preheater"] rect'),{x:214,y:150,width:36,height:40});
  }
  set hass(value) {
    const previous=this._hass;
    this._hass=value;
    if (!this._ids || !previous || !value ||
        this._lastDarkMode !== value.themes?.darkMode || previous.locale?.language !== value.locale?.language || previous.language !== value.language ||
        previous.callService !== value.callService ||
        Object.values(this._ids).some(id => id && previous.states?.[id] !== value.states?.[id])) this._render();
  }
  connectedCallback() {
    this._colorScheme ||= window.matchMedia("(prefers-color-scheme: dark)");
    this._themeListener ||= () => this._render();
    this._colorScheme.addEventListener("change",this._themeListener);
    this._render();
  }
  disconnectedCallback() { this._colorScheme?.removeEventListener("change",this._themeListener); this._clearPending(); this._clearSpeeds(); this._clearErrors(); this._render(); }
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
    return state("api_connected") === "on" && state("online") === "on" &&
      ["on", "off"].includes(state("power")) && ["on", "off"].includes(state("power_control")) &&
      this._ids.power_control?.startsWith("switch.") && typeof this._hass.callService === "function";
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
    if (state("api_connected") !== "on" || state("online") !== "on") return "connection";
    if (state("power") !== "on") return "power";
    const speed = stateNumber(state(role));
    if (speed == null || String(speed).trim() === "" || !Number.isInteger(speed) || speed < 0 || speed > 10) return "reading";
    const target = state(role + "_control");
    if (target == null || ["unknown", "unavailable"].includes(target) || !this._ids[role + "_control"]?.startsWith("select.")) return "control";
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
    if (stateNumber(this._hass.states[this._ids[role]].state) === step) return;
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
  getCardSize() { return 6; }
  getGridOptions() { return { columns: 12, rows: "auto", min_columns: 6 }; }
  _node(selector) {
    this._nodes ||= new Map();
    if (!this._nodes.has(selector)) this._nodes.set(selector,this.shadowRoot.querySelector(selector));
    return this._nodes.get(selector);
  }
  _nodesFor(selector) {
    this._nodeLists ||= new Map();
    if (!this._nodeLists.has(selector)) this._nodeLists.set(selector,[...this.shadowRoot.querySelectorAll(selector)]);
    return this._nodeLists.get(selector);
  }
  _render() {
    if (!this._ids || !this._hass) return;
    const systemLanguage = String(this._hass.locale?.language || this._hass.language || "en").toLowerCase();
    const ru = this._config.language === undefined || this._config.language.trim().toLowerCase() === "auto"
      ? systemLanguage.startsWith("ru")
      : this._config.language.trim().toLowerCase() === "ru";
    this._lastDarkMode=this._hass.themes?.darkMode;
    const theme=this._config.theme ?? "auto";
    const dark=theme === "dark" || (theme === "auto" && (this._lastDarkMode ?? this._colorScheme?.matches ?? false));
    this._node('ha-card').classList.toggle('dark',dark);
    const raw = key => this._hass.states?.[this._ids[key]]?.state;
    const known = key => raw(key) != null && !["unknown", "unavailable", ""].includes(raw(key));
    const on = key => raw(key) === "on";
    const numberCache = new Map();
    const number = key => { if(!numberCache.has(key)) numberCache.set(key,stateNumber(raw(key)));return numberCache.get(key); };
    const numeric = key => Number.isFinite(number(key));
    const rounded = value => Number.isFinite(value) ? Number(value.toFixed(1)) : value;
    const extra = (key, russian, english, unit="") => (unit ? numeric(key) : known(key) && ["string","number"].includes(typeof raw(key))) ? `${ru?russian:english}: ${numeric(key) ? rounded(number(key)) : raw(key)}${unit ? " "+unit : ""}` : null;
    const duration = seconds => { const n=Math.max(0,Math.floor(seconds));return `${Math.floor(n/86400)}${ru?" д":"d"} ${Math.floor(n%86400/3600)}${ru?" ч":"h"} ${Math.floor(n%3600/60)}${ru?" мин":"m"}`; };

    const connected = on("api_connected") && on("online");
    if (this._pending && raw("power") === this._pending.expected) this._clearPending();
    for (const [role, pending] of Object.entries(this._speedPending || {})) {
      if (connected && known(role) && number(role) === pending.expected) { clearTimeout(pending.timer); delete this._speedPending[role]; }
    }
    const flowing = connected && on("power");
    if(this._config.view === 'airflow') for(const label of this._nodesFor('.flow-port-label')) label.style.display=flowing?'':'none';
    const bypassActive=connected && on("bypass");
    const diamondColor=connected?"#56614d":"#c2c8bc";
    const diamondHint=bypassActive?(ru?"Байпас включён":"Bypass is on"):(ru?"Теплообменник":"Heat exchanger");
    for(const diamond of [this._node('.airflow-lines path'),this._node('.airflow-exchanger')]) diamond.querySelector('title').textContent=diamondHint;
    for(const crossing of this._nodesFor('.exchanger-crossing')) crossing.style.display=bypassActive?'none':'';

    const supplyPath=this._node('.airflow-art path[stroke="url(#supply)"]'),exhaustPath=this._node('.airflow-art path[stroke="url(#exhaust)"]');
    supplyPath.style.display=bypassActive?'none':'';
    exhaustPath.style.display=bypassActive?'none':'';

    const artwork=this._node(".airflow-art");
    for(const [gradient,left,right,defaults,arrows] of [
      ["supply","outdoor_temp","supply_temp",["#25b9df","#ef8450"],["M148.5 159","M535 249"]],
      ["exhaust","exhaust_temp","return_temp",["#639ed0","#ce6998"],["M265 249","M651.5 159"]]
    ]) {
      const valid = key => numeric(key) && Math.abs(number(key)) <= 1000;
      const dynamic=this._config.flow_colormap === true && connected && valid(left) && valid(right);
      const a=number(left), b=number(right);
      this._gradientKeys ||= {};
      const gradientKey=dynamic ? `${a}:${b}` : "fixed";
      if(this._gradientKeys[gradient] === gradientKey) continue;
      this._gradientKeys[gradient]=gradientKey;
      const colors=dynamic ? Array.from({length:17},(_,i)=>temperatureColor(a+(b-a)*i/16)) : defaults;
      const element=artwork.querySelector(`[id="${gradient}"]`);
      while(element.children.length>colors.length) element.lastElementChild.remove();
      colors.forEach((color,i)=> {
        let stop=element.children[i];
        if(!stop) { stop=document.createElementNS("http://www.w3.org/2000/svg","stop");element.append(stop); }
        stop.setAttribute("offset",i/(colors.length-1));stop.setAttribute("stop-color",color);
      });

      arrows.forEach((prefix,i)=>artwork.querySelector(`path[d^="${prefix}"]`).setAttribute("fill",colors[i===0?0:colors.length-1]));
    }

    if(this._config.view === "airflow") {
    const scene=this._node(".airflow-art");
    scene.classList.toggle("airflow-running",flowing);scene.classList.toggle("airflow-off",connected && !on("power"));scene.classList.toggle("airflow-disconnected",!connected);
    const core=scene.querySelector(".airflow-exchanger");core.classList.remove("exchanger-error");setAttributeIfChanged(core,"stroke",diamondColor);setAttributeIfChanged(core,"fill","#cedae7");setAttributeIfChanged(core,"fill-opacity",".45");
    scene.querySelector("#internals").style.display = !connected ? "none" : "inline";
    } else {
    const flow = this._node(".airflow-lines");
    flow.setAttribute("stroke", flowing ? "#56614d" : "#c2c8bc");
    const heatColors=this._config.flow_colormap === true && connected;
    const miniPaths=flow.querySelectorAll('path');
    miniPaths[1].setAttribute('stroke',heatColors?'url(#mini-exhaust)':'inherit');
    miniPaths[2].setAttribute('stroke',heatColors?'url(#mini-supply)':'inherit');
    this._node('.exchanger-crossing').setAttribute('stroke',heatColors?'url(#mini-exhaust)':'inherit');
    this._node('.supply-crossing').setAttribute('stroke',heatColors?'url(#mini-supply)':'inherit');
    const exchanger = flow.querySelector("path"), exchangerError = false;
    exchanger.classList.toggle("exchanger-error", exchangerError);
    setAttributeIfChanged(exchanger,"stroke", connected ? "#56614d" : "#c2c8bc");
    setAttributeIfChanged(exchanger,"fill", exchangerError ? COLORS.error : "none");
    setAttributeIfChanged(exchanger,"fill-opacity", exchangerError ? ".09" : "0");
    for (const label of this._nodesFor(".airflow-label")) label.setAttribute("fill", flowing ? "#3b4533" : "#c2c8bc");
    }
    this._node("ha-card").setAttribute("aria-label", "Royal Clima ERV");
    const captionKey=`${ru}:${this._config.view}`;
    if(this._captionKey !== captionKey) {
    this._captionKey=captionKey;
    for (const el of this._nodesFor(".caption")) el.textContent = el.dataset[ru ? "ru" : "en"];
    }
    for (const [role] of DISPLAYS) {
      let value = connected && known(role) && String(raw(role)).trim() !== "" ? number(role) : NaN;
      if (!role.endsWith("speed") && Number.isFinite(value)) value = Math.abs(value) <= 1000 ? (this._config.view === "airflow" ? Math.round(value*10)/10 : Math.round(value)) : NaN;
      if (!Number.isFinite(value) || (role.endsWith("speed") && (!Number.isInteger(value) || value < 0 || value > 10))) value = null;
      const el = this._node(`[data-display="${role}"]`);
      this._displayKeys ||= {};
      const displayKey=`${value}:${ru}:${this._config.view}:${role.endsWith("speed") ? flowing : ""}`;
      if(this._displayKeys[role] === displayKey) continue;
      this._displayKeys[role]=displayKey;
      const content = this._config.view === "airflow" ? `<text x="50" y="31" text-anchor="middle" font-family="Arial,sans-serif" font-size="${role.endsWith("speed") ? 28 : 32}" fill="${el.dataset.color}">${value === null ? "—" : value}${value === null ? "" : role.endsWith("speed") ? "/10" : " °C"}</text>` : digits(value, !role.endsWith("speed"));
      const segments = el.querySelector(".segments");
      segments.setAttribute("transform",this._config.view === "airflow"?"":"translate(-2 0) skewX(-10)");
      if(this._config.view !== "airflow") el.style.overflow="visible";
      if(this._config.view === "airflow" && segments.firstElementChild?.tagName.toLowerCase() === "text") {
        segments.firstElementChild.textContent = value === null ? "—" : `${value}${role.endsWith("speed") ? "/10" : " °C"}`;
      } else segments.innerHTML = content;
      if(this._config.view !== "airflow" && role.endsWith("speed") && !flowing && segments.lastElementChild) {
        segments.lastElementChild.setAttribute("fill",COLORS.inactive);
        if(value !== null) segments.lastElementChild.setAttribute("opacity",".3");
      }

      el.dataset.value = value === null ? "unknown" : String(value);
      el.querySelector("title").textContent = `${value === null ? (ru ? "Нет данных" : "No data") : value + (role.endsWith("speed") ? " / 10" : " °C")}`;
    }
    for (const [key, , , , russian, english] of INDICATORS) {
      const el = this._node(`[data-indicator="${key}"]`);
      const boostIcon = this._config.sensor_boost_co2 === false ? "humidity" : "co2";
      const usage = number("filter_usage");
      const filterValid = connected && known("filter_usage") && String(raw("filter_usage")).trim() !== "" && Number.isFinite(usage) && usage >= 0;
      const hidden = this._config.show_icons?.[key] === false;
      el.style.display = hidden ? "none" : "";
      if (key === "sensor_boost" && el.dataset.boostIcon !== boostIcon) {
        el.querySelector("g").outerHTML = icon(boostIcon === "humidity" ? "water" : "molecule-co2", 207.5, 116.5, boostIcon === "humidity" ? 25 : 32);
        el.dataset.boostIcon = boostIcon;
      }
      const label = key === "sensor_boost" && boostIcon === "humidity" ? (ru ? "Форсирование по влажности" : "Humidity boost") : ru ? russian : english;
      const enabled = key === "filter_usage" ? filterValid : key === "api_connected" ? on(key) : connected && on(key);
      setAttributeIfChanged(el,"fill", enabled ? (["fault", "fire_alarm"].includes(key) ? COLORS.error : key === "api_connected" || key === "online" ? "#3e89bb" : "#56614d") : COLORS.inactive);
      if(["defrost", "sensor_boost"].includes(key) && enabled) setAttributeIfChanged(el,"fill",COLORS.blue);
      if(key === "external_boost" && enabled) setAttributeIfChanged(el,"fill","#287044");
      if(key === "filter_usage" && filterValid) setAttributeIfChanged(el,"fill",usage >= 100 ? COLORS.error : usage >= 80 ? COLORS.warning : COLORS.healthy);
      setAttributeIfChanged(el,"opacity", enabled ? "1" : ".35");
      el.classList.toggle("fire-active",key === "fire_alarm" && enabled);
      const exists = !!this._hass.states?.[this._ids[key]];
      setAttributeIfChanged(el,"aria-disabled", String(!exists));
      setAttributeIfChanged(el,"tabindex", exists && !hidden ? "0" : "-1");
      setAttributeIfChanged(el,"aria-label", label);
      el.querySelector("title").textContent = key === "filter_usage" ? `${label}: ${filterValid ? `${rounded(usage)} %` : ru ? "Нет данных" : "No data"}` : `${label}: ${known(key) ? (ru && ["on", "off"].includes(raw(key)) ? (on(key) ? "Включено" : "Выключено") : raw(key)) : ru ? "Нет данных" : "No data"}`;
    }
    for(const [key] of INDICATORS) {
      const el=this._node(`[data-indicator="${key}"]`), title=el.querySelector("title"), lines=[title.textContent];
      if(key==="api_connected") {
        lines[0]=`${ru?"Связь ESP32":"ESP32 connection"}: ${known(key)?(on(key)?(ru?"Подключено":"Connected"):(ru?"Отключено":"Disconnected")):(ru?"Нет данных":"No data")}`;
        if(numeric("uptime")) lines.push(`${ru?"Время работы":"Uptime"}: ${duration(number("uptime"))}`);
        lines.push(extra("wifi_signal","Сигнал Wi-Fi","Wi-Fi signal","dBm"));
      }
      if(key==="online") {
        lines[0]=`${ru?"Связь ПВУ":"Ventilation connection"}: ${known(key)?(on(key)?(ru?"Подключено":"Connected"):(ru?"Отключено":"Disconnected")):(ru?"Нет данных":"No data")}`;
        lines.push(extra("data_age","С последнего пакета","Since last data",ru?"с":"s"),extra("offline_count","Потери связи","Offline events"),extra("status","Состояние ПВУ","Ventilation status"));
      }
      if(key==="filter_usage") {
        lines.push(extra("fan_runtime","Наработка","Runtime",ru?"ч":"h"),extra("filter_interval","Период замены","Replacement interval",ru?"дней":"days"));
        if(numeric(key) && number(key)>=0) lines.push(number(key)>=100?(ru?"Требуется замена":"Replacement required"):number(key)>=80?(ru?"Скоро потребуется замена":"Replacement due soon"):(ru?"В пределах интервала":"Within service interval"));
      }
      if(key==="fault") lines.push(extra("fault_details","Описание","Description"));
      if(key==="sensor_boost" && this._config.sensor_boost_co2 === false) lines.push(extra("humidity_target","Уставка влажности","Humidity setpoint","%"));
      if(key==="defrost") lines.push(extra("exhaust_temp","Температура FR","FR temperature","°C"));
      title.textContent=lines.filter(Boolean).join("\n");setAttributeIfChanged(el,"aria-label",title.textContent);
    }
    for (const role of ["exhaust_speed", "supply_speed"]) {
      const speed = number(role);
      const running = connected && on("power") && known(role) && Number.isInteger(speed) && speed > 0 && speed <= 10;
      const fan = this._node(`[data-fan="${role}"]`);
      let fanTitle=fan.querySelector("title");
      if(!fanTitle) {fanTitle=document.createElementNS("http://www.w3.org/2000/svg","title");fan.prepend(fanTitle);}
      fanTitle.textContent=`${role==="supply_speed"?(ru?"Приточный вентилятор":"Supply fan"):(ru?"Вытяжной вентилятор":"Exhaust fan")}: ${numeric(role)?raw(role)+" / 10":ru?"Нет данных":"No data"}\n${running?(ru?"Работает":"Running"):(ru?"Остановлен или нет связи":"Stopped or disconnected")}`;
      const directionHint=role === "exhaust_speed" ? (ru?"Вытяжка: из помещения наружу; стрелка от центра":"Exhaust: from indoors to outside; arrow points away from center") : (ru?"Приток: с улицы в помещение; стрелка к центру":"Supply: from outside to indoors; arrow points toward center");
      fanTitle.textContent += "\n"+directionHint;
      setAttributeIfChanged(fan,'aria-label',fanTitle.textContent);setAttributeIfChanged(fan,'tabindex',known(role)?'0':'-1');
      setAttributeIfChanged(fan,"opacity", running ? "1" : ".3");
      if(this._config.view !== "airflow") {
        const arrow=this._node(`[data-fan-direction="${role}"]`);
        setAttributeIfChanged(arrow,"stroke",COLORS.fan);setAttributeIfChanged(arrow,"opacity",running?"1":".3");
      } else {
        const enabled=connected && on("power");
        setAttributeIfChanged(this._node(`[data-display="${role}"]`),"opacity",enabled?"1":".4");
        const backgrounds=this._nodesFor('.airflow-art .scene > g > g[fill="#edf2f7"] rect');
        const background=backgrounds[role === "exhaust_speed"?0:2];
        if(background) setAttributeIfChanged(background,"fill",enabled?"#edf2f7":"#e5e8ea");
      }

      fan.querySelector(".rotor").style.animationPlayState = running ? "running" : "paused";
      fan.querySelector(".rotor").style.animationDuration = `${(5 - (Math.max(1, Math.min(10, Number.isFinite(speed) ? speed : 1)) - 1) * (4.3 / 9)).toFixed(2)}s`;
      if(this._config.view === "airflow") for(const [i,pixel] of [...this._node(`[data-speed-pixels="${role}"]`).children].entries()) { setAttributeIfChanged(pixel,"fill",running && speed>=i+1?COLORS.fan:"#aeb9c2");setAttributeIfChanged(pixel,"opacity",running && speed>=i+1?".38":".65"); }
      if(this._config.view !== "airflow") for (const bar of this._nodesFor(`[data-bar="${role}"]`)) bar.setAttribute("opacity", running && speed >= Number(bar.dataset.step) ? "1" : ".18");
    }
    const airflowView=this._config.view === "airflow";
    const topKeys=["api_connected","online","filter_usage","bypass","fault","fire_alarm"];
    const visibleTop=topKeys.filter(key=>this._node(`[data-indicator="${key}"]`).style.display!=="none");
    const topLayoutKey=`${airflowView}:${visibleTop.join(":")}`;
    if(this._topLayoutKey!==topLayoutKey) {
      this._topLayoutKey=topLayoutKey;
      visibleTop.forEach((key,i)=> {
        const spec=INDICATORS.find(d=>d[0]===key);
        const x=airflowView?400+(i-(visibleTop.length-1)/2)*27:104.5+i*33;
        this._node(`[data-indicator="${key}"]`).setAttribute("transform",`translate(${x-spec[2]} ${(airflowView?47:82.5)-spec[3]})`);
      });
    }
    for(const [i,key] of ["sensor_boost","external_boost"].entries()) {
      const spec=INDICATORS.find(d=>d[0]===key);
      this._node(`[data-indicator="${key}"]`).setAttribute("transform",`translate(${(airflowView?568:416)+i*28-spec[2]} ${(airflowView?212:256)-spec[3]})`);
    }
    const preheater = this._node(".preheater");
    const heaterAvailable = this._config.show_icons?.preheater !== false;
    preheater.style.display = heaterAvailable ? "" : "none";
    const heating = connected && on("preheater");
    const setpoint = this._node(".heater-setpoint");
    const showSetpoint = heaterAvailable && heating && numeric("heater_target") && Math.abs(number("heater_target")) <= 1000;
    setAttributeIfChanged(setpoint,"x",this._config.view === "airflow"?220:250);setAttributeIfChanged(setpoint,"y",this._config.view === "airflow"?176:245);setAttributeIfChanged(setpoint,"text-anchor","end");
    setpoint.style.display = showSetpoint ? "" : "none";
    const setpointText = showSetpoint ? `${Math.round(number("heater_target")*10)/10}°C` : "";
    if(setpoint.textContent !== setpointText) setpoint.textContent=setpointText;
    setAttributeIfChanged(preheater,"opacity", heating ? "1" : ".35");
    setAttributeIfChanged(preheater,"stroke", heating ? COLORS.error : COLORS.inactive);
    for (const [role, , , , russian, english] of DISPLAYS) {
      const block = this._node(`[data-history="${role}"]`);
      const exists = !!this._hass.states?.[this._ids[role]];
      setAttributeIfChanged(block,"aria-disabled", String(!exists));
      setAttributeIfChanged(block,"tabindex", exists ? "0" : "-1");
      const label = `${(ru ? russian : english) || (role === "supply_speed" ? (ru ? "Скорость притока" : "Supply speed") : (ru ? "Скорость вытяжки" : "Exhaust speed"))}: ${ru ? "История" : "History"}`;
      setAttributeIfChanged(block,"aria-label", label);
      block.querySelector("title").textContent = label;
    }
    const heaterAction = this._node('[data-history="preheater"]');
    const heaterExists = heaterAvailable && !!this._ids.preheater;
    heaterAction.style.display = heaterAvailable ? "" : "none";
    setAttributeIfChanged(heaterAction,"aria-disabled", String(!heaterExists));
    setAttributeIfChanged(heaterAction,"tabindex", heaterExists ? "0" : "-1");
    const heaterLabel = ru ? "Предподогрев: история" : "Preheater: history";
    setAttributeIfChanged(heaterAction,"aria-label", heaterLabel);
    heaterAction.querySelector("title").textContent = [heaterLabel, known("preheater") ? (on("preheater") ? (ru?"Включено":"On") : (ru?"Выключено":"Off")) : (ru?"Нет данных":"No data"), extra("heater_target","Уставка нагрева","Heater setpoint","°C")].filter(Boolean).join("\n");
    const power = this._node("[data-power]");
    const disabled = !!this._pending || !this._powerReady();
    setAttributeIfChanged(power,"aria-disabled", String(disabled));
    setAttributeIfChanged(power,"aria-busy", String(!!this._pending));
    setAttributeIfChanged(power,"tabindex", disabled ? "-1" : "0");
    power.classList.toggle("pending", !!this._pending);
    power.querySelector("title").textContent = this._pending ? (ru ? "Ожидание подтверждения" : "Waiting for confirmation") : (ru ? "Включить / выключить ПВУ" : "Turn ventilation on / off");
    setAttributeIfChanged(power,"aria-label", power.querySelector("title").textContent);
    const powerGlyph = this._node("[data-power-icon]");
    setAttributeIfChanged(powerGlyph,"opacity", this._pending ? "0" : "1");
    setAttributeIfChanged(powerGlyph,"fill", !this._powerReady() ? "#9a9a9a" : on("power") ? "#23863f" : "#111111");
    let error = this._powerError, context = "";
    for (const [role, message] of Object.entries(this._speedErrors || {})) {
      error = message; context = role === "supply_speed" ? (ru ? "Приток: " : "Supply: ") : (ru ? "Вытяжка: " : "Exhaust: ");
    }
    const notice = this._node(".command-notice"), message = notice.querySelector("text");
    const messageText = !error ? "" : context + (error === "timeout" ? (ru ? "Команда не подтверждена" : "Command not confirmed") : (ru ? "Ошибка отправки команды" : "Could not send command"));
    if(message.textContent !== messageText) message.textContent=messageText;
    notice.style.display = error ? "" : "none";
    if (error) {
      const noticeKey=`${message.textContent}:${message.getAttribute("x")}:${message.getAttribute("y")}`;
      if(this._noticeKey !== noticeKey) {
      this._noticeKey=noticeKey;
      const box = message.getBBox(), frame = notice.querySelector("rect");
      for (const [name, value] of Object.entries({x:box.x-12,y:box.y-6,width:box.width+24,height:box.height+12})) setAttributeIfChanged(frame,name,value);
      }
      const label = ru ? "Скрыть сообщение об ошибке" : "Dismiss error message";
      notice.setAttribute("aria-label",label); notice.querySelector("title").textContent=label;
      const key = context + error;
      if (this._errorKey !== key) {
        clearTimeout(this._errorTimer); this._errorKey = key;
        this._errorTimer = setTimeout(() => { this._clearErrors(); this._render(); }, 45000);
      }
    }
    for (const role of ["exhaust_speed", "supply_speed"]) {
      const button = this._node(`[data-speed-action="${role}"]`);
      const pending = !!this._speedPending?.[role], ready = this._speedReady(role);
      button.style.opacity = ready ? "1" : ".4";
      setAttributeIfChanged(button,"aria-disabled", String(pending || !ready)); setAttributeIfChanged(button,"aria-busy", String(pending));
      setAttributeIfChanged(button,"tabindex", ready && !pending ? "0" : "-1"); button.classList.toggle("pending", pending);
      const label = role === "supply_speed" ? (ru ? "Скорость притока" : "Supply speed") : (ru ? "Скорость вытяжки" : "Exhaust speed");
      const problem = this._speedProblem(role);
      const reasons = ru ? { power: "ПВУ выключена или её состояние неизвестно", connection: "Нет связи с ПВУ", reading: "Нет корректного показания скорости 0–10", control: "Сущность управления select недоступна или не настроена", service: "Вызов действия HA недоступен" } : { power: "Ventilation is off or its state is unknown", connection: "No ventilation connection", reading: "No valid speed reading 0–10", control: "Control select entity unavailable or not configured", service: "HA action unavailable" };
      const hint = pending ? (ru ? "Ожидание подтверждения" : "Waiting for confirmation") : reasons[problem];
      setAttributeIfChanged(button,"aria-label", label); button.querySelector("title").textContent = hint ? `${label}: ${hint}` : label;
      const block = this._node(`[data-history="${role}"]`);
      block.classList.toggle("pending", this._config.view !== "airflow" && pending);
      setAttributeIfChanged(block,"aria-busy", String(this._config.view !== "airflow" && pending));
      if (this._config.view !== "airflow") {
        setAttributeIfChanged(block,"aria-disabled", String(pending || !ready)); setAttributeIfChanged(block,"tabindex", ready && !pending ? "0" : "-1");
        setAttributeIfChanged(block,"aria-label", label); block.querySelector("title").textContent = button.querySelector("title").textContent;
      }
    }
    const dialog = this._node("dialog"), role = dialog.dataset.role;
    dialog.querySelector("h3").textContent = role === "supply_speed" ? (ru ? "Скорость притока" : "Supply speed") : (ru ? "Скорость вытяжки" : "Exhaust speed");
    dialog.querySelector("[data-speed-close]").textContent = ru ? "Отмена" : "Cancel";
    const zero=dialog.querySelector('[data-step-choice="0"]');
    if(zero.textContent !== (ru?"Выкл":"Off")) zero.textContent=ru?"Выкл":"Off";
    const options = this._hass.states?.[this._ids[role + "_control"]]?.attributes?.options;
    for (const choice of dialog.querySelectorAll("[data-step-choice]")) {
      choice.disabled = !this._speedReady(role) || !!this._speedPending?.[role] || (Array.isArray(options) && !options.includes(choice.dataset.stepChoice));
      choice.setAttribute("aria-pressed", String(known(role) && number(role) === Number(choice.dataset.stepChoice)));
    }
  }
}
if (!customElements.get("royal-clima-card")) {
  customElements.define("royal-clima-card", RoyalClimaCard);
  window.customCards = window.customCards || [];
  window.customCards.push({ type: "royal-clima-card", name: "Royal Clima ERV Card", description: "Royal Clima ERV · control panel", preview: true, documentationURL: "https://github.com/alidonet/ha-royal-clima-card" });
}
