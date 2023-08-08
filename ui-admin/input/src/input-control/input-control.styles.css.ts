import { recipe } from '@vanilla-extract/recipes'
import { style }  from '@vanilla-extract/css'

export const inputControlBaseStyles = style({
  boxSizing: 'border-box',
  boxShadow: 'none',
  outline: 'none',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  cursor: 'text',
})

export const inputControlStyles = recipe({
  base: inputControlBaseStyles,

  variants: {
    controlSize: {
      normal: {
        height: 40,
        paddingLeft: 12,
        paddingRight: 12,
        fontSize: '14px',
      },
    },
    attach: {
      left: {
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
        position: 'relative',
        marginLeft: -1,
        width: 'calc(100% + 1px)',
        ':focus': {
          zIndex: 2,
        },
        ':hover': {
          zIndex: 1,
        },
      },
      right: {
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
        position: 'relative',
        ':focus': {
          zIndex: 2,
        },
        ':hover': {
          zIndex: 1,
        },
      },
      both: {
        borderRadius: 0,
        position: 'relative',
        marginLeft: -1,
        width: 'calc(100% + 1px)',
        ':focus': {
          zIndex: 2,
        },
        ':hover': {
          zIndex: 1,
        },
      },
    },
  },

  defaultVariants: {
    controlSize: 'normal',
  },
})
