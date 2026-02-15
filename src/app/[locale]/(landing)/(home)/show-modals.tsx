'use client'

import { useSessionStorage } from '@/hooks/useSessionStorage'
import { useState } from 'react'
import { BeMemberContent } from './Dialog/be-member-content'
import { CreateAccountContent } from './Dialog/create-account-content'
import { ModalContainer } from './Dialog/modal-container'
import { WelcomeContent } from './Dialog/welcome-content'

export type ModalStep = 'be-member' | 'create-account' | 'welcome' | null

export const ShowModals = () => {
  const [hasClosedModal, setHasClosedModal] = useSessionStorage('modal-closed', false)

  // Initialize modal state based on session storage
  const [currentStep, setCurrentStep] = useState<ModalStep>(() =>
    hasClosedModal ? null : 'be-member'
  )

  const handleClose = () => {
    setCurrentStep(null)
    setHasClosedModal(true)
  }

  const handleJoinClick = () => {
    setCurrentStep('create-account')
  }

  return (
    <ModalContainer
      isOpen={currentStep !== null}
      onClose={handleClose}
      hasClosedModal={hasClosedModal}
    >
      {currentStep === 'be-member' && <BeMemberContent onJoinClick={handleJoinClick} />}
      {currentStep === 'create-account' && <CreateAccountContent setCurrentStep={setCurrentStep} />}
      {currentStep === 'welcome' && <WelcomeContent />}
    </ModalContainer>
  )
}
