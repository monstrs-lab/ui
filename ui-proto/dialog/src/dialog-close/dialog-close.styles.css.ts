import { style }  from '@vanilla-extract/css'

import { colors } from '@ui-proto/theme'
import { vars }   from '@ui-proto/theme'

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
      opacity: 0.8,
    },
  },
})
