import { style }  from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const buttonStyles = recipe({
  base: style({
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    outline: 'none',
    padding: 0,
    border: 0,
    borderRadius: 4,
    position: 'relative',
  }),

  variants: {
    variant: {
      secondary: {
        color: '#ffffff',
        backgroundColor: '#2c2c2c',
        ':hover': {
          background: '#28282B',
        },
        ':active': {
          background: '#000000',
        },
      },
      primary: {
        color: '#000000',
        backgroundColor: '#d3d3d3',
        ':hover': {
          background: '#d7d7d4',
        },
        ':active': {
          background: '#ffffff',
        },
      },
    },
    size: {
      small: {
        height: 16,
        paddingLeft: 8,
        paddingRight: 8,
      },
      normal: {
        height: 24,
        paddingLeft: 12,
        paddingRight: 12,
      },
      large: {
        height: 32,
        paddingLeft: 16,
        paddingRight: 16,
      },
    },
  },

  defaultVariants: {
    size: 'normal',
    variant: 'primary',
  },
})
