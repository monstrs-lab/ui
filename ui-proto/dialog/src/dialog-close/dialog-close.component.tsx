import type { DialogCloseProps } from '@radix-ui/react-dialog'

import { Close }                 from '@radix-ui/react-dialog'
import { forwardRef }            from 'react'
import React                     from 'react'

import { dialogCloseStyles }     from './dialog-close.styles.css.js'

export const DialogClose = forwardRef<HTMLButtonElement, DialogCloseProps>((props, ref) => (
  <Close ref={ref} className={dialogCloseStyles} {...props} />
))
