import { style }  from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const iconButtonStyles = recipe({
  base: style({
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    wordBreak: 'break-word',
    cursor: 'pointer',
    outline: 'none',
    padding: 0,
    border: 0,
    borderRadius: 4,
    position: 'relative',
    background: 'transparent',
    ':hover': {
      background: '#28282B',
    },
    ':active': {
      background: '#000000',
    },
  }),

  variants: {
    size: {
      small: {
        height: '16px',
        width: '16px',
      },
      normal: {
        height: '24px',
        width: '24px',
      },
      large: {
        height: '32px',
        width: '32px',
      },
    },
  },

  defaultVariants: {
    size: 'normal',
  },
})