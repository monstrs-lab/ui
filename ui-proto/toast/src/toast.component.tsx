import type { ToastProps as BaseToastProps } from '@radix-ui/react-toast'
import type { ReactElement }                 from 'react'

import React                                 from 'react'

import { ToastRoot }                         from './toast-root/index.js'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ToastProps extends BaseToastProps {}

export const Toast = ({ children, ...props }: ToastProps): ReactElement => (
  <ToastRoot {...props}>{children}</ToastRoot>
)
