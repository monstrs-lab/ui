import { style } from '@vanilla-extract/css'

import { vars }  from '@ui-admin/theme'

export const tableHeaderCellStyles = style({
  color: '#60686b',
  textAlign: 'left',
  fontFamily: vars.fonts.primary,
  fontWeight: vars.fontWeights.normal,
  borderTop: '1px solid #1E1E1E',
  borderBottom: '1px solid #1E1E1E',
  fontSize: 14,
  padding: 16,
  boxSizing: 'border-box',
})
