import type { ReactNode } from 'react'

export interface TextProps {
  children: ReactNode
  wordBreak?: string
  whiteSpace?: string
  textTransform?: string
  textOverflow?: string
  cursor?: string
}
