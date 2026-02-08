'use client'

import { useEffect, useState } from 'react'
import { BeMemberContent } from './Dialog/be-member-content'
import { CreateAccountContent } from './Dialog/create-account-content'
import { ModalContainer } from './Dialog/modal-container'
import { WelcomeContent } from './Dialog/welcome-content'

export type ModalStep = 'be-member' | 'create-account' | 'welcome' | null

export const ShowModals = () => {
  const [currentStep, setCurrentStep] = useState<ModalStep>(null)

  // Show "Be Member" modal 3-4 seconds after landing
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentStep('be-member')
    }, 1000) // 1 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setCurrentStep(null)
  }

  const handleJoinClick = () => {
    setCurrentStep('create-account')
  }

  // const handleFormSubmit = async () => {
  // const response = await api.createAccount(formData)
  // if (response.success) {
  // setCurrentStep('welcome')
  // }
  // }

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
