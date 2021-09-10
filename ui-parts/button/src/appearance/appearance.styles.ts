import { styleFn }                from 'styled-system'
import { ifProp }                 from 'styled-tools'

import { execAndSerialize }       from '@ui-parts/styles'
import { combine }                from '@ui-parts/styles'

import { ButtonAppearanceStyles } from './appearance.interfaces'

export const createColorStyles: styleFn =
  (color: string, backgroundColor: string, borderColor: string) => () => ({
    backgroundColor,
    borderColor,
    color,
  })

export const createInvertedStyles: styleFn = (color: string, borderWidth = 1) =>
  ifProp('inverted', {
    backgroundColor: 'transparent',
    borderWidth,
    color,
  })

export const createAppearanceStyles = ({
  fontColor,
  backgroundColor,
  borderColor,
  invertedBorderWidth,
}: ButtonAppearanceStyles): styleFn =>
  execAndSerialize(
    combine(
      createColorStyles(fontColor, backgroundColor, borderColor || backgroundColor),
      createInvertedStyles(
        (borderColor || backgroundColor) !== 'transparent'
          ? borderColor || backgroundColor
          : fontColor,
        invertedBorderWidth
      )
    )
  )
