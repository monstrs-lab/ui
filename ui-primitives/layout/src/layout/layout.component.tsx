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
  my,
  mx,
  mt,
  mr,
  mb,
  ml,
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
          marginTop: marginTop || mt || my,
          marginRight: marginRight || mr || mx,
          marginBottom: marginBottom || mb || my,
          marginLeft: marginLeft || ml || mx,
          paddingTop: paddingTop || pt || py,
          paddingRight: paddingRight || pr || px,
          paddingBottom: paddingBottom || pb || py,
          paddingLeft: paddingLeft || pl || px,
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
