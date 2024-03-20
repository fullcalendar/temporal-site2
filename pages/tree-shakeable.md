# Tree-shakeable API

Unlike normal API where you can pass string/obj loosely, func api is strict. Must always be proper object.
No interchangeable arg types

Talk about code transform,
Talk about manual conversions.

ground rules:
- no Calendar/TimeZone protocols

bare-metal

Extra utilities too
Add non-standard utils too

## PlainDate

| Standard API | Tree-shakeable API |
| ------------ | ------------------ |
| `new Temporal.PlainDate(...args)` | `PlainDateFns.create(...args)` |
| `Temporal.PlainDate.from(fields, opts)` | `PlainDateFns.fromFields(fields, opts)` |
| `Temporal.PlainDate.from(str)` | `PlainDateFns.fromString(str)` |
| `Temporal.PlainDate.compare(a, b)` | `PlainDateFns.compare(a, b)` |
| `a instanceof Temporal.PlainDate` | `PlainDateFns.isInstance(a)` |
| `pd.era` | `PlainDateFns.getFields(pd).era` |
| `pd.eraYear` | `PlainDateFns.getFields(pd).eraYear` |
| `pd.year` | `PlainDateFns.getFields(pd).year` |
| `pd.month` | `PlainDateFns.getFields(pd).month` |
| `pd.monthCode` | `PlainDateFns.getFields(pd).monthCode` |
| `pd.day` | `PlainDateFns.getFields(pd).day` |
| `pd.calendarId` | `PlainDateFns.calendarId(pd)` |
| `pd.dayOfWeek` | `PlainDateFns.dayOfWeek(pd)` |
| `pd.dayOfYear` | `PlainDateFns.dayOfYear(pd)` |
| `pd.weekOfYear` | `PlainDateFns.weekOfYear(pd)` |
| `pd.yearOfWeek` | `PlainDateFns.yearOfWeek(pd)` |
| `pd.daysInWeek` | `PlainDateFns.daysInWeek(pd)` |
| `pd.daysInMonth` | `PlainDateFns.daysInMonth(pd)` |
| `pd.daysInYear` | `PlainDateFns.daysInYear(pd)` |
| `pd.monthsInYear` | `PlainDateFns.monthsInYear(pd)` |
| `pd.inLeapYear` | `PlainDateFns.inLeapYear(pd)` |
| `pd.with(fields, opts)` | `PlainDateFns.withFields(pd, fields, opts)` |
| `pd.withCalendar(cId)` | `PlainDateFns.withCalendar(pd, cId)` |
| `pd.add(dur)` | `PlainDateFns.add(pd, dur)` |
| `pd.subtract(dur)` | `PlainDateFns.subtract(pd, dur)` |
| `pd.until(other)` | `PlainDateFns.until(pd, other)` |
| `pd.since(other)` | `PlainDateFns.since(pd, other)` |
| `pd.equals(other)` | `PlainDateFns.equals(pd, others)` |
| `pd.toZonedDateTime(opts)` | `PlainDateFns.toZonedDateTime(pd, opts)` |
| `pd.toPlainDateTime(pt)` | `PlainDateFns.toPlainDateTime(pd, pt)` |
| `pd.toPlainYearMonth()` | `PlainDateFns.toPlainYearMonth(pd)` |
| `pd.toPlainMonthDay()` | `PlainDateFns.toPlainMonthDay(pd)` |
| `pd.toLocaleString(locale, opts)` | `PlainDateFns.toLocaleString(pd, locale, opts)` |
| `pd.toString(opts)` | `PlainDateFns.toString(pd, opts)` |
| `pd.toJSON()` | `PlainDateFns.toString(pd)` |
| `pd.getISOFields()` | `PlainDateFns.getISOFields(pd)` |
| `pd.getCalendar()` | &mdash; |
| `pd.valueOf()` | &mdash; |

## PlainDateTime

| Standard API | Tree-shakeable API |
| ------------ | ------------------ |
| `new Temporal.PlainDateTime(...args)` | `PlainDateTimeFns.create(...args)` |
| `Temporal.PlainDateTime.from(fields, opts)` | `PlainDateTimeFns.fromFields(fields, opts)` |
| `Temporal.PlainDateTime.from(str)` | `PlainDateTimeFns.fromString(str)` |
| `Temporal.PlainDateTime.compare(a, b)` | `PlainDateTimeFns.compare(a, b)` |
| `a instanceof Temporal.PlainDateTime` | `PlainDateTimeFns.isInstance(a)` |
| `pdt.era` | `PlainDateTimeFns.getFields(pdt).era` |
| `pdt.eraYear` | `PlainDateTimeFns.getFields(pdt).eraYear` |
| `pdt.year` | `PlainDateTimeFns.getFields(pdt).year` |
| `pdt.month` | `PlainDateTimeFns.getFields(pdt).month` |
| `pdt.monthCode` | `PlainDateTimeFns.getFields(pdt).monthCode` |
| `pdt.day` | `PlainDateTimeFns.getFields(pdt).day` |
| `pdt.hour` | `PlainDateTimeFns.getFields(pdt).hour` |
| `pdt.minute` | `PlainDateTimeFns.getFields(pdt).minute` |
| `pdt.second` | `PlainDateTimeFns.getFields(pdt).second` |
| `pdt.millisecond` | `PlainDateTimeFns.getFields(pdt).millisecond` |
| `pdt.microsecond` | `PlainDateTimeFns.getFields(pdt).microsecond` |
| `pdt.nanosecond` | `PlainDateTimeFns.getFields(pdt).nanosecond` |
| `pdt.calendarId` | `PlainDateTimeFns.getFields(pdt).calendarId` |
| `pdt.dayOfWeek` | `PlainDateTimeFns.dayOfWeek(pdt)` |
| `pdt.dayOfYear` | `PlainDateTimeFns.dayOfYear(pdt)` |
| `pdt.weekOfYear` | `PlainDateTimeFns.weekOfYear(pdt)` |
| `pdt.yearOfWeek` | `PlainDateTimeFns.yearOfWeek(pdt)` |
| `pdt.daysInWeek` | `PlainDateTimeFns.daysInWeek(pdt)` |
| `pdt.daysInMonth` | `PlainDateTimeFns.daysInMonth(pdt)` |
| `pdt.daysInYear` | `PlainDateTimeFns.daysInYear(pdt)` |
| `pdt.monthsInYear` | `PlainDateTimeFns.monthsInYear(pdt)` |
| `pdt.inLeapYear` | `PlainDateTimeFns.inLeapYear(pdt)` |
| `pdt.with(fields, opts)` | `PlainDateTimeFns.withFields(pdt, fields, opts)` |
| `pdt.withPlainTime(pt)` | `PlainDateTimeFns.withPlainTime(pdt, pt)` |
| `pdt.withPlainDate(pd)` | `PlainDateTimeFns.withPlainDate(pdt, pd)` |
| `pdt.withCalendar(cId)` | `PlainDateTimeFns.withCalendar(pdt, cId)` |
| `pdt.add(dur, opts)` | `PlainDateTimeFns.add(pdt, dur, opts)` |
| `pdt.subtract(dur, opts)` | `PlainDateTimeFns.subtract(pdt, dur, opts)` |
| `pdt.until(other, opts)` | `PlainDateTimeFns.until(pdt, other, opts)` |
| `pdt.since(other, opts)` | `PlainDateTimeFns.since(pdt, other, opts)` |
| `pdt.round(opts)` | `PlainDateTimeFns.round(pdt, opts)` |
| `pdt.equals(other)` | `PlainDateTimeFns.equals(pdt, other)` |
| `pdt.toZonedDateTime(tzId, opts)` | `PlainDateTimeFns.toZonedDateTime(pdt, tzId, opts)` |
| `pdt.toPlainDate()` | `PlainDateTimeFns.toPlainDate(pdt)` |
| `pdt.toPlainYearMonth()` | `PlainDateTimeFns.toPlainYearMonth(pdt)` |
| `pdt.toPlainMonthDay()` | `PlainDateTimeFns.toPlainMonthDay(pdt)` |
| `pdt.toPlainTime()` | `PlainDateTimeFns.toPlainTime(pdt)` |
| `pdt.toLocaleString(locale, opts)` | `PlainDateTimeFns.toLocaleString(pdt, locale, opts)` |
| `pdt.toString(opts)` | `PlainDateTimeFns.toString(pdt, opts)` |
| `pdt.toJSON()` | `PlainDateTimeFns.toString(pdt)` |
| `pdt.getISOFields()` | `PlainDateTimeFns.getISOFields(pdt)` |
| `pdt.getCalendar()` | &mdash; |
| `pdt.valueOf()` | &mdash; |

## ZonedDateTime

| Standard API | Tree-shakeable API |
| ------------ | ------------------ |
| `new Temporal.ZonedDateTime(...args)` | `ZonedDateTimeFns.create(...args)` |
| `Temporal.ZonedDateTime.from(fields, opts)` | `ZonedDateTimeFns.fromFields(fields, opts)` |
| `Temporal.ZonedDateTime.from(str, opts)` | `ZonedDateTimeFns.fromString(str, opts)` |
| `Temporal.ZonedDateTime.compare(a, b)` | `ZonedDateTimeFns.compare(a, b)` |
| `a instanceof Temporal.ZonedDateTime` | `ZonedDateTimeFns.isInstance(a)` |
| `zdt.era` | `ZonedDateTimeFns.getFields(zdt).era` |
| `zdt.eraYear` | `ZonedDateTimeFns.getFields(zdt).eraYear` |
| `zdt.year` | `ZonedDateTimeFns.getFields(zdt).year` |
| `zdt.month` | `ZonedDateTimeFns.getFields(zdt).month` |
| `zdt.monthCode` | `ZonedDateTimeFns.getFields(zdt).monthCode` |
| `zdt.day` | `ZonedDateTimeFns.getFields(zdt).day` |
| `zdt.hour` | `ZonedDateTimeFns.getFields(zdt).hour` |
| `zdt.minute` | `ZonedDateTimeFns.getFields(zdt).minute` |
| `zdt.second` | `ZonedDateTimeFns.getFields(zdt).second` |
| `zdt.millisecond` | `ZonedDateTimeFns.getFields(zdt).millisecond` |
| `zdt.microsecond` | `ZonedDateTimeFns.getFields(zdt).microsecond` |
| `zdt.nanosecond` | `ZonedDateTimeFns.getFields(zdt).nanosecond` |
| `zdt.epochSeconds` | `ZonedDateTimeFns.epochSeconds(zdt)` |
| `zdt.epochMilliseconds` | `ZonedDateTimeFns.epochMilliseconds(zdt)` |
| `zdt.epochMicroseconds` | `ZonedDateTimeFns.epochMicroseconds(zdt)` |
| `zdt.epochNanoseconds` | `ZonedDateTimeFns.epochNanoseconds(zdt)` |
| `zdt.calendarId` | `ZonedDateTimeFns.calendarId(zdt)` |
| `zdt.timeZoneId` | `ZonedDateTimeFns.timeZoneId(zdt)` |
| `zdt.dayOfWeek` | `ZonedDateTimeFns.dayOfWeek(zdt)` |
| `zdt.dayOfYear` | `ZonedDateTimeFns.dayOfYear(zdt)` |
| `zdt.weekOfYear` | `ZonedDateTimeFns.weekOfYear(zdt)` |
| `zdt.yearOfWeek` | `ZonedDateTimeFns.yearOfWeek(zdt)` |
| `zdt.daysInWeek` | `ZonedDateTimeFns.daysInWeek(zdt)` |
| `zdt.daysInMonth` | `ZonedDateTimeFns.daysInMonth(zdt)` |
| `zdt.daysInYear` | `ZonedDateTimeFns.daysInYear(zdt)` |
| `zdt.monthsInYear` | `ZonedDateTimeFns.monthsInYear(zdt)` |
| `zdt.inLeapYear` | `ZonedDateTimeFns.inLeapYear(zdt)` |
| `zdt.hoursInDay` | `ZonedDateTimeFns.hoursInDay(zdt)` |
| `zdt.offsetNanoseconds` | `ZonedDateTimeFns.offsetNanoseconds(zdt)` |
| `zdt.offset` | `ZonedDateTimeFns.offset(zdt)` |
| `zdt.with(fields, opts)` | `ZonedDateTimeFns.withFields(zdt, fields, opts)` |
| `zdt.withPlainTime(pt)` | `ZonedDateTimeFns.withPlainTime(zdt, pt)` |
| `zdt.withPlainDate(pd)` | `ZonedDateTimeFns.withPlainDate(zdt, pd)` |
| `zdt.withCalendar(cId)` | `ZonedDateTimeFns.withCalendar(zdt, cId)` |
| `zdt.withTimeZone(tzId)` | `ZonedDateTimeFns.withTimeZone(zdt, tzId)` |
| `zdt.add(dur, opts)` | `ZoneDateTimeFns.add(zdt, dur, opts)` |
| `zdt.subtract(dur, opts)` | `ZoneDateTimeFns.subtract(zdt, dur, opts)` |
| `zdt.until(other, opts)` | `ZoneDateTimeFns.until(zdt, other, opts)` |
| `zdt.since(other, opts)` | `ZoneDateTimeFns.since(zdt, other, opts)` |
| `zdt.round(opts)` | `ZoneDateTimeFns.round(zdt, opts)` |
| `zdt.startOfDay()` | `ZoneDateTimeFns.startOfDay(zdt)` |
| `zdt.equals(other)` | `ZoneDateTimeFns.equals(zdt, other)` |
| `zdt.toInstant()` | `ZonedDateTimeFns.toInstant(zdt)` |
| `zdt.toPlainDate()` | `ZonedDateTimeFns.toPlainDate(zdt)` |
| `zdt.toPlainTime()` | `ZonedDateTimeFns.toPlainTime(zdt)` |
| `zdt.toPlainDateTime()` | `ZonedDateTimeFns.toPlainDateTime(zdt)` |
| `zdt.toPlainYearMonth()` | `ZonedDateTimeFns.toPlainYearMonth(zdt)` |
| `zdt.toPlainMonthDay()` | `ZonedDateTimeFns.toPlainMonthDay(zdt)` |
| `zdt.toLocaleString(locale, opts)` | `ZonedDateTimeFns.toLocaleString(zdt, locale, opts)` |
| `zdt.toString(opts)` | `ZonedDateTimeFns.toString(zdt, opts)` |
| `zdt.toJSON()` | `ZonedDateTimeFns.toString(zdt)` |
| `zdt.getISOFields()` | `ZonedDateTimeFns.getISOFields(zdt)` |
| `zdt.getCalendar()` | &mdash; |
| `zdt.getTimeZone()` | &mdash; |
| `zdt.valueOf()` | &mdash; |

## Instant

| Standard API | Tree-shakeable API |
| ------------ | ------------------ |
| `new Temporal.Instant(ns)` | `InstantFns.create(ns)` |
| `Temporal.Instant.from(str)` | `InstantFns.fromString(str)` |
| `Temporal.Instant.fromEpochSeconds(sec)` | `InstantFns.fromEpochSeconds(sec)` |
| `Temporal.Instant.fromEpochMilliseconds(ms)` | `InstantFns.fromEpochMilliseconds(ms)` |
| `Temporal.Instant.fromEpochMicroseconds(μs)` | `InstantFns.fromEpochMicroseconds(μs)` |
| `Temporal.Instant.fromEpochNanoseconds(ns)` | `InstantFns.fromEpochNanoseconds(ns)` |
| `Temporal.Instant.compare(a, b)` | `InstantFns.compare(a, b)` |
| `a instanceof Temporal.Instant` | `InstantFns.isInstance(a)` |
| `inst.epochSeconds` | `InstantFns.epochSeconds(inst)` |
| `inst.epochMilliseconds` | `InstantFns.epochMilliseconds(inst)` |
| `inst.epochMicroseconds` | `InstantFns.epochMicroseconds(inst)` |
| `inst.epochNanoseconds` | `InstantFns.epochNanoseconds(inst)` |
| `inst.add(dur)` | `InstantFns.add(inst, dur)` |
| `inst.subtract(dur)` | `InstantFns.subtract(inst, dur)` |
| `inst.until(other, opts)` | `InstantFns.until(inst, other, opts)` |
| `inst.since(other, opts)` | `InstantFns.since(inst, other, opts)` |
| `inst.round(opts)` | `InstantFns.round(inst, opts)` |
| `inst.equals(other)` | `InstantFns.equals(inst, other)` |
| `inst.toZonedDateTimeISO(tzId)` | `InstantFns.toZonedDateTimeISO(inst, tzId)` |
| `inst.toZonedDateTime(opts)` | `InstantFns.toZonedDateTime(inst, opts)` |
| `inst.toLocaleString(locale, opts)` | `InstantFns.toLocaleString(inst, locale, opts)` |
| `inst.toString(opts)` | `InstantFns.toString(inst, opts)` |
| `inst.toJSON()` | `InstantFns.toString(inst)` |
| `inst.valueOf()` | &mdash; |

## Duration

| Standard API | Tree-shakeable API |
| ------------ | ------------------ |
| `new Temporal.Duration(...args)` | `DurationFns.create(...args)` |
| `Temporal.Duration.from(fields)` | `DurationFns.fromFields(fields)` |
| `Temporal.Duration.from(str)` | `DurationFns.fromString(str)` |
| `Temporal.Duration.compare(a, b, opts)` | `DurationFns.compare(a, b, opts)` |
| `a instanceof Temporal.Duration` | `DurationFns.isInstance(a)` |
| `dur.years` | `dur.years` (same) |
| `dur.months` | `dur.months` (same) |
| `dur.weeks` | `dur.weeks` (same) |
| `dur.days` | `dur.days` (same) |
| `dur.hours` | `dur.hours` (same) |
| `dur.minutes` | `dur.minutes` (same) |
| `dur.seconds` | `dur.seconds` (same) |
| `dur.milliseconds` | `dur.milliseconds` (same) |
| `dur.microseconds` | `dur.microseconds` (same) |
| `dur.nanoseconds` | `dur.nanoseconds` (same) |
| `dur.sign` | `dur.sign` (same) |
| `dur.blank` | `DurationFns.blank(dur)` |
| `dur.with(fields)` | `DurationFns.withFields(dur, fields)` |
| `dur.add(other, opts)` | `DurationFns.add(dur, other, opts)` |
| `dur.subtract(other, opts)` | `DurationFns.subtract(dur, other, opts)` |
| `dur.negated()` | `DurationFns.negated(dur)` |
| `dur.abs()` | `DurationFns.abs(dur)` |
| `dur.round(opts)` | `DurationFns.round(dur, opts)` |
| `dur.total(opts)` | `DurationFns.total(dur, opts)` |
| `dur.toLocaleString(locale, opts)` | `DurationFns.toLocaleString(dur, locale, opts)` |
| `dur.toString(opts)` | `DurationFns.toString(dur, opts)` |
| `dur.toJSON()` | `DurationFns.toString(dur)` |
| `dur.valueOf()` | &mdash; |

## PlainTime

| Standard API | Tree-shakeable API |
| ------------ | ------------------ |
| `new Temporal.PlainTime(...args)` | `PlainTimeFns.create(...args)` |
| `Temporal.PlainTime.from(fields, opts)` | `PlainTimeFns.fromFields(fields, opts)` |
| `Temporal.PlainTime.from(str)` | `PlainTimeFns.fromString(str)` |
| `Temporal.PlainTime.compare(a, b)` | `PlainTimeFns.compare(a, b)` |
| `a instanceof Temporal.PlainTime` | `PlainTimeFns.isInstance(a)` |
| `pt.hour` | `PlainTimeFns.getFields(pt).hour` |
| `pt.minute` | `PlainTimeFns.getFields(pt).minute` |
| `pt.second` | `PlainTimeFns.getFields(pt).second` |
| `pt.millisecond` | `PlainTimeFns.getFields(pt).millisecond` |
| `pt.microsecond` | `PlainTimeFns.getFields(pt).microsecond` |
| `pt.nanosecond` | `PlainTimeFns.getFields(pt).nanosecond` |
| `pt.with(fields, opts)` | `PlainTimeFns.withFields(pt, fields, opts)` |
| `pt.add(dur)` | `PlainTimeFns.add(pt, dur)` |
| `pt.subtract(dur)` | `PlainTimeFns.subtract(pt, dur)` |
| `pt.until(other, opts)` | `PlainTimeFns.until(pt, other, opts)` |
| `pt.since(other, opts)` | `PlainTimeFns.since(pt, other, opts)` |
| `pt.round(opts)` | `PlainTimeFns.round(pt, opts)` |
| `pt.equals(other)` | `PlainTimeFns.equals(pt, other)` |
| `pt.toZonedDateTime(opts)` | `PlainTimeFns.toZonedDateTime(pt, opts)` |
| `pt.toPlainDateTime(pd)` | `PlainTimeFns.toPlainDateTime(pt, pd)` |
| `pt.toLocaleString(locale, opts)` | `PlainTimeFns.toLocaleString(pt, locale, opts)` |
| `pt.toString(opts)` | `PlainTimeFns.toString(pt, opts)` |
| `pt.toJSON()` | `PlainTimeFns.toString(pt)` |
| `pt.getISOFields()` | `PlainTimeFns.getISOFields(pt)` |
| `pt.valueOf()` | &mdash; |

## PlainYearMonth

| Standard API | Tree-shakeable API |
| ------------ | ------------------ |
| `new Temporal.PlainYearMonth(...args)` | `PlainYearMonthFns.create(...args)` |
| `Temporal.PlainYearMonth.from(fields, opts)` | `PlainYearMonthFns.fromFields(fields, opts)` |
| `Temporal.PlainYearMonth.from(str)` | `PlainYearMonthFns.fromString(str)` |
| `a instanceof Temporal.PlainYearMonth` | `PlainYearMonthFns.isInstance(a)` |
| `pym.era` | `PlainYearMonthFns.getFields(pym).era` |
| `pym.eraYear` | `PlainYearMonthFns.getFields(pym).eraYear` |
| `pym.year` | `PlainYearMonthFns.getFields(pym).year` |
| `pym.month` | `PlainYearMonthFns.getFields(pym).month` |
| `pym.monthCode` | `PlainYearMonthFns.getFields(pym).monthCode` |
| `pym.calendarId` | `PlainYearMonthFns.calendarId(pym)` |
| `pym.daysInMonth` | `PlainYearMonthFns.daysInMonth(pym)` |
| `pym.daysInYear` | `PlainYearMonthFns.daysInYear(pym)` |
| `pym.monthsInYear` | `PlainYearMonthFns.monthsInYear(pym)` |
| `pym.inLeapYear` | `PlainYearMonthFns.inLeapYear(pym)` |
| `pym.with(fields, opts)` | `PlainYearMonthFns.with(pym, fields, opts)` |
| `pym.add(dur, opts)` | `PlainYearMonthFns.add(pym, dur, opts)` |
| `pym.subtract(dur, opts)` | `PlainYearMonthFns.subtract(pym, dur, opts)` |
| `pym.until(dur, opts)` | `PlainYearMonthFns.until(pym, dur, opts)` |
| `pym.since(dur, opts)` | `PlainYearMonthFns.since(pym, dur, opts)` |
| `pym.equals(other)` | `PlainYearMonthFns.equals(pym, other)` |
| `pym.toPlainDate(opts)` | `PlainYearMonthFns.toPlainDate(pym, opts)` |
| `pym.toLocaleString(locale, opts)` | `PlainYearMonthFns.toLocaleString(pym, locale, opts)` |
| `pym.toString(opts)` | `PlainYearMonthFns.toString(pym, opts)` |
| `pym.toJSON()` | `PlainYearMonthFns.toString(pym)` |
| `pym.getISOFields()` | `PlainYearMonthFns.getISOFields(pym)` |
| `pym.getCalendar()` | &mdash; |
| `pym.valueOf()` | &mdash; |

## PlainMonthDay

| Standard API | Tree-shakeable API |
| ------------ | ------------------ |
| `new Temporal.PlainMonthDay(...args)` | `PlainMonthDayFns.create(...args)` |
| `Temporal.PlainMonthDay.from(fields, opts)` | `PlainMonthDayFns.fromFields(fields, opts)` |
| `Temporal.PlainMonthDay.from(str)` | `PlainMonthDayFns.fromString(str)` |
| `a instanceof Temporal.PlainMonthDay` | `PlainMonthDayFns.isInstance(a)` |
| `pmd.monthCode` | `PlainMonthDayFns.getFields(pmd).monthCode` |
| `pmd.day` | `PlainMonthDayFns.getFields(pmd).day` |
| `pmd.calendarId` | `PlainMonthDayFns.calendarId(pmd)` |
| `pmd.with(fields, opts)` | `PlainMonthDayFns.withFields(pmd, fields, opts)` |
| `pmd.equals(other)` | `PlainMonthDayFns.equals(pmd, other)` |
| `pmd.toString(opts)` | `PlainMonthDayFns.toString(pmd, opts)` |
| `pmd.toLocaleString(locale, opts)` | `PlainMonthDayFns.toLocaleString(pmd, locale, opts)` |
| `pmd.toJSON()` | `PlainMonthDayFns.toString(pmd)` |
| `pmd.toPlainDate(opts)` | `PlainMonthDayFns.toPlainDate(pmd, opts)` |
| `pmd.getCalendar()` | `PlainMonthDayFns.getCalendar(pmd)` |
| `pmd.getISOFields()` | `PlainMonthDayFns.getISOFields(pmd)` |
| `pmd.valueOf()` | &mdash; |
