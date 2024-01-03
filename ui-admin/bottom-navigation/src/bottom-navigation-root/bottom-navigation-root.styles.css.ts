import { style }  from '@vanilla-extract/css'

import { colors } from '@ui-admin/theme'

export const bottomNavigationRootStyles = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  background: colors.blackblue,
  width: '100%',
  height: 64,
})
