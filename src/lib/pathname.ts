import { usePathname } from 'next/navigation'

export const useClearPathname = () => {
  return usePathname().replace(/\/$/g, '')
}
