import { style }                     from '@vanilla-extract/css'

import { flexbox }                   from '@css-primitives/flexbox'
import { layout as layoutPrimitive } from '@css-primitives/layout'
import { space }                     from '@css-primitives/space'

export const layout = style([layoutPrimitive, space, flexbox])
