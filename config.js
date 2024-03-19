import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'
import slugify from '@sindresorhus/slugify'
import { componentOverrides } from './theme/overrides'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TemporalJS.dev",
  description: "Resources for the Temporal JS API",

  srcDir: './pages',

  markdown: {
    anchor: {
      slugify(s) {
        return slugify(s, {
          lowercase: false,
          decamelize: false,
        })
      }
    }
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    fr: {
      label: 'French',
      lang: 'fr', // optional, will be added  as `lang` attribute on `html` tag
      link: '/fr/guide' // default /fr/ -- shows on navbar translations menu, can be external
    }
  },

  themeConfig: {
    search: {
      provider: 'local'
    },

    // // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   {
    //     text: 'Stock',
    //     items: [
    //       { text: 'Homepage', link: '/stock/homepage' },
    //       { text: 'API Examples', link: '/stock/api-examples' },
    //       { text: 'Markdown Examples', link: '/stock/markdown-examples' }
    //     ]
    //   }
    // ],

    sidebar: [
      { text: 'Introduction', link: '/' },
      { text: 'temporal-polyfill', link: '/polyfill' },
      { text: 'temporal-utils', link: '/utils' },
      // { text: 'durationformat-polyfill' },
      // { text: 'getweekinfo-polyfill' },
      // { text: 'gettextinfo-polyfill' },
      {
        text: 'Standard API',
        link: '/api/',
        collapsed: false,
        items: [
          { text: 'PlainDate', link: '/api/plaindate' },
          { text: 'PlainDateTime', link: '/api/plaindatetime' },
          { text: 'ZonedDateTime', link: '/api/zoneddatetime' },
          { text: 'Instant', link: '/api/instant' },
          { text: 'Duration', link: '/api/duration' },
          { text: 'PlainTime', link: '/api/plaintime' },
          { text: 'PlainYearMonth', link: '/api/plainyearmonth' },
          { text: 'PlainMonthDay', link: '/api/plainmonthday' },
          { text: 'TimeZone', link: '/api/timezone' },
          { text: 'Calendar', link: '/api/calendar' },
        ]
      },
      {
        text: 'Tree-shakeable API',
        link: '/tree-shakeable',
        collapsed: true,
        items: [
          { text: 'PlainDateFns', link: '/api/fns/plaindate' },
          { text: 'PlainDateTimeFns', link: '/api/fns/plaindatetime' },
          { text: 'ZonedDateTimeFns', link: '/api/fns/zoneddatetime' },
          { text: 'InstantFns', link: '/api/fns/instant' },
          { text: 'DurationFns', link: '/api/fns/duration' },
          { text: 'PlainTimeFns', link: '/api/fns/plaintime' },
          { text: 'PlainYearMonthFns', link: '/api/fns/plainyearmonth' },
          { text: 'PlainMonthDayFns', link: '/api/fns/plainmonthday' },
          { text: 'TimeZoneFns', link: '/api/fns/timezone' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },

  vite: {
    resolve: {
      alias: componentOverrides.map((componentPath) => ({
        find: new RegExp('^.*\\/' + escapeRegExp(componentPath) + '$'),
        replacement: fileURLToPath(
          new URL(`./theme/components/${componentPath}`, import.meta.url)
        )
      })),
    }
  }
})

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
