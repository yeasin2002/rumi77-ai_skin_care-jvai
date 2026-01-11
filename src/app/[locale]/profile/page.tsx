import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const ProfilePage = () => {
  return (
    <Card className="border-main-button/30 bg-background-secondary">
      <CardHeader>
        <CardTitle className="text-xl font-normal">Skin Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-1">
            <p className="text-muted-foreground text-sm">Skin Type</p>
            <p className="text-main-button">Combination</p>
          </div>
          <div className="space-y-1">
            <p className="text-muted-foreground text-sm">Primary Concerns</p>
            <p className="text-main-button">Acne, dark spots</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProfilePage
