import type { ReactNode } from 'react'

import { SprinklesProps } from '@css-primitives/sprinkles'

export interface LayoutProps
  extends Omit<
    SprinklesProps,
    | 'fontFamily'
    | 'fontSize'
    | 'fontWeight'
    | 'lineHeight'
    | 'textAlign'
    | 'letterSpacing'
    | 'fontStyle'
    | 'border'
    | 'borderRadius'
    | 'borderColor'
    | 'borderTop'
    | 'borderRight'
    | 'borderBottom'
    | 'borderLeft'
    | 'boxShadow'
    | 'textShadow'
    | 'position'
    | 'zIndex'
    | 'top'
    | 'right'
    | 'bottom'
    | 'left'
    | 'color'
    | 'background'
    | 'cursor'
    | 'textTransform'
    | 'textOverflow'
    | 'wordBreak'
    | 'whiteSpace'
    | 'outline'
    | 'transform'
    | 'transition'
  > {
  children?: ReactNode
  className?: string
  style?: Record<string, string>
}
