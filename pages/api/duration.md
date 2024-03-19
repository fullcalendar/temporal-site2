---
outline: [2, 3]
outlineTitle: Duration
---

# Duration

## Create and Parse

### Constructor

```js
dur = new Temporal.Duration(
  1, // years (optional)
  3, // months (optional)
  4, // weeks (optional)
  5, // days (optional)
  6, // hours (optional)
  2, // minutes (optional)
  3, // seconds (optional)
  3, // milliseconds (optional)
  4, // microseconds (optional)
  3, // nanoseconds (optional)
)
```

Please consider `.from` instead.

### From Fields

```js
dur = Temporal.Duration.from({
  years: 1, // optional
  months: 3, // optional
  weeks: 4, // optional
  days: 5, // optional
  hours: 6, // optional
  minutes: 2, // optional
  seconds: 3, // optional
  milliseconds: 3, // optional
  microseconds: 4, // optional
  nanoseconds: 3, // optional
})
```

### From String

```js
dur = Temporal.Duration.from(
  'P12Y1DT4H2.5S'
)
```

Please consult format docs.

## Get and Set

Talk about with.

### Years

```js
// get
dur.years // 4

// set
dur.with({ years: 5 })
```

### Months

```js
// get
dur.months // 4

// set
dur.with({ months: 5 })
```

### Weeks

```js
// get
dur.weeks // 4

// set
dur.with({ weeks: 5 })
```

### Days

```js
// get
dur.days // 4

// set
dur.with({ days: 5 })
```

### Time

Different parts

#### `.hours`

```js
// get
dur.hours // 4

// set
dur.with({ hours: 5 })
```

#### `.minutes`

```js
// get
dur.minutes // 4

// set
dur.with({ minutes: 5 })
```

#### `.seconds`

```js
// get
dur.seconds // 4

// set
dur.with({ seconds: 5 })
```

#### `.milliseconds`

```js
// get
dur.milliseconds // 4

// set
dur.with({ milliseconds: 5 })
```

#### `.microseconds`

```js
// get
dur.microseconds // 4

// set
dur.with({ microseconds: 5 })
```

#### `.nanoseconds`

```js
// get
dur.nanoseconds // 4

// set
dur.with({ nanoseconds: 5 })
```

### Sign

```js
durPos = Temporal.Duration.from({ year: 1, days: 1 })
durNeg = Temporal.Duration.from({ year: -1, days: -1 })
durBlank = Temporal.Duration.from({ days: 0 })

// get
durPos.sign // 1
durNeg.sign // -1
durBlank.sign // 0
```

You can't set

### Blank

```js
durPos = Temporal.Duration.from({ year: 1, days: 1 })
durNeg = Temporal.Duration.from({ year: -1, days: -1 })
durBlank = Temporal.Duration.from({ days: 0 })

// get
durPos.blank // false
durNeg.blank // false
durBlank.blank // true
```

You can't set.

## Math

These are methods

### Negated

```js
durPos = Temporal.Duration.from({ year: 1, days: 1 })

durNeg = dur.negated()
// { year: -1, days: -1, weeks: 0, days: 0, etc... }
```

### Absolute

```js
durPos = Temporal.Duration.from({ year: 1, days: 1 })
durNeg = Temporal.Duration.from({ year: -1, days: -1 })

durAbs = durPos.abs()
// { year: 1, days: 1, ...etc... }

durAbs = durNeg.abs()
// { year: 1, days: 1, ...etc... }
```

### Add or Subtract

Things:

#### `.add()`
#### `.subtract()`

It depends on what units you're doing.

#### Days and Times

The simplest case:

```js
dur1 = Temporal.Duration.from({ days: 1, hours: 2 })
dur2 = Temporal.Duration.from({ days: 1, hours: 2 })

durSum = dur1.add(dur2)
// { ...etc... }

durDiff = dur2.subtract(dur2)
// { ...etc... }
```

#### Days and Times (considering DST gaps)

You can optionally supply the `relativeTo` with a ZonedDateTime if you'd like to consider DST gaps. Or anything that could resolve to such objects.

```js
dur1 = Temporal.Duration.from({ days: 1, hours: 2 })
dur2 = Temporal.Duration.from({ days: 1, hours: 2 })
zdt = Temporal.ZonedDateTime.from(
  '2024-03-06T11:29:06.340442931-05:00[America/New_York]'
)

durSum = dur1.add(dur2, {
  relativeTo: zdt
})
// { ...etc... }

durDiff = dur2.subtract(dur2, {
  relativeTo: zdt
})
// { ...etc... }
```

#### Years, Months, and Weeks

If EITHER of the durations have these units, need `relativeTo`. It must be given a PlainDate, PlainDateTime, or ZonedDateTime (if DST shifts are to be considered). Or anything that could resolve to such objects.

```js
dur1 = Temporal.Duration.from({ years: 1, months: 2 })
dur2 = Temporal.Duration.from({ years: 1, months: 2, weeks: 1 })
pd = Temporal.PlainDate.from('2023-04-01')

durSum = dur1.add(dur2, {
  relativeTo: pd // required!
})
// { ...etc... }

durDiff = dur2.subtract(dur2, {
  relativeTo: pd // required!
})
// { ...etc... }
```

### Round

It depends on what units you're using.

#### Days and Times

This is the easy case.

```js
dur = Temporal.Duration.from({ days: 1, hours: 2 })

durRounded = dur.round({
  largestUnit: 'day',
  smallestUnit: 'hour',
  roundingIncrement: 1,
  roundingMode: 'halfExpand'
})
// { ...etc... }
```

#### Days and Times (considering DST gaps)

You can optionally supply the `relativeTo` with a ZonedDateTime if you'd like to consider DST gaps. Or anything that could resolve to such objects.

```js
dur = Temporal.Duration.from({ days: 1, hours: 2 })
zdt = Temporal.ZonedDateTime.from(
  '2024-03-06T11:29:06.340442931-05:00[America/New_York]'
)

durRounded = dur.round({
  relativeTo: zdt,
  largestUnit: 'day',
  smallestUnit: 'hour',
  roundingIncrement: 1,
  roundingMode: 'halfExpand'
})
// { ...etc... }
```

#### Years, Months, and Weeks

It must be given a PlainDate, PlainDateTime, or ZonedDateTime (if DST shifts are to be considered). Or anything that could resolve to such objects.

```js
dur = Temporal.Duration.from({ days: 1, hours: 2 })
pd = Temporal.PlainDate.from('2023-04-01')

durRounded = dur.round({
  relativeTo: pd, // required!
  largestUnit: 'year',
  smallestUnit: 'hour',
  roundingIncrement: 1,
  roundingMode: 'halfExpand',
})
// { ...etc... }
```

### Total

It depends on what units you're using. Returns a SINGLE number.

#### Days and Times

This is the easy case.

```js
dur = Temporal.Duration.from({ days: 10, hours: 48 })

days = dur.total('days') // 12
hours = dur.total('hours')
minutes = dur.total('minutes')
seconds = dur.total('seconds')
ms = dur.total('milliseconds')
μs = dur.total('microseconds')
ns = dur.total('nanoseconds')
```

#### Days and Times (considering DST gaps)

You can optionally supply the `relativeTo` with a ZonedDateTime if you'd like to consider DST gaps. Or anything that could resolve to such objects.

```js
dur = Temporal.Duration.from({ days: 10, hours: 48 })
zdt = Temporal.ZonedDateTime.from(
  '2024-03-06T11:29:06.340442931-05:00[America/New_York]'
)

days = dur.round({ // 12
  unit: 'days',
  relativeTo: zdt,
})
hours = dur.round({ // 12
  unit: 'hours',
  relativeTo: zdt,
})
minutes = dur.round({ // 12
  unit: 'minutes',
  relativeTo: zdt,
})
seconds = dur.round({ // 12
  unit: 'seconds',
  relativeTo: zdt,
})
ms = dur.round({ // 12
  unit: 'milliseconds',
  relativeTo: zdt,
})
μs = dur.round({ // 12
  unit: 'microseconds',
  relativeTo: zdt,
})
ns = dur.round({ // 12
  unit: 'nanoseconds',
  relativeTo: zdt,
})
```

#### Years, Months, and Weeks

It must be given a PlainDate, PlainDateTime, or ZonedDateTime (if DST shifts are to be considered). Or anything that could resolve to such objects.

```js
dur = Temporal.Duration.from({ years: 1, months: 2 })
pd = Temporal.PlainDate.from('2023-04-01')

years = dur.total({
  unit: 'years',
  relativeTo: pd, // required!
})
months = dur.total({
  unit: 'months',
  relativeTo: pd, // required!
})
weeks = dur.total({
  unit: 'weeks',
  relativeTo: pd, // required!
})
```

## Stringify

### ISO String

Outputs in a weird format.

```js
dur.toString() // 'P1D'
```

For options, consult the spec.

### Localized String

Outputs in a specific locale. Sort kinda works.

```js
dur.toLocaleString() // '1 y, 2 mo'

dur.toLocaleString('fr') // 'asdfasdfasf'

dur.toLocaleString('fr', {
  style: 'long',
})
```

For options, consult MDN.
