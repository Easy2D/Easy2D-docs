import { usePathname } from 'next/navigation'

export const useClearPathname = () => {
  const pathname = usePathname()
  if (pathname === '/') {
    return pathname
  }
  return pathname.replace(/\/$/g, '')
}
