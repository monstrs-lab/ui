import type { TextProps }       from './text.interfaces'
import type { FC }              from 'react'

import { assignInlineVars }     from '@vanilla-extract/dynamic'

import React                    from 'react'

import { assignColorVars }      from '@css-primitives/color'
import { assignLayoutVars }     from '@css-primitives/layout'
import { assignSpaceVars }      from '@css-primitives/space'
import { assignTypographyVars } from '@css-primitives/typography'

import { text }                 from './text.css'
import { vars }                 from './text.css'

export const Text: FC<TextProps> = ({
  children,
  textTransform,
  textOverflow,
  whiteSpace,
  wordBreak,
  cursor,
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  display = 'inline-flex',
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
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  letterSpacing,
  fontStyle,
  color,
  backgroundColor,
  opacity,
}) => (
  <span
    className={text}
    style={assignInlineVars({
      [vars.textTransform]: textTransform!,
      [vars.textOverflow]: textOverflow!,
      [vars.wordBreak]: wordBreak!,
      [vars.cursor]: cursor!,
      [vars.whiteSpace]: whiteSpace!,
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
      ...assignTypographyVars({
        fontFamily,
        fontSize,
        fontWeight,
        lineHeight,
        textAlign,
        letterSpacing,
        fontStyle,
      }),
      ...assignColorVars({
        color,
        backgroundColor,
        opacity,
      }),
    })}
  >
    {children}
  </span>
)
