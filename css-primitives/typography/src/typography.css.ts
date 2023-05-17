import { style }                 from '@vanilla-extract/css'

import { createResponsiveVars }  from '@css-primitives/responsive'
import { createResponsiveStyle } from '@css-primitives/responsive'

export const properties = [
  'fontFamily',
  'fontSize',
  'fontWeight',
  'lineHeight',
  'textAlign',
  'letterSpacing',
  'fontStyle',
]

export const vars = createResponsiveVars(properties)

export const typography = style(createResponsiveStyle(properties, vars))
