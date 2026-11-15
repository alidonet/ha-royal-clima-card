# Royal Clima Card

Minimal Home Assistant dashboard card, version **0.0.1**. This first version tests installation, card discovery and reading a sensor. It does not control the ventilation unit.

No Python integration, packages, external SVG files or other custom cards are required.

## Установка / Installation

1. В HACS / Marketplace откройте меню → **Пользовательские репозитории / Custom repositories**.
2. Добавьте `https://github.com/alidonet/ha-royal-clima-card`, тип **Dashboard** (в некоторых версиях интерфейса — Lovelace).
3. Найдите **Royal Clima Card** и скачайте. Если предлагается версия/ветка, выберите `main`.
4. Проверьте ресурсы дашбордов. Если ресурс не добавился автоматически, добавьте:

   ```text
   /hacsfiles/ha-royal-clima-card/ha-royal-clima-card.js
   ```

   Тип: **JavaScript module**. Обновите страницу браузера.
5. На дашборде выберите **Добавить карточку → Royal Clima**. Для ручной карточки используйте:

   ```yaml
   type: custom:royal-clima-card
   entity: sensor.ventilation_system_supply_air_temperature
   ```

   При необходимости замените `entity` на свой sensor. Можно добавить `name: ПВУ`.

Карточка должна показать сообщение об успешной установке, версию `0.0.1` и текущее значение сущности. Если сенсора нет, появится «Сущность не найдена» — это не ошибка установки. При изменении состояния показание обновляется. Язык сообщения: русский для `ru` в профиле HA, английский для остальных языков.

## English quick start

Add this repository as a **Dashboard** custom repository in HACS / Marketplace and download **Royal Clima Card**. Select `main` if prompted. If needed, register the JavaScript module resource shown above, then reload your browser. Add **Royal Clima** from the card picker or use the YAML example, replacing `entity` with your sensor.

The card displays version `0.0.1` and live entity state. A missing entity does not prevent testing installation. Optional `name` overrides the heading. Entity IDs can be edited in YAML; no visual settings form is included.

## Updates

Update through HACS / Marketplace, then reload the dashboard. Your card configuration stays in HA. This test repository currently uses the default branch without a separate release.

Firmware remains in [ESPHome-RoyalClima](https://github.com/alidonet/ESPHome-RoyalClima).
