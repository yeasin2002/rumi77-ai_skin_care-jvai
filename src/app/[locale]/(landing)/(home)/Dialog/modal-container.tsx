'use client'

import { X } from 'lucide-react'
import { ReactNode, useEffect } from 'react'

type ModalContainerProps = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  maxWidth?: string
  showCloseButton?: boolean
}

export const ModalContainer = ({
  isOpen,
  onClose,
  children,
  maxWidth = 'max-w-[900px]',
  showCloseButton = true,
}: ModalContainerProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className={`relative w-full ${maxWidth} overflow-hidden rounded-lg bg-white shadow-xl`}
        onClick={(e) => e.stopPropagation()}
      >
        {showCloseButton && (
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3 right-3 z-20 flex size-8 items-center justify-center rounded-full transition-colors hover:bg-gray-100"
            aria-label="Close dialog"
          >
            <X className="size-5 text-gray-700" />
          </button>
        )}
        {children}
      </div>
    </div>
  )
}
