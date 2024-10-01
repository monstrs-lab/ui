import { style }  from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { colors } from '@ui-proto/theme'

export const tabsContentStyles = recipe({
  base: style({
    height: '100%',
    width: '100%',
    flexGrow: 1,
    outline: 'none',
    borderRightWidth: 1,
    borderRightStyle: 'solid',
    borderRightColor: colors.black,
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: colors.black,
    borderLeftWidth: 1,
    borderLeftStyle: 'solid',
    borderLeftColor: colors.black,
    background: colors.white,
  }),
})
