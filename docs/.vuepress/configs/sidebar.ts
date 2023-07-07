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
      '/设计模式/策略模式.md',
      '/设计模式/代理模式.md',
      '/设计模式/迭代器模式.md',
      '/设计模式/发布订阅模式.md',
      '/设计模式/命令模式.md',
      '/设计模式/组合模式.md',
    ]
  }
]
