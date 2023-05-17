import { createResponsiveAssign } from '@css-primitives/responsive'

import { properties }             from './color.css'
import { vars }                   from './color.css'

export const assignColorVars = createResponsiveAssign(properties, vars)
