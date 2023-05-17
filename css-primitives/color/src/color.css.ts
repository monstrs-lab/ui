import { style }                 from '@vanilla-extract/css'

import { createResponsiveVars }  from '@css-primitives/responsive'
import { createResponsiveStyle } from '@css-primitives/responsive'

export const properties = ['color', 'backgroundColor', 'opacity']

export const vars = createResponsiveVars(properties)

export const color = style(createResponsiveStyle(properties, vars))
