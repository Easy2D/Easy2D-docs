import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const guides = [
  {
    href: '/quickstart',
    name: '快速上手',
    description: '学习 Easy2D 的基础概念和用法',
  },
  {
    href: '/demos',
    name: '简单示例',
    description: '跟着教程制作几个简单的游戏 Demo',
  },
  {
    href: '/node',
    name: '节点元素',
    description:
      '在游戏场景上放置文本、按钮、图形...',
  },
  {
    href: '/action',
    name: '节点动画',
    description:
      '让节点们动起来吧',
  },
]

export function Guides() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="guides">
        入门教程
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 sm:grid-cols-2 xl:grid-cols-4 dark:border-white/5">
        {guides.map((guide) => (
          <div key={guide.href}>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              {guide.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {guide.description}
            </p>
            <p className="mt-4">
              <Button href={guide.href} variant="text" arrow="right">
                查看
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
