'use client'

import { ShowModals } from './Dialog/show-modals'
import { NewComingSoonHero } from './new-coming-soon-hero'

export default function HomePage() {
  return (
    <>
      {/* <ComingSoonHero /> */}
      <NewComingSoonHero />

      <ShowModals />
    </>
  )
}
