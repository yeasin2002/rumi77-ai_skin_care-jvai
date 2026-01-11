import { Trash2 } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'

const routines = [
  {
    id: 1,
    title: 'Personal Skincare Routine',
    date: '20 Nov, 2025',
    daysAgo: '1 days ago',
  },
  {
    id: 2,
    title: 'Acne Skincare Routine',
    date: '20 Nov, 2025',
    daysAgo: '1 days ago',
  },
]

const SaveRoutine = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-sm font-medium">Your Saved Routine</h2>
      <div className="space-y-3">
        {routines.map((routine) => (
          <Card key={routine.id} className="border-main-button/30 bg-background-secondary">
            <CardContent className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="text-lg font-normal">{routine.title}</h3>
                <p className="text-main-button text-sm">
                  {routine.date} • {routine.daysAgo}
                </p>
              </div>
              <button
                type="button"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={`Delete ${routine.title}`}
              >
                <Trash2 className="size-5" />
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default SaveRoutine
