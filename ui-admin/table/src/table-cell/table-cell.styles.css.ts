import { style }  from '@vanilla-extract/css'

import { vars }   from '@ui-admin/theme'
import { colors } from '@ui-admin/theme'

export const tableCellStyles = style({
  color: colors.white,
  borderBottomColor: colors.gray,
  borderBottomWidth: 1,
  borderBottomStyle: 'solid',
  fontFamily: vars.fonts.primary,
  fontSize: 14,
  padding: 16,
})
