import { Trash2 } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

import { Card, CardContent } from '@/components/ui/card'

const SaveRoutine = async () => {
  const t = await getTranslations('profile.saveRoutine')

  const routines = [
    {
      id: 1,
      title: t('routines.personal'),
      date: '20 Nov, 2025',
      daysAgo: `1 ${t('daysAgo')}`,
    },
    {
      id: 2,
      title: t('routines.acne'),
      date: '20 Nov, 2025',
      daysAgo: `1 ${t('daysAgo')}`,
    },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-main-primary-base_medium font-open-sans text-xl font-medium">
        {t('title')}
      </h2>
      <div className="space-y-3">
        {routines.map((routine) => (
          <Card key={routine.id} className="border-main-button/30 bg-background-secondary">
            <CardContent className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="text-main-primary-base_medium font-open-sans text-3xl font-normal">
                  {routine.title}
                </h3>
                <p className="text-sm text-[#BD9B5B]!">
                  {routine.date} • {routine.daysAgo}
                </p>
              </div>
              <button
                type="button"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={`${t('deleteLabel')} ${routine.title}`}
              >
                <Trash2 className="size-5 text-[#58351B]" />
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default SaveRoutine
