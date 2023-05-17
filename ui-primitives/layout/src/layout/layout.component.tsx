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
  overflow,
  m,
  my,
  mx,
  mt,
  mr,
  mb,
  ml,
  p,
  py,
  px,
  pt,
  pr,
  pb,
  pl,
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
          overflowX: overflowX || overflow,
          overflowY: overflowY || overflow,
          boxSizing,
        }),
        ...assignSpaceVars({
          marginTop: marginTop || mt || my || m,
          marginRight: marginRight || mr || mx || m,
          marginBottom: marginBottom || mb || my || m,
          marginLeft: marginLeft || ml || mx || m,
          paddingTop: paddingTop || pt || py || p,
          paddingRight: paddingRight || pr || px || p,
          paddingBottom: paddingBottom || pb || py || p,
          paddingLeft: paddingLeft || pl || px || p,
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
