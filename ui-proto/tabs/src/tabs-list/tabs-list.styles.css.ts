import { style }  from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { colors } from '@ui-proto/theme'

export const tabsListStyles = recipe({
  base: style({
    display: 'flex',
    width: '100%',
    borderBottomColor: colors.black,
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
  }),
})
