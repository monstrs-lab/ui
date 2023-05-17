import { style }                 from '@vanilla-extract/css'

import { createResponsiveVars }  from '@css-primitives/responsive'
import { createResponsiveStyle } from '@css-primitives/responsive'

export const properties = [
  'borderRadius',
  'borderColor',
  'borderTop',
  'borderRight',
  'borderBottom',
  'borderLeft',
]

export const vars = createResponsiveVars(properties)

export const border = style(createResponsiveStyle(properties, vars))
