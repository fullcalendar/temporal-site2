#### PlainTime -> ZonedDateTime

```js
zdt = pt.toZonedDateTime({
  timeZone: Temporal.Now.timeZoneId(), // system time zone
  plainDate: '2023-04-04',
})
// or
zdt = pt.toZonedDateTime({
  timeZone: 'America/Chicago',
  plainDate: '2023-04-04',
})
```

The plainDate option is anthing PlainDate accepts.
