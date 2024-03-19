#### Instant -> PlainYearMonth

```js
tzId = Temporal.Now.timeZoneId() // system time zone
tzId = 'America/Chicago' // OR a specific time zone

// ISO calendar
pym = inst.toZonedDateTimeISO(tzId)
  .toPlainYearMonth()

// specific calendar
pym = inst.toZonedDateTime({ timeZone: tzId, calendar: 'gregory' })
  .toPlainYearMonth()
```
