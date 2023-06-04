import type { ReactNode }      from 'react'
import type { SprinklesProps } from '@css-primitives/sprinkles'

export interface TextProps
  extends Omit<
    SprinklesProps,
    | 'alignContent'
    | 'alignItems'
    | 'alignSelf'
    | 'border'
    | 'borderBottom'
    | 'borderColor'
    | 'borderLeft'
    | 'borderRadius'
    | 'borderRight'
    | 'borderTop'
    | 'bottom'
    | 'boxShadow'
    | 'flex'
    | 'flexBasis'
    | 'flexDirection'
    | 'flexGrow'
    | 'flexShrink'
    | 'flexWrap'
    | 'justifyContent'
    | 'justifyItems'
    | 'justifySelf'
    | 'left'
    | 'order'
    | 'outline'
    | 'position'
    | 'right'
    | 'top'
    | 'transform'
    | 'transition'
    | 'zIndex'
  > {
  children: ReactNode
  className?: string
  style?: Record<string, string>
}
