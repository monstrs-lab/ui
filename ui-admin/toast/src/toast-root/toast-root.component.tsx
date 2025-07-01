import type { ToastProps }   from '@radix-ui/react-toast'
import type { ReactElement } from 'react'

import { Root }              from '@radix-ui/react-toast'
import React                 from 'react'

import { toastRootStyles }   from './toast-root.styles.css.js'

export const ToastRoot = (props: ToastProps): ReactElement => (
  <Root {...props} className={toastRootStyles()} />
)
