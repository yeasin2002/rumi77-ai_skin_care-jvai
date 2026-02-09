'use client'

import { useSeasonStorage } from '@/hooks/useSeasonStorage'
import { useEffect, useState } from 'react'
import { BeMemberContent } from './Dialog/be-member-content'
import { CreateAccountContent } from './Dialog/create-account-content'
import { ModalContainer } from './Dialog/modal-container'
import { WelcomeContent } from './Dialog/welcome-content'

export type ModalStep = 'be-member' | 'create-account' | 'welcome' | null

const getSeasonName = (monthIndex: number) => {
  if (monthIndex >= 2 && monthIndex <= 4) return 'spring'
  if (monthIndex >= 5 && monthIndex <= 7) return 'summer'
  if (monthIndex >= 8 && monthIndex <= 10) return 'autumn'
  return 'winter'
}

export const ShowModals = () => {
  const [currentStep, setCurrentStep] = useState<ModalStep>(null)
  const { get, set } = useSeasonStorage('modal')

  const now = new Date()
  const seasonKey = `home-dismissed-${now.getFullYear()}-${getSeasonName(now.getMonth())}`

  // Show the modal only if it was not dismissed in the current season.
  useEffect(() => {
    const isDismissedForSeason = get<boolean>(seasonKey, false)
    if (isDismissedForSeason) return

    const timer = setTimeout(() => {
      setCurrentStep('be-member')
    }, 1000) // 1 seconds

    return () => clearTimeout(timer)
  }, [get, seasonKey])

  const handleClose = () => {
    if (currentStep !== null) {
      set(seasonKey, true)
    }
    setCurrentStep(null)
  }

  const handleJoinClick = () => {
    setCurrentStep('create-account')
  }

  return (
    <ModalContainer
      isOpen={currentStep !== null}
      onClose={handleClose}
      // maxWidth={currentStep === 'welcome' ? 'max-w-[980px]' : 'max-w-[900px]'}
    >
      {currentStep === 'be-member' && <BeMemberContent onJoinClick={handleJoinClick} />}
      {currentStep === 'create-account' && <CreateAccountContent setCurrentStep={setCurrentStep} />}
      {currentStep === 'welcome' && <WelcomeContent />}
    </ModalContainer>
  )
}
