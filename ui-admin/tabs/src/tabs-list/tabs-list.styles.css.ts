import { style }  from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { colors } from '@ui-admin/theme'

export const tabsListStyles = recipe({
  base: style({
    display: 'flex',
    width: '100%',
    background: colors.blackblue,
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
  }),
})
