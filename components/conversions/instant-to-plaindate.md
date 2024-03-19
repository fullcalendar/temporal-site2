#### Instant -> PlainDate

```js
tzId = Temporal.Now.timeZoneId() // system time zone
tzId = 'America/Chicago' // OR a specific time zone

// ISO calendar
pd = inst.toZonedDateTimeISO(tzId)
  .toPlainDate()

// specific calendar
pd = inst.toZonedDateTime({ timeZone: tzId, calendar: 'gregory' })
  .toPlainDate()
```
