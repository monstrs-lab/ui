import { style }  from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const avatarRootStyles = recipe({
  base: style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    overflow: 'hidden',
    userSelect: 'none',
    boxSizing: 'border-box',
    borderRadius: '50%',
  }),

  variants: {
    size: {
      normal: {
        width: 32,
        height: 32,
      },
    },
  },

  defaultVariants: {
    size: 'normal',
  },
})
