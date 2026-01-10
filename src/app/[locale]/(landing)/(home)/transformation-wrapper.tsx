import { getTranslations } from 'next-intl/server'
import { Transformation } from './transformation'

export const TransformationWrapper = async () => {
  const t = await getTranslations('home.transformation')

  return (
    <Transformation
      title={t('title')}
      desc={t('desc')}
      beforeSkinRoughnessTitle={t('features.before.skinRoughness.title')}
      beforeSkinRoughnessDesc={t('features.before.skinRoughness.description')}
      beforeDeadSkinTitle={t('features.before.deadSkin.title')}
      beforeDeadSkinDesc={t('features.before.deadSkin.description')}
      afterRadiantGlowTitle={t('features.after.radiantGlow.title')}
      afterRadiantGlowDesc={t('features.after.radiantGlow.description')}
      afterProvenEffectivenessTitle={t('features.after.provenEffectiveness.title')}
      afterProvenEffectivenessDesc={t('features.after.provenEffectiveness.description')}
    />
  )
}
