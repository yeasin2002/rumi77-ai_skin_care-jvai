'use client'

import { SiteHeading } from '@/components/shared'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import {
  Brain,
  FileText,
  Sparkles,
  Stethoscope,
  Sun,
  Upload,
  UserCircle,
  Users,
} from 'lucide-react'
import { useState } from 'react'

const skinTypes = ['Oily', 'Dry', 'Combination', 'Normal', 'Sensitive'] as const
const skinConcerns = [
  'Acne & Breakouts',
  'Dark Spots',
  'Fine Lines & Wrinkles',
  'Dryness',
  'Oily Skin',
  'Redness & Sensitivity',
  'Dullness',
  'Large Pores',
  'Others',
] as const

type SkinType = (typeof skinTypes)[number]
type SkinConcern = (typeof skinConcerns)[number]

const Analysis = () => {
  const [selectedSkinType, setSelectedSkinType] = useState<SkinType | null>(null)
  const [selectedConcerns, setSelectedConcerns] = useState<SkinConcern[]>([])
  const [age, setAge] = useState('')
  const [additionalDetails, setAdditionalDetails] = useState('')

  const toggleConcern = (concern: SkinConcern) => {
    setSelectedConcerns((prev) =>
      prev.includes(concern) ? prev.filter((c) => c !== concern) : [...prev, concern]
    )
  }

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <div className="py-12">
        <SiteHeading
          heading="Ai Skin Analyzer"
          subHeading="Tell us about your skin concerns and let our AI create a personalized skincare routine just for you."
        />
      </div>

      {/* Form Card */}
      <div className="mx-auto max-w-2xl px-6 pb-20">
        <div className="bg-main-foreground rounded-2xl p-8">
          {/* Skin Type */}
          <div className="mb-8">
            <Label className="text-main-button mb-4 flex items-center gap-2 text-sm font-medium">
              <Sun className="size-4" />
              What&apos;s your skin type?
            </Label>
            <div className="flex flex-wrap gap-2">
              {skinTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setSelectedSkinType(type)}
                  className={cn(
                    'rounded-md border px-4 py-2 text-sm transition-colors',
                    selectedSkinType === type
                      ? 'border-main-button bg-main-button text-white'
                      : 'border-main-button/30 text-main-button hover:border-main-button bg-white'
                  )}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Age */}
          <div className="mb-8">
            <Label className="text-main-button mb-4 flex items-center gap-2 text-sm font-medium">
              <UserCircle className="size-4" />
              What&apos;s your age?
            </Label>
            <Input
              type="text"
              placeholder="Type your age here"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="border-main-button/30 bg-white"
            />
          </div>

          {/* Skin Concerns */}
          <div className="mb-8">
            <Label className="text-main-button mb-4 flex items-center gap-2 text-sm font-medium">
              <Sparkles className="size-4" />
              What are your main skin concerns? (Select all that apply)
            </Label>
            <div className="flex flex-wrap gap-2">
              {skinConcerns.map((concern) => (
                <button
                  key={concern}
                  type="button"
                  onClick={() => toggleConcern(concern)}
                  className={cn(
                    'rounded-md border px-4 py-2 text-sm transition-colors',
                    selectedConcerns.includes(concern)
                      ? 'border-main-button bg-main-button text-white'
                      : 'border-main-button/30 text-main-button hover:border-main-button bg-white'
                  )}
                >
                  {concern}
                </button>
              ))}
            </div>
          </div>

          {/* Additional Details */}
          <div className="mb-8">
            <Label className="text-main-button mb-4 flex items-center gap-2 text-sm font-medium">
              <FileText className="size-4" />
              Additional Details (Optional)
            </Label>
            <Textarea
              placeholder="Tell us more about your skincare goals, allergies, or any specific products you'd like to avoid..."
              value={additionalDetails}
              onChange={(e) => setAdditionalDetails(e.target.value)}
              className="border-main-button/30 min-h-[120px] bg-white"
            />
          </div>

          {/* Upload Photo */}
          <div className="mb-8">
            <Label className="text-main-button mb-4 flex items-center gap-2 text-sm font-medium">
              <Upload className="size-4" />
              Upload Photo (Optional)
            </Label>
            <div className="border-main-button/30 hover:border-main-button flex min-h-[100px] cursor-pointer flex-col items-center justify-center rounded-md border border-dashed bg-white p-6 transition-colors">
              <Upload className="text-main-button/50 mb-2 size-6" />
              <p className="text-main-button text-sm">Click to upload or drag and drop</p>
              <p className="text-main-button/60 text-xs">PNG, JPG up to 10MB</p>
            </div>
          </div>

          {/* Submit Button */}
          <Button className="bg-main-button hover:bg-main-button/90 w-full gap-2 py-6 text-white">
            <Sparkles className="size-4" />
            ANALYZE & GET RECOMMENDATIONS
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="border-main-button/10 border-t bg-[#f5f0eb] py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-6 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <Brain className="text-main-button mb-4 size-10" />
            <h3 className="font-caudex text-main-button mb-2 text-xl">AI-Powered</h3>
            <p className="font-open-sans text-main-button/70 text-sm">
              Advanced algorithms analyze your unique skin needs
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Users className="text-main-button mb-4 size-10" />
            <h3 className="font-caudex text-main-button mb-2 text-xl">Personalized</h3>
            <p className="font-open-sans text-main-button/70 text-sm">
              Custom routines based on your specific concerns
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Stethoscope className="text-main-button mb-4 size-10" />
            <h3 className="font-caudex text-main-button mb-2 text-xl">Expert-Backed</h3>
            <p className="font-open-sans text-main-button/70 text-sm">
              Recommendations based on dermatological research
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analysis
