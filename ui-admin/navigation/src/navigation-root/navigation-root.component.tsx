import type { ReactElement }    from 'react'
import type { ReactNode }       from 'react'

import React                    from 'react'

import { navigationRootStyles } from './navigation-root.styles.css.js'

export interface NavigationRootProps {
  children?: ReactNode
}

export const NavigationRoot = ({ children }: NavigationRootProps): ReactElement => (
  <div className={navigationRootStyles}>{children}</div>
)
