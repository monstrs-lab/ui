import { style }  from '@vanilla-extract/css'

import { colors } from '@ui-admin/theme'

export const tableRowStyles = style({
  boxSizing: 'border-box',
  background: colors.black,
  ':hover': {
    background: colors.gray,
  },
})
