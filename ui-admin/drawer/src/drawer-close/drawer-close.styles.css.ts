import { style }  from '@vanilla-extract/css'

import { colors } from '@ui-admin/theme'

export const drawerCloseStyles = style({
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
