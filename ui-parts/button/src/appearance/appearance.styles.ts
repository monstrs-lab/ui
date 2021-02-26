import { styleFn }                from 'styled-system'
import { ifProp }                 from 'styled-tools'

import { execAndSerialize }       from '@ui-parts/styles'
import { combine }                from '@ui-parts/styles'

import { ButtonAppearanceStyles } from './appearance.interfaces'

export const createColorStyles: styleFn = (
  color: string,
  backgroundColor: string,
  borderColor: string
) => () => ({
  backgroundColor,
  borderColor,
  color,
})

export const createGhostStyles: styleFn = (color: string) =>
  ifProp('ghost', {
    backgroundColor: 'transparent',
    color,
  })

export const createAppearanceStyles = ({
  fontColor,
  backgroundColor,
  borderColor,
}: ButtonAppearanceStyles): styleFn =>
  execAndSerialize(
    combine(
      createColorStyles(fontColor, backgroundColor, borderColor || backgroundColor),
      createGhostStyles(
        (borderColor || backgroundColor) !== 'transparent'
          ? borderColor || backgroundColor
          : fontColor
      )
    )
  )
