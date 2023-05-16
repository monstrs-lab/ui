import type { LayoutProps as CssLayoutProps } from '@css-primitives/layout'
import type { ReactNode }                     from 'react'

export interface LayoutProps extends CssLayoutProps {
  children: ReactNode
}
