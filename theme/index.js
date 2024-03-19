import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue'
import './overrides.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('VPButton', VPButton)
  }
}
