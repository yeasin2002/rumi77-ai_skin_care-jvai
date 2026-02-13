import heroBgForMobile from '@/assets/image/new-coming-soon-mobile.jpg'
import heroBg from '@/assets/image/new-coming-soon.png'
import { cn } from '@/lib/utils'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {} & React.ComponentPropsWithRef<'section'>

export const NewComingSoonHero = ({ className, ...props }: Props) => {
  const t = useTranslations('home.hero')
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
          'relative z-10 ml-auto flex w-full flex-col items-end justify-center gap-4 px-6 whitespace-nowrap',
          'md: md:w-3xl md:items-center lg:mr-20'
        )}
      >
        {/* Title */}
        <h1
          className={cn(
            'max-w-4/5 items-end justify-end text-center text-sm font-normal text-black',
            'md:max-w-full md:text-4xl'
          )}
        >
          {/* <span className="md:hidden">
            {t('title').split(' ').slice(0, 3).join(' ')}
            <br />
            {t('title').split(' ').slice(3).join(' ')}
          </span> */}
          <span>{t('title')}</span>
        </h1>

        {/* CTA Button */}
        <Link
          href={'/coming-soon'}
          className={cn(
            'cursor-pointer rounded-md bg-black! px-6 py-1 text-lg text-white',
            'md:px-12 md:py-3 md:text-lg'
          )}
        >
          {t('cta')}
        </Link>
      </div>
    </section>
  )
}
