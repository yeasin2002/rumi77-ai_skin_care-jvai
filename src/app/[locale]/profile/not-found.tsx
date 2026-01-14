import { Button } from '@/components/ui'
import { Link } from '@/i18n/navigation'

const ProfileNotFound = () => {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center py-12 text-center">
      <h2 className="font-caudex text-main-button text-4xl font-normal">Page Not Found</h2>
      <p className="text-main-button/70 mt-3 text-sm">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/profile">
        <Button className="bg-main-button hover:bg-main-button/90 mt-6 text-white">
          Back to Profile
        </Button>
      </Link>
    </div>
  )
}

export default ProfileNotFound
