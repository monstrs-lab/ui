import type { FlexboxProps }                  from '@css-primitives/flexbox'
import type { LayoutProps as CssLayoutProps } from '@css-primitives/layout'
import type { SpaceProps }                    from '@css-primitives/space'
import type { ReactNode }                     from 'react'

export interface LayoutProps extends CssLayoutProps, SpaceProps, FlexboxProps {
  children?: ReactNode
  className?: string
  style?: Record<string, string>
  overflow?: CssLayoutProps['overflowY']
  px?: SpaceProps['paddingLeft']
  py?: SpaceProps['paddingTop']
  pt?: SpaceProps['paddingTop']
  pr?: SpaceProps['paddingRight']
  pb?: SpaceProps['paddingBottom']
  pl?: SpaceProps['paddingLeft']
  mx?: SpaceProps['marginLeft']
  my?: SpaceProps['marginTop']
  mt?: SpaceProps['marginTop']
  mr?: SpaceProps['marginRight']
  mb?: SpaceProps['marginBottom']
  ml?: SpaceProps['marginLeft']
}
