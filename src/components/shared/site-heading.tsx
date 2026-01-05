import { caudex, openSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'

type Props = {
  heading: string
  subHeading?: string
  wrapperClassname?: string
}

export const SiteHeading = ({ heading, subHeading, wrapperClassname }: Props) => {
  return (
    <div className={cn('flex flex-col items-center justify-center', wrapperClassname)}>
      <h1 className={`${caudex.className} text-5xl font-normal text-[#244731]`}>{heading}</h1>
      {subHeading && <h2 className={` ${openSans.className} text-[#58351B]`}>{subHeading}</h2>}
    </div>
  )
}
