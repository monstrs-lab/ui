import { createResponsiveAssign } from '@css-primitives/responsive'

import { properties }             from './shadow.css'
import { vars }                   from './shadow.css'

export const assignShadowVars = createResponsiveAssign(properties, vars)
