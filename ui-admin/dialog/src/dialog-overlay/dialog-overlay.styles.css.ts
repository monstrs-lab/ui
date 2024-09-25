import { style }     from '@vanilla-extract/css'
import { keyframes } from '@vanilla-extract/css'
import { recipe }    from '@vanilla-extract/recipes'

import { vars }      from '@ui-admin/theme'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

export const dialogOverlayBaseStyles = style({
  backgroundColor: vars.colors.lightgrayblue,
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: vars.zIndex['1000z'],
  animation: `${overlayShow} 500ms cubic-bezier(0.16, 1, 0.3, 1)`,
  display: 'grid',
  justifyContent: 'center',
  alignItems: 'center',
  overflowY: 'auto',
  padding: '24px',
})

export const dialogOverlayStyles = recipe({
  base: dialogOverlayBaseStyles,
})
