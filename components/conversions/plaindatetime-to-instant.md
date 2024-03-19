#### PlainDateTime -> Instant

```js
tzId = Temporal.Now.timeZoneId() // system time zone
tzId = 'America/Chicago' // OR a specific time zone

inst = pdt.toZonedDateTime(tzId).toInstant()
```
