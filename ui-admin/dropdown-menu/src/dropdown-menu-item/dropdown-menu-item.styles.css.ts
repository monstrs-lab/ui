import { style }  from '@vanilla-extract/css'

import { vars }   from '@ui-admin/theme'
import { colors } from '@ui-admin/theme'

export const dropdownMenuItemStyles = style({
  outline: 'none',
  display: 'flex',
  alignItems: 'center',
  padding: 14,
  wordBreak: 'break-word',
  fontFamily: vars.fonts.primary,
  color: colors.white,
  fontWeight: vars.fontWeights.normal,
  fontSize: vars.fontSizes.less,
  cursor: 'pointer',
  selectors: {
    '&[data-highlighted]': {
      color: colors.blue,
    },
    '&:not(:last-of-type)': {
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
    },
  },
})
