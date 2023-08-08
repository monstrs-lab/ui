import type { ReactNode }    from 'react'
import type { ElementType }  from 'react'
import type { ReactElement } from 'react'

import React                 from 'react'

import { textSprinkles }     from './text.sprinkles.css.js'

export type TextSprinklesProps = Parameters<typeof textSprinkles>[0]

export interface TextProps<C extends ElementType> extends TextSprinklesProps {
  children: ReactNode
  style?: Record<string, string>
  className?: string
  as?: C
}

export const Text = <C extends ElementType = 'span'>({
  children,
  margin,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  padding,
  paddingTop,
  paddingLeft,
  paddingRight,
  paddingBottom,
  m,
  mr,
  ml,
  mt,
  mb,
  marginX,
  marginY,
  mx,
  my,
  p,
  pr,
  pl,
  pt,
  pb,
  paddingX,
  paddingY,
  px,
  py,
  color = 'white',
  background,
  backgroundColor,
  opacity,
  fontFamily = 'primary',
  fontSize = 'normal',
  fontWeight = 'normal',
  lineHeight = 'normal',
  textAlign,
  letterSpacing,
  fontStyle,
  textTransform,
  textOverflow,
  wordBreak,
  whiteSpace,
  display = 'inline-flex',
  boxSizing = 'border-box',
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  verticalAlign,
  overflow,
  overflowX,
  overflowY,
  className,
  as,
  ...props
}: TextProps<C>): ReactElement => {
  const sprinklesClassName = textSprinkles({
    margin,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    padding,
    paddingTop,
    paddingLeft,
    paddingRight,
    paddingBottom,
    m,
    mr,
    ml,
    mt,
    mb,
    marginX,
    marginY,
    mx,
    my,
    p,
    pr,
    pl,
    pt,
    pb,
    paddingX,
    paddingY,
    px,
    py,
    color,
    background,
    backgroundColor,
    opacity,
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    textAlign,
    letterSpacing,
    fontStyle,
    textTransform,
    textOverflow,
    wordBreak,
    whiteSpace,
    display,
    boxSizing,
    width,
    height,
    minWidth,
    minHeight,
    maxWidth,
    maxHeight,
    verticalAlign,
    overflow,
    overflowX,
    overflowY,
  })

  const Component: any = as || 'span'

  return (
    <Component
      {...props}
      className={(!!className && `${sprinklesClassName} ${className}`) || sprinklesClassName}
    >
      {children}
    </Component>
  )
}
