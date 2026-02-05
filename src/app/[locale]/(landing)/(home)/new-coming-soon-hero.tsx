import heroBgForMobile from '@/assets/image/new-coming-soon-mobile.jpg'
import heroBg from '@/assets/image/new-coming-soon.png'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {} & React.ComponentPropsWithRef<'section'>

export const NewComingSoonHero = async ({ className, ...props }: Props) => {
  const t = await getTranslations('home.hero')
  return (
    <section
      className={cn('relative flex min-h-61.25 w-full items-center md:min-h-[120vh]', className)}
      {...props}
    >
      <div className="absolute inset-0 z-0 min-h-screen w-full md:min-h-[120vh]"></div>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBgForMobile}
          alt="Coming Soon Hero"
          fill
          className="min-h-full md:hidden"
          priority
          quality={100}
        />

        <Image
          src={heroBg}
          alt="Coming Soon Hero"
          fill
          className="hidden h-full min-h-207.25 object-cover md:block"
          priority
          quality={90}
        />
      </div>

      {/* Content - Right Side */}
      <div
        className={cn(
          'relative z-10 ml-auto flex w-full flex-col items-end justify-center gap-8 px-6 whitespace-nowrap',
          'md:w-3xl md:items-center lg:gap-14'
        )}
      >
        {/* Title */}
        <h1
          className={cn(
            'font-caudex text-xl font-normal text-black',
            'max-w-4/5 items-end justify-end text-center whitespace-pre-wrap',
            'md:max-w-full md:text-5xl md:whitespace-nowrap'
          )}
        >
          {t('title')}
        </h1>

        {/* CTA Button */}
        <Link
          href={'/'}
          className={buttonVariants({
            className: 'font-caudex! bg-black! px-12 py-6 text-lg md:text-lg',
          })}
        >
          {t('cta')}
        </Link>
      </div>
    </section>
  )
}
