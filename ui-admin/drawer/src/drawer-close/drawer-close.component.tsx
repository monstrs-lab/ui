import type { DialogCloseProps } from '@radix-ui/react-dialog'

import { Close }                 from '@radix-ui/react-dialog'
import { forwardRef }            from 'react'
import React                     from 'react'

import { drawerCloseStyles }     from './drawer-close.styles.css.js'

export const DrawerClose = forwardRef<HTMLButtonElement, DialogCloseProps>((props, ref) => (
  <Close ref={ref} className={drawerCloseStyles} {...props} />
))
