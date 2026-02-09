import heroBgForMobile from '@/assets/image/new-coming-soon-mobile.jpg'
import heroBg from '@/assets/image/new-coming-soon.png'
import { cn } from '@/lib/utils'
import { cls } from 'cls-extended'
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
        className={cls(
          'relative z-10 ml-auto flex w-full flex-col items-end justify-center gap-4 px-6 whitespace-nowrap',
          { md: 'w-3xl items-center', lg: 'gap-14' }
        )}
      >
        {/* Title */}
        <h1
          className={cls(
            'font-caudex max-w-4/5 items-end justify-end text-center text-xl font-normal text-black',
            { md: 'max-w-full text-4xl' }
          )}
        >
          <span className="md:hidden">
            {t('title').split(' ').slice(0, 3).join(' ')}
            <br />
            {t('title').split(' ').slice(3).join(' ')}
          </span>
          <span className="hidden md:inline">{t('title')}</span>
        </h1>

        {/* CTA Button */}
        <Link
          href={'/coming-soon'}
          className={cls('cursor-pointer rounded-md bg-black! px-6 py-2 text-lg text-white', {
            md: 'px-12 py-5 text-lg',
          })}
        >
          {t('cta')}
        </Link>
      </div>
    </section>
  )
}
