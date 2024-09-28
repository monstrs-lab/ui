import { style }  from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { colors } from '@ui-proto/theme'

export const toastRootStyles = recipe({
  base: style({
    backgroundColor: colors.white,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.black,
    padding: 16,
  }),
})
