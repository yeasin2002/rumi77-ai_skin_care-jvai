import { caudex, openSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'

type Props = {
  heading: string
  subHeading?: string

  // styles
  wrapperClassname?: string
  headingClassName?: string
  subHeadingClassname?: string
}

export const SiteHeading = ({
  heading,
  subHeading,
  wrapperClassname,
  headingClassName,
  subHeadingClassname,
}: Props) => {
  return (
    <div className={cn('flex flex-col items-center justify-center gap-4', wrapperClassname)}>
      <h1
        className={cn(
          `${caudex.className} text-main-button text-5xl font-normal`,
          headingClassName
        )}
      >
        {heading}
      </h1>
      {subHeading && (
        <h2
          className={cn(
            ` ${openSans.className} text-main-primary-base_medium`,
            subHeadingClassname
          )}
        >
          {subHeading}
        </h2>
      )}
    </div>
  )
}
