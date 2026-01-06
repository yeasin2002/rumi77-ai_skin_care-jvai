import { SiteHeading } from '@/components/shared'
import { caudex, openSans } from '@/lib/fonts'

const cardsStates = [
  { title: 'Scan & Analyze', subtitle: "Advanced AI evaluates your skin's needs" },
  { title: 'Personalized Routine', subtitle: 'Customized recommendations made for you' },
  { title: 'Visible Results', subtitle: 'Science-backed formulas that work' },
]

export const GlowmiStates = () => {
  return (
    <section className="px-8 py-24">
      <SiteHeading
        heading="How Glowmi Understands Your Skin"
        subHeading="Our intelligent platform combines cutting-edge AI with dermatological expertise to deliver personalized skincare solutions."
        wrapperClassname="py-10"
      />
      <div className="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-3">
        {cardsStates.map((data, index) => (
          <div
            key={data.title}
            className={
              'flex flex-col items-center rounded-2xl bg-white px-6 py-10 text-center shadow-sm lg:py-16' +
              caudex.className
            }
          >
            <span className="text-main-button text-3xl font-light">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="text-main-button mt-4 text-lg font-semibold">{data.title}</h3>
            <p className={`text-main-primary-base_medium mt-2 text-base ${openSans.className}`}>
              {data.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
