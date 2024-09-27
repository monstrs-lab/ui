import { style }  from '@vanilla-extract/css'

import { colors } from '@ui-proto/theme'
import { vars }   from '@ui-proto/theme'

export const tableHeaderCellStyles = style({
  color: colors.black,
  textAlign: 'left',
  fontFamily: vars.fonts.primary,
  fontWeight: vars.fontWeights.normal,
  fontSize: 14,
  padding: 16,
  boxSizing: 'border-box',
})
