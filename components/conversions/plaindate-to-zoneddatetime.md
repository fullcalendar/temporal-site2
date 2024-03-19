#### PlainDate -> ZonedDateTime

```js
zdt = pd.toZonedDateTime({
  timeZone: Temporal.Now.timeZoneId(), // system time zone
})
// or
zdt = pd.toZonedDateTime({
  timeZone: 'America/Chicago',
  plainTime: '04:00' // optional. defaults to 00:00
})
```

The plainTime option is anything a PlainTime accepts.
