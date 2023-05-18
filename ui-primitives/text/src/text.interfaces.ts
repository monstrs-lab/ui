import type { ReactNode } from 'react'

import { SprinklesProps } from '@css-primitives/sprinkles'

export interface TextProps
  extends Omit<
    SprinklesProps,
    | 'boxShadow'
    | 'position'
    | 'zIndex'
    | 'top'
    | 'right'
    | 'bottom'
    | 'left'
    | 'border'
    | 'borderRadius'
    | 'borderColor'
    | 'borderTop'
    | 'borderRight'
    | 'borderBottom'
    | 'borderLeft'
    | 'alignItems'
    | 'alignContent'
    | 'justifyItems'
    | 'justifyContent'
    | 'flex'
    | 'flexWrap'
    | 'flexDirection'
    | 'flexGrow'
    | 'flexShrink'
    | 'flexBasis'
    | 'justifySelf'
    | 'alignSelf'
    | 'order'
    | 'outline'
    | 'transform'
    | 'transition'
  > {
  children: ReactNode
  className?: string
  style?: Record<string, string>
}
