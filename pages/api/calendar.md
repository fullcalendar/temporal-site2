---
outline: [2, 3]
outlineTitle: Calendar
---

# Calendar

pdt.getCalendar() and other types

You normally just want to get these as props on PlainDate/etc.

Subclassing is out of scope.

## Create

### Constructor

```js
cal = new Temporal.Calendar('gregory')
```

Must be a native calendar

### From Other

```js
cal = Temporal.Calendar.from(
  Temporal.PlainDate.from('23234-12-12[u-ca=gregory]')
)

cal = Temporal.Calendar.from(
  '23234-12-12[u-ca=gregory]'
)
```

.getCalendar() from other types is preferred.

## ID and Stringify

You can grab the ID

```js
cal = new Temporal.Calendar('gregory')

cal.id // 'gregory'
```

Same thing as `.toString()` and `.toJSON()`.

## Field Compute

These methods are used internally by PlainDate, PlainDateTime, and ZonedDateTime.

### Year

#### `.year()`

```js
cal = new Temporal.Calendar('hebrew')
pd = Temporal.PlainDate.from('2004-02-02')
cal.year(pd) // 2322

// same as...
pd = Temporal.PlainDate.from('2004-02-02[u-ca=hebrew]')
pd.year // 2322
```

#### `.era()`
#### `.eraYear()`

```js
cal = new Temporal.Calendar('hebrew')
pd = Temporal.PlainDate.from('2004-02-02')
cal.era(pd) // 'asdf'
cal.eraYear(pd) // 2322

// same as...
pd = Temporal.PlainDate.from('2004-02-02[u-ca=hebrew]')
pd.era // 'asdf'
pd.eraYear // 2323
```

### Month

#### `.month()`
#### `.monthCode()`
#### `.monthsInYear()`

```js
cal = new Temporal.Calendar('hebrew')
pd = Temporal.PlainDate.from('2004-02-02')
cal.month(pd) // 7
cal.monthCode(pd) // 'M07'
cal.monthsInYear(pd) // 13

// same as...
pd = Temporal.PlainDate.from('2004-02-02[u-ca=hebrew]')
pd.month 7
pd.monthCode // 'M07'
pd.monthsInYear // 13
```

### Day of Month

#### `.day()`

```js
cal = new Temporal.Calendar('hebrew')
pd = Temporal.PlainDate.from('2004-02-02')
cal.day(pd) // 7

// same as...
pd = Temporal.PlainDate.from('2004-02-02[u-ca=hebrew]')
pd.day 7
```

### Week

#### `.weekOfYear()`
#### `.yearOfWeek()`

```js
cal = new Temporal.Calendar('hebrew')
pd = Temporal.PlainDate.from('2004-02-02')
cal.weekOfYear(pd) // 7
cal.yearOfWeek(pd) // 1212

// same as...
pd = Temporal.PlainDate.from('2004-02-02[u-ca=hebrew]')
pd.weekOfYear // 7
pd.yearOfWeek // 1212
```

### Day of Week

#### `.dayOfWeek()`

```js
cal = new Temporal.Calendar('hebrew')
pd = Temporal.PlainDate.from('2004-02-02')
cal.dayOfWeek(pd) // 2

// same as...
pd = Temporal.PlainDate.from('2004-02-02[u-ca=hebrew]')
pd.dayOfWeek // 2
```

### Day of Year

#### `.dayOfYear()`

```js
cal = new Temporal.Calendar('hebrew')
pd = Temporal.PlainDate.from('2004-02-02')
cal.dayOfYear(pd) // 87

// same as...
pd = Temporal.PlainDate.from('2004-02-02[u-ca=hebrew]')
pd.dayOfYear // 87
```

### Days in Unit

#### `.daysInYear()`
#### `.daysInMonth()`
#### `.daysInWeek()`

```js
cal = new Temporal.Calendar('hebrew')
pd = Temporal.PlainDate.from('2004-02-02')
cal.daysInYear(pd) // 390
cal.daysInMonth(pd) // 23
cal.daysInWeek(pd) // 7

// same as...
pd = Temporal.PlainDate.from('2004-02-02[u-ca=hebrew]')
pd.daysInYear // 390
pd.daysInMonth // 23
pd.daysInWeek // 7
```

## Field Conversion

#### `.dateFromFields()`

```js
cal = new Temporal.Calendar('gregory')
pd = cal.dateFromFields({
  year: 2023,
  month: 3,
  day: 1,
})

// same as...
pd = Temporal.PlainDate.from({
  year: 2023,
  month: 3,
  day: 1,
  calendar: 'gregory',
})
```

#### `.yearMonthFromFields()`

```js
cal = new Temporal.Calendar('gregory')
pym = cal.yearMonthFromFields({
  year: 2023,
  month: 3,
})

// same as...
pym = Temporal.PlainYearMonth.from({
  year: 2023,
  month: 3,
  calendar: 'gregory',
})
```

#### `.monthDayFromFields()`

```js
cal = new Temporal.Calendar('gregory')
pmd = cal.monthDayFromFields({
  month: 'M03',
  day: 1,
})

// same as...
pmd = Temporal.PlainMonthDay.from({
  month: 'M03',
  day: 1,
  calendar: 'gregory',
})
```

#### `.fields()`
#### `.mergeFields()`

User internally by the `.from` methods. Only relevant if creating custom calendar.

## Math

### Add

#### `.dateAdd()`

```js
cal = new Temporal.Calendar('hebrew')
pd1 = Temporal.PlainDate.from('2023-02-12')
pd2 = cal.dateAdd(pd1, { years: 1 })

// same as...
pd1 = Temporal.PlainDate.from('2023-02-12[u-ca=hebrew]')
pd2 = pd1.add({ year: 1 })
```

### Difference

#### `.dateUntil()`

```js
cal = new Temporal.Calendar('hebrew')
pd1 = Temporal.PlainDate.from('2023-02-12')
pd2 = Temporal.PlainDate.from('2024-02-12')
dur = cal.dateUntil(pd1, pd2)

// same as...
pd1 = Temporal.PlainDate.from('2023-02-12[u-ca=hebrew]')
pd2 = Temporal.PlainDate.from('2024-02-12[u-ca=hebrew]')
dur = pd1.until(pd2)
```
