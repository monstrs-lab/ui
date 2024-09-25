import type { DialogOverlayProps } from '@radix-ui/react-dialog'

import { Overlay }                 from '@radix-ui/react-dialog'
import { forwardRef }              from 'react'
import React                       from 'react'

import { dialogOverlayStyles }     from './dialog-overlay.styles.css.js'

export const DialogOverlay = forwardRef<HTMLDivElement, DialogOverlayProps>((props, ref) => (
  <Overlay ref={ref} className={dialogOverlayStyles()} {...props} />
))
