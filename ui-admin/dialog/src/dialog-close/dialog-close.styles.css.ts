import { style }  from '@vanilla-extract/css'

import { colors } from '@ui-admin/theme'
import { vars }   from '@ui-admin/theme'

export const dialogCloseStyles = style({
  position: 'absolute',
  top: 8,
  right: 8,
  zIndex: vars.zIndex['1000z'],
  cursor: 'pointer',
  color: colors.white,
  pointerEvents: 'auto',
  padding: 8,
  selectors: {
    '&:active': {
      transform: 'scale(0.9)',
    },
    '&:hover': {
      color: colors.blue,
    },
  },
})
