import { style }  from '@vanilla-extract/css'

import { colors } from '@ui-admin/theme'
import { vars }   from '@ui-admin/theme'

export const inputLabelStyles = style({
  marginBottom: '8px',
  zIndex: 3,
  color: colors.lightgray,
  fontSize: 12,
  fontFamily: vars.fonts.primary,
})
