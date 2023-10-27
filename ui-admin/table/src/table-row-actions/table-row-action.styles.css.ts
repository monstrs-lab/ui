import { style } from '@vanilla-extract/css'

import { vars }  from '@ui-admin/theme'

export const tableRowActionStyles = style({
  fontFamily: vars.fonts.primary,
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  wordBreak: 'break-word',
  cursor: 'pointer',
  outline: 'none',
  padding: 0,
  border: 0,
  width: 24,
  height: 24,
  borderRadius: 4,
  position: 'relative',
  color: '#ffffff',
  background: '#2F2E33',
  ':hover': {
    background: '#28282B',
  },
  ':disabled': {
    cursor: 'not-allowed',
  },
})
