import { style } from '@vanilla-extract/css'

export const tableRowStyles = style({
  boxSizing: 'border-box',
  background: '#040404',
  ':hover': {
    background: 'rgba(48, 48, 48, 0.8)',
  },
})
