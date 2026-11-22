# Changelog

## 0.1.4

- Support fan speed ranges 0..3 and 0..10, detected from the firmware Fan speeds entity or speed selector options; restrict speed selection and commands to the supported range;

## 0.1.3

- Add optional outdoor and indoor temperature and humidity sensors, with history links and visual editor settings;
- Add an information dialog with temperature comparisons, possible causes of deviations, and an estimate of outdoor humidity at indoor temperature. Open it using the information icon beside the recovery explanation;
- Minor UI updates;

## 0.1.2

- Improve with ability to show calculated recovery percent. Allow to see comment and reason why not applicable;
- Minor UI updates/fixes for panels;

## 0.1.0

First public release of Royal Clima ERV Card for Home Assistant.

- Control panel and airflow diagram for Royal Clima SOFFIO Primo ventilation units;
- Temperature and status displays, power control, and supply and exhaust fan step selection;
- Visual configuration editor with entity pickers, plus YAML configuration;
- English and Russian labels, light and dark themes, and an optional airflow temperature colormap;
- Installation through HACS as a custom Dashboard repository or manually as a JavaScript module;
