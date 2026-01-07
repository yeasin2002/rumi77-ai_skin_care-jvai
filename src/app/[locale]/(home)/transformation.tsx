'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

import { SiteHeading } from '@/components/shared'
import { Card, CardContent } from '@/components/ui/card'

import afterImage from '@/assets/image/Transformation-After.png'
import beforeImage from '@/assets/image/Transformation-Before.png'

import waterDrop from '@/assets/icons/water-drop.png'
import windFlow from '@/assets/icons/wind-flow.png'

const beforeFeatures = [
  {
    icon: waterDrop,
    title: 'Skin Roughness',
    description: 'Infused with natural oils for a luminous complexion.',
  },
  {
    icon: windFlow,
    title: 'Dead Skin',
    description: 'Every product is carefully crafted to meet the highest quality standards.',
  },
]

const afterFeatures = [
  {
    icon: waterDrop,
    title: 'Radiant Glow',
    description: 'Infused with natural oils for a luminous complexion.',
  },
  {
    icon: windFlow,
    title: 'Proven Effectiveness',
    description: 'Every product is carefully crafted to meet the highest quality standards.',
  },
]

export default function Transformation() {
  const [sliderPosition, setSliderPosition] = useState(50)

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value))
  }

  return (
    <section className="py-16">
      <SiteHeading
        heading="Real Skin. Real Transformation"
        subHeading="Keep visuals minimal and authentic to build trust"
      />

      <div className="container m-10 mx-auto rounded-2xl bg-[#2447311A] px-4 py-24">
        <div className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:items-stretch lg:gap-8">
          {/* Left Feature Cards - aligned to top */}
          <div className="flex w-full flex-col justify-start gap-4 lg:w-64">
            {beforeFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardContent className="p-5">
                  <Image src={feature.icon} alt={feature.title} width={24} height={24} />
                  <h3 className="mt-3 text-sm font-medium text-[#c9a227]">{feature.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Before/After Comparison */}
          <div className="relative h-[500px] w-full max-w-[380px] overflow-hidden rounded-3xl border-4 border-[#1a2e1a]">
            {/* After Image (Background) */}
            <Image
              src={afterImage}
              alt="After transformation"
              fill
              className="object-cover"
              priority
            />

            {/* Before Image (Clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image
                src={beforeImage}
                alt="Before transformation"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Slider Line */}
            <div
              className="absolute top-0 bottom-0 z-10 w-0.5 bg-white"
              style={{ left: `${sliderPosition}%` }}
            />

            {/* Slider Handle */}
            <div
              className="absolute top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 cursor-grab items-center justify-center"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm">
                <ChevronLeft className="h-4 w-4 text-gray-600" />
                <ChevronRight className="h-4 w-4 text-gray-600" />
              </div>
            </div>

            {/* Invisible Range Input */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={handleSliderChange}
              className="absolute inset-0 z-30 h-full w-full cursor-grab opacity-0"
              aria-label="Before and after comparison slider"
            />

            {/* Bottom Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/80 px-3 py-2 backdrop-blur-sm">
              <button
                type="button"
                className="flex h-6 w-6 items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-gray-100"
                onClick={() => setSliderPosition(Math.max(0, sliderPosition - 10))}
                aria-label="Move slider left"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="flex h-6 w-6 items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-gray-100"
                onClick={() => setSliderPosition(Math.min(100, sliderPosition + 10))}
                aria-label="Move slider right"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right Feature Cards - aligned to bottom */}
          <div className="flex w-full flex-col justify-end gap-4 lg:w-64">
            {afterFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardContent className="p-5">
                  <Image src={feature.icon} alt={feature.title} width={24} height={24} />
                  <h3 className="mt-3 text-sm font-medium text-[#c9a227]">{feature.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export { Transformation }

