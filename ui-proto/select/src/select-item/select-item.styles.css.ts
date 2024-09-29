import { style }  from '@vanilla-extract/css'

import { vars }   from '@ui-proto/theme'
import { colors } from '@ui-proto/theme'

export const selectItemStyles = style({
  outline: 'none',
  display: 'flex',
  alignItems: 'center',
  padding: 14,
  wordBreak: 'break-word',
  fontFamily: vars.fonts.primary,
  color: colors.black,
  fontWeight: vars.fontWeights.normal,
  fontSize: vars.fontSizes.less,
  cursor: 'pointer',
  selectors: {
    '&[data-highlighted]': {
      color: colors.black,
      backgroundColor: colors.gray,
    },
    '&:not(:last-of-type)': {
      borderBottomWidth: 1,
      borderBottomStyle: 'solid',
      borderBottomColor: colors.black,
    },
  },
})
