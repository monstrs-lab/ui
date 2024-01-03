import { style }  from '@vanilla-extract/css'

import { colors } from '@ui-admin/theme'

export const navigationRootStyles = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  background: colors.blackblue,
  padding: 16,
  width: '100%',
  borderBottomColor: colors.gray,
  borderBottomWidth: 1,
  borderBottomStyle: 'solid',
})
