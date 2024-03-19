#### PlainTime -> Instant

```js
tzId = Temporal.Now.timeZoneId() // system time zone
tzId = 'America/Chicago' // OR specific time zone

pdStr = '2022-02-01' // ISO calendar
pdStr = '2022-02-01[u-ca=gregory]' // OR specific calendar

inst = pt.toZonedDateTime({ plainDate: pdStr, timeZone: tzId })
  .toInstant()
```
