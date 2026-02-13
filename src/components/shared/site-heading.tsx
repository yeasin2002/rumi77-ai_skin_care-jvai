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
    <div className={cn('flex w-full flex-col items-center justify-center gap-4', wrapperClassname)}>
      <h2 className={cn(`text-main-button text-2xl font-normal lg:text-5xl`, headingClassName)}>
        {heading}
      </h2>
      {subHeading && (
        <h3 className={cn(`font-open-sans text-main-primary-base_medium`, subHeadingClassname)}>
          {subHeading}
        </h3>
      )}
    </div>
  )
}
