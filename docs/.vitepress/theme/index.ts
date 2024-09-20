// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// @ts-ignore
import loadComponents from 'jmc-ele-component-vue3/lib/index.es.ts'
import 'jmc-ele-component-vue3/lib/style.css'
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.use(ElementPlus)
    loadComponents(app)
  }
} satisfies Theme
