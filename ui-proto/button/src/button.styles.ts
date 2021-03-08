import { prop, switchProp }       from 'styled-tools'

import { createBaseStyles }       from '@ui-parts/button'
import { createShapeStyles }      from '@ui-parts/button'
import { createContentStyles }    from '@ui-parts/button'
import { createAppearanceStyles } from '@ui-parts/button'

const smallNormalSizeStyles = createShapeStyles({ size: 24, fontSize: 11, rounding: 6 })
const shapeNormalSizeStyles = createShapeStyles({ size: 32, fontSize: 12, rounding: 6 })
const largeNormalSizeStyles = createShapeStyles({ size: 48, fontSize: 14, rounding: 6 })

const appearancePrimaryStyles = createAppearanceStyles({
  fontColor: 'white',
  backgroundColor: 'black',
})

export const baseStyles = createBaseStyles()
export const contentStyles = createContentStyles()

export const shapeStyles = switchProp(prop('size', 'normal'), {
  small: smallNormalSizeStyles,
  normal: shapeNormalSizeStyles,
  large: largeNormalSizeStyles,
})

export const variantStyles = switchProp(prop('variant', 'primary'), {
  primary: appearancePrimaryStyles,
})
