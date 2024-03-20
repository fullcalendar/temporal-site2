---
outline: [2, 3]
outlineTitle: PlainDateTime
---

<script setup>
  import PlainDateTimeToInstant from '../../components/conversions/plaindatetime-to-instant.md'
  import InstantToPlainDateTime from '../../components/conversions/instant-to-plaindatetime.md'
  import PlainDateTimeToZonedDateTime from '../../components/conversions/plaindatetime-to-zoneddatetime.md'
  import ZonedDateTimeToPlainDateTime from '../../components/conversions/zoneddatetime-to-plaindatetime.md'
  import PlainDateTimeToPlainDate from '../../components/conversions/plaindatetime-to-plaindate.md'
  import PlainDateToPlainDateTime from '../../components/conversions/plaindate-to-plaindatetime.md'
  import PlainDateTimeToPlainTime from '../../components/conversions/plaindatetime-to-plaintime.md'
  import PlainTimeToPlainDateTime from '../../components/conversions/plaintime-to-plaindatetime.md'
  import PlainDateTimeToPlainYearMonth from '../../components/conversions/plaindatetime-to-plainyearmonth.md'
  import PlainYearMonthToPlainDateTime from '../../components/conversions/plainyearmonth-to-plaindatetime.md'
  import PlainDateTimeToPlainMonthDay from '../../components/conversions/plaindatetime-to-plainmonthday.md'
  import PlainMonthDayToPlainDateTime from '../../components/conversions/plainmonthday-to-plaindatetime.md'
</script>

# PlainDateTime

## Create and Parse

### Constructor

```js
pdt = new Temporal.PlainDateTime(
  2024, // isoYear
  11, // isoMonth
  4, // isoDay
  3, // isoHour (optional)
  5, // isoMinute (optional)
  2, // isoSecond (optional)
  1, // isoMillisecond (optional)
  1, // isoMicrosecond (optional)
  1, // isoNanosecond (optional)
  'gregory', // calendar (optional)
)
```

### From Fields

```js
pdt = Temporal.PlainDate.from({
  year: 2024, // or era+eraYear
  month: 11, // or monthCode
  day: 4,
  hour: 3, // (optional)
  minute: 5, // (optional)
  second: 2, // (optional)
  millisecond: 1, // (optional)
  microsecond: 1, // (optional)
  nanosecond: 1, // (optional)
  calendar: 'gregory', // (optional)
})
```

You can also pass-in a ZonedDateTime!

### From String

```js
pdt = Temporal.PlainDate.from(
  '2024-03-06T11:29:06.340442931'
)
```

### Now

Multiple methods:

#### `Temporal.Now.plainDateTimeISO()`
#### `Temporal.Now.plainDateTime()`

```js
pdt = Temporal.Now.plainDateTimeISO('America/Chicago')
// or
pdt = Temporal.Now.plainDateTime({
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
pdt.year // 2024

// set
pdt2 = pdt.with({ year: 2025 })
```

#### `.era` and `.eraYear`

```js
pdt = Temporal.Now.plainDateTime({
  timeZone: 'America/Chicago',
  calendar: 'gregory'
})

// get
pdt.era // 'bce'
pdt.eraYear // 2024

// set
pdt2 = pdt.with({
  era: 'bc',
  eraYear: 2,
})
```

#### `.inLeapYear`

```js
pdt.inLeapYear // false
```

Can't set.

### Month

Is 1-based!

Either use the simple `month` number or the more portable `monthCode`.

#### `.month`

```js
// get
pdt.month // 3

// set
pdt2 = pdt.with({ month: 4 })
```

#### `.monthCode`

```js
// get
pdt.monthCode // 'M03'

// set
pdt2 = pdt.with({ monthCode: 'M04' })
```

#### `.monthsInYear`

Certain calendar systems might have different months in year:

```js
pdt = Temporal.Now.plainDateTime({
  timeZone: 'America/Chicago',
  calendar: 'hebrew'
})

// get
pdt.monthsInYear // 12
```

### Day of Month

Is 1-based!

The day-of-month, often simply called the date, is the `day` property in Temporal:

#### `.day`

```js
// get
pdt.day // 6 (for March 6th)

// set
pdt.with({ day: 19 })
```

### Time

The wall-clock time has multiple properties:

#### `.hour`

```js
// get
pdt.hour // 9

// set
pdt2 = pdt.with({ hour: 9 })
```

#### `.minute`

```js
// get
pdt.minute // 9

// set
pdt2 = pdt.with({ minute: 9 })
```

#### `.second`

```js
// get
pdt.second // 9

// set
pdt2 = pdt.with({ second: 9 })
```

#### `.millisecond`

```js
// get
pdt.millisecond // 9

// set
pdt2 = pdt.with({ millisecond: 9 })
```

#### `.microsecond`

```js
// get
pdt.microsecond // 9

// set
pdt2 = pdt.with({ microsecond: 9 })
```

#### `.nanosecond`

```js
// get
pdt.nanosecond // 9

// set
pdt2 = pdt.with({ nanosecond: 9 })
```

### Calendar

Methods:

#### `.calendarId`
#### `.getCalendar()`
#### `.withCalendar()`

```js
// get
calendarId = pdt.calendarId // 'iso8601'
calendarObj = pdt.getCalendar() // Temporal.Calendar {}

// set
pdt2 = pdt.withCalendar('gregory')
```

Read more about Calendar objects.

### Week

Two concepts.

#### `.weekOfYear`
#### `.yearOfWeek`

Only works for supported calendars!

```js
// get
pdt.weekOfYear // 89
pdt.yearOfWeek // 2024

// set weekOfYear
pdt1 = pdt.add({ weeks: 8 - pdt.weekOfYear })
```

```js
import { withWeekOfYear } from 'temporal-utils'

pdt1 = withWeekOfYear(pdt, 8)
```

### Day of Week

Explain 1 means Monday...
This is REGARDLESS of locale. Always ISO

#### `.dayOfWeek`

```js
// get
pdt.dayOfWeek // 4 (Thursday)

// set
pdt2 = pdt.add({ days: 6 - pdt.dayOfWeek })
```

```js
import { withDayOfWeek } from 'temporal-utils'

pdt2 = withDayOfWeek(pdt, 6)
```

### Day of Year

Is 1-based!!!

#### `.dayOfYear`

```js
// get
pdt.dayOfYear // 89

// set
pdt2 = pdt.add({ days: 48 - pdt.dayOfYear })
```

```js
import { withDayOfYear } from 'temporal-utils'

pdt2 = withDayOfYear(pdt, 48)
```

### Days in Unit

Simple

#### `.daysInYear`
#### `.daysInMonth`
#### `.daysInWeek`

```js
pdt.daysInYear // 366
pdt.daysInMonth // 23
pdt.daysInWeek // 7
```

### ISO Fields {#getISOFields}

```js
// get
isoFields = pdt.getISOFields()
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
// }

// create-from
pdt2 = new Temporal.PlainDateTime(
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
)
```

## Math

### Add and Subtract

Give a Duration or Duration-like fields:

#### `.add()`

```js
pdt = Temporal.PlainDateTime.from('2024-03-06T12:30')

pdt2 = pdt.add({
  year: 1,
  months: 2,
})
// '2024-03-06T13:03:21.596195335'
```

#### `.subtract()`

```js
pdt = Temporal.PlainDateTime.from('2024-03-06T12:30')

pdt2 = pdt.subtract({
  year: 1,
  months: 2,
})
// '2024-03-06T13:03:21.596195335'
```

There are options about overflow!

### Round

For settings like roundingIncrement and roundingMode.

Only allows rounding to day/time! Not larger units like years/months/week!

Day:

```js
pdt2 = pdt.round('day')
// or
pdt2 = pdt.round({
  smallestUnit: 'day',
  roundingMode: 'halfExpand' // or trunc/floor/ceil/etc
  roundingIncrement: 1,
})
```

Time:

```js
pdt2 = pdt.round('hour') // or minute/second/millisecond/microsecond
// or
pdt2 = pdt.round({
  smallestUnit: 'hour', // or minute/second/millisecond/microsecond
  roundingMode: 'halfExpand' // or trunc/floor/ceil/etc
  roundingIncrement: 1,
})
```

Year:

```js
import { roundToYear } from 'temporal-utils'

pdt2 = roundToYear(pdt)
// or
pdt2 = roundToYear(pdt, {
  roundingMode: 'halfExpand' // or trunc/floor/ceil/etc
  roundingIncrement: 1,
})
```

Month:

```js
import { roundToMonth } from 'temporal-utils'

pdt2 = roundToMonth(pdt)
// or
pdt2 = roundToMonth(pdt, {
  roundingMode: 'halfExpand' // or trunc/floor/ceil/etc
  roundingIncrement: 1,
})
```

Week:

```js
import { roundToWeek } from 'temporal-utils'

pdt2 = roundToWeek(pdt)
// or
pdt2 = roundToWeek(pdt, {
  roundingMode: 'halfExpand' // or trunc/floor/ceil/etc
  roundingIncrement: 1,
})
```

### Start of Unit

Start of year (might not be midnight):

```js
pdt2 = pdt.with({ month: 1, day: 1 })
  .withPlainTime()
```

```js
import { startOfYear } from 'temporal-utils'

pdt2 = startOfYear(pdt)
```

Start of month (might not be midnight):

```js
pdt2 = pdt.with({ day: 1 })
  .withPlainTime()
```

```js
import { startOfMonth } from 'temporal-utils'

pdt2 = startOfMonth(pdt)
```

Also PLEASE look at PlainDateTime::toPlainYearMonth

Start of week:

```js
pdt2 = pdt.add({ days: 1 - pdt.dayOfWeek })
```

```js
import { startOfWeek } from 'temporal-utils'

pdt2 = startOfWeek(pdt)
```

Start of day (might not be midnight):

```js
pdt2 = pdt.withPlainTime()
```

Start of hour:

```js
pdt2 = pdt.round({
  smallestUnit: 'hour',
  roundingMode: 'floor',
})
```

Also PLEASE look at PlainDateTime::toPlainDate

```js
import { startOfHour } from 'temporal-utils'

pdt2 = startOfHour(pdt)
```

Start of minute:

```js
pdt2 = pdt.round({
  smallestUnit: 'minute',
  roundingMode: 'floor',
})
```

```js
import { startOfMinute } from 'temporal-utils'

pdt2 = startOfMinute(pdt)
```

Start of second:

```js
pdt2 = pdt.round({
  smallestUnit: 'second',
  roundingMode: 'floor',
})
```

```js
import { startOfSecond } from 'temporal-utils'

pdt2 = startOfSecond(pdt)
```

Start of millisecond:

```js
pdt2 = pdt.round({
  smallestUnit: 'millisecond',
  roundingMode: 'floor',
})
```

```js
import { startOfMillisecond } from 'temporal-utils'

pdt2 = startOfMillisecond(pdt)
```

Start of microsecond:

```js
pdt2 = pdt.round({
  smallestUnit: 'microsecond',
  roundingMode: 'floor',
})
```

```js
import { startOfMicrosecond } from 'temporal-utils'

pdt2 = startOfMicrosecond(pdt)
```

### End of Unit

Explain inclusive vs exclusive.

End of year (might not be midnight):

```js
pdt2 = pdt.with({ month: 1, day: 1 })
  .withPlainTime()
  .add({ years: 1 }) // sufficient for exclusive end
  .subtract({ nanoseconds: 1 }) // inclusive end
```

```js
import { endOfYearExcl, endOfYearIncl } from 'temporal-utils'

pdt2 = endOfYearExcl(pdt)
pdt2 = endOfYearIncl(pdt)
```

End of month (might not be midnight):

```js
pdt2 = pdt.with({ day: 1 })
  .withPlainTime()
  .add({ months: 1 }) // sufficient for exclusive end
  .subtract({ nanoseconds: 1 }) // inclusive end
```

```js
import { endOfMonthExcl, endOfMonthIncl } from 'temporal-utils'

pdt2 = endOfMonthExcl(pdt)
pdt2 = endOfMonthIncl(pdt)
```

End of day (might not be midnight):

```js
pdt2 = pdt.add({ days: 1 })
  .withPlainTime() // sufficient for exclusive end
  .subtract({ nanoseconds: 1 }) // inclusive end
```

```js
import { endOfDayExcl, endOfDayIncl } from 'temporal-utils'

pdt2 = endOfDayExcl(pdt)
pdt2 = endOfDayIncl(pdt)
```

End of hour:

```js
pdt2 = pdt.round({ // sufficient for exclusive end
  smallestUnit: 'hour',
  roundingMode: 'ceil',
}).subtract({ nanoseconds: 1 }) // inclusive end
```

```js
import { endOfHourExcl, endOfHourIncl } from 'temporal-utils'

pdt2 = endOfHourExcl(pdt)
pdt2 = endOfHourIncl(pdt)
```

End of minute:

```js
pdt2 = pdt.round({ // sufficient for exclusive end
  smallestUnit: 'minute',
  roundingMode: 'ceil',
}).subtract({ nanoseconds: 1 }) // inclusive end
```

```js
import { endOfMinuteExcl, endOfMinuteIncl } from 'temporal-utils'

pdt2 = endOfMinuteExcl(pdt)
pdt2 = endOfMinuteIncl(pdt)
```

End of second:

```js
pdt2 = pdt.round({ // sufficient for exclusive end
  smallestUnit: 'second',
  roundingMode: 'ceil',
}).subtract({ nanoseconds: 1 }) // inclusive end
```

```js
import { endOfSecondExcl, endOfSecondIncl } from 'temporal-utils'

pdt2 = endOfSecondExcl(pdt)
pdt2 = endOfSecondIncl(pdt)
```

End of millisecond:

```js
pdt2 = pdt.round({ // sufficient for exclusive end
  smallestUnit: 'millisecond',
  roundingMode: 'ceil',
}).subtract({ nanoseconds: 1 }) // inclusive end
```

```js
import { endOfMillisecondExcl, endOfMillisecondIncl } from 'temporal-utils'

pdt2 = endOfMillisecondExcl(pdt)
pdt2 = endOfMillisecondIncl(pdt)
```

End of microsecond:

```js
pdt2 = pdt.round({ // sufficient for exclusive end
  smallestUnit: 'microsecond',
  roundingMode: 'ceil',
}).subtract({ nanoseconds: 1 }) // inclusive end
```

```js
import { endOfMicrosecondExcl, endOfMicrosecondIncl } from 'temporal-utils'

pdt2 = endOfMicrosecondExcl(pdt)
pdt2 = endOfMicrosecondIncl(pdt)
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
pdt1 = Temporal.PlainDateTime.from('2024-03-06T12:30')
pdt2 = Temporal.PlainDateTime.from('2024-03-06T12:30')

dur = pdt1.until(pdt2, {
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
yearsRounded = pdt1.until(pdt2, {
  largestUnit: 'year',
  smallestUnit: 'year',
  roundingMode: 'halfExpand', // or trunc/floor/ceil/etc
}).years // 6

yearsExact = pdt1.until(pdt2, {
  largestUnit: 'year',
}).total({
  unit: 'year',
  relativeTo: pdt1,
}) // 6.5
```

```js
import { diffYears } from 'temporal-utils'

yearsRounded = diffYears(pdt1, pdt2, 'halfExpand')
yearsExact = diffYears(pdt1, pdt2)
```

With months:

```js
monthsRounded = pdt1.until(pdt2, {
  largestUnit: 'month',
  smallestUnit: 'month',
  roundingMode: 'halfExpand', // or trunc/floor/ceil/etc
}).months // 6

monthsExact = pdt1.until(pdt2, {
  largestUnit: 'month',
}).total({
  unit: 'month',
  relativeTo: pdt1,
}) // 6.5
```

```js
import { diffMonths } from 'temporal-utils'

monthsRounded = diffMonths(pdt1, pdt2, 'halfExpand')
monthsExact = diffMonths(pdt1, pdt2)
```

With weeks:

```js
weeksRounded = pdt1.until(pdt2, {
  largestUnit: 'week',
  smallestUnit: 'week',
  roundingMode: 'halfExpand', // or trunc/floor/ceil/etc
}).weeks // 6

weeksExact = pdt1.until(pdt2, {
  largestUnit: 'week',
}).total({
  unit: 'week',
  relativeTo: pdt1,
}) // 6.5
```

```js
import { diffWeeks } from 'temporal-utils'

weeksRounded = diffWeeks(pdt1, pdt2, 'halfExpand')
weeksExact = diffWeeks(pdt1, pdt2)
```

With days:

```js
daysRounded = pdt1.until(pdt2, {
  largestUnit: 'day',
  smallestUnit: 'day',
  roundingMode: 'halfExpand', // or trunc/floor/ceil/etc
}).days // 6

daysExact = pdt1.until(pdt2, {
  largestUnit: 'day',
}).total({
  unit: 'day',
  relativeTo: pdt1,
}) // 6.5
```

```js
import { diffDays } from 'temporal-utils'

daysRounded = diffDays(pdt1, pdt2, 'halfExpand')
daysExact = diffDays(pdt1, pdt2)
```

With hours:

```js
hoursRounded = pdt1.until(pdt2, {
  largestUnit: 'hour',
  smallestUnit: 'hour',
  roundingMode: 'halfExpand', // or trunc/floor/ceil/etc
}).hours // 6

hoursExact = pdt1.until(pdt2, {
  largestUnit: 'hour',
}).total('hour') // 6.5
```

```js
import { diffHours } from 'temporal-utils'

hoursRounded = diffHours(pdt1, pdt2, 'halfExpand')
hoursExact = diffHours(pdt1, pdt2)
```

With minutes:

```js
minutesRounded = pdt1.until(pdt2, {
  largestUnit: 'hour',
  smallestUnit: 'hour',
  roundingMode: 'halfExpand', // or trunc/floor/ceil/etc
}).hours // 6

minutesExact = pdt1.until(pdt2, {
  largestUnit: 'hour',
}).total('hour') // 6.5
```

```js
import { diffMinutes } from 'temporal-utils'

minutesRounded = diffMinutes(pdt1, pdt2, 'halfExpand')
minutesExact = diffMinutes(pdt1, pdt2)
```

With seconds:

```js
secondsRounded = pdt1.until(pdt2, {
  largestUnit: 'second',
  smallestUnit: 'second',
  roundingMode: 'halfExpand', // or trunc/floor/ceil/etc
}).seconds // 6

secondsExact = pdt1.until(pdt2, {
  largestUnit: 'second',
}).total('second') // 6.5
```

```js
import { diffSeconds } from 'temporal-utils'

secondsRounded = diffSeconds(pdt1, pdt2, 'halfExpand')
secondsExact = diffSeconds(pdt1, pdt2)
```

With milliseconds:

```js
msRounded = pdt1.until(pdt2, {
  largestUnit: 'millisecond',
  smallestUnit: 'millisecond',
  roundingMode: 'halfExpand', // or trunc/floor/ceil/etc
}).milliseconds // 6

msExact = pdt1.until(pdt2, {
  largestUnit: 'millisecond',
}).total('millisecond') // 6.5
```

```js
import { diffMilliseconds } from 'temporal-utils'

msRounded = diffMilliseconds(pdt1, pdt2, 'halfExpand')
msExact = diffMilliseconds(pdt1, pdt2)
```

With microseconds:

```js
μsRounded = pdt1.until(pdt2, {
  largestUnit: 'microsecond',
  smallestUnit: 'microsecond',
  roundingMode: 'halfExpand', // or trunc/floor/ceil/etc
}).microseconds // 6

μsExact = pdt1.until(pdt2, {
  largestUnit: 'microsecond',
}).total('microsecond') // 6.5
```

```js
import { diffMicroseconds } from 'temporal-utils'

μsRounded = diffMicroseconds(pdt1, pdt2, 'halfExpand')
μsExact = diffMicroseconds(pdt1, pdt2)
```

With nanoseconds:

```js
nsRounded = pdt1.until(pdt2, {
  largestUnit: 'nanosecond',
  smallestUnit: 'nanosecond',
  roundingMode: 'halfExpand', // or trunc/floor/ceil/etc
  roundingIncrement: 10,
}).nanoseconds

nsUnrounded = pdt2.epochNanoseconds - pdt1.epochNanoseconds
```

```js
import { diffNanoseconds } from 'temporal-utils'

nsRounded = diffNanoseconds(pdt1, pdt2, 'halfExpand')
nsUnrounded = diffNanoseconds(pdt1, pdt2)
```

### Compare and Sort

Compare:

```js
pdt1 = Temporal.PlainDateTime.from('2024-03-06T12:30')
pdt2 = Temporal.PlainDateTime.from('2024-03-06T12:30')

Temporal.PlainDateTime.compare(pdt1, pdt2)
// -1 because pdt1 < pdt2

Temporal.PlainDateTime.compare(pdt1, pdt2)
// 1 because pdt1 > pdt2

Temporal.PlainDateTime.compare(pdt1, pdt1)
// 0 because pdt1 = zdtPast
```

Sort:

```js
pdtArray = [
  Temporal.PlainDateTime.from('2024-03-06T12:30'),
  Temporal.PlainDateTime.from('2024-03-06T12:30'),
  Temporal.PlainDateTime.from('2024-05-06T12:30')
].sort(
  Temporal.PlainDateTime.compare
)
```

### Equality

epochNanoseconds, timeZone, and calendar must be identical.

```js
pdt1 = Temporal.PlainDateTime.from('2024-03-06T12:30')
pdt2 = Temporal.PlainDateTime.from('2024-03-06T12:30')

pdt1.equals(pdt2) // false
pdt1.equals(pdt1) // true (of course it's equal to self)
```

## Stringify

### ISO String

```js
pdt.toString() // '2024-03-06T12:30'
```

For options, consult the spec.

### Localized String

For options, consult Intl.DateTimeFormat options. The timeZone options is prohibited!

It's possible to call directly on the object:

```js
// current locale
pdt.toLocaleString() // '3/6/2024, 3:58:45'

// specific locale
pdt.toLocaleString('fr') // '06/03/2024 15:59:31'

// specific locale + options
pdt.toLocaleString('fr', { // 'mercredi 6 mars 2024'
  dateStyle: 'full',
})
```

However, it's much more performant to reuse a format:

```js
dtf = new Intl.DateTimeFormat('fr', {
  dateStyle: 'full'
})

dtf.format(pdt) // 'mercredi 6 mars 2024'
```

## Convert

### Legacy Date

PlainDateTime -> Date

```js
tzId = Temporal.Now.timeZoneId() // system time zone
tzId = 'America/Chicago' // OR a specific time zone

legacyDate = new Date(
  pdt.toZonedDateTime(tzId).epochMilliseconds
)
```

Date -> PlainDateTime

```js
tzId = Temporal.Now.timeZoneId() // system time zone
tzId = 'America/Chicago' // OR a specific time zone

// ISO calendar
pdt = legacyDate
  .toTemporalInstant()
  .toZonedDateTimeISO(tzId)
  .toPlainDateTime()

// specific calendar
pdt = legacyDate
  .toTemporalInstant()
  .toZonedDateTime({ timeZone: tzId, calendar: 'gregory' })
  .toPlainDateTime()
```

### Instant

<PlainDateTimeToInstant />

<InstantToPlainDateTime />

### ZonedDateTime

<PlainDateTimeToZonedDateTime />

<ZonedDateTimeToPlainDateTime />

### PlainDate

<PlainDateTimeToPlainDate />

<PlainDateToPlainDateTime />

### PlainTime

<PlainDateTimeToPlainTime />

<PlainTimeToPlainDateTime />

### PlainYearMonth

<PlainDateTimeToPlainYearMonth />

<PlainYearMonthToPlainDateTime />

### PlainMonthDay

<PlainDateTimeToPlainMonthDay />

<PlainMonthDayToPlainDateTime />
