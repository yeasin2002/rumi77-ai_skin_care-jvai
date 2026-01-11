import { Button } from '@/components/ui'
import Image from 'next/image'

type MessageType = 'user' | 'assistant'

type ProductRecommendation = {
  name: string
  brand: string
  price: string
  image: string
}

type Message = {
  id: string
  type: MessageType
  content: string
  product?: ProductRecommendation
}

const messages: Message[] = [
  {
    id: '1',
    type: 'assistant',
    content:
      "Hi! I'm your AI skincare assistant. I'm here to help you with any questions about skincare, products, or routines. How can I assist you today?",
  },
  {
    id: '2',
    type: 'user',
    content: 'Best products for acne',
  },
  {
    id: '3',
    type: 'assistant',
    content: `For acne-prone skin, I recommend:

• Use a gentle, non-comedogenic cleanser
• Look for ingredients like salicylic acid, niacinamide, or benzoyl peroxide
• Don't over exfoliate - 2-3 times per week is enough
• Always moisturize, even with oily skin
• Never skip sunscreen

Would you like me to analyze your skin and recommend specific products?`,
  },
  {
    id: '4',
    type: 'user',
    content: 'Sunscreen recommendations',
  },
  {
    id: '5',
    type: 'assistant',
    content:
      "Sunscreen is crucial for protecting your skin! Apply SPF 30 or higher every morning, even on cloudy days. Reapply every 2 hours if you're outdoors. Here's a great option:",
    product: {
      name: 'SPF 50 Mineral Sunscreen',
      brand: 'SunShield',
      price: '$32.99',
      image: 'https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?w=200&h=200&fit=crop',
    },
  },
  {
    id: '6',
    type: 'user',
    content: 'How to I build a routine?',
  },
  {
    id: '7',
    type: 'assistant',
    content: `A basic skincare routine should follow this order:

☀️ Morning:
1. Cleanser
2. Toner (optional)
3. Serum (Vitamin C)
4. Moisturizer
5. Sunscreen

🌙 Evening:
1. Cleanser
2. Toner (optional)
3. Treatment (Retinal /AHA/BHA)
4. Serum
5. Moisturizer

Consistency is key! Would you like specific product recommendations?`,
  },
]

export const AiChatContent = () => {
  return (
    <div className="flex flex-col gap-4 py-6">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`rounded-2xl px-5 py-4 ${
              message.type === 'user'
                ? 'bg-main-secondary text-main-button ml-8'
                : 'bg-main-button mr-8 text-white'
            }`}
          >
            <p className="font-open-sans text-sm leading-relaxed whitespace-pre-line">
              {message.content}
            </p>

            {/* Product Recommendation Card */}
            {message.product && (
              <div className="mt-4 max-w-60 overflow-hidden rounded-lg bg-white">
                <div className="relative aspect-video w-full">
                  <Image
                    src={message.product.image}
                    alt={message.product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3">
                  <h4 className="text-main-button text-sm font-medium">{message.product.name}</h4>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-main-button/70 text-xs">{message.product.brand}</span>
                    <span className="text-main-button text-sm font-semibold">
                      {message.product.price}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    className="border-main-button text-main-button mt-2 w-full text-xs"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
