import { style }  from '@vanilla-extract/css'

import { colors } from '@ui-admin/theme'

export const avatarFallbackStyles = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  boxSizing: 'border-box',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 'inherit',
  background: colors.white,
  color: colors.black,
  fontSize: 16,
})
