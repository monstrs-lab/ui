import { style } from '@vanilla-extract/css'

import { vars }  from '@ui-admin/theme'

export const tableHeaderCellStyles = style({
  color: '#ffffff',
  textAlign: 'left',
  background: '#040404',
  fontFamily: vars.fonts.primary,
  fontWeight: vars.fontWeights.semibold,
  borderTop: '1px solid #1E1E1E',
  borderBottom: '1px solid #1E1E1E',
  fontSize: 12,
  padding: '24px 16px',
  boxSizing: 'border-box',
})
