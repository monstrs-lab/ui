import { style } from '@vanilla-extract/css'

import { vars }  from '@ui-admin/theme'

export const inputLabelStyles = style({
  marginBottom: '8px',
  zIndex: 3,
  color: '#c1c1c1',
  fontSize: 12,
  fontFamily: vars.fonts.primary,
})
