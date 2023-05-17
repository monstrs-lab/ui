import { style }                 from '@vanilla-extract/css'

import { createResponsiveVars }  from '@css-primitives/responsive'
import { createResponsiveStyle } from '@css-primitives/responsive'

export const properties = [
  'alignItems',
  'alignContent',
  'justifyItems',
  'justifyContent',
  'flexWrap',
  'flexDirection',
  'flexGrow',
  'flexShrink',
  'flexBasis',
  'justifySelf',
  'alignSelf',
  'order',
]

export const vars = createResponsiveVars(properties)

export const flexbox = style(createResponsiveStyle(properties, vars))
