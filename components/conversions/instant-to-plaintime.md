#### Instant -> PlainTime

```js
tzId = Temporal.Now.timeZoneId() // system time zone
tzId = 'America/Chicago' // OR a specific time zone

pt = inst.toZonedDateTimeISO(tzId).toPlainTime()
```
