import { styleFn }                   from 'styled-system'

import { CheckmarkAppearanceStyles } from './appearance.interfaces'

export const createCheckmarkAppearanceStyles: styleFn = ({
  color,
  backgroundColor,
}: CheckmarkAppearanceStyles) => () => ({
  color,
  backgroundColor,
})
