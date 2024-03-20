---
outline: [2, 3]
outlineTitle: Instant
---

# Instant

## Create and Parse

### Constructor

```js
inst = new Temporal.Instant(1553906700000000000n)
```

But use `.fromEpochNanoseconds()` instead.

### From Epoch Time

Depends on the unit

#### `.fromEpochNanoseconds()`

```js
inst = Temporal.Instant.fromEpochNanoseconds(1553906700000000000n)
```

#### `.fromEpochMicroseconds()`

```js
inst = Temporal.Instant.fromEpochMicroseconds(1553906700000000n)
```

#### `.fromEpochMilliseconds()`

```js
inst = Temporal.Instant.fromEpochMilliseconds(1553906700000)
```

#### `.fromEpochSeconds()`

```js
inst = Temporal.Instant.fromEpochSeconds(1553906700)
```

### From String

Must end with a Z.

```js
inst = Temporal.Instant.from('2007-02-02T12341234Z')
```

### From Other

Accepts a ZonedDateTime (prefer ZonedDateTime::toInstant()). Also accepts another ZonedDateTime.

```js
inst = Temporal.Instant.from(anotherInst)
inst = Temporal.Instant.from(zdt)
```

### Now

```js
inst = Temporal.Now.instant()
```

## Get Epoch Time

#### `.epochNanoseconds`

```js
inst.epochNanoseconds // 1553906700000000000n
```

#### `.epochMicroseconds`

```js
inst.epochMicroseconds // 1553906700000000n
```

#### `.epochMilliseconds`

```js
inst.epochMilliseconds // 1553906700000
```

#### `.epochSeconds`

```js
inst.epochSeconds // 1553906700
```

## Math

### Add and Subtract

You can only add or subtract time units. Years/months/weeks/days are not supported.

```js
inst2 = inst.add({
  hours: 3,
  second: 30,
})

inst2 = inst.subtract({
  hours: 3,
  second: 30,
})
```

### Round

You can round to a time unit.

```js
inst.round('hour')
// or
inst.round({
  smallestUnit: 'hour',
  roundingIncrement: 1,
  roundingMode: 'halfExpand',
})
```

Learn about all the settings.

### Start of Unit

Start of hour:

```js
inst2 = inst.round({
  smallestUnit: 'hour',
  roundingMode: 'floor',
})
```

```js
import { startOfHour } from 'temporal-utils'

inst2 = startOfHour(inst)
```

Start of minute:

```js
inst2 = inst.round({
  smallestUnit: 'minute',
  roundingMode: 'floor',
})
```

```js
import { startOfMinute } from 'temporal-utils'

inst2 = startOfMinute(inst)
```

Start of second:

```js
inst2 = inst.round({
  smallestUnit: 'second',
  roundingMode: 'floor',
})
```

```js
import { startOfSecond } from 'temporal-utils'

inst2 = startOfSecond(inst)
```

Start of millisecond:

```js
inst2 = inst.round({
  smallestUnit: 'millisecond',
  roundingMode: 'floor',
})
```

```js
import { startOfMillisecond } from 'temporal-utils'

inst2 = startOfMillisecond(inst)
```

Start of microsecond:

```js
inst2 = inst.round({
  smallestUnit: 'microsecond',
  roundingMode: 'floor',
})
```

```js
import { startOfMicrosecond } from 'temporal-utils'

inst2 = startOfMicrosecond(inst)
```

### End of Unit

Explain inclusive vs exclusive.

End of hour:

```js
inst2 = inst.round({ // sufficient for exclusive end
  smallestUnit: 'hour',
  roundingMode: 'ceil',
}).subtract({ nanoseconds: 1 }) // inclusive end
```

```js
import { endOfHourExcl, endOfHourIncl } from 'temporal-utils'

inst2 = endOfHourExcl(inst)
inst2 = endOfHourIncl(inst)
```

End of minute:

```js
inst2 = inst.round({ // sufficient for exclusive end
  smallestUnit: 'minute',
  roundingMode: 'ceil',
}).subtract({ nanoseconds: 1 }) // inclusive end
```

```js
import { endOfMinuteExcl, endOfMinuteIncl } from 'temporal-utils'

inst2 = endOfMinuteExcl(inst)
inst2 = endOfMinuteIncl(inst)
```

End of second:

```js
inst2 = inst.round({ // sufficient for exclusive end
  smallestUnit: 'second',
  roundingMode: 'ceil',
}).subtract({ nanoseconds: 1 }) // inclusive end
```

```js
import { endOfSecondExcl, endOfSecondIncl } from 'temporal-utils'

inst2 = endOfSecondExcl(inst)
inst2 = endOfSecondIncl(inst)
```

End of millisecond:

```js
inst2 = inst.round({ // sufficient for exclusive end
  smallestUnit: 'millisecond',
  roundingMode: 'ceil',
}).subtract({ nanoseconds: 1 }) // inclusive end
```

```js
import { endOfMillisecondExcl, endOfMillisecondIncl } from 'temporal-utils'

inst2 = endOfMillisecondExcl(inst)
inst2 = endOfMillisecondIncl(inst)
```

End of microsecond:

```js
inst2 = inst.round({ // sufficient for exclusive end
  smallestUnit: 'microsecond',
  roundingMode: 'ceil',
}).subtract({ nanoseconds: 1 }) // inclusive end
```

```js
import { endOfMicrosecondExcl, endOfMicrosecondIncl } from 'temporal-utils'

inst2 = endOfMicrosecondExcl(inst)
inst2 = endOfMicrosecondIncl(inst)
```

### Difference

You can use `.since` instead! but best to be consistent with `.until`!

roundingMode:

- 'halfExpand' - like Math.round() - the default
- 'trunc' - like Math.trunc()
- 'floor' - like Math.floor()
- 'ceil' - like Math.ceil()

Get it as a duration with multiple types of units.

```js
dur = inst1.until(inst2, {
  largestUnit: 'hour',
  smallestUnit: 'millisecond',
  roundingIncrement: 1,
  roundingMode: 'halfExpand',
})
```

With hours:

```js
hoursRounded = inst1.until(inst2, {
  largestUnit: 'hour',
  smallestUnit: 'hour',
  roundingMode: 'halfExpand', // or trunc/floor/ceil/etc
}).hours // 6

hoursExact = inst1.until(inst2, {
  largestUnit: 'hour',
}).total('hour') // 6.5
```

```js
import { diffHours } from 'temporal-utils'

hoursRounded = diffHours(inst1, inst2, 'halfExpand')
hoursExact = diffHours(inst1, inst2)
```

With minutes:

```js
minutesRounded = inst1.until(inst2, {
  largestUnit: 'hour',
  smallestUnit: 'hour',
  roundingMode: 'halfExpand', // or trunc/floor/ceil/etc
}).hours // 6

minutesExact = inst1.until(inst2, {
  largestUnit: 'hour',
}).total('hour') // 6.5
```

```js
import { diffMinutes } from 'temporal-utils'

minutesRounded = diffMinutes(inst1, inst2, 'halfExpand')
minutesExact = diffMinutes(inst1, inst2)
```

With seconds:

```js
secondsRounded = inst1.until(inst2, {
  largestUnit: 'second',
  smallestUnit: 'second',
  roundingMode: 'halfExpand', // or trunc/floor/ceil/etc
}).seconds // 6

secondsExact = inst1.until(inst2, {
  largestUnit: 'second',
}).total('second') // 6.5
```

```js
import { diffSeconds } from 'temporal-utils'

secondsRounded = diffSeconds(inst1, inst2, 'halfExpand')
secondsExact = diffSeconds(inst1, inst2)
```

With milliseconds:

```js
msRounded = inst1.until(inst2, {
  largestUnit: 'millisecond',
  smallestUnit: 'millisecond',
  roundingMode: 'halfExpand', // or trunc/floor/ceil/etc
}).milliseconds // 6

msExact = inst1.until(inst2, {
  largestUnit: 'millisecond',
}).total('millisecond') // 6.5
```

```js
import { diffMilliseconds } from 'temporal-utils'

msRounded = diffMilliseconds(inst1, inst2, 'halfExpand')
msExact = diffMilliseconds(inst1, inst2)
```

With microseconds:

```js
μsRounded = inst1.until(inst2, {
  largestUnit: 'microsecond',
  smallestUnit: 'microsecond',
  roundingMode: 'halfExpand', // or trunc/floor/ceil/etc
}).microseconds // 6

μsExact = inst1.until(inst2, {
  largestUnit: 'microsecond',
}).total('microsecond') // 6.5
```

```js
import { diffMicroseconds } from 'temporal-utils'

μsRounded = diffMicroseconds(inst1, inst2, 'halfExpand')
μsExact = diffMicroseconds(inst1, inst2)
```

With nanoseconds:

```js
nsRounded = inst1.until(inst2, {
  largestUnit: 'nanosecond',
  smallestUnit: 'nanosecond',
  roundingMode: 'halfExpand', // or trunc/floor/ceil/etc
  roundingIncrement: 10,
}).nanoseconds

nsUnrounded = inst2.epochNanoseconds - inst1.epochNanoseconds
```

```js
import { diffNanoseconds } from 'temporal-utils'

nsRounded = diffNanoseconds(inst1, inst2, 'halfExpand')
nsUnrounded = diffNanoseconds(inst1, inst2)
```

### Compare and Sort

```js
inst1 = Temporal.Instant.from('2024-03-06T12:30Z')
inst2 = Temporal.Instant.from('2024-03-06T12:30Z')

Temporal.Instant.compare(inst1, inst2)
// -1 because inst1 < inst2

Temporal.Instant.compare(inst1, inst2)
// 1 because inst1 > inst2

Temporal.Instant.compare(inst1, inst1)
// 0 because inst1 = zdtPast
```

TODO: write about sorting!

### Equality

epochNanoseconds must be identical.

```js
inst1 = Temporal.Instant.from('2024-03-06T12:30Z')
inst2 = Temporal.Instant.from('2024-03-06T12:30Z')

inst1.equals(inst2) // false
inst1.equals(inst1) // true (of course it's equal to self)
```

## Stringfy

```js
inst.toString() // '2024-03-06T12:30Z'
```

For options, consult the spec.

### ISO String

### Localized String

For options, consult Intl.DateTimeFormat options.

Use the timeZone option!

It's possible to call directly on the object:

```js
// current locale
inst.toLocaleString() // '3/6/2024, 3:58:45 PM EST'

// specific locale
inst.toLocaleString('fr') // '06/03/2024 15:59:31 UTC−5'

// specific locale + options
inst.toLocaleString('fr', { // 'mercredi 6 mars 2024'
  dateStyle: 'full',
})
```

However, it's much more performant to reuse a format:

```js
dtf = new Intl.DateTimeFormat('fr', {
  dateStyle: 'full'
})

dtf.format(inst) // 'mercredi 6 mars 2024'
```

## Convert

<script setup>
  import ZonedDateTimeToInstant from '../../components/conversions/zoneddatetime-to-instant.md'
  import InstantToPlainDateTime from '../../components/conversions/instant-to-plaindatetime.md'
  import PlainDateTimeToInstant from '../../components/conversions/plaindatetime-to-instant.md'
  import InstantToPlainDate from '../../components/conversions/instant-to-plaindate.md'
  import PlainDateToInstant from '../../components/conversions/plaindate-to-instant.md'
  import InstantToPlainTime from '../../components/conversions/instant-to-plaintime.md'
  import PlainTimeToInstant from '../../components/conversions/plaintime-to-instant.md'
  import InstantToPlainYearMonth from '../../components/conversions/instant-to-plainyearmonth.md'
  import PlainYearMonthToInstant from '../../components/conversions/plainyearmonth-to-instant.md'
  import InstantToPlainMonthDay from '../../components/conversions/instant-to-plainmonthday.md'
  import PlainMonthDayToInstant from '../../components/conversions/plainmonthday-to-instant.md'
</script>

### Legacy Date

Instant -> Date

```js
legacyDate = new Date(inst.epochMilliseconds)
```

Date -> Instant

```js
inst = legacyDate.toTemporalInstant()
```

### ZonedDateTime

<InstantToZonedDateTime />

<ZonedDateTimeToInstant />

### PlainDateTime

<InstantToPlainDateTime />

<PlainDateTimeToInstant />

### PlainDate

<InstantToPlainDate />

<PlainDateToInstant />

### PlainTime

<InstantToPlainTime />

<PlainTimeToInstant />

### PlainYearMonth

<InstantToPlainYearMonth />

<PlainYearMonthToInstant />

### PlainMonthDay

<InstantToPlainMonthDay />

<PlainMonthDayToInstant />
