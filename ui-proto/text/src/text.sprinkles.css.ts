import { createSprinkles }      from '@vanilla-extract/sprinkles'

import { spaceProperties }      from '@ui-proto/sprinkles'
import { layoutProperties }     from '@ui-proto/sprinkles'
import { typographyProperties } from '@ui-proto/sprinkles'
import { colorProperties }      from '@ui-proto/sprinkles'

export const textSprinkles = createSprinkles(
  spaceProperties,
  layoutProperties,
  colorProperties,
  typographyProperties
)
