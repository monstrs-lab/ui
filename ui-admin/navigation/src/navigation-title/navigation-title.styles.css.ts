import { style } from '@vanilla-extract/css'

import { vars }  from '@ui-admin/theme'

export const navigationTitleStyles = style({
  fontFamily: vars.fonts.primary,
  color: '#ffffff',
  fontSize: 16,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@media': {
    'screen and (min-width: 40em)': {
      justifyContent: 'start',
    },
  },
})