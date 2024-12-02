import Image from 'next/image'
import logo from '@/images/logos/logo.png'

export function Logo({
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'img'>, 'width' | 'height'>) {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={logo}
        alt=""
        className="h-8 w-8 inline-block"
        unoptimized
        aria-hidden="true"
        {...props}
      />
      <span className="inline-block font-bold">Easy2D</span>
    </div>
  )
}
