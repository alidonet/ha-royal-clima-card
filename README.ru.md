# Royal Clima ERV Card

[English](README.md)

Карточка Home Assistant для приточно-вытяжной установки Royal Clima SOFFIO Primo: температуры, состояния, управление питанием и ступенями вентиляторов. Два вида — пульт и схема потоков. Прошивка ESPHome для ESP32 и подключение оборудования: [ESPHome-RoyalClima](https://github.com/alidonet/ESPHome-RoyalClima).

![Пульт управления](images/control_panel.png)
![Пульт управления](images/control_panel_dark.png)

![Схема потоков](images/flows_panel.png)
![Airflow diagram](images/flows_panel_dark.png)

## Установка

1. Подключите ESP32 с прошивкой к Home Assistant через интеграцию ESPHome.
2. В HACS откройте «Пользовательские репозитории», добавьте `https://github.com/alidonet/ha-royal-clima-card` с категорией **Dashboard** и установите **Royal Clima ERV Card**.
3. Если ресурс не добавился автоматически, добавьте в ресурсах дашбордов `/hacsfiles/ha-royal-clima-card/ha-royal-clima-card.js` с типом **JavaScript module**.
4. Обновите страницу браузера и добавьте карточку через выбор карточек или вручную в YAML.

Без HACS: скопируйте [dist/ha-royal-clima-card.js](dist/ha-royal-clima-card.js) в `/config/www/ha-royal-clima-card.js`, добавьте ресурс `/local/ha-royal-clima-card.js` с типом **JavaScript module** и обновите страницу.

## Минимальная конфигурация

Обязателен только `type`. Все остальные параметры и привязки сущностей опциональны.

```yaml
type: custom:royal-clima-card
```

## Полная конфигурация

Ниже — все параметры со значениями по умолчанию и явным выбором английского языка (`language: auto`). Без `language` язык выбирается по профилю HA. Обычно достаточно минимального YAML или изменения префиксов. Явные `entities` имеют приоритет над префиксами: если копируете весь пример, меняйте и соответствующие entity_id.

```yaml
type: custom:royal-clima-card
view: control
prefix: vent
esp_prefix: royalclima
transparent: false
flow_colormap: false
sensor_boost_co2: true

language: auto

show_icons:
  api_connected: true
  online: true
  filter_usage: true
  bypass: true
  fault: true
  fire_alarm: true
  preheater: true
  defrost: true
  sensor_boost: true
  external_boost: true

entities:
  uptime: sensor.royalclima_uptime
  wifi_signal: sensor.royalclima_wifi_signal
  data_age: sensor.vent_data_age
  offline_count: sensor.vent_offline_count
  fan_runtime: sensor.vent_runtime
  filter_interval: sensor.vent_filter_interval
  status: sensor.vent_status
  fault_details: sensor.vent_fault_details
  humidity_target: sensor.vent_humidity_target
  heater_target: sensor.vent_heater_target
  outdoor_temp: sensor.vent_outdoor_temp
  return_temp: sensor.vent_return_temp
  exhaust_temp: sensor.vent_exhaust_temp
  supply_temp: sensor.vent_supply_temp
  exhaust_speed: sensor.vent_exhaust_speed
  exhaust_speed_control: select.vent_exhaust_speed
  supply_speed_control: select.vent_supply_speed
  supply_speed: sensor.vent_supply_speed
  power: binary_sensor.vent_power
  power_control: switch.vent_power
  online: binary_sensor.vent_online
  api_connected: binary_sensor.royalclima_api_connected
  fault: binary_sensor.vent_fault
  fire_alarm: binary_sensor.vent_fire_alarm
  bypass: binary_sensor.vent_bypass_open
  defrost: binary_sensor.vent_defrost
  external_boost: binary_sensor.vent_external_boost
  sensor_boost: binary_sensor.vent_sensor_boost
  filter_usage: sensor.vent_filter_usage
  preheater: null
```

## Параметры

| Параметр | Значение / назначение |
|---|---|
| `type` | Обязательно: `custom:royal-clima-card`. |
| `view` | `control` — пульт, `airflow` — схема потоков. |
| `prefix`, `esp_prefix` | Префиксы сущностей ПВУ и ESP32: `vent`, `royalclima`. Без домена; допустимы строчные латинские буквы, цифры и подчёркивания. |
| `theme` | `auto` по умолчанию — тема HA; `light` / `dark` — явный выбор. При отсутствии признака темы HA используется настройка системы. |
| `language` | `auto` по умолчанию — язык HA; `ru` / `en` — явный выбор. Другие значения выбирают английский. |
| `transparent` | `false`; `true` убирает фон. Цвета текста и значков следуют выбранной теме. |
| `flow_colormap` | `false` — обычные цвета потоков; `true` — температурная палитра. |
| `sensor_boost_co2` | `true` — значок CO₂; `false` — значок влажности. Меняет оформление и подсказку, не определяет тип датчика. |
| `show_icons` | Все значки включены. Для скрытия задайте `false` нужному ключу из полного YAML; скрывается и область нажатия. Состояние сущности не меняется. |
| `entities` | Переопределения полными entity_id. Незаданные ключи формируются из префиксов; `null` отключает привязку. Ключи перечислены ниже. |

### Привязки entities

Домены и полные значения по умолчанию приведены в YAML выше. Показания и команды привязываются отдельно: `power_control` должен быть `switch`, а `*_speed_control` — `select` с числовыми строками ступеней `0`–`10`.

| Ключи в `entities` | Назначение |
|---|---|
| `outdoor_temp`, `return_temp`, `supply_temp`, `exhaust_temp` | Температуры улицы, возврата, притока и вытяжки. |
| `supply_speed`, `exhaust_speed` | Фактические ступени приточного и вытяжного вентиляторов, целые 0–10. |
| `supply_speed_control`, `exhaust_speed_control` | Выбор ступени притока и вытяжки. |
| `power`, `power_control` | Фактическое состояние питания и переключатель управления. |
| `api_connected`, `online` | Связь HA с ESP32 и ESP32 с ПВУ по Modbus. |
| `fault`, `fault_details`, `status` | Признак ошибки, её описание и текстовый статус ПВУ. |
| `bypass`, `defrost`, `fire_alarm` | Открытый байпас, разморозка и пожарный вход. |
| `sensor_boost`, `external_boost` | Форсирование по датчику и внешнему входу. |
| `preheater`, `heater_target` | Состояние предподогрева и уставка нагревателя. `preheater` по умолчанию не привязан (`null`). |
| `filter_usage`, `filter_interval`, `fan_runtime` | Использование фильтра в процентах, настроенный интервал напоминания и наработка вентилятора. |
| `humidity_target` | Уставка влажности. |
| `uptime`, `wifi_signal`, `data_age`, `offline_count` | Время работы ESP32 в секундах, сигнал Wi-Fi, время с последних данных и число потерь связи; используются в подсказках. |

Если используются собственные обёртки управления, укажите их в `entities.power_control`, `entities.supply_speed_control`, `entities.exhaust_speed_control`. Отсутствующие дополнительные данные в подсказках пропускаются.

## Особенности отображения

- Отображение меняется при байпасе, недоступности или выключении установки, разморозке, предподогреве и форсировании. Скорость анимации вентиляторов зависит от их ступеней.
- Нажатие на температуру, индикатор или вентилятор открывает сведения о сущности и историю. В пульте цифры и шкала скорости открывают выбор ступени; в схеме потоков — нижние плашки. Изменение скорости доступно при включённой ПВУ и наличии связи; команды ожидают подтверждения до 20 секунд.
- Значок фильтра: менее 80 % — зелёный, от 80 до 100 % — оранжевый, от 100 % — красный. При отсутствии данных цвет не обозначает исправное состояние.
- Температурная палитра охватывает −30…+40 °C. За пределами диапазона ограничивается только цвет. При недоступной температуре на конце потока используются обычные цвета.
  ![Температурная палитра потоков](images/colormap.png)
