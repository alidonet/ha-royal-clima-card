# Royal Clima ERV Card

[English](README.md)

Карточка для Home Assistant, предназначенная для отображения состояния и управления приточно-вытяжной установкой Royal Clima SOFFIO Primo с ESP32 и прошивкой ESPHome. Карточка находится в разработке и отображает пульт с температурами, индикаторами состояния, управлением питанием и выбором ступеней вентиляторов. Прошивка, подключение оборудования и примеры дашбордов доступны в основном репозитории [ESPHome-RoyalClima](https://github.com/alidonet/ESPHome-RoyalClima).

Примеры карточек из репозитория прошивки:

![Пульт управления Royal Clima](images/control_work.png)

![Схема воздушных потоков Royal Clima](images/flow_work.png)

## Настройка карточки

Все настройки карточки опциональны. В YAML нужен только идентификатор типа карточки Home Assistant:

```yaml
type: custom:royal-clima-card
```

Опции можно задавать независимо; исключение — прозрачность, для которой нужен компактный режим. Автоматически используются сущности с указанными ниже именами, если они существуют в HA.

| Опция | Тип / по умолчанию | Назначение |
|---|---|---|
| `prefix` | строка, `ventilation_system` | Префикс сущностей ПВУ. |
| `esp_prefix` | строка, `royal_clima` | Префикс диагностики ESP32 и напоминания о фильтре. |
| `entities` | словарь, `{}` | Переопределение отдельных entity_id по таблице ниже. |
| `entity` | строка или `null`, не задана | Совместимость с первой тестовой версией: заменяет только датчик притока. `entities.supply_temperature` имеет приоритет. |
| `name` | строка, `Royal Clima ERV` | Доступное имя карточки (aria-label), без видимого заголовка. Пустая строка возвращает имя по умолчанию. |
| `language` | строка, язык HA | Язык подписей, подсказок и диалогов карточки. Подробнее ниже. |
| `compact` | boolean, `false` | Убирает корпус и нижний ряд кнопок, оставляя экран и управление на нём. |
| `transparent` | boolean, `false` | Убирает фон экрана только при `compact: true`. |

### Язык и оформление

Без `language` карточка следует языку профиля HA: русский интерфейс (включая варианты `ru-*`) даёт русские подписи, любой другой — английские. `language: ru` принудительно включает русский, `language: en` — английский независимо от профиля. Любая другая явно заданная строка, включая `auto`, выбирает английский; для автоматического выбора удалите опцию. Язык сообщений прошивки и имена сущностей эта настройка не меняет.

В компактном режиме нажатие на блок скорости открывает выбор ступени вместо истории; питание переключается значком внизу экрана. В обычном режиме для этого используется нижний ряд кнопок.

`transparent: true` вместе с `compact: true` скрывает фон, обрамление и декоративные линии экрана: под содержимым виден фон дашборда. Показания и значки остаются непрозрачными; их цвета автоматически под тему не адаптируются. При `compact: false` опция `transparent` не действует. Используйте YAML-значения `true` / `false` без кавычек.

```yaml
type: custom:royal-clima-card
language: ru
compact: true
transparent: true
```

### Сущности

Все ключи внутри `entities` опциональны. Укажите полный `entity_id`, чтобы заменить автоматически сформированное имя, или `null`, чтобы отключить привязку. Незаданные ключи сохраняют значения по умолчанию. Переопределение имеет приоритет над префиксами и опцией `entity`; `null` не удаляет соответствующий элемент с панели.

Префиксы задаются без домена и конечного подчёркивания: например, `prefix: ventilation_system`. Пробелы по краям и конечные подчёркивания удаляются. Допустимы строчные латинские буквы, цифры и подчёркивания.

В таблице — полные имена при стандартных префиксах:

| Ключ в `entities` | По умолчанию | Назначение |
|---|---|---|
| `preheater` | `null` | Работа предподогрева; задайте сущность явно, если она есть. |
| `outdoor_temperature` | `sensor.ventilation_system_outdoor_air_temperature` | Температура наружного воздуха. |
| `return_temperature` | `sensor.ventilation_system_return_air_temperature` | Температура возвратного воздуха. |
| `defrost_temperature` | `sensor.ventilation_system_defrost_temperature` | Температура датчика разморозки, на панели подписана «ВЫТЯЖКА». |
| `supply_temperature` | `sensor.ventilation_system_supply_air_temperature` | Температура приточного воздуха (SA). |
| `exhaust_speed` | `sensor.ventilation_system_exhaust_fan_speed` | Ступень вытяжного вентилятора, 0–10. |
| `exhaust_speed_control` | `select.ventilation_system_exhaust_speed_control` | Select для выбора ступени вытяжки. |
| `supply_speed_control` | `select.ventilation_system_supply_speed_control` | Select для выбора ступени притока. |
| `supply_speed` | `sensor.ventilation_system_supply_fan_speed` | Ступень приточного вентилятора, 0–10. |
| `power` | `binary_sensor.ventilation_system_ventilation_power` | Фактическое состояние питания ПВУ. |
| `power_control` | `switch.ventilation_system_ventilation_control` | Switch для включения и выключения ПВУ. |
| `online` | `binary_sensor.ventilation_system_vent_system_online` | Связь с ПВУ по Modbus. |
| `esp_connection` | `binary_sensor.royal_clima_esp32_connection` | Связь с ESP32. |
| `error` | `binary_sensor.ventilation_system_ventilation_error` | Признак ошибки ПВУ. |
| `fire_alarm` | `binary_sensor.ventilation_system_fire_alarm` | Пожарный вход. |
| `bypass` | `binary_sensor.ventilation_system_bypass_open` | Байпас открыт. |
| `defrost` | `binary_sensor.ventilation_system_defrost_active` | Разморозка активна. |
| `external_boost` | `binary_sensor.ventilation_system_external_boost_active` | Внешнее форсирование активно. |
| `co2_boost` | `binary_sensor.ventilation_system_co2_boost_active` | Признак форсирования по CO₂, не измерение ppm. |
| `filter_replacement` | `binary_sensor.royal_clima_filter_replacement_recommended` | Напоминание о замене фильтра. |

Например, для существующих обёрток управления и собственного датчика предподогрева:

```yaml
type: custom:royal-clima-card
entities:
  power_control: switch.royal_clima_power
  supply_speed_control: select.royal_clima_supply_speed
  exhaust_speed_control: select.royal_clima_exhaust_speed
  preheater: binary_sensor.my_preheater_active
```

Сущности чтения и управления независимы: `power` / `power_control`, `supply_speed` / `supply_speed_control`, `exhaust_speed` / `exhaust_speed_control`. Для управления питанием нужен `switch`, ступенями — `select` с опциями `0`–`10` (недоступные опции не предлагаются). Скорости обозначают ступени, а не RPM или проценты. Предподогрев по умолчанию не привязан: значок скрыт, пока сущность не задана явно.
