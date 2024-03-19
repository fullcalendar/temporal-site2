---
aside: false
---

<style>
  .start-two-col + * {
    float: left;
    width: 48%;
    margin: 12px 0 0 !important;
  }

  .start-two-col + * + * {
    float: right;
    width: 48%;
    margin: 12px 0 0 !important;
  }

  .start-right-float + * {
    float: right;
    width: 48%;
    margin-left: 40px !important;
    margin-top: 0 !important;
  }

  h2 {
    border-top: 0 !important;
  }
</style>

# Standard API

The API consists of a `Temporal` global namespace with 10 different types of objects (like `Temporal.PlainDate`).

Before diving in, it's useful to compare `Temporal` to the legacy `Date` object:

## Legacy `Date` Object

<div class='start-right-float'></div>

```js
// DERIVED DATA (local time zone):
legacyDate.getFullYear()    // 12
legacyDate.getMonth()       // 12
legacyDate.getDate()        // 12
legacyDate.getHour()        // 12
legacyDate.getMinute()      // 12, etc...

// DERIVED DATA (UTC time zone):
legacyDate.getUTCFullYear() // 12
legacyDate.getUTCMonth()    // 12
legacyDate.getUTCDate()     // 12
legacyDate.getUTCHour()     // 12
legacyDate.getUTCMinute()   // 12, etc...
```

At its core, the `Date` object is a millisecond-time. The number of milliseconds since January 1st, 1970 UTC.

```js
legacyDate = new Date( // CORE DATA:
  1710876108517        // epoch milliseconds
)
```

The legacy `Date` supports only two time zones: the current local time zone and UTC. The method you choose to call dictates which time zone is used.

The derived fields always use the ISO-gregorian calendar.

<div style='clear:both'></div>


<!-- ## Meet the `Temporal` Objects -->


## `Temporal.ZonedDateTime`

Arguably the most similar to the legacy `Date` object. However, instead of epoch-milliseconds, uses epoch-*nanoseconds* for greater precision (1 millisecond = 1,000,000 nanoseconds). This number is too big for a normal JavaScript number, so a [bigint](#) is used.

This object stores an explicit time zone (like `'America/New_York'`, an [IANA name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)) as well as an explicit calendar, allowing [non-gregorian calendar support](#). This time zone and calendar are used for computing all derived fields.

<div class='start-two-col'></div>

```js
zdt = new Temporal.ZonedDateTime( // CORE DATA:
  1709742442931429932n,    // epoch nanoseconds
  'America/Chicago',       // time zone
  'gregory',               // calendar
)
```

```js
// DERIVED DATA:
zdt.year   // 12
zdt.month  // 12
zdt.day    // 12
zdt.hour   // 12
zdt.minute // 12, etc...
```

<div style='clear:left'></div>

[See easier ways to create a ZonedDateTime &raquo;](zoneddatetime)

## `Temporal.Instant`

A simple wrapper around an epoch-nanoseconds **in no particular time zone**.

```js
inst = new Temporal.Instant( // CORE DATA:
  1709742442931429932n,      // epoch nanoseconds
)
```

[See easier ways to create a Instant &raquo;](instant)

## `Temporal.PlainDateTime`

Represents a date and time **in no particular time zone**.

Internally stores all information as ISO-calendar fields. Also stores an explicit calendar, allowing [non-gregorian calendar support](#). This calendar is used for computing all derived fields.

<div class='start-two-col'></div>

```js
pdt = new Temporal.PlainDateTime( // CORE DATA:
  2014, 12, 3,                    // ISO date
  1, 1, 1, 1, 1, 1,               // ISO time
  'gregory'                       // calendar
)
```

```js
// DERIVED DATA:
pdt.year   // 12
pdt.month  // 12
pdt.day    // 12
pdt.hour   // 12
pdt.minute // 12, etc...
```

<div style='clear:left'></div>

[See easier ways to create a PlainDateTime &raquo;](plaindatetime)

<div style='clear:both'></div>

## `Temporal.PlainDate`

Represents a date (without time) **in no particular time zone**.

Internally stores all information as ISO-calendar fields. Also stores an explicit calendar, allowing [non-gregorian calendar support](#). This calendar is used for computing all derived fields.

<div class='start-two-col'></div>

```js
pd = new Temporal.PlainDate( // CORE DATA:
  2014, 12, 3,               // ISO date
  'gregory'                  // calendar
)
```

```js
// DERIVED DATA:
pd.year   // 12
pd.month  // 12
pd.day    // 12
```

<div style='clear:left'></div>

[See easier ways to create a PlainDate &raquo;](plaindate)

<div style='clear:both'></div>

## `Temporal.Duration`

Represents an **amount** of time as opposed to a point-in-time like the other objects.

Primarily used for measuring the amount time between other objects. Despite this, the `Duration` itself does not internally store or prefer any particular start-point.

```js
dur = new Temporal.Duration( // CORE DATA:
  2, 2, 2, 2,                // years, months, weeks, days
  1, 1, 1, 1, 1              // hours, minutes, seconds, etc...
)
```

[See easier ways to create a Duration &raquo;](duration)

## Other Date-Time-Like Objects

- `Temporal.PlainTime` - Just a time
- `Temporal.PlainYearMonth` - Just a year and month
- `Temporal.PlainMonthDay` - Just a month and day

## Advanced Objects

- `Temporal.TimeZone`
- `Temporal.Calendar`