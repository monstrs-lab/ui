import { style }  from '@vanilla-extract/css'

import { colors } from '@ui-admin/theme'
import { vars }   from '@ui-admin/theme'

export const navigationTitleStyles = style({
  fontFamily: vars.fonts.primary,
  color: colors.white,
  fontSize: 16,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexGrow: 1,

  '@media': {
    'screen and (min-width: 40em)': {
      justifyContent: 'start',
    },
  },
})
