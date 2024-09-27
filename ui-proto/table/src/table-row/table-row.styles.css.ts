import { style }  from '@vanilla-extract/css'

import { colors } from '@ui-proto/theme'

export const tableRowStyles = style({
  boxSizing: 'border-box',
  ':hover': {
    background: colors.gray,
  },
})
