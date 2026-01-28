import { getTranslations } from 'next-intl/server'
import { NewNavLarge } from './new-nav-large'
import { NewNavMobile } from './new-nav-mobile'

export const NewNav = async () => {
  const t = await getTranslations('shared.nav.navItems')
  const navItems = [
    { name: t('home'), url: '/' },
    { name: t('ingredients'), url: '/ingredients' },
    { name: t('analyzeSkin'), url: '/skin-analyzer/analysis' },
  ]
  return (
    <>
      <NewNavLarge navItems={navItems} />
      <NewNavMobile navItems={navItems} />
    </>
  )
}
