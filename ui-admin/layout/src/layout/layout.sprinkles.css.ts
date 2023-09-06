import { createSprinkles }   from '@vanilla-extract/sprinkles'

import { spaceProperties }   from '@ui-admin/sprinkles'
import { layoutProperties }  from '@ui-admin/sprinkles'
import { flexboxProperties } from '@ui-admin/sprinkles'

export const layoutSprinkles = createSprinkles(spaceProperties, layoutProperties, flexboxProperties)
