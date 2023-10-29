import { style }  from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const inputControlBaseStyles = style({
  boxSizing: 'border-box',
  boxShadow: 'none',
  outline: 'none',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  cursor: 'text',
  borderRadius: 8,
  background: '#1d1e20',
  border: 0,
  color: '#ffffff',
})

export const inputControlStyles = recipe({
  base: inputControlBaseStyles,

  variants: {
    controlSize: {
      normal: {
        height: 48,
        paddingLeft: 16,
        paddingRight: 16,
        fontSize: 14,
        '::placeholder': {
          color: '#798186',
        },
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
