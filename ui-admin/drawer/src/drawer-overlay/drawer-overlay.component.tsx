import type { DialogOverlayProps } from '@radix-ui/react-dialog'

import { Overlay }                 from '@radix-ui/react-dialog'
import { forwardRef }              from 'react'
import React                       from 'react'

import { drawerOverlayStyles }     from './drawer-overlay.styles.css.js'

export const DrawerOverlay = forwardRef<HTMLDivElement, DialogOverlayProps>((props, ref) => (
  <Overlay ref={ref} className={drawerOverlayStyles} {...props} />
))
