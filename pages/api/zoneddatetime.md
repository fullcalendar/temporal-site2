---
outline: [2, 3]
outlineTitle: ZonedDateTime
---

<script setup>
  import ZonedDateTimeToInstant from '../../components/conversions/zoneddatetime-to-instant.md'
  import InstantToZonedDateTime from '../../components/conversions/instant-to-zoneddatetime.md'
  import ZonedDateTimeToPlainDateTime from '../../components/conversions/zoneddatetime-to-plaindatetime.md'
  import PlainDateTimeToZonedDateTime from '../../components/conversions/plaindatetime-to-zoneddatetime.md'
  import ZonedDateTimeToPlainDate from '../../components/conversions/zoneddatetime-to-plaindate.md'
  import PlainDateToZonedDateTime from '../../components/conversions/plaindate-to-zoneddatetime.md'
  import ZonedDateTimeToPlainTime from '../../components/conversions/zoneddatetime-to-plaintime.md'
  import PlainTimeToZonedDateTime from '../../components/conversions/plaintime-to-zoneddatetime.md'
  import ZonedDateTimeToPlainYearMonth from '../../components/conversions/zoneddatetime-to-plainyearmonth.md'
  import PlainYearMonthToZonedDateTime from '../../components/conversions/plainyearmonth-to-zoneddatetime.md'
  import ZonedDateTimeToPlainMonthDay from '../../components/conversions/zoneddatetime-to-plainmonthday.md'
  import PlainMonthDayToZonedDateTime from '../../components/conversions/plainmonthday-to-zoneddatetime.md'
</script>

# ZonedDateTime

This is a date with an epochTime and also a TimeZone. All ymd fields can be derived.

## Create and Parse

### Constructor

```js
zdt = new Temporal.ZonedDateTime(
  1709742442931429932n,
  'America/Chicago',
  'iso8601', // calendar system. optional
)
```

### From Fields

```js
zdt = Temporal.ZonedDateTime.from({
  // all are optional! (really?)
  // fields
  // day (day-of-month)
  // timeZone
  // calendar
})
```

Can pass-in options.

### From String

```js
zdt = Temporal.ZonedDateTime.from(
  '2024-03-06T11:29:06.340442931-05:00[America/New_York]'
)
```

Can have `[u-ca=hebrew]` calendar at end of string.

Can pass-in options.

### Now

Multiple methods:

#### `Temporal.Now.zonedDateTimeISO()`
#### `Temporal.Now.zonedDateTime()`

```js
zdt = Temporal.Now.zonedDateTimeISO('America/Chicago')
// or
zdt = Temporal.Now.zonedDateTime({
  timeZone: 'America/Chicago',
  calendar: 'gregory'
})
```

## Get and Set

Common setter method.. new instance (immutable)..

#### `.with()`

You can combine multiple!

Here we go...

### Year

Either use the simple `year` number or the `era` + `eraYear` (for supported calendars only).

#### `.year`

```js
// get
zdt.year // 2024

// set
zdt2 = zdt.with({ year: 2025 })
```

#### `.era` and `.eraYear`

```js
zdt = Temporal.Now.zonedDateTime({
  timeZone: 'America/Chicago',
  calendar: 'gregory'
})

// get
zdt.era // 'bce'
zdt.eraYear // 2024

// set
zdt2 = zdt.with({
  era: 'bc',
  eraYear: 2,
})
```

#### `.inLeapYear`

```js
zdt.inLeapYear // false
```

Can't set.

### Month

Is 1-based!

Either use the simple `month` number or the more portable `monthCode`.

#### `.month`

```js
// get
zdt.month // 3

// set
zdt2 = zdt.with({ month: 4 })
```

#### `.monthCode`

```js
// get
zdt.monthCode // 'M03'

// set
zdt2 = zdt.with({ monthCode: 'M04' })
```

#### `.monthsInYear`

Certain calendar systems might have different months in year:

```js
zdt = Temporal.Now.zonedDateTime({
  timeZone: 'America/Chicago',
  calendar: 'hebrew'
})

// get
zdt.monthsInYear // 12
```

### Day of Month

Is 1-based!

The day-of-month, often simply called the date, is the `day` property in Temporal:

#### `.day`

```js
// get
zdt.day // 6 (for March 6th)

// set
zdt.with({ day: 19 })
```

### Time

The wall-clock time has multiple properties:

#### `.hour`

```js
// get
zdt.hour // 9

// set
zdt2 = zdt.with({ hour: 9 })
```

#### `.minute`

```js
// get
zdt.minute // 9

// set
zdt2 = zdt.with({ minute: 9 })
```

#### `.second`

```js
// get
zdt.second // 9

// set
zdt2 = zdt.with({ second: 9 })
```

#### `.millisecond`

```js
// get
zdt.millisecond // 9

// set
zdt2 = zdt.with({ millisecond: 9 })
```

#### `.microsecond`

```js
// get
zdt.microsecond // 9

// set
zdt2 = zdt.with({ microsecond: 9 })
```

#### `.nanosecond`

```js
// get
zdt.nanosecond // 9

// set
zdt2 = zdt.with({ nanosecond: 9 })
```

### Epoch Time

Time since epoch in various units

#### `.epochSeconds`

```js
// get
zdt.epochSeconds // 123

// create-from
zdt2 = Temporal.Instant.fromEpochSeconds(23424)
  .toZonedDateTime(zdt.getISOFields()) // timeZone/calendar
```

#### `.epochMilliseconds`

```js
// get
zdt.epochMilliseconds // 123

// create-from
zdt2 = Temporal.Instant.fromEpochMilliseconds(23424)
  .toZonedDateTime(zdt.getISOFields()) // timeZone/calendar
```

#### `.epochMicroseconds`

```js
// get
zdt.epochMicroseconds // 123n - a bigint!

// create-from
zdt2 = Temporal.Instant.fromEpochMicroseconds(23424)
  .toZonedDateTime(zdt.getISOFields()) // timeZone/calendar
```

#### `.epochNanoseconds`

```js
// get
zdt.epochNanoseconds // 123n - a bigint!

// create-from
zdt2 = new Temporal.ZonedDateTime(
  23424n,
  zdt.timeZone,
  zdt.calendar,
)
```

### TimeZone Offset

Can be expressed:

#### `.offsetNanoseconds`
#### `.offset`

```js
// get
zdt.offsetNanoseconds // a number
zdt.offset // a string
```

You cannot set the offset. You must change the timezone...

### TimeZone

Methods:

#### `.timeZoneId`
#### `.getTimeZone()`
#### `.withTimeZone()`

```js
// get
timeZoneId = zdt.timeZoneId // 'America/Whatever'
timeZoneObj = zdt.getTimeZone() // Temporal.TimeZone {}

// set
zdt2 = zdt.withTimeZone('America/New_York')
```

Read more about TimeZone objects.

### Calendar

Methods:

#### `.calendarId`
#### `.getCalendar()`
#### `.withCalendar()`

```js
// get
calendarId = zdt.calendarId // 'iso8601'
calendarObj = zdt.getCalendar() // Temporal.Calendar {}

// set
zdt2 = zdt.withCalendar('gregory')
```

Read more about Calendar objects.

### Week

Two concepts.

#### `.weekOfYear`
#### `.yearOfWeek`

Only works for supported calendars!

```js
// get
zdt.weekOfYear // 89
zdt.yearOfWeek // 2024

// set weekOfYear
zdt1 = zdt.add({ weeks: 8 - zdt.weekOfYear })
```

```js
import { withWeekOfYear } from 'temporal-utils'

zdt1 = withWeekOfYear(zdt, 8)
```

### Day of Week

Explain 1 means Monday...
This is REGARDLESS of locale. Always ISO

#### `.dayOfWeek`

```js
// get
zdt.dayOfWeek // 4 (Thursday)

// set
zdt2 = zdt.add({ days: 6 - zdt.dayOfWeek })
```

```js
import { withDayOfWeek } from 'temporal-utils'

zdt2 = withDayOfWeek(zdt, 6)
```

### Day of Year

Is 1-based!!!

#### `.dayOfYear`

```js
// get
zdt.dayOfYear // 89

// set
zdt2 = zdt.add({ days: 48 - zdt.dayOfYear })
```

```js
import { withDayOfYear } from 'temporal-utils'

zdt2 = withDayOfYear(zdt, 48)
```

### Days in Unit

Simple

#### `.daysInYear`
#### `.daysInMonth`
#### `.daysInWeek`

```js
zdt.daysInYear // 366
zdt.daysInMonth // 23
zdt.daysInWeek // 7
```

### Hours in Day

Might be 23 or 25 if DST

```js
zdt.hoursInDay // 24
```

### ISO Fields

```js
// get
isoFields = zdt.getISOFields()
// {
//   isoYear: 234,
//   isoMonth: 234,
//   isoDay: 234,
//   isoHour: 234,
//   isoMinute: 123,
//   isoSecond: 123,
//   isoMillisecond: 123,
//   isoMicrosecond: 234,
//   isoNanosecond: 123
//   calendar: 'gregory',
//   timeZone: 'America/Chicago',
// }

// create-from
zdt2 = new Temporal.PlainDateTime(
  isoFields.isoYear,
  isoFields.isoMonth,
  isoFields.isoDay,
  isoFields.isoHour,
  isoFields.isoMinute,
  isoFields.isoSecond,
  isoFields.isoMillisecond,
  isoFields.isoMicrosecond,
  isoFields.isoNanosecond,
  isoFields.calendar,
).toZonedDateTime(isoFields.timeZone)
```

## Math

### Add and Subtract

Give a Duration or Duration-like fields:

#### `.add()`

```js
zdt = Temporal.ZonedDateTime.from('2024-03-06T12:30[America/New_York]')

zdt2 = zdt.add({
  year: 1,
  months: 2,
})
// '2024-03-06T13:03:21.596195335-05:00[America/New_York]'
```

#### `.subtract()`

```js
zdt = Temporal.ZonedDateTime.from('2024-03-06T12:30[America/New_York]')

zdt2 = zdt.subtract({
  year: 1,
  months: 2,
})
// '2024-03-06T13:03:21.596195335-05:00[America/New_York]'
```

There are options about overflow!

### Round

For settings like roundingIncrement and roundingMode.

roundingMode:

- 'halfExpand' - like Math.round() - the default
- 'trunc' - like Math.trunc()
- 'floor' - like Math.floor()
- 'ceil' - like Math.ceil()

Only allows rounding to day/time! Not larger units like years/months/week!

Day:

```js
zdt2 = zdt.round('day')
// or
zdt2 = zdt.round({
  smallestUnit: 'day',
  roundingMode: 'halfExpand' // or trunc/floor/ceil/etc
  roundingIncrement: 1,
})
```

Time:

```js
zdt2 = zdt.round('hour') // or minute/second/millisecond/microsecond
// or
zdt2 = zdt.round({
  smallestUnit: 'hour', // or minute/second/millisecond/microsecond
  roundingMode: 'halfExpand' // or trunc/floor/ceil/etc
  roundingIncrement: 1,
})
```

Year:

```js
import { roundToYear } from 'temporal-utils'

zdt2 = roundToYear(zdt)
// or
zdt2 = roundToYear(zdt, {
  roundingMode: 'halfExpand' // or trunc/floor/ceil/etc
  roundingIncrement: 1,
})
```

Month:

```js
import { roundToMonth } from 'temporal-utils'

zdt2 = roundToMonth(zdt)
// or
zdt2 = roundToMonth(zdt, {
  roundingMode: 'halfExpand' // or trunc/floor/ceil/etc
  roundingIncrement: 1,
})
```

Week:

```js
import { roundToWeek } from 'temporal-utils'

zdt2 = roundToWeek(zdt)
// or
zdt2 = roundToWeek(zdt, {
  roundingMode: 'halfExpand' // or trunc/floor/ceil/etc
  roundingIncrement: 1,
})
```

### Start of Unit

Start of year (might not be midnight):

```js
zdt2 = zdt.with({ month: 1, day: 1 })
  .startOfDay()
```

```js
import { startOfYear } from 'temporal-utils'

zdt2 = startOfYear(zdt)
```

Start of month (might not be midnight):

```js
zdt2 = zdt.with({ day: 1 })
  .startOfDay()
```

```js
import { startOfMonth } from 'temporal-utils'

zdt2 = startOfMonth(zdt)
```

Start of week:

```js
zdt2 = zdt.add({ days: 1 - zdt.dayOfWeek })
  .startOfDay()
```

```js
import { startOfWeek } from 'temporal-utils'

zdt2 = startOfWeek(zdt)
```

Start of day (might not be midnight):

```js
zdt2 = zdt.startOfDay()
```

Start of hour:

```js
zdt2 = zdt.round({
  smallestUnit: 'hour',
  roundingMode: 'floor',
})
```

```js
import { startOfHour } from 'temporal-utils'

zdt2 = startOfHour(zdt)
```

Start of minute:

```js
zdt2 = zdt.round({
  smallestUnit: 'minute',
  roundingMode: 'floor',
})
```

```js
import { startOfMinute } from 'temporal-utils'

zdt2 = startOfMinute(zdt)
```

Start of second:

```js
zdt2 = zdt.round({
  smallestUnit: 'second',
  roundingMode: 'floor',
})
```

```js
import { startOfSecond } from 'temporal-utils'

zdt2 = startOfSecond(zdt)
```

Start of millisecond:

```js
zdt2 = zdt.round({
  smallestUnit: 'millisecond',
  roundingMode: 'floor',
})
```

```js
import { startOfMillisecond } from 'temporal-utils'

zdt2 = startOfMillisecond(zdt)
```

Start of microsecond:

```js
zdt2 = zdt.round({
  smallestUnit: 'microsecond',
  roundingMode: 'floor',
})
```

```js
import { startOfMicrosecond } from 'temporal-utils'

zdt2 = startOfMicrosecond(zdt)
```

### End of Unit

Explain inclusive vs exclusive.

End of year (might not be midnight):

```js
zdt2 = zdt.with({ month: 1, day: 1 })
  .add({ years: 1 })
  .startOfDay() // sufficient for exclusive end
  .subtract({ nanoseconds: 1 }) // inclusive end
```

```js
import { endOfYearExcl, endOfYearIncl } from 'temporal-utils'

zdt2 = endOfYearExcl(zdt)
zdt2 = endOfYearIncl(zdt)
```

End of month (might not be midnight):

```js
zdt2 = zdt.with({ day: 1 })
  .add({ months: 1 })
  .startOfDay() // sufficient for exclusive end
  .subtract({ nanoseconds: 1 }) // inclusive end
```

```js
import { endOfMonthExcl, endOfMonthIncl } from 'temporal-utils'

zdt2 = endOfMonthExcl(zdt)
zdt2 = endOfMonthIncl(zdt)
```

End of day (might not be midnight):

```js
zdt2 = zdt.add({ days: 1 })
  .startOfDay() // sufficient for exclusive end
  .subtract({ nanoseconds: 1 }) // inclusive end
```

```js
import { endOfDayExcl, endOfDayIncl } from 'temporal-utils'

zdt2 = endOfDayExcl(zdt)
zdt2 = endOfDayIncl(zdt)
```

End of hour:

```js
zdt2 = zdt.round({ // sufficient for exclusive end
  smallestUnit: 'hour',
  roundingMode: 'ceil',
}).subtract({ nanoseconds: 1 }) // inclusive end
```

```js
import { endOfHourExcl, endOfHourIncl } from 'temporal-utils'

zdt2 = endOfHourExcl(zdt)
zdt2 = endOfHourIncl(zdt)
```

End of minute:

```js
zdt2 = zdt.round({ // sufficient for exclusive end
  smallestUnit: 'minute',
  roundingMode: 'ceil',
}).subtract({ nanoseconds: 1 }) // inclusive end
```

```js
import { endOfMinuteExcl, endOfMinuteIncl } from 'temporal-utils'

zdt2 = endOfMinuteExcl(zdt)
zdt2 = endOfMinuteIncl(zdt)
```

End of second:

```js
zdt2 = zdt.round({ // sufficient for exclusive end
  smallestUnit: 'second',
  roundingMode: 'ceil',
}).subtract({ nanoseconds: 1 }) // inclusive end
```

```js
import { endOfSecondExcl, endOfSecondIncl } from 'temporal-utils'

zdt2 = endOfSecondExcl(zdt)
zdt2 = endOfSecondIncl(zdt)
```

End of millisecond:

```js
zdt2 = zdt.round({ // sufficient for exclusive end
  smallestUnit: 'millisecond',
  roundingMode: 'ceil',
}).subtract({ nanoseconds: 1 }) // inclusive end
```

```js
import { endOfMillisecondExcl, endOfMillisecondIncl } from 'temporal-utils'

zdt2 = endOfMillisecondExcl(zdt)
zdt2 = endOfMillisecondIncl(zdt)
```

End of microsecond:

```js
zdt2 = zdt.round({ // sufficient for exclusive end
  smallestUnit: 'microsecond',
  roundingMode: 'ceil',
}).subtract({ nanoseconds: 1 }) // inclusive end
```

```js
import { endOfMicrosecondExcl, endOfMicrosecondIncl } from 'temporal-utils'

zdt2 = endOfMicrosecondExcl(zdt)
zdt2 = endOfMicrosecondIncl(zdt)
```

### Difference

You can use `.since` instead! but best to be consistent with `.until`!

roundingMode:

- 'halfExpand' - like Math.round() - the default
- 'trunc' - like Math.trunc()
- 'floor' - like Math.floor()
- 'ceil' - like Math.ceil()

With all units. A Duration object.

```js
zdt1 = Temporal.ZonedDateTime.from('2024-03-06T12:30[America/New_York]')
zdt2 = Temporal.ZonedDateTime.from('2024-03-06T12:30[America/New_York]')

dur = zdt1.until(zdt2, {
  largestUnit: 'year',
  smallestUnit: 'day',
  roundingMode: 'halfExpand', // or trunc/floor/ceil/etc
})
// Temporal.Duration {
//   years: 1,
//   months: 3,
//   days: 2,
//   hours: 0,
//   minutes: 0,
//   ...
// }
```

With years:

```js
yearsRounded = zdt1.until(zdt2, {
  largestUnit: 'year',
  smallestUnit: 'year',
  roundingMode: 'halfExpand', // or trunc/floor/ceil/etc
}).years // 6

yearsExact = zdt1.until(zdt2, {
  largestUnit: 'year',
}).total({
  unit: 'year',
  relativeTo: zdt1,
}) // 6.5
```

```js
import { diffYears } from 'temporal-utils'

yearsRounded = diffYears(zdt1, zdt2, 'halfExpand')
yearsExact = diffYears(zdt1, zdt2)
```

With months:

```js
monthsRounded = zdt1.until(zdt2, {
  largestUnit: 'month',
  smallestUnit: 'month',
  roundingMode: 'halfExpand', // or trunc/floor/ceil/etc
}).months // 6

monthsExact = zdt1.until(zdt2, {
  largestUnit: 'month',
}).total({
  unit: 'month',
  relativeTo: zdt1,
}) // 6.5
```

```js
import { diffMonths } from 'temporal-utils'

monthsRounded = diffMonths(zdt1, zdt2, 'halfExpand')
monthsExact = diffMonths(zdt1, zdt2)
```

With weeks:

```js
weeksRounded = zdt1.until(zdt2, {
  largestUnit: 'week',
  smallestUnit: 'week',
  roundingMode: 'halfExpand', // or trunc/floor/ceil/etc
}).weeks // 6

weeksExact = zdt1.until(zdt2, {
  largestUnit: 'week',
}).total({
  unit: 'week',
  relativeTo: zdt1,
}) // 6.5
```

```js
import { diffWeeks } from 'temporal-utils'

weeksRounded = diffWeeks(zdt1, zdt2, 'halfExpand')
weeksExact = diffWeeks(zdt1, zdt2)
```

#### With days:

```js
daysRounded = zdt1.until(zdt2, {
  largestUnit: 'day',
  smallestUnit: 'day',
  roundingMode: 'halfExpand', // or trunc/floor/ceil/etc
}).days // 6

daysExact = zdt1.until(zdt2, {
  largestUnit: 'day',
}).total({
  unit: 'day',
  relativeTo: zdt1,
}) // 6.5
```

```js
import { diffDays } from 'temporal-utils'

daysRounded = diffDays(zdt1, zdt2, 'halfExpand')
daysExact = diffDays(zdt1, zdt2)
```

With hours:

```js
hoursRounded = zdt1.until(zdt2, {
  largestUnit: 'hour',
  smallestUnit: 'hour',
  roundingMode: 'halfExpand', // or trunc/floor/ceil/etc
}).hours // 6

hoursExact = zdt1.until(zdt2, {
  largestUnit: 'hour',
}).total('hour') // 6.5
```

```js
import { diffHours } from 'temporal-utils'

hoursRounded = diffHours(zdt1, zdt2, 'halfExpand')
hoursExact = diffHours(zdt1, zdt2)
```

With minutes:

```js
minutesRounded = zdt1.until(zdt2, {
  largestUnit: 'hour',
  smallestUnit: 'hour',
  roundingMode: 'halfExpand', // or trunc/floor/ceil/etc
}).hours // 6

minutesExact = zdt1.until(zdt2, {
  largestUnit: 'hour',
}).total('hour') // 6.5
```

```js
import { diffMinutes } from 'temporal-utils'

minutesRounded = diffMinutes(zdt1, zdt2, 'halfExpand')
minutesExact = diffMinutes(zdt1, zdt2)
```

With seconds:

```js
secondsRounded = zdt1.until(zdt2, {
  largestUnit: 'second',
  smallestUnit: 'second',
  roundingMode: 'halfExpand', // or trunc/floor/ceil/etc
}).seconds // 6

secondsExact = zdt1.until(zdt2, {
  largestUnit: 'second',
}).total('second') // 6.5
```

```js
import { diffSeconds } from 'temporal-utils'

secondsRounded = diffSeconds(zdt1, zdt2, 'halfExpand')
secondsExact = diffSeconds(zdt1, zdt2)
```

With milliseconds:

```js
msRounded = zdt1.until(zdt2, {
  largestUnit: 'millisecond',
  smallestUnit: 'millisecond',
  roundingMode: 'halfExpand', // or trunc/floor/ceil/etc
}).milliseconds // 6

msExact = zdt1.until(zdt2, {
  largestUnit: 'millisecond',
}).total('millisecond') // 6.5
```

```js
import { diffMilliseconds } from 'temporal-utils'

msRounded = diffMilliseconds(zdt1, zdt2, 'halfExpand')
msExact = diffMilliseconds(zdt1, zdt2)
```

With microseconds:

```js
μsRounded = zdt1.until(zdt2, {
  largestUnit: 'microsecond',
  smallestUnit: 'microsecond',
  roundingMode: 'halfExpand', // or trunc/floor/ceil/etc
}).microseconds // 6

μsExact = zdt1.until(zdt2, {
  largestUnit: 'microsecond',
}).total('microsecond') // 6.5
```

```js
import { diffMicroseconds } from 'temporal-utils'

μsRounded = diffMicroseconds(zdt1, zdt2, 'halfExpand')
μsExact = diffMicroseconds(zdt1, zdt2)
```

With nanoseconds:

```js
nsRounded = zdt1.until(zdt2, {
  largestUnit: 'nanosecond',
  smallestUnit: 'nanosecond',
  roundingMode: 'halfExpand', // or trunc/floor/ceil/etc
  roundingIncrement: 10,
}).nanoseconds

nsUnrounded = zdt2.epochNanoseconds - zdt1.epochNanoseconds
```

```js
import { diffNanoseconds } from 'temporal-utils'

nsRounded = diffNanoseconds(zdt1, zdt2, 'halfExpand')
nsUnrounded = diffNanoseconds(zdt1, zdt2)
```

### Compare and Sort

```js
zdt1 = Temporal.ZonedDateTime.from('2024-03-06T12:30[America/New_York]')
zdt2 = Temporal.ZonedDateTime.from('2024-03-06T12:30[America/New_York]')

Temporal.ZonedDateTime.compare(zdt1, zdt2)
// -1 because zdt1 < zdt2

Temporal.ZonedDateTime.compare(zdt1, zdt2)
// 1 because zdt1 > zdt2

Temporal.ZonedDateTime.compare(zdt1, zdt1)
// 0 because zdt1 = zdtPast
```

https://tc39.es/proposal-temporal/docs/cookbook.html

### Equality

epochNanoseconds, timeZone, and calendar must be identical.

```js
zdt1 = Temporal.ZonedDateTime.from('2024-03-06T12:30[America/New_York]')
zdt2 = Temporal.ZonedDateTime.from('2024-03-06T12:30[America/New_York]')

zdt1.equals(zdt2) // false
zdt1.equals(zdt1) // true (of course it's equal to self)
```

## Stringify

### ISO String

```js
zdt.toString() // '2024-03-06T12:30[America/New_York]'
```

For options, consult the spec.

### Localized String

For options, consult Intl.DateTimeFormat options. The timeZone options is prohibited!

It's possible to call directly on the object:

```js
// current locale
zdt.toLocaleString() // '3/6/2024, 3:58:45 PM EST'

// specific locale
zdt.toLocaleString('fr') // '06/03/2024 15:59:31 UTC−5'

// specific locale + options
zdt.toLocaleString('fr', { // 'mercredi 6 mars 2024'
  dateStyle: 'full',
})
```

However, it's much more performant to reuse a format:

```js
dtf = new Intl.DateTimeFormat('fr', {
  dateStyle: 'full'
})

dtf.format(zdt) // 'mercredi 6 mars 2024'
```

## Convert

### Legacy Date

ZonedDateTime -> Date

```js
legacyDate = new Date(zdt.epochMilliseconds)
```

Date -> ZonedDateTime

```js
zdt = legacyDate.toTemporalInstant().toZonedDateTimeISO(
  Temporal.Now.timeZoneId(), // system time zone
)
// or
zdt = legacyDate.toTemporalInstant().toZonedDateTimeISO(
  'America/Chicago',
)
// or
zdt = legacyDate.toTemporalInstant().toZonedDateTime({
  timeZone: 'America/Chicago',
  calendar: 'gregory',
})
```

### Instant

<ZonedDateTimeToInstant />

<InstantToZonedDateTime />

### PlainDateTime

<ZonedDateTimeToPlainDateTime />

<PlainDateTimeToZonedDateTime />

### PlainDate

<ZonedDateTimeToPlainDate />

<PlainDateToZonedDateTime />

### PlainTime

<ZonedDateTimeToPlainTime />

<PlainTimeToZonedDateTime />

### PlainYearMonth

<ZonedDateTimeToPlainYearMonth />

<PlainYearMonthToZonedDateTime />

### PlainMonthDay

<ZonedDateTimeToPlainMonthDay />

<PlainMonthDayToZonedDateTime />
