import { SiteHeading } from '@/components/shared'
import { caudex, openSans } from '@/lib/fonts'

import Icon4 from '@/assets/image/visuals-results/bx_leaf.png'
import Icon1 from '@/assets/image/visuals-results/cil_drop.png'
import Icon3 from '@/assets/image/visuals-results/gards.png'
import Icon2 from '@/assets/image/visuals-results/water-box.png'
import Image from 'next/image'

const ResultsData = [
  {
    Icon: Icon1,
    title: 'Niacinamide',
    subtitle: 'Refines texture and enhances radiance',
    description: 'A vitamin B3 derivative that minimizes pores and brightens skin tone.',
  },
  {
    Icon: Icon2,
    title: 'Hyaluronic Complex',
    subtitle: 'Deep hydration and skin comfort',
    description: 'Multi-weight molecules that hydrate at every skin level.',
  },
  {
    Icon: Icon3,
    title: 'Peptide Blend',
    subtitle: 'Supports firmness and resilience',
    description: 'Advanced peptides that signal skin to produce more collagen.',
  },
  {
    Icon: Icon4,
    title: 'Botanical Extracts',
    subtitle: 'Calm and balance the skin',
    description: 'Plant-derived actives that soothe and protect sensitive skin.',
  },
]

export const VisualsResults = () => {
  return (
    <section className="my-20 bg-[#D9E6ED33] px-4 py-20 sm:px-8">
      <SiteHeading
        heading="Intelligent Ingredients. Visuals Results."
        subHeading="Each Glowmi formula is powered by carefully selected ingredients, chosen for performance, safety, and skin harmony."
      />
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ResultsData.map((item) => (
          <div key={item.title} className="flex flex-col rounded-2xl bg-white p-6 py-10 shadow-sm">
            <div className="mb-4 flex size-14 shrink-0 items-center justify-center overflow-visible rounded-xl bg-[#2447311A]">
              <Image src={item.Icon} alt="Icons" className="size-8" />
            </div>
            <h3 className={`text-main-button text-3xl font-semibold ${caudex.className}`}>
              {item.title}
            </h3>
            <p
              className={`text-main-primary-base_medium mt-2 text-sm font-medium ${openSans.className}`}
            >
              <span>{item.subtitle}</span>
              <br />
              <span className="mt-2 block">{item.description}</span>
            </p>
          </div>
        ))}
      </div>
      <p className={` ${openSans.className} text-main-primary-base_medium mt-8 text-center`}>
        All ingredients are dermatologically tested and ethically sourced.
      </p>
    </section>
  )
}
