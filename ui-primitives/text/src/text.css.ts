import { createVar } from '@vanilla-extract/css'
import { style }     from '@vanilla-extract/css'

const textTransform = createVar()
const textOverflow = createVar()
const wordBreak = createVar()
const cursor = createVar()

export const text = style({
  textTransform,
  textOverflow,
  wordBreak,
  cursor,
})

export const vars = {
  textTransform,
  textOverflow,
  wordBreak,
  cursor,
}
