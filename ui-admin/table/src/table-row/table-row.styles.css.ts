import { style } from '@vanilla-extract/css'

export const tableRowStyles = style({
  boxSizing: 'border-box',
  background: '#101213',
  ':hover': {
    background: '#5a5d62',
  },
})
