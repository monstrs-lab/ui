import { style }  from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { colors } from '@ui-admin/theme'

export const inputControlBaseStyles = style({
  boxSizing: 'border-box',
  boxShadow: 'none',
  outline: 'none',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  cursor: 'text',
  borderRadius: 8,
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: colors.grayblue,
  color: colors.white,
  background: 'transparent',
  '::placeholder': {
    color: colors.lightgray,
  },
  ':hover': {
    borderColor: colors.lightgray,
  },
  ':focus': {
    borderColor: colors.white,
  },
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
    disabled: {
      true: {
        cursor: 'not-allowed',
      },
    },
  },

  defaultVariants: {
    controlSize: 'normal',
  },
})
