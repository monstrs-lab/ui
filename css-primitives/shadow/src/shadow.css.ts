import { style }                 from '@vanilla-extract/css'

import { createResponsiveVars }  from '@css-primitives/responsive'
import { createResponsiveStyle } from '@css-primitives/responsive'

export const properties = ['boxShadow', 'textShadow']

export const vars = createResponsiveVars(properties)

export const shadow = style(createResponsiveStyle(properties, vars))
