import logoCompact from '@/assets/image/logo-compact.png'
import Image from 'next/image'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
]

const legalItems = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-conditions' },
]

const contactEmail = 'hello.hafsabinte@gmail.com'

export const Footer = () => {
  return (
    <footer className="pt-20s bg-[#f5f4f3] px-4 py-10 sm:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-end gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center sm:items-start">
          <Image src={logoCompact} alt="Glowmi Logo" className="w-auto" />
          <p className="mt-2 text-sm text-gray-500">The Essence of Timeless Glow</p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col items-center gap-2 sm:items-start">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-main-button text-sm text-gray-700 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Legal */}
        <div className="flex flex-col items-center gap-2 sm:items-start">
          {legalItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-main-button text-sm text-gray-700 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <span className="text-sm font-medium text-gray-700">Contact Us</span>
          <a
            href={`mailto:${contactEmail}`}
            className="hover:text-main-button text-sm text-gray-700 transition-colors"
          >
            Email: {contactEmail}
          </a>
        </div>
      </div>
    </footer>
  )
}
