import type { BoxProps }      from './box.interfaces'
import type { FC }            from 'react'

import { assignInlineVars }   from '@vanilla-extract/dynamic'

import React                  from 'react'

import { assignBorderVars }   from '@css-primitives/border'
import { assignColorVars }    from '@css-primitives/color'
import { assignFlexboxVars }  from '@css-primitives/flexbox'
import { assignLayoutVars }   from '@css-primitives/layout'
import { assignPositionVars } from '@css-primitives/position'
import { assignShadowVars }   from '@css-primitives/shadow'
import { assignSpaceVars }    from '@css-primitives/space'

import { Layout }             from '../layout'
import { box }                from './box.css'
import { vars }               from './box.css'

export const Box: FC<BoxProps> = ({
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
  color,
  backgroundColor,
  opacity,
  position,
  zIndex,
  top,
  right,
  bottom,
  left,
  borderRadius,
  borderColor,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  boxShadow,
  textShadow,
  cursor,
}) => (
  <Layout
    className={box}
    style={assignInlineVars({
      [vars.cursor]: cursor!,
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
      ...assignColorVars({
        color,
        backgroundColor,
        opacity,
      }),
      ...assignPositionVars({
        position,
        zIndex,
        top,
        right,
        bottom,
        left,
      }),
      ...assignBorderVars({
        borderRadius,
        borderColor,
        borderTop,
        borderRight,
        borderBottom,
        borderLeft,
      }),
      ...assignShadowVars({
        boxShadow,
        textShadow,
      }),
    })}
  >
    {children}
  </Layout>
)
