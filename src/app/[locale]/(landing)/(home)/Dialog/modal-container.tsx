'use client'

import { X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { ReactNode, useEffect } from 'react'
import { cn } from '../../../../../lib/utils'

type ModalContainerProps = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  className?: string
  showCloseButton?: boolean
  hasClosedModal: boolean
}

export const ModalContainer = ({
  isOpen,
  onClose,
  children,
  className = '',
  showCloseButton = true,
  hasClosedModal = false,
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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          // hasClosedModal: 'pointer-events-none',
          className={
            'fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 ' +
            (hasClosedModal ? 'pointer-events-none' : '')
          }
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className={cn(
              `relative w-full max-w-225 overflow-hidden rounded-lg bg-white shadow-xl`,
              className
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {showCloseButton && (
              <button
                type="button"
                onClick={onClose}
                className="absolute top-3 right-3 z-20 flex size-8 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-gray-100"
                aria-label="Close dialog"
              >
                <X className="size-5 text-gray-700" />
              </button>
            )}
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
