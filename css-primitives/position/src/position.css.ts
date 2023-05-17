import { style }                 from '@vanilla-extract/css'

import { createResponsiveVars }  from '@css-primitives/responsive'
import { createResponsiveStyle } from '@css-primitives/responsive'

export const properties = ['position', 'zIndex', 'top', 'right', 'bottom', 'left']

export const vars = createResponsiveVars(properties)

export const position = style(createResponsiveStyle(properties, vars))
