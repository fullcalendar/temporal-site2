#### Instant -> PlainMonthDay

```js
tzId = Temporal.Now.timeZoneId() // current time zone
tzId = 'America/Chicago' // OR specific time zone

// ISO calendar
pmd = inst.toZonedDateTimeISO(tzId)
  .toPlainMonthDay()

// OR specific calendar
pmd = inst.toZonedDateTime({ timeZone: tzId, calendar: 'gregory' })
  .toPlainMonthDay()
```
