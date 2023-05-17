import type { FlexboxProps }                  from '@css-primitives/flexbox'
import type { LayoutProps as CssLayoutProps } from '@css-primitives/layout'
import type { SpaceProps }                    from '@css-primitives/space'
import type { ReactNode }                     from 'react'

export interface LayoutProps extends CssLayoutProps, SpaceProps, FlexboxProps {
  children?: ReactNode
}
