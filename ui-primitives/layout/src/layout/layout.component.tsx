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
}) => (
  <div
    className={layout}
    style={assignInlineVars({
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
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
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
    })}
  >
    {children}
  </div>
)
