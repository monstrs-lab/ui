import { createResponsiveAssign } from '@css-primitives/responsive'

import { properties }             from './position.css'
import { vars }                   from './position.css'

export const assignPositionVars = createResponsiveAssign(properties, vars)
