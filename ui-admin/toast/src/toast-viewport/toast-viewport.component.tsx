import type { ToastViewportProps } from '@radix-ui/react-toast'
import type { ReactElement }       from 'react'

import { Viewport }                from '@radix-ui/react-toast'
import React                       from 'react'

import { toastViewportStyles }     from './toast-viewport.styles.css.js'

export const ToastViewport = (props: ToastViewportProps): ReactElement => (
  <Viewport {...props} className={toastViewportStyles()} />
)
