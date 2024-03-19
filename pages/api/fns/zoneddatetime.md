---
outline: [2, 3]
outlineTitle: ZonedDateTimeFns
---

# ZonedDateTimeFns

Mention you shouldn't mutate the record.

## Create and Parse

### Create

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

zdt = ZonedDateTimeFns.create(
  1709742442931429932n,
  'America/Chicago',
  'gregory', // optional. default: 'iso8601'
)
```

### From Fields

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

zdt = ZonedDateTimeFns.fromFields({
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
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

zdt = ZonedDateTimeFns.fromString(
  '2024-03-06T11:29:06.340442931-05:00[America/New_York]'
)
```

Can have `[u-ca=hebrew]` calendar at end of string.

Can pass-in options.

### Now

Multiple methods:

#### `NowFns.zonedDateTimeISO()`
#### `NowFns.zonedDateTime()`

```js
import * as NowFns from 'temporal-polyfill/fns/now'

zdt = NowFns.zonedDateTimeISO('America/Chicago')
// or
zdt = NowFns.zonedDateTime({
  timeZone: 'America/Chicago',
  calendar: 'gregory'
})
```

## Get and Set

Mention that `getFields` is fast.

The you should mutate the result!!!.

### Year

Either use the simple `year` number or the `era` + `eraYear` (for supported calendars only).

#### `.year`

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

// get
year = ZonedDateTimeFns.getFields(zdt).year // 2024

// set
zdt2 = ZonedDateTimeFns.withFields(zdt, { year: 2025 })
```

#### `.era` and `.eraYear`

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

zdt = ZonedDateTimeFns.fromFields({
  timeZone: 'America/Chicago',
  calendar: 'gregory'
})

// get
era = ZonedDateTimeFns.getFields(zdt).era // bce
eraYear = ZonedDateTimeFns.getFields(zdt).eraYear // 2024

// set
zdt2 = ZonedDateTimeFns.withFields(zdt, {
  era: 'bc',
  eraYear: 2,
})
```

#### `.inLeapYear`

TODO!!!

### Month

Is 1-based!

Either use the simple `month` number or the more portable `monthCode`.

#### `.month`

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

// get
month = ZonedDateTimeFns.getFields(zdt).month // 3

// set
zdt2 = ZonedDateTimeFns.withFields(zdt, { month: 4 })
```

#### `.monthCode`

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

// get
monthCode = ZonedDateTimeFns.getFields(zdt).monthCode // 'M03'

// set
zdt2 = ZonedDateTimeFns.setFields(zdt, { monthCode: 'M04' })
```

#### `.monthsInYear`

Certain calendar systems might have different months in year:

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

zdt = ZonedDateTimeFns.fromFields({
  timeZone: 'America/Chicago',
  calendar: 'hebrew'
})

// get
monthsInYear = ZonedDateTimeFns.monthsInYear(zdt) // 12
```

### Day-of-Month {#day}

Is 1-based!

The day-of-month, often simply called the date, is the `day` property in Temporal:

#### `.day`

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

// get
day = ZonedDateTimeFns.getFields(zdt).day // 6 (for March 6th)

// set
ZonedDateTimeFns.withFields(zdt, { day: 19 })
```

### Time

The wall-clock time has multiple properties:

#### `.hour`

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

// get
hour = ZonedDateTimeFns.getFields(zdt).hour // 9

// set
zdt2 = ZonedDateTimeFns.withFields(zdt, { hour: 9 })
```

#### `.minute`

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

// get
minute = ZonedDateTimeFns.getFields(zdt).minute // 9

// set
zdt2 = ZonedDateTimeFns.withFields(zdt, { minute: 9 })
```

#### `.second`

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

// get
second = ZonedDateTimeFns.getFields(zdt).second // 9

// set
zdt2 = ZonedDateTimeFns.withFields(zdt, { second: 9 })
```

#### `.millisecond`

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

// get
millisecond = ZonedDateTimeFns.getFields(zdt).millisecond // 9

// set
zdt2 = ZonedDateTimeFns.withFields(zdt, { millisecond: 9 })
```

#### `.microsecond`

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

// get
microsecond = ZonedDateTimeFns.getFields(zdt).microsecond // 9

// set
zdt2 = ZonedDateTimeFns.withFields(zdt, { microsecond: 9 })
```

#### `.nanosecond`

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

// get
nanosecond = ZonedDateTimeFns.getFields(zdt).nanosecond // 9

// set
zdt2 = ZonedDateTimeFns.withFields(zdt, { nanosecond: 9 })
```

### Epoch-Time

Time since epoch in various units

#### `.epochSeconds()`

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'
import * as InstantFns from 'temporal-polyfill/fns/instant'

// get
epochSeconds = ZonedDateTimeFns.epochSeconds(zdt)
// 123

// create-from
zdt2 = InstantFns.toZonedDateTime(
  InstantFns.fromEpochSeconds(23424),
  ZonedDateTimeFns.getISOFields(zdt), // calendar/timeZone
)
```

#### `.epochMilliseconds()`

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'
import * as InstantFns from 'temporal-polyfill/fns/instant'

// get
epochMilliseconds = ZonedDateTimeFns.epochMilliseconds(zdt)
// 123

// create-from
zdt2 = InstantFns.toZonedDateTime(
  InstantFns.fromEpochMilliseconds(23424),
  ZonedDateTimeFns.getISOFields(zdt), // calendar/timeZone
)
```

#### `.epochMicroseconds()`

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'
import * as InstantFns from 'temporal-polyfill/fns/instant'

// get
epochMicroseconds = ZonedDateTimeFns.epochMicroseconds(zdt)
// 123n

// create-from
zdt2 = InstantFns.toZonedDateTime(
  InstantFns.fromEpochMicroseconds(23424n),
  ZonedDateTimeFns.getISOFields(zdt), // calendar/timeZone
)
```

#### `.epochNanoseconds()`

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

// get
epochNanoseconds = ZonedDateTimeFns.epochNanoseconds(zdt)
// 123

// create-from
zdt2 = ZonedDateTimeFns.create(
  23424n,
  ZonedDateTimeFns.timeZoneId(zdt),
  ZonedDateTimeFns.calendarId(zdt),
)
```

### TimeZone Offset

Can be expressed:

#### `.offsetNanoseconds()`
#### `.offset()`

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

// get
ZonedDateTimeFns.offsetNanoseconds(zdt) // a number
ZonedDateTimeFns.offset(zdt) // a string
```

You cannot set the offset. You must change the timezone...

### TimeZone

Methods:

#### `.timeZoneId()`
#### `.withTimeZone()`

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

// get
timeZoneId = ZonedDateTimeFns.timeZoneId(zdt) // 'America/Whatever'

// set
zdt2 = ZonedDateTimeFns.withTimeZone(zdt, 'America/New_York')
```

### Calendar

Methods:

#### `.calendarId()`
#### `.withCalendar()`

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

// get
calendarId = ZonedDateTimeFns.calendarId(zdt) // 'iso8601'

// set
zdt2 = ZonedDateTimeFns.withCalendar(zdt, 'gregory')
```

### Week

Two concepts.

#### `.weekOfYear()`
#### `.yearOfWeek()`

Only works for supported calendars!

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

// get
ZonedDateTimeFns.weekOfYear(zdt) // 89
ZonedDateTimeFns.yearOfWeek(zdt) // 2024

// set weekOfYear
zdt1 = ZonedDateTimeFns.withWeekOfYear(zdt, 8)
```

### Day-of-Week

Explain 1 means Monday...
This is REGARDLESS of locale. Always ISO

#### `.dayOfWeek()`

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

// get
ZonedDateTimeFns.dayOfWeek(zdt) // 4 (Thursday)

// set
zdt2 = ZonedDateTimeFns.withDayOfWeek(zdt, 6)
```

### Day-of-Year

Is 1-based!!!

#### `.dayOfYear`

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

// get
ZonedDateTimeFns.dayOfYear(zdt) // 89

// set
zdt2 = ZonedDateTimeFns.withDayOfYear(zdt, 48)
```

### Days-in-Unit

Simple

#### `.daysInYear()`
#### `.daysInMonth()`
#### `.daysInWeek()`

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

ZonedDateTimeFns.daysInYear(zdt) // 366
ZonedDateTimeFns.daysInMonth(zdt) // 23
ZonedDateTimeFns.daysInWeek(zdt) // 7
```

### Hours-in-Day {#hoursInDay}

Might be 23 or 25 if DST

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

ZonedDateTimeFns.hoursInDay(zdt) // 24
```

### ISO Fields {#getISOFields}

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'
import * as PlainDateTimeFns from 'temporal-polyfill/fns/plaindatetime'

// get
isoFields = ZonedDateTimeFns.getISOFields(zdt)
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
zdt2 = PlainDateTimeFns.toZonedDateTime(
  PlainDateTimeFns.create(
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
  ),
  isoFields.timeZone,
)
```

## Math

### Add or Subtract

Give a Duration or Duration-like fields:

#### `.add()`

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'
import * as DurationFns from 'temporal-polyfill/fns/duration'

zdt = ZonedDateTimeFns.fromString('2024-03-06T12:30[America/New_York]')

zdt2 = ZonedDateTimeFns.add(
  zdt,
  DurationFns.fromFields({
    year: 1,
    months: 2,
  }),
)
// '2024-03-06T13:03:21.596195335-05:00[America/New_York]'
```

An already-created Duration must be passed-in.

#### `.subtract()`

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'
import * as DurationFns from 'temporal-polyfill/fns/duration'

zdt = ZonedDateTimeFns.fromString('2024-03-06T12:30[America/New_York]')

zdt2 = ZonedDateTimeFns.subtract(
  zdt,
  DurationFns.fromFields({
    year: 1,
    months: 2,
  }),
)
// '2024-03-06T13:03:21.596195335-05:00[America/New_York]'
```

An already-created Duration must be passed-in.

### Round

For settings like roundingIncrement and roundingMode.

Only allows rounding to day/time! Not larger units like years/months/week!

Day:

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

zdt2 = ZonedDateTimeFns.round(zdt, 'day')
// or
zdt2 = ZonedDateTimeFns.round(zdt, {
  smallestUnit: 'day',
  roundingMode: 'halfExpand' // or trunc/floor/ceil/etc
  roundingIncrement: 1,
})
```

Time:

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

zdt2 = ZonedDateTimeFns.round(zdt, 'hour')
// or
zdt2 = ZonedDateTimeFns.round(zdt, {
  smallestUnit: 'hour',
  roundingMode: 'halfExpand' // or trunc/floor/ceil/etc
  roundingIncrement: 1,
})
```

Year:

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

zdt2 = ZonedDateTimeFns.roundToYear(zdt)
// or
zdt2 = ZonedDateTimeFns.roundToYear(zdt, {
  roundingMode: 'halfExpand' // or trunc/floor/ceil/etc
  roundingIncrement: 1,
})
```

Month:

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

zdt2 = ZonedDateTimeFns.roundToMonth(zdt)
// or
zdt2 = ZonedDateTimeFns.roundToMonth(zdt, {
  roundingMode: 'halfExpand' // or trunc/floor/ceil/etc
  roundingIncrement: 1,
})
```

Week:

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

zdt2 = ZonedDateTimeFns.roundToWeek(zdt)
// or
zdt2 = ZonedDateTimeFns.roundToWeek(zdt, {
  roundingMode: 'halfExpand' // or trunc/floor/ceil/etc
  roundingIncrement: 1,
})
```

### Start-of-Unit

Start of year (might not be midnight):

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

zdt2 = ZonedDateTimeFns.startOfYear(zdt)
```

Start of month (might not be midnight):

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

zdt2 = ZonedDateTimeFns.startOfMonth(zdt)
```

Start of day (might not be midnight):

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

zdt2 = ZonedDateTimeFns.startOfDay(zdt)
```

Start of hour:

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

zdt2 = ZonedDateTimeFns.startOfHour(zdt)
```

Start of minute:

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

zdt2 = ZonedDateTimeFns.startOfMinute(zdt)
```

Start of second:

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

zdt2 = ZonedDateTimeFns.startOfSecond(zdt)
```

Start of millisecond:

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

zdt2 = ZonedDateTimeFns.startOfMillisecond(zdt)
```

Start of microsecond:

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

zdt2 = ZonedDateTimeFns.startOfMicrosecond(zdt)
```

### End-of-Unit

Explain inclusive vs exclusive.

End of year (might not be midnight):

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

zdt2 = ZonedDateTimeFns.endOfYearExcl(zdt)
zdt2 = ZonedDateTimeFns.endOfYearIncl(zdt)
```

End of month (might not be midnight):

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

zdt2 = ZonedDateTimeFns.endOfMonthExcl(zdt)
zdt2 = ZonedDateTimeFns.endOfMonthIncl(zdt)
```

End of day (might not be midnight):

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

zdt2 = ZonedDateTimeFns.endOfDayExcl(zdt)
zdt2 = ZonedDateTimeFns.endOfDayIncl(zdt)
```

End of hour:

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

zdt2 = ZonedDateTimeFns.endOfHourExcl(zdt)
zdt2 = ZonedDateTimeFns.endOfHourIncl(zdt)
```

End of minute:

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

zdt2 = ZonedDateTimeFns.endOfMinuteExcl(zdt)
zdt2 = ZonedDateTimeFns.endOfMinuteIncl(zdt)
```

End of second:

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

zdt2 = ZonedDateTimeFns.endOfSecondExcl(zdt)
zdt2 = ZonedDateTimeFns.endOfSecondIncl(zdt)
```

End of millisecond:

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

zdt2 = ZonedDateTimeFns.endOfMillisecondExcl(zdt)
zdt2 = ZonedDateTimeFns.endOfMillisecondIncl(zdt)
```

End of microsecond:

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

zdt2 = ZonedDateTimeFns.endOfMicrosecondExcl(zdt)
zdt2 = ZonedDateTimeFns.endOfMicrosecondIncl(zdt)
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
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

zdt1 = ZonedDateTimeFns.fromString('2024-03-06T12:30[America/New_York]')
zdt2 = ZonedDateTimeFns.fromString('2024-03-06T12:30[America/New_York]')

dur = ZonedDateTimeFns.until(zdt1, zdt2, {
  largestUnit: 'year',
  smallestUnit: 'day',
  roundingMode: 'halfExpand', // or trunc/floor/ceil/etc
})
// DurationRecord {
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
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

yearsRounded = ZonedDateTimeFns.diffYears(zdt1, zdt2, 'halfExpand')
yearsExact = ZonedDateTimeFns.diffYears(zdt1, zdt2)
```

With months:

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

monthsRounded = ZonedDateTimeFns.diffMonths(zdt1, zdt2, 'halfExpand')
monthsExact = ZonedDateTimeFns.diffMonths(zdt1, zdt2)
```

With weeks:

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

weeksRounded = ZonedDateTimeFns.diffWeeks(zdt1, zdt2, 'halfExpand')
weeksExact = ZonedDateTimeFns.diffWeeks(zdt1, zdt2)
```

With days:

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

daysRounded = ZonedDateTimeFns.diffDays(zdt1, zdt2, 'halfExpand')
daysExact = ZonedDateTimeFns.diffDays(zdt1, zdt2)
```

With hours:

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

hoursRounded = ZonedDateTimeFns.diffHours(zdt1, zdt2, 'halfExpand')
hoursExact = ZonedDateTimeFns.diffHours(zdt1, zdt2)
```

With minutes:

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

minutesRounded = ZonedDateTimeFns.diffMinutes(zdt1, zdt2, 'halfExpand')
minutesExact = ZonedDateTimeFns.diffMinutes(zdt1, zdt2)
```

With seconds:

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

secondsRounded = ZonedDateTimeFns.diffSeconds(zdt1, zdt2, 'halfExpand')
secondsExact = ZonedDateTimeFns.diffSeconds(zdt1, zdt2)
```

With milliseconds:

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

msRounded = ZonedDateTimeFns.diffMilliseconds(zdt1, zdt2, 'halfExpand')
msExact = ZonedDateTimeFns.diffMilliseconds(zdt1, zdt2)
```

With microseconds:

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

μsRounded = ZonedDateTimeFns.diffMicroseconds(zdt1, zdt2, 'halfExpand')
μsExact = ZonedDateTimeFns.diffMicroseconds(zdt1, zdt2)
```

With nanoseconds:

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

nsRounded = ZonedDateTimeFns.diffNanoseconds(zdt1, zdt2, 'halfExpand')
nsUnrounded = ZonedDateTimeFns.diffNanoseconds(zdt1, zdt2)
```

### Compare

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

zdt1 = ZonedDateTimeFns.fromString('2024-03-06T12:30[America/New_York]')
zdt2 = ZonedDateTimeFns.fromString('2024-03-06T12:30[America/New_York]')

ZonedDateTimeFns.compare(zdt1, zdt2)
// -1 because zdt1 < zdt2

ZonedDateTimeFns.compare(zdt1, zdt2)
// 1 because zdt1 > zdt2

ZonedDateTimeFns.compare(zdt1, zdt1)
// 0 because zdt1 = zdtPast
```

### Equality

epochNanoseconds, timeZone, and calendar must be identical.

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

zdt1 = ZonedDateTimeFns.fromString('2024-03-06T12:30[America/New_York]')
zdt2 = ZonedDateTimeFns.fromString('2024-03-06T12:30[America/New_York]')

ZonedDateTimeFns.equals(zdt1, zdt2) // false
ZonedDateTimeFns.equals(zdt1, zdt1) // true (of course it's equal to self)
```

## Stringify

### ISO String

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

ZonedDateTimeFns.toString(zdt) // '2024-03-06T12:30[America/New_York]'
```

For options, consult the spec.

### Localized String

For options, consult Intl.DateTimeFormat options. The timeZone options is prohibited!

It's possible to call directly on the object:

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

// current locale
ZonedDateTimeFns.toLocaleString(zdt) // '3/6/2024, 3:58:45 PM EST'

// specific locale
ZonedDateTimeFns.toLocaleString(zdt, 'fr') // '06/03/2024 15:59:31 UTC−5'

// specific locale + options
ZonedDateTimeFns.toLocaleString(zdt, 'fr', { // 'mercredi 6 mars 2024'
  dateStyle: 'full',
})
```

When GIVING OPTIONS (only). However, it's much more performant to reuse the same options object. The code will know it's a reused version and be more performant.

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'

formatOptions = {
  dateStyle: 'full'
}

ZonedDateTimeFns.toLocaleString(zdt, 'fr', formatOptions)
// 'mercredi 6 mars 2024'
```

## Convert

### Legacy Date

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'
import * as InstantFns from 'temporal-polyfill/fns/instant'
import * as NowFns from 'temporal-polyfill/fns/now'

// ZonedDateTime -> Date
legacyDate = new Date(
  ZonedDateTimeFns.epochMilliseconds(zdt)
)

// Date -> ZonedDateTime
zdt = InstantFns.toZonedDateTimeISO(
  InstantFns.fromEpochMilliseconds(legacyDate.valueOf()),
  NowFns.timeZoneId(), // system time zone
)
// or
zdt = InstantFns.toZonedDateTimeISO(
  InstantFns.fromEpochMilliseconds(legacyDate.valueOf()),
  'America/Chicago',
)
// or
zdt = InstantFns.toZonedDateTime(
  InstantFns.fromEpochMilliseconds(legacyDate.valueOf()),
  { timeZone: 'America/Chicago', calendar: 'gregory' },
)
```

### Instant

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'
import * as InstantFns from 'temporal-polyfill/fns/instant'
import * as NowFns from 'temporal-polyfill/fns/now'

// ZonedDateTime -> Instant
inst = ZonedDateTimeFns.toInstant(zdt)

// Instant -> ZonedDateTime
zdt = InstantFns.toZonedDateTimeISO(
  inst,
  NowFns.timeZoneId(), // system time zone
)
// or
zdt = InstantFns.toZonedDateTimeISO(
  inst,
  'America/Chicago',
)
// or
zdt = InstantFns.toZonedDateTime(inst, {
  timeZone: 'America/Chicago',
  calendar: 'gregory',
})
```

### PlainDateTime

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'
import * as PlainDateTimeFns from 'temporal-polyfill/fns/plaindatetime'
import * as NowFns from 'temporal-polyfill/fns/now'

// ZonedDateTime -> PlainDateTime
pdt = ZonedDateTimeFns.toPlainDateTime(zdt)

// PlainDateTime -> ZonedDateTime
zdt = PlainDateTimeFns.toZonedDateTime(
  zdt,
  NowFns.timeZoneId(), // system time zone
)
// or
zdt = PlainDateTimeFns.toZonedDateTime(
  zdt,
  'America/Chicago',
)
```

Third argument can be options. See official page.

### PlainDate

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'
import * as PlainDateFns from 'temporal-polyfill/fns/plaindatetime'
import * as PlainTimeFns from 'temporal-polyfill/fns/plaintime'
import * as NowFns from 'temporal-polyfill/fns/now'

// ZonedDateTime -> PlainDate
pd = ZonedDateTimeFns.toPlainDate(zdt)

// PlainDate -> ZonedDateTime
zdt = PlainDateFns.toZonedDateTime(pd, {
  timeZone: NowFns.timeZoneId(), // system time zone
})
// or
zdt = PlainDateFns.toZonedDateTime(pd, {
  timeZone: 'America/Chicago',
  plainTime: PlainTimeFns.fromString('04:00') // optional
})
```

The plainTime option is anything a PlainTime accepts.

### PlainTime

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'
import * as PlainDateFns from 'temporal-polyfill/fns/plaindatetime'
import * as PlainTimeFns from 'temporal-polyfill/fns/plaindatetime'
import * as NowFns from 'temporal-polyfill/fns/now'

// ZonedDateTime -> PlainTime
pt = ZonedDateTimeFns.toPlainTime(zdt)

// PlainTime -> ZonedDateTime
zdt = PlainTimeFns.toZonedDateTime(pt, {
  timeZone: Temporal.Now.timeZoneId(), // system time zone
  plainDate: PlainDateFns.fromString('2023-04-04'),
})
// or
zdt = PlainTimeFns.toZonedDateTime(pt, {
  timeZone: 'America/Chicago',
  plainDate: PlainDateFns.fromString('2023-04-04'),
})
```

The plainDate option is anthing PlainDate accepts.

### PlainYearMonth

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'
import * as PlainYearMonthFns from 'temporal-polyfill/fns/plainyearmonth'
import * as PlainDateFns from 'temporal-polyfill/fns/plaindatetime'
import * as PlainTimeFns from 'temporal-polyfill/fns/plaindatetime'
import * as NowFns from 'temporal-polyfill/fns/now'

// ZonedDateTime -> PlainYearMonth
pym = ZonedDateTimeFns.toPlainYearMonth(zdt)

// PlainYearMonth -> ZonedDateTime
zdt = PlainDateFns.toZonedDateTime(
  PlainYearMonthFns.toPlainDate(pym, { day: 12 }),
  {
    timeZone: 'America/Chicago',
    plainTime: PlainTimeFns.fromString('04:00') // optional
  }
)
```

The plainTime option is anything a PlainTime accepts.

### PlainMonthDay

```js
import * as ZonedDateTimeFns from 'temporal-polyfill/fns/zoneddatetime'
import * as PlainMonthDayFns from 'temporal-polyfill/fns/plainmonthday'
import * as PlainDateFns from 'temporal-polyfill/fns/plaindatetime'
import * as PlainTimeFns from 'temporal-polyfill/fns/plaindatetime'
import * as NowFns from 'temporal-polyfill/fns/now'

// ZonedDateTime -> PlainMonthDay
pmd = ZonedDateTimeFns.toPlainMonthDay(zdt)

// PlainMonthDay -> ZonedDateTime
zdt = PlainDateFns.toZonedDateTime(
  PlainMonthDayFns.toPlainDate(pym, { year: 2019 }),
  {
    timeZone: 'America/Chicago',
    plainTime: PlainTimeFns.fromString('04:00') // optional
  }
)
```

The plainTime option is anything a PlainTime accepts.
