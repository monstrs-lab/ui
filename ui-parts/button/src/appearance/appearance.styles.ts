import { styleFn }          from 'styled-system'
import { ifProp }           from 'styled-tools'

import { execAndSerialize } from '@ui-parts/styles'
import { combine }          from '@ui-parts/styles'

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

export const createAppearanceStyles = (
  color: string | Function,
  backgroundColor: string | Function,
  borderColor?: string | Function
): styleFn =>
  execAndSerialize(
    combine(
      createColorStyles(color, backgroundColor, borderColor || backgroundColor),
      createGhostStyles(
        (borderColor || backgroundColor) !== 'transparent' ? borderColor || backgroundColor : color
      )
    )
  )
