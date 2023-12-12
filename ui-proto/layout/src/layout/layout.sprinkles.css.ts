import { createSprinkles }   from '@vanilla-extract/sprinkles'

import { spaceProperties }   from '@ui-proto/sprinkles'
import { layoutProperties }  from '@ui-proto/sprinkles'
import { flexboxProperties } from '@ui-proto/sprinkles'

export const layoutSprinkles = createSprinkles(spaceProperties, layoutProperties, flexboxProperties)
