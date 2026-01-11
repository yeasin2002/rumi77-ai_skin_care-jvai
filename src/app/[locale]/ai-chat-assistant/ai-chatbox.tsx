import { Button } from '@/components/ui'
import { Camera, Send } from 'lucide-react'

const quickPrompts = [
  'How do I build a routine?',
  'Best products for acne',
  'Explain Vitamin C benefits',
  'Sunscreen recommendations',
]

export const AiChatBox = () => {
  return (
    <div className="w-full">
      {/* Input Area */}
      <div className="flex items-center gap-3">
        <div className="border-main-secondary flex flex-1 items-center gap-2 rounded-full border bg-transparent px-5 py-3">
          <input
            type="text"
            placeholder="Ask anything about your skincare......."
            className="text-main-button placeholder:text-main-secondary flex-1 bg-transparent text-sm outline-none"
          />
          <button type="button" className="text-main-secondary hover:text-main-button">
            <Camera className="size-5" />
          </button>
        </div>
        <Button className="bg-main-button hover:bg-main-button/90 size-12 rounded-xl p-0">
          <Send className="size-5 text-white" />
        </Button>
      </div>

      {/* Quick Prompts */}
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {quickPrompts.map((prompt) => (
          <button
            key={prompt}
            type="button"
            className="bg-main-button hover:bg-main-button/90 rounded-full px-4 py-2 text-xs text-white transition-colors"
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  )
}
