export const stylesTemplate = ({ size, fontSize, fontColor, backgroundColor }: any = {}) => `
import { prop, switchProp } from 'styled-tools'

import { createBaseStyles } from '@ui-parts/button'
import { createShapeStyles } from '@ui-parts/button'
import { createAppearanceStyles } from '@ui-parts/button'

const shapeNormalSizeStyles = createShapeStyles({ size: ${size}, fontSize: ${fontSize} })

const appearancePrimaryStyles = createAppearanceStyles({
    fontColor: '${fontColor}',
    backgroundColor: '${backgroundColor}',
})

export const baseStyles = createBaseStyles()

export const shapeStyles = switchProp(prop('size', 'normal'), {
    normal: shapeNormalSizeStyles,
})

export const variantStyles = switchProp(prop('variant', 'primary'), {
    primary: appearancePrimaryStyles,
})
`

export const componentTemplate = () => `
import styled from '@emotion/styled'

import { baseStyles } from './button.styles'
import { shapeStyles } from './button.styles'
import { variantStyles } from './button.styles'

export const Button = styled.button(baseStyles, shapeStyles, variantStyles)
`

export const templates = {
  'button.styles.ts': stylesTemplate,
  'button.component.tsx': componentTemplate,
}
