import { style } from '@vanilla-extract/css'

export const selectItemTextStyles = style({
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  flexGrow: 1,
  textAlign: 'left',
})
