import { prop, switchProp }       from 'styled-tools'

import { createBaseStyles }       from '@ui-parts/button'
import { createShapeStyles }      from '@ui-parts/button'
import { createAppearanceStyles } from '@ui-parts/button'

const smallNormalSizeStyles = createShapeStyles({ size: 24, fontSize: 11, rounding: 3 })
const shapeNormalSizeStyles = createShapeStyles({ size: 32, fontSize: 12, rounding: 3 })
const largeNormalSizeStyles = createShapeStyles({ size: 48, fontSize: 14, rounding: 3 })

const appearancePrimaryStyles = createAppearanceStyles({
  backgroundColor: prop('theme.colors.button.primary.fill'),
  fontColor: 'white',
  ghostBorderWidth: 2,
})

export const baseStyles = createBaseStyles()

export const shapeStyles = switchProp(prop('size', 'normal'), {
  small: smallNormalSizeStyles,
  normal: shapeNormalSizeStyles,
  large: largeNormalSizeStyles,
})

export const variantStyles = switchProp(prop('variant', 'primary'), {
  primary: appearancePrimaryStyles,
})