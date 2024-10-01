import { style }  from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { colors } from '@ui-proto/theme'
import { fonts }  from '@ui-proto/theme'

export const tabsTriggerStyles = recipe({
  base: style({
    position: 'relative',
    top: 1,
    fontFamily: fonts.primary,
    padding: '0 20px',
    height: 40,
    border: 'none',
    background: 'transparent',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    color: colors.gray,
    userSelect: 'none',
    cursor: 'pointer',
    marginRight: 4,
    selectors: {
      '&:hover': {
        color: colors.black,
      },
      '&[data-state="active"]': {
        background: colors.white,
        color: colors.black,
        borderTopWidth: 1,
        borderTopStyle: 'solid',
        borderTopColor: colors.black,
        borderRightWidth: 1,
        borderRightStyle: 'solid',
        borderRightColor: colors.black,
        borderLeftWidth: 1,
        borderLeftStyle: 'solid',
        borderLeftColor: colors.black,
      },
    },
  }),
})
