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
      className={cn('relative flex min-h-150 w-full items-center md:min-h-screen', className)}
      {...props}
    >
      <div className="absolute inset-0 z-0 min-h-screen w-full"></div>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg}
          alt="Coming Soon Hero"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      {/* Content - Right Side */}
      <div className="relative z-10 ml-auto flex w-full flex-col items-center justify-center gap-8 px-6 text-center whitespace-nowrap md:w-2xl md:px-12 lg:gap-10 lg:pr-32">
        {/* Title */}
        <h1 className="font-caudex text-3xl font-normal text-black md:text-5xl">{t('title')}</h1>

        {/* CTA Button */}
        <Link
          href={'/'}
          className={buttonVariants({
            className: 'font-caudex bg-black! px-12 py-6 text-lg md:text-lg',
          })}
        >
          {t('cta')}
        </Link>
      </div>
    </section>
  )
}
