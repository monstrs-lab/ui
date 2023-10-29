import { createSprinkles }  from '@vanilla-extract/sprinkles'

import { layoutProperties } from '@ui-admin/sprinkles'
import { spaceProperties }  from '@ui-admin/sprinkles'

export const navigationActionsSprinkles = createSprinkles(layoutProperties, spaceProperties)
