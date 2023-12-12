import { style }       from '@vanilla-extract/css'
import { recipe }      from '@vanilla-extract/recipes'

import { colors }      from '@ui-proto/theme'
import { fontSizes }   from '@ui-proto/theme'
import { fontWeights } from '@ui-proto/theme'
import { size }        from '@ui-proto/theme'
import { fonts }       from '@ui-proto/theme'
import { radii }       from '@ui-proto/theme'

export const buttonStyles = recipe({
  base: style({
    fontFamily: fonts.primary,
    borderRadius: radii.normal,
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    outline: 'none',
    padding: 0,
    border: 0,
    position: 'relative',
  }),

  variants: {
    variant: {
      primary: {
        color: colors.white,
        backgroundColor: colors.black,
      },
    },
    size: {
      small: {
        fontSize: fontSizes.low,
        fontWeight: fontWeights.semibold,
        height: size['3x'],
        paddingLeft: size['1x'],
        paddingRight: size['1x'],
      },
      normal: {
        fontSize: fontSizes.extra,
        fontWeight: fontWeights.semibold,
        height: size['4x'],
        paddingLeft: size['1x'],
        paddingRight: size['1x'],
      },
      large: {
        fontSize: fontSizes.normal,
        fontWeight: fontWeights.semibold,
        height: size['6x'],
        paddingLeft: size['1x'],
        paddingRight: size['1x'],
      },
    },
  },

  defaultVariants: {
    size: 'normal',
    variant: 'primary',
  },
})
