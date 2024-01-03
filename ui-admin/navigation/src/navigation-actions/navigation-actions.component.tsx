import type { ReactElement }          from 'react'
import type { ReactNode }             from 'react'

import React                          from 'react'

import { navigationActionsSprinkles } from './navigation-actions.sprinkles.css.js'

export type NavigationActionsSprinklesProps = Parameters<typeof navigationActionsSprinkles>[0]

export interface NavigationActionsProps extends NavigationActionsSprinklesProps {
  children?: ReactNode
}

export const NavigationActions = ({
  children,
  display = 'flex',
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
}: NavigationActionsProps): ReactElement => {
  const className = navigationActionsSprinkles({
    display,
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
  })

  return <div className={className}>{children}</div>
}
