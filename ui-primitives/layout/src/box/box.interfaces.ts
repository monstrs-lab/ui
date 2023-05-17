import type { BorderProps }   from '@css-primitives/border'
import type { ColorProps }    from '@css-primitives/color'
import type { FlexboxProps }  from '@css-primitives/flexbox'
import type { LayoutProps }   from '@css-primitives/layout'
import type { PositionProps } from '@css-primitives/position'
import type { ShadowProps }   from '@css-primitives/shadow'
import type { SpaceProps }    from '@css-primitives/space'
import type { Properties }    from 'csstype'
import type { ReactNode }     from 'react'

export interface BoxProps
  extends LayoutProps,
    SpaceProps,
    FlexboxProps,
    ColorProps,
    PositionProps,
    BorderProps,
    ShadowProps {
  children?: ReactNode
  cursor?: Properties['cursor']
}
