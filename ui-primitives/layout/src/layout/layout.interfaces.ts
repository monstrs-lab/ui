import type { ReactNode }      from 'react'
import type { SprinklesProps } from '@css-primitives/sprinkles'

export interface LayoutProps
  extends Omit<
    SprinklesProps,
    | 'background'
    | 'border'
    | 'borderBottom'
    | 'borderColor'
    | 'borderLeft'
    | 'borderRadius'
    | 'borderRight'
    | 'borderTop'
    | 'bottom'
    | 'boxShadow'
    | 'color'
    | 'cursor'
    | 'fontFamily'
    | 'fontSize'
    | 'fontStyle'
    | 'fontWeight'
    | 'left'
    | 'letterSpacing'
    | 'lineHeight'
    | 'outline'
    | 'position'
    | 'right'
    | 'textAlign'
    | 'textOverflow'
    | 'textShadow'
    | 'textTransform'
    | 'top'
    | 'transform'
    | 'transition'
    | 'whiteSpace'
    | 'wordBreak'
    | 'zIndex'
  > {
  children?: ReactNode
  className?: string
  style?: Record<string, string>
}
