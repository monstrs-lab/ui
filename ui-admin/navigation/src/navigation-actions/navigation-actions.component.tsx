import type { ReactElement }          from 'react'
import type { ReactNode }             from 'react'

import React                          from 'react'

import { navigationActionsSprinkles } from './navigation-actions.sprinkles.css.js'

export type NavigationActionsSprinklesProps = Parameters<typeof navigationActionsSprinkles>[0]

export interface NavigationActionsProps extends Pick<NavigationActionsSprinklesProps, 'display'> {
  children?: ReactNode
}

export const NavigationActions = ({
  children,
  display = 'flex',
}: NavigationActionsProps): ReactElement => {
  const className = navigationActionsSprinkles({
    display,
  })

  return <div className={className}>{children}</div>
}
