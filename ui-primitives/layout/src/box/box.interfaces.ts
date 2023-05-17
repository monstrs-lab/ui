import type { LayoutProps }   from '../layout'
import type { BorderProps }   from '@css-primitives/border'
import type { ColorProps }    from '@css-primitives/color'
import type { PositionProps } from '@css-primitives/position'
import type { ShadowProps }   from '@css-primitives/shadow'
import type { Properties }    from 'csstype'
import type { ReactNode }     from 'react'

export interface BoxProps extends LayoutProps, ColorProps, PositionProps, BorderProps, ShadowProps {
  children?: ReactNode
  cursor?: Properties['cursor']
}
