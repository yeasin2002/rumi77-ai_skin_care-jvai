import heroBg from '@/assets/image/coming-soon-hero-bg.png'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

type Props = {} & React.ComponentPropsWithRef<'section'>

export const NewComingSoonHero = async ({ className, ...props }: Props) => {
  return (
    <section
      className={cn('relative flex min-h-[600px] w-full items-center md:min-h-[700px]', className)}
      {...props}
    >
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
      <div className="relative z-10 ml-auto flex w-full flex-col items-center gap-8 px-6 text-center md:w-1/2 md:items-start md:px-12 md:text-left lg:gap-10 lg:px-20">
        {/* Title */}
        <h1 className="font-caudex max-w-md text-3xl font-normal text-black md:text-4xl lg:text-5xl">
          The Essence of Timeless Glow
        </h1>

        {/* CTA Button */}
        <Button
          type="button"
          className="bg-black px-12 py-6 text-base font-normal text-white transition-opacity hover:bg-black hover:opacity-90 md:text-lg"
        >
          Explore
        </Button>
      </div>
    </section>
  )
}
