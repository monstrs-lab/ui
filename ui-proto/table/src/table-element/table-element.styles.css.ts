import { style }  from '@vanilla-extract/css'

import { colors } from '@ui-proto/theme'

export const tableElementStyles = style({
  borderCollapse: 'separate',
  tableLayout: 'fixed',
  borderSpacing: 0,
  width: '100%',
  position: 'relative',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: colors.black,
})
