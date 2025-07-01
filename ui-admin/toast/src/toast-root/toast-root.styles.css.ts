import { style }  from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { colors } from '@ui-admin/theme'
import { radii }  from '@ui-admin/theme'

export const toastRootStyles = recipe({
  base: style({
    backgroundColor: colors.blackblue,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.grayblue,
    padding: 16,
    borderRadius: radii.normal,
  }),
})
