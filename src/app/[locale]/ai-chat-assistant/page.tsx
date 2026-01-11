import { Nav } from '@/components/shared'
import { AiChatContent } from './ai-chat-content'
import { AiChatBox } from './ai-chatbox'

const AiChatAssistant = () => {
  return (
    <div className="bg-background flex min-h-screen flex-col">
      <Nav />

      {/* Chat Content - Scrollable */}
      <div className="flex-1 overflow-y-auto px-6 lg:px-8">
        <div className="px-20">
          <AiChatContent />
        </div>
      </div>

      {/* Chat Input - Fixed at bottom */}
      <div className="bg-background border-t border-gray-200/50 px-6 py-4 lg:px-8">
        <div className="px-20">
          <AiChatBox />
        </div>
      </div>
    </div>
  )
}

export default AiChatAssistant
