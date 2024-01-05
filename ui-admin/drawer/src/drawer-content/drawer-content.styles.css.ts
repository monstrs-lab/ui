import { style }  from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { colors } from '@ui-admin/theme'

export const drawerContentStyles = recipe({
  base: style({
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '100%',
    display: 'flex',
    boxSizing: 'border-box',
    background: colors.blackblue,
    selectors: {
      '&:focus': {
        outline: 'none',
      },
    },
    '@media': {
      'screen and (min-width: 52em)': {
        width: 375,
      },
    },
  }),

  variants: {
    direction: {
      left: {
        left: 0,
      },
      right: {
        right: 0,
      },
    },
  },
  defaultVariants: {
    direction: 'left',
  },
})
