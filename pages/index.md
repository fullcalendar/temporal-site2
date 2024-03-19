---
aside: false
---

<div style='font-size:18px;position:relative;top:-20px;text-align:right'>
  This guide & polyfill was created by
  <a href='https://fullcalendar.io/' target='_blank'>FullCalendar</a>
</div>

<div style='text-align:center'>
  <h1 style='margin:0;margin-top:2em;font-size:60px'>Temporal</h1>
  <h2 style='margin:0;font-size:36px;line-height:48px'>
    The standards-compliant successor<br />
    to the JavaScript Date object
  </h2>
</div>

<div style='margin:2em 0;text-align:center'>
  <VPButton text='Learn the API' href='api/index' />&nbsp;
  <VPButton text='Use the polyfill' theme='alt' href='polyfill' />
</div>

<div class='use-now-pre'>
  Use it now!
</div>

<div class='use-now'>
  A polyfill is currently required. <a href='polyfill'>Learn more &raquo;</a>
</div>

```js
import 'temporal-polyfill/global'

console.log(
  Temporal.Now.zonedDateTimeISO().toString()
)
```

::: code-group

```sh [NPM]
npm i temporal-polyfill
```

```sh [PNPM]
pnpm i -D temporal-polyfill
```

```sh [Yarn]
yarn i temporal-polyfill
```

:::

<div style='clear:both'></div>

<div class='part2'>
  <div style='font-size:28px;font-weight:500;margin:3em 0 0.5em'>
    Native Support
  </div>
  <div style='line-height: 46px; font-size: 16px; margin-bottom: 16px'>
    Temporal is not yet natively supported in any major browser.
  </div>
  <div style='height:200px;overflow:hidden;margin-right:8px'>
    <div style='width:800px;margin-top:-80px;margin-left:-4px'>
      <picture>
        <source type="image/webp" srcset="https://caniuse.bitsofco.de/image/temporal.webp">
        <source type="image/png" srcset="https://caniuse.bitsofco.de/image/temporal.png">
        <img src="https://caniuse.bitsofco.de/image/temporal.jpg" alt="Data on support for the temporal feature across the major browsers from caniuse.com">
      </picture>
    </div>
  </div>
</div>

<div>
  <div style='font-size:28px;font-weight:500;margin:3em 0 0.5em'>
    About the Spec
  </div>
  <div style='line-height: 28px; margin-top: 22px'>
    The spec was written by the TC39 committee, started in 2019. It is currently in Stage 3, meaning browser implementors are at work.
    <a href='https://github.com/tc39/proposal-temporal' target='_blank'>Read more about the spec &raquo;</a><br />
    <br />
    The creators of this guide, who are also the creators of
    <a href='https://github.com/fullcalendar/fullcalendar' target='_blank'>FullCalendar</a> and
    <a href='https://github.com/fullcalendar/temporal-polyfill' target='_blank'>temporal-polyfill</a>,
    have made contributions to the spec, though are not affiliated with TC39.
  </div>
</div>

<div style='clear:both'></div>

<div style='font-size:28px;font-weight:500;margin:3em 0 0.5em'>
  For Library Authors
</div>
<div style='line-height: 34px; margin-top: 20px;'>
  Want to use Temporal in your JavaScript package but don't want to be dependent on a polyfill?<br />
  Take a look at the <a href='tree-shakeable'>tree-shakeable API &raquo;</a>
</div>

<style>
  .use-now-pre {
    text-align: left;
    font-size: 28px;
    font-weight: 500;
    margin: 3em 0 0.5em;
  }

  .use-now {
    font-size: 16px;
    float: left;
    width: 47%;
    line-height: 46px;
  }

  .use-now + * {
    float: right;
    width: 47%;
  }

  .use-now + * + * {
    float: left;
    width: 47%;
  }

  .part2 {
    float: left;
    width: 47%;
  }

  .part2 + * {
    float: right;
    width: 47%;
  }
</style>
