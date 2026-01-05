import contactImage from '@/assets/image/contact-image-trans.png'
import { Mail, Phone } from 'lucide-react'
import Image from 'next/image'

export const ContactUs = () => {
  return (
    <section className="bg-[#F8F5EE] py-16">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-5">
        {/* Left - Product Image */}
        <div className="flex w-full justify-center bg-[#FBFAF6] py-10 md:col-span-3">
          <Image
            src={contactImage}
            alt="Glowmi Celestial Glow Brightening Serum"
            className="min-h-[400px] w-auto"
          />
        </div>

        {/* Right - Contact Info */}
        <div className="flex flex-col">
          <h2 className="text-main-button font-serif text-3xl italic md:text-4xl">Contact Us</h2>
          <p className="mt-4 max-w-sm text-sm text-gray-600">
            If you have any questions, need assistance, or want to share feedback, we&apos;d love to
            hear from you!
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <a
              href="mailto:glowmi@gmail.com"
              className="text-main-button flex items-center gap-3 transition-colors hover:opacity-80"
            >
              <Mail className="size-5" />
              <span>glowmi@gmail.com</span>
            </a>
            <a
              href="tel:3251358133"
              className="text-main-button flex items-center gap-3 transition-colors hover:opacity-80"
            >
              <Phone className="size-5" />
              <span>3251358133</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom dark bar */}
      <div className="bg-main-button mt-16 h-3 w-full" />
    </section>
  )
}
