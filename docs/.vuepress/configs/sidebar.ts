import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebar: SidebarConfig = [
  {
    text: 'javascript',
    children: [
      '/javascript/防抖截流.md',
      '/javascript/常用类型判断.md',
    ]
  },
  {
    text: '设计模式',
    children: [
      '/设计模式/单例模式.md',
    ]
  }
]
