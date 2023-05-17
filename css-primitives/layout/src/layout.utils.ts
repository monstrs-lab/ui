import { createResponsiveAssign } from '@css-primitives/responsive'

import { properties }             from './layout.css'
import { vars }                   from './layout.css'

export const assignLayoutVars = createResponsiveAssign(properties, vars)
