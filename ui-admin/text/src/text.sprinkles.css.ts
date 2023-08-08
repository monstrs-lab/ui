import { createSprinkles }      from '@vanilla-extract/sprinkles'

import { spaceProperties }      from '@ui-admin/sprinkles'
import { layoutProperties }     from '@ui-admin/sprinkles'
import { typographyProperties } from '@ui-admin/sprinkles'
import { colorProperties }      from '@ui-admin/sprinkles'

export const textSprinkles = createSprinkles(
  spaceProperties,
  layoutProperties,
  colorProperties,
  typographyProperties
)
