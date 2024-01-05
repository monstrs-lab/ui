import { style } from '@vanilla-extract/css'

import { vars }  from '@ui-admin/theme'

export const drawerOverlayStyles = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: vars.zIndex['1000z'],
  display: 'grid',
  overflowY: 'auto',
})
