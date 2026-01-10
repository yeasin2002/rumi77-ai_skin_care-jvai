import { NavList } from '@/components/shared/nav-list'
import { Button } from '@/components/ui'
import { caudex, openSans } from '@/lib/fonts'
import { getTranslations } from 'next-intl/server'

export const Hero = async () => {
  const t = await getTranslations('home.hero')
  return (
    <main className="relative">
      <video src={'/hero-video.mp4'} autoPlay muted loop />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-10 bg-black/20 lg:gap-y-28">
        <h1 className={`${caudex.className} text-3xl text-white lg:text-6xl`}>{t('title')}</h1>
        <Button
          className={`${openSans.className} text-xl font-normal [box-shadow:none]! lg:px-10 lg:py-8 lg:text-2xl`}
        >
          {t('cta')}
        </Button>
      </div>
      <NavList className="navList-parent" />
    </main>
  )
}
