import type { LayoutProps }  from './layout.interfaces'
import type { FC }           from 'react'

import { assignInlineVars }  from '@vanilla-extract/dynamic'

import React                 from 'react'

import { assignFlexboxVars } from '@css-primitives/flexbox'
import { assignLayoutVars }  from '@css-primitives/layout'
import { assignSpaceVars }   from '@css-primitives/space'

import { layout }            from './layout.css'

export const Layout: FC<LayoutProps> = ({
  children,
  className,
  style = {},
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  display = 'flex',
  verticalAlign,
  overflowX,
  overflowY,
  boxSizing = 'border-box',
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  alignItems,
  alignContent,
  justifyItems,
  justifyContent,
  flexWrap,
  flexDirection,
  flexGrow,
  flexShrink,
  flexBasis,
  justifySelf,
  alignSelf,
  order,
  my,
  mx,
  py,
  px,
}) => (
  <div
    className={className ? `${layout} ${className}` : layout}
    style={{
      ...style,
      ...assignInlineVars({
        ...assignLayoutVars({
          width,
          height,
          minWidth,
          minHeight,
          maxWidth,
          maxHeight,
          display,
          verticalAlign,
          overflowX,
          overflowY,
          boxSizing,
        }),
        ...assignSpaceVars({
          marginTop: marginTop || my,
          marginRight: marginRight || mx,
          marginBottom: marginBottom || my,
          marginLeft: marginLeft || mx,
          paddingTop: paddingTop || py,
          paddingRight: paddingRight || px,
          paddingBottom: paddingBottom || py,
          paddingLeft: paddingLeft || px,
        }),
        ...assignFlexboxVars({
          alignItems,
          alignContent,
          justifyItems,
          justifyContent,
          flexWrap,
          flexDirection,
          flexGrow,
          flexShrink,
          flexBasis,
          justifySelf,
          alignSelf,
          order,
        }),
      }),
    }}
  >
    {children}
  </div>
)
