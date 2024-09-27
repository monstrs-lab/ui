import { style }  from '@vanilla-extract/css'

import { vars }   from '@ui-proto/theme'
import { colors } from '@ui-proto/theme'

export const tableCellStyles = style({
  color: colors.white,
  borderTopColor: colors.black,
  borderTopWidth: 1,
  borderTopStyle: 'solid',
  fontFamily: vars.fonts.primary,
  fontSize: 14,
  padding: 16,
})
