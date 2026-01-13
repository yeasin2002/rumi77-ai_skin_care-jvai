'use client'

import CalendarCheck from '@/assets/icons/CalendarCheck.svg'
import { SiteHeading } from '@/components/shared'
import { buttonVariants } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Link } from '@/i18n/navigation'
import { MessageCircle, Package, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { AllProductsContent } from './all-products-content'
import { YourRoutinesContents } from './your-routines-contents'

const YourRoutine = () => {
  return (
    <div className="bg-background min-h-screen pb-20">
      {/* Badge */}
      <div className="flex justify-center pt-8">
        <span className="bg-main-button/10 text-main-button flex items-center gap-2 rounded-full px-4 py-2 text-sm">
          <Sparkles className="size-4" />
          AI-Powered Skincare Revolution
        </span>
      </div>

      {/* Header */}
      <div className="py-8">
        <SiteHeading
          heading="Your Personalized Skincare Routine"
          subHeading="Based on your skin analysis, we've curated the perfect routine and products for you."
        />
      </div>

      {/* Skin Concerns Banner */}
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-main-primary-base_medium rounded-lg bg-[#2447311A] p-4">
          <h3 className="mb-2 text-lg font-medium">Your Skin Concerns</h3>
          <div className="flex flex-wrap gap-2">
            <span className="flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-sm">
              <span className="size-2 rounded-full bg-white" />
              Acne & Breakouts
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="routine" className="mt-8">
        <TabsList className="mx-auto flex w-fit justify-center gap-2 bg-transparent">
          <TabsTrigger
            value="routine"
            className="text-main-primary-base_medium! data-active:bg-main-foreground! rounded-full border border-[#59351B] px-6 py-4"
          >
            <Image src={CalendarCheck} alt="Calendar Check" className="size-5" />
            YOUR ROUTINE
          </TabsTrigger>
          <TabsTrigger
            value="products"
            className="text-main-primary-base_medium! data-active:bg-main-foreground! rounded-full border border-[#59351B] px-6 py-4"
          >
            <Package className="size-5" />
            ALL PRODUCTS
          </TabsTrigger>
        </TabsList>
        <TabsContent value="routine">
          <YourRoutinesContents />
        </TabsContent>
        <TabsContent value="products">
          <AllProductsContent />
        </TabsContent>
      </Tabs>

      {/* Chat CTA */}
      <div className="mx-auto mt-12 max-w-4xl px-6 text-center">
        <h3 className="font-caudex text-main-button mb-2 text-2xl">
          Have Questions About Your Routine?
        </h3>
        <p className="text-main-button/70 mb-6 text-sm">
          Our AI assistant is here to help! Get personalized advice, ask about specific products, or
          learn more about ingredients.
        </p>
        <Link
          href={'/ai-chat-assistant'}
          className={buttonVariants({
            className: 'bg-main-button hover:bg-main-button/90 gap-2 px-8 py-6 text-white',
          })}
        >
          CHAT WITH AI
          <MessageCircle className="size-4" />
        </Link>
      </div>
    </div>
  )
}

export default YourRoutine
