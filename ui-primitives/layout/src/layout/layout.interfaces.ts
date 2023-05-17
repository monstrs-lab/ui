import type { FlexboxProps }                  from '@css-primitives/flexbox'
import type { LayoutProps as CssLayoutProps } from '@css-primitives/layout'
import type { SpaceProps }                    from '@css-primitives/space'
import type { ReactNode }                     from 'react'

export type BaseCssLayoutProps = CssLayoutProps & SpaceProps & FlexboxProps

export interface LayoutProps extends BaseCssLayoutProps {
  children: ReactNode
}
