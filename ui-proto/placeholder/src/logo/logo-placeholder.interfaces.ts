import type { ReactNode } from 'react'

export type LogoPlaceholderType = 'horizontal' | 'vertical'

export interface LogoPlaceholderProps {
  children?: ReactNode
  type?: LogoPlaceholderType
  color?: string
  size?: number
}
