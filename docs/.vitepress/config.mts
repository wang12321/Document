import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
// @ts-ignore
export default defineConfig({
  title: "文档中心",
  base: '/Document/',
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
        text: 'Form组件',
        items: [
          { text: '弹框表单', link: '/component/dialogForm' },
          { text: '查询表单', link: '/component/searchForm' }
        ]
      },
      {
        text: 'Table组件',
        items: [
          { text: '表格', link: '/component/table' },
          { text: '分页', link: '/component/pagination' },
        ]
      },
      {
        text: 'page组件',
        items: [
          { text: '组合页面', link: '/component/table' },
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
  // @ts-ignore
  optimizeDeps: {
    include: ['element-plus/dist/index.esm.js']
  },
})
