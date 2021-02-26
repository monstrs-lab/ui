import { prop, switchProp }       from 'styled-tools'

import { createBaseStyles }       from '@ui-parts/button'
import { createShapeStyles }      from '@ui-parts/button'
import { createAppearanceStyles } from '@ui-parts/button'

const smallNormalSizeStyles = createShapeStyles('normal', 24, 11, 'normal', 0.5, 6)
const shapeNormalSizeStyles = createShapeStyles('normal', 32, 12, 'normal', 0.5, 6)
const largeNormalSizeStyles = createShapeStyles('normal', 48, 14, 'normal', 0.5, 6)

const appearancePrimaryStyles = createAppearanceStyles('white', 'black', 'black')

export const baseStyles = createBaseStyles()

export const shapeStyles = switchProp(prop('size', 'normal'), {
  small: smallNormalSizeStyles,
  normal: shapeNormalSizeStyles,
  large: largeNormalSizeStyles,
})

export const variantStyles = switchProp(prop('variant', 'primary'), {
  primary: appearancePrimaryStyles,
})
