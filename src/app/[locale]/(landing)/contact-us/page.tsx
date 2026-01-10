import contactUsBg from '@/assets/image/contact-image-trans.png'
import { NavList } from '@/components/shared'
import { Mail, Phone } from 'lucide-react'
import Image from 'next/image'

const ContactUs = () => {
  return (
    <div className="relative min-h-screen bg-[#FBFAF6]">
      <NavList
        wrapperClassName="absolute top-5 right-2 z-20 justify-around md:w-full"
        className="text-main-button"
      />

      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-8 px-6 py-20 md:grid-cols-2 lg:px-8">
        {/* Left - Contact Info */}
        <div className="flex flex-col justify-center">
          <h1 className="font-caudex text-main-button mb-4 text-5xl leading-none font-normal tracking-normal">
            Contact Us
          </h1>

          <p className="font-open-sans text-main-primary-base_medium mb-8 text-lg leading-relaxed">
            If you have any questions, need assistance, or want to share feedback, we&apos;d love to
            hear from you!
          </p>

          <div className="space-y-4">
            <a
              href="mailto:glowmi@gmail.com"
              className="font-open-sans text-main-primary-base_medium flex items-center gap-3 text-lg hover:underline"
            >
              <Mail className="size-5" />
              glowmi@gmail.com
            </a>

            <a
              href="tel:3251358133"
              className="font-open-sans text-main-primary-base_medium flex items-center gap-3 text-sm hover:underline"
            >
              <Phone className="size-5" />
              3251358133
            </a>
          </div>
        </div>

        {/* Right - Image */}
        <div className="relative flex items-center justify-center">
          <Image
            src={contactUsBg}
            alt="GLOWMI Celestial Glow Brightening Serum product"
            className="h-auto w-96 object-contain"
            priority
          />
        </div>
      </div>

      {/* Bottom dark green bar */}
      <div className="bg-main-button h-3 w-full" />
    </div>
  )
}

export default ContactUs
