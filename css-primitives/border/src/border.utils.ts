import { createResponsiveAssign } from '@css-primitives/responsive'

import { properties }             from './border.css'
import { vars }                   from './border.css'

export const assignBorderVars = createResponsiveAssign(properties, vars)
