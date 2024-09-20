import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
// @ts-ignore
export default defineConfig({
  title: "文档中心",
  base: './',
  description: "文档中心",
  // 确保正确引用了你的主题文件
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '组件库文档', link: '/component/dialogForm' }
    ],

    sidebar: [
      {
        text: '表单组件',
        items: [
          { text: '弹框表单', link: '/component/dialogForm' },
          { text: '查询表单', link: '/component/searchForm' }
        ]
      }
    ],

    socialLinks: [
      {
        icon: 'slack',
        link:''
      }
    ]
  },
  optimizeDeps: {
    include: ['element-plus/dist/index.esm.js']
  },
})
