'use client'

import logoImg from '@/assets/icons/logo/logo-mini-dark.svg'
import Image from 'next/image'

export const WelcomeContent = () => {
  return (
    <div className="relative flex min-h-[484px] flex-col items-center bg-white px-6 pt-14 pb-12 text-center sm:px-12 sm:pt-16 sm:pb-14">
      <div className="flex w-full max-w-[760px] flex-col items-center gap-6">
        <Image
          src={logoImg}
          alt="Glowmi logo"
          width={64}
          height={64}
          className="h-16 w-16"
          priority
        />

        <h2 className="font-caudex text-3xl font-semibold text-black sm:text-4xl">
          Welcome to the inner circle
        </h2>

        <div className="flex flex-col items-center gap-4">
          <p className="font-open-sans text-base leading-relaxed text-black/80 sm:text-lg">
            Your profile has been created and your Welcome Privilege has been automatically applied
            to your bag.
          </p>
          <p className="font-open-sans text-sm text-black/70 sm:text-base">
            We look forward to building your {`skin's`} resilience.
          </p>
        </div>

        <div className="mt-2 flex items-center gap-4">
          <span className="h-px w-28 bg-black/30 sm:w-36" />
          <span className="h-2.5 w-2.5 rounded-full bg-black" />
          <span className="h-px w-28 bg-black/30 sm:w-36" />
        </div>

        <p className="font-caudex text-base text-black sm:text-lg">The Essence of Timeless Glow</p>
        <p className="font-caudex text-sm text-black/70 sm:text-base">Thank You</p>
      </div>
    </div>
  )
}
