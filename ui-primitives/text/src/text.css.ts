import { createVar }  from '@vanilla-extract/css'
import { style }      from '@vanilla-extract/css'

import { color }      from '@css-primitives/color'
import { layout }     from '@css-primitives/layout'
import { space }      from '@css-primitives/space'
import { typography } from '@css-primitives/typography'

const textTransform = createVar()
const textOverflow = createVar()
const wordBreak = createVar()
const cursor = createVar()
const whiteSpace = createVar()

export const text = style([
  color,
  layout,
  space,
  typography,
  {
    textTransform,
    textOverflow,
    wordBreak,
    cursor,
    whiteSpace,
  },
])

export const vars = {
  textTransform,
  textOverflow,
  wordBreak,
  cursor,
  whiteSpace,
}
