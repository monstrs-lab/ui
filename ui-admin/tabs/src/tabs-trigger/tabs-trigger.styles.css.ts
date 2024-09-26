import { style }  from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { colors } from '@ui-admin/theme'
import { fonts }  from '@ui-admin/theme'

export const tabsTriggerStyles = recipe({
  base: style({
    fontFamily: fonts.primary,
    padding: '0 20px',
    height: 56,
    background: 'transparent',
    border: 'none',
    color: colors.white,
    userSelect: 'none',
    cursor: 'pointer',
    selectors: {
      '&:hover': {
        color: colors.blue,
      },
      '&[data-state="active"]': {
        boxShadow: `inset 0 -1px 0 0 ${colors.blue}, 0 1px 0 0 ${colors.blue}`,
        color: colors.blue,
      },
    },
  }),
})
