#### PlainYearMonth -> Instant

```js
tzId = Temporal.Now.timeZoneId() // system time zone
tzId = 'America/Chicago' // OR a specific time zone

pym.toPlainDate({ day: 13 }).toZonedDateTime({
  timeZone: tzId,
  plainTime: '04:00' // optional, defaults to 00:00
}).toInstant()
```
