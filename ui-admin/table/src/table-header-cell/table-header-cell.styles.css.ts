import { style }  from '@vanilla-extract/css'

import { colors } from '@ui-admin/theme'
import { vars }   from '@ui-admin/theme'

export const tableHeaderCellStyles = style({
  color: colors.lightgray,
  textAlign: 'left',
  fontFamily: vars.fonts.primary,
  fontWeight: vars.fontWeights.normal,
  borderBottomColor: colors.gray,
  borderBottomStyle: 'solid',
  borderBottomWidth: 1,
  fontSize: 14,
  padding: 16,
  boxSizing: 'border-box',
  background: colors.blackblue,
})
