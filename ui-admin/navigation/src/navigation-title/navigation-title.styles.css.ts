import { style } from '@vanilla-extract/css'

import { vars }  from '@ui-admin/theme'

export const navigationTitleStyles = style({
  fontWeight: vars.fontWeights.semibold,
  fontFamily: vars.fonts.primary,
  color: '#ffffff',
  fontSize: 12,
  textAlign: 'center',
  width: '100%',

  '@media': {
    'screen and (min-width: 40em)': {
      textAlign: 'left',
    },
  },
})
