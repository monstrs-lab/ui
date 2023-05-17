import { style }                 from '@vanilla-extract/css'

import { createResponsiveVars }  from '@css-primitives/responsive'
import { createResponsiveStyle } from '@css-primitives/responsive'

export const properties = [
  'display',
  'width',
  'height',
  'minWidth',
  'minHeight',
  'maxWidth',
  'maxHeight',
  'verticalAlign',
  'overflowX',
  'overflowY',
  'boxSizing',
]

export const vars = createResponsiveVars(properties)

export const layout = style(createResponsiveStyle(properties, vars))
