import { NavList } from '@/components/shared/nav-list'
import { Button } from '@/components/ui'

export const Hero = () => {
  return (
    <main className="relative">
      <video src={'/hero-video.mp4'} autoPlay muted loop />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-28">
        <h1 className="font-caudex text-6xl text-white">A Glow that feels like you</h1>
        <Button className={'font-openSans px-10 py-8 text-2xl font-normal [box-shadow:none]!'}>
          SHOP NOW
        </Button>
      </div>
      <NavList className="absolute top-5 w-full justify-around" />
    </main>
  )
}
