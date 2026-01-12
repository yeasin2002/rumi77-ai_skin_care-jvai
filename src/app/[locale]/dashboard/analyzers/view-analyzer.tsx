import { Button } from '@/components/ui'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

export const ViewAnalyzer = () => {
  return (
    <div className="space-y-6">
      {/* User Card */}
      <Card className="mt-20 border-0 bg-[#f5f4f3]">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="relative size-24 overflow-hidden rounded-lg bg-gray-200">
                <Image
                  src="/placeholder-user.jpg"
                  alt="Darlene Robertson"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-main-button text-xl font-semibold">Darlene Robertson</h2>
                <p className="text-main-button/70 text-sm">New Mexico</p>
                <p className="text-main-button/70 text-sm">0 Orders</p>
                <p className="text-main-button/70 text-sm">User for 2 years</p>
              </div>
            </div>
            <Button className="bg-main-button hover:bg-main-button/90 text-white">
              Analyze History
            </Button>
          </div>
          <div className="mt-6 border-t border-gray-300" />
        </CardContent>
      </Card>
    </div>
  )
}
