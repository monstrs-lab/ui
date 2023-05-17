import { createVar } from '@vanilla-extract/css'
import { style }     from '@vanilla-extract/css'

import { border }    from '@css-primitives/border'
import { color }     from '@css-primitives/color'
import { flexbox }   from '@css-primitives/flexbox'
import { layout }    from '@css-primitives/layout'
import { position }  from '@css-primitives/position'
import { shadow }    from '@css-primitives/shadow'
import { space }     from '@css-primitives/space'

const cursor = createVar()

export const box = style([
  border,
  color,
  flexbox,
  layout,
  position,
  shadow,
  space,
  {
    cursor,
  },
])

export const vars = {
  cursor,
}
