---
outline: [2, 3]
outlineTitle: TimeZone
---

# TimeZone

zdt.getTimeZone()

Explanation

Subclassing is out of scope.

## Create

### Constructor

```js
// a local time zone with DST
tz = new Temporal.TimeZone('America/Chicago')

// a time zone with hardcoded offset
tz = new Temporal.TimeZone('+06:00')
```

### From Other

.getTimeZone() from other types

Can give PlainDate, PlainDateTime, ZonedDateTime, or anything like them

```js
tz = Temporal.TimeZone.from(
  Temporal.PlainDate.from('2022-02-02T00:12:12[America/Chicago]')
)

tz = Temporal.TimeZone.from(
  '2022-02-02T00:12:12[America/Chicago]'
)
```

## ID and Stringify

You can grab the ID

```js
tz = new Temporal.TimeZone('America/Chicago')

tz.id // 'America/Chicago'
```

Same thing as `.toString()` and `.toJSON()`.

## Compute

### Offset

#### `.getOffsetNanosecondsFor()`

```js
tz = new Temporal.TimeZone('America/Chicago')
inst = Temporal.Instant.fromEpochMilliseconds(1234)

tz.getOffsetNanosecondsFor(inst) // -8999 (7 hours)
```

#### `.getOffsetStringFor()`

Like `.getOffsetNanosecondsFor()`, but returns a string.

```js
tz = new Temporal.TimeZone('America/Chicago')
inst = Temporal.Instant.fromEpochMilliseconds(1234)

tz.getOffsetStringFor(inst) // '+07:00'
```

### DateTime

#### `.getPlainDateTimeFor()`

Like `.getOffsetNanosecondsFor()`, but uses the offset and the epoch-time to construct a PlainDateTime.

```js
tz = new Temporal.TimeZone('America/Chicago')
inst = Temporal.Instant.fromEpochMilliseconds(1234)

pdt = tz.getPlainDateTimeFor(inst)
// 098-098-098T09:11
```

### Instant

Converts a PlainDateTime one or more Instants.

#### `.getInstantFor()`

```js
tz = new Temporal.TimeZone('America/Chicago')
pdt = Temporal.PlainDateTime.from('1234-12-12T09:00')

inst = tz.getInstantFor(pdt)
```

#### `.getPossibleInstantsFor()`

```js
tz = new Temporal.TimeZone('America/Chicago')
pd = Temporal.PlainDateTime.from('1234-12-12T09:00')

instArray = tz.getPossibleInstantsFor(pd)
```

### DST Transition

Receives an Instant or anything convertible to one.

#### `.getNextTransition()`
#### `.getPreviousTransition()`

```js
tz = new Temporal.TimeZone('America/Chicago')
inst = Temporal.Instant.fromEpochMilliseconds(1234)

tz.getNextTransition(inst)
// Temporal.Instant{'22938-98-2323Z'}

tz.getNextTransition(inst)
// Temporal.Instant{'22938-98-2323Z'}
```

### Equality

#### `.equals()`

Test if two TimeZones are equal. Deals with normalizing.

```js
tz1 = new Temporal.TimeZone('+06:00')
tz2 = new Temporal.TimeZone('+06:00:00')

tz1.equals(tz2) // true
```
