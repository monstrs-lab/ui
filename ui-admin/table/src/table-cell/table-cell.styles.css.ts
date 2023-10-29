import { style } from '@vanilla-extract/css'

import { vars }  from '@ui-admin/theme'

export const tableCellStyles = style({
  color: '#ffffff',
  borderBottom: '1px solid #1E1E1E',
  fontFamily: vars.fonts.primary,
  fontSize: 14,
  padding: 16,
})
