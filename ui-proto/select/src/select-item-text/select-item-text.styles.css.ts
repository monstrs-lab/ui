import { style }  from '@vanilla-extract/css'

import { colors } from '@ui-proto/theme'

export const selectItemTextStyles = style({
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  flexGrow: 1,
  textAlign: 'left',
  color: colors.black,
})
