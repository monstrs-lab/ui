import type { LayoutProps } from './layout.interfaces'
import type { FC }          from 'react'

import { assignInlineVars } from '@vanilla-extract/dynamic'

import React                from 'react'

import { layout }           from '@css-primitives/layout'
import { assignLayoutVars } from '@css-primitives/layout'

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
  overflow,
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
        overflow,
      }),
    })}
  >
    {children}
  </div>
)