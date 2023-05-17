import { createResponsiveAssign } from '@css-primitives/responsive'

import { properties }             from './flexbox.css'
import { vars }                   from './flexbox.css'

export const assignFlexboxVars = createResponsiveAssign(properties, vars)
