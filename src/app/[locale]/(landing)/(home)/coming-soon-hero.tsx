import heroBg from '@/assets/image/coming-soon-hero-bg.png'
import Image from 'next/image'

export const ComingSoonHero = () => {
  return (
    <div className="bg-background border-b border-black pb-6">
      <Image src={heroBg} alt="background" className="h-full w-full object-cover" />

      {/* indicator */}
      <div className="mx-auto mt-10 flex max-w-20 items-center gap-1">
        <div className="min-h-3 min-w-14 rounded-xl bg-black"></div>
        <div className="min-h-3 min-w-8 rounded-xl bg-[#D9D9D9]"></div>
      </div>
    </div>
  )
}
