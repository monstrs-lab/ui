import type { ReactNode }      from 'react'
import type { SprinklesProps } from '@css-primitives/sprinkles'

export interface BoxProps
  extends Omit<
    SprinklesProps,
    | 'fontFamily'
    | 'fontSize'
    | 'fontStyle'
    | 'fontWeight'
    | 'letterSpacing'
    | 'lineHeight'
    | 'textAlign'
    | 'textOverflow'
    | 'textTransform'
    | 'whiteSpace'
    | 'wordBreak'
  > {
  children?: ReactNode
  className?: string
  style?: Record<string, string>
}
