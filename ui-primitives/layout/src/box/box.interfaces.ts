import type { ReactNode } from 'react'

import { SprinklesProps } from '@css-primitives/sprinkles'

export interface BoxProps
  extends Omit<
    SprinklesProps,
    | 'fontFamily'
    | 'fontSize'
    | 'fontWeight'
    | 'lineHeight'
    | 'textAlign'
    | 'letterSpacing'
    | 'fontStyle'
    | 'textTransform'
    | 'textOverflow'
    | 'wordBreak'
    | 'whiteSpace'
  > {
  children?: ReactNode
  className?: string
  style?: Record<string, string>
}
