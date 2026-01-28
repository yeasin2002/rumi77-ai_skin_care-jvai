import React from 'react'

type Props = {
  navItems: {
    name: string
    url: string
  }[]
}

export const NewNavMobile = ({ navItems }: Props) => {
  console.log('🚀 ~ NewNavMobile ~ navItems:', navItems)
  return <div>newNavMobile</div>
}
