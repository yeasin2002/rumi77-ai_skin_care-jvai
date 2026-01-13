import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const ProfilePage = () => {
  return (
    <Card className="border-main-button/30 bg-background-secondary font-open-sans">
      <CardHeader>
        <CardTitle className="text-main-primary-base_light font-open-sans text-3xl font-normal">
          Skin Profile
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-1">
            <p className="text-main-primary-base_light font-open-sans text-base font-normal">
              Skin Type
            </p>
            <p className="text-main-secondary">Combination</p>
          </div>
          <div className="space-y-1">
            <p className="text-main-primary-base_light font-open-sans text-base font-normal">
              Primary Concerns
            </p>
            <p className="text-main-secondary text-base">Acne, dark spots</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProfilePage
