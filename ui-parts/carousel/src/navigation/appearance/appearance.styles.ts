import { styleFn }                    from 'styled-system'

import { execAndSerialize }           from '@ui-parts/styles'
import { combine }                    from '@ui-parts/styles'

import { NavigationAppearanceStyles } from './appearance.interfaces'

export const createColorStyles: styleFn = (
  color: string,
  backgroundColor: string,
  borderColor: string
) => () => ({
  backgroundColor,
  borderColor,
  color,
})

export const createNavigationAppearanceStyles = ({
  color,
  backgroundColor,
  borderColor,
}: NavigationAppearanceStyles): styleFn =>
  execAndSerialize(combine(createColorStyles(color, backgroundColor, borderColor)))
