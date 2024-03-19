#### Instant -> PlainDateTime

```js
tzId = Temporal.Now.timeZoneId() // system time zone
tzId = 'America/Chicago' // OR a specific time zone

// ISO calendar
pdt = inst
  .toZonedDateTimeISO(tzId)
  .toPlainDateTime()

// specific calendar
pdt = inst
  .toZonedDateTime({ timeZone: tzId, calendar: 'gregory' })
  .toPlainDateTime()
```
