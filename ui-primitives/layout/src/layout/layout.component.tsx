import type { LayoutProps }  from './layout.interfaces'
import type { FC }           from 'react'

import { assignInlineVars }  from '@vanilla-extract/dynamic'

import React                 from 'react'

import { flexbox }           from '@css-primitives/flexbox'
import { assignFlexboxVars } from '@css-primitives/flexbox'
import { layout }            from '@css-primitives/layout'
import { assignLayoutVars }  from '@css-primitives/layout'
import { space }             from '@css-primitives/space'
import { assignSpaceVars }   from '@css-primitives/space'

export const Layout: FC<LayoutProps> = ({
  children,
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
    className={`${layout} ${space} ${flexbox}`}
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
