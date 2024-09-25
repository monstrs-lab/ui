import { style }  from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { colors } from '@ui-proto/theme'
import { radii }  from '@ui-proto/theme'

const dialogContentBaseStyles = style({
  position: 'relative',
  width: '100%',
  display: 'flex',
  boxSizing: 'border-box',
  background: colors.white,
  borderRadius: radii.normal,
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: colors.black,
  minHeight: 80,
  selectors: {
    '&:focus': {
      outline: 'none',
    },
  },
})

export const dialogContentStyles = recipe({
  base: dialogContentBaseStyles,

  variants: {
    size: {
      small: {
        '@media': {
          'screen and (min-width: 40em)': {
            width: 375,
          },
        },
      },
      normal: {
        '@media': {
          'screen and (min-width: 40em)': {
            width: 480,
          },
        },
      },
      large: {
        '@media': {
          'screen and (min-width: 40em)': {
            width: 600,
          },
        },
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})
