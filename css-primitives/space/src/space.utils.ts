import { createResponsiveAssign } from '@css-primitives/responsive'

import { properties }             from './space.css'
import { vars }                   from './space.css'

export const assignSpaceVars = createResponsiveAssign(properties, vars)
