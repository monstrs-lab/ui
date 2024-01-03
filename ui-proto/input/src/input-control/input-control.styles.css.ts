import { style }       from '@vanilla-extract/css'
import { recipe }      from '@vanilla-extract/recipes'

import { colors }      from '@ui-proto/theme'
import { fontSizes }   from '@ui-proto/theme'
import { fontWeights } from '@ui-proto/theme'
import { fonts }       from '@ui-proto/theme'
import { radii }       from '@ui-proto/theme'
import { size }        from '@ui-proto/theme'

export const inputControlBaseStyles = style({
  fontFamily: fonts.primary,
  fontWeight: fontWeights.normal,
  fontSize: fontSizes.extra,
  borderRadius: radii.normal,
  background: colors.white,
  color: colors.black,
  borderColor: colors.black,
  borderWidth: 1,
  borderStyle: 'solid',
  boxSizing: 'border-box',
  boxShadow: 'none',
  outline: 'none',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  cursor: 'text',

  '::placeholder': {
    color: colors.black,
  },
})

export const inputControlStyles = recipe({
  base: inputControlBaseStyles,

  variants: {
    controlSize: {
      normal: {
        height: size['5x'],
        paddingLeft: size['2x'],
        paddingRight: size['2x'],
        fontSize: fontSizes.normal,
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
