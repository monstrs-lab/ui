import { style }  from '@vanilla-extract/css'

import { colors } from '@ui-admin/theme'

export const tableHeaderStyles = style({
  position: 'sticky',
  margin: 0,
  top: 0,
  zIndex: 1,
  background: colors.blackblue,
})
