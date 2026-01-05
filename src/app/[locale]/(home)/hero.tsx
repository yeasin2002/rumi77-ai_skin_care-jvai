import { NavList } from '@/components/shared/nav-list'
import { Button } from '@/components/ui'
import { caudex, openSans } from '@/lib/fonts'

export const Hero = () => {
  return (
    <main className="relative">
      <video src={'/hero-video.mp4'} autoPlay muted loop />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-28 bg-black/20">
        <h1 className={`${caudex.className} text-6xl text-white`}>A Glow that feels like you</h1>
        <Button
          className={`${openSans.className} px-10 py-8 text-2xl font-normal [box-shadow:none]!`}
        >
          SHOP NOW
        </Button>
      </div>
      <NavList className="absolute top-5 w-full justify-around" />
    </main>
  )
}
