import { style }  from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { vars }   from '@ui-proto/theme'
import { colors } from '@ui-proto/theme'

export const selectTriggerBaseStyles = style({
  outline: 'none',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  width: 'auto',
  maxWidth: '100%',
  position: 'relative',
  fontFamily: vars.fonts.primary,
  borderRadius: 8,
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: colors.black,
  color: colors.white,
  background: 'transparent',
  '::placeholder': {
    color: colors.gray,
  },
  ':hover': {
    borderColor: colors.black,
  },
  ':focus': {
    borderColor: colors.black,
  },
})

export const selectTriggerStyles = recipe({
  base: selectTriggerBaseStyles,

  variants: {
    size: {
      normal: {
        height: 48,
        paddingLeft: 16,
        paddingRight: 16,
        fontSize: 14,
      },
    },
    fill: {
      true: {
        width: '100%',
      },
    },
  },

  defaultVariants: {
    size: 'normal',
  },
})
