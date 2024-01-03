import type { ReactNode } from 'react'
import type { RefObject } from 'react'

export interface StyleResult {
  transform: string
  opacity: number
}

export interface UseScaleResult {
  ref: RefObject<HTMLDivElement>
  style: StyleResult
}

export interface ScalableContentProps {
  children: ReactNode
}
