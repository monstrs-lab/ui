import { createResponsiveAssign } from '@css-primitives/responsive'

import { properties }             from './typography.css'
import { vars }                   from './typography.css'

export const assignTypographyVars = createResponsiveAssign(properties, vars)
