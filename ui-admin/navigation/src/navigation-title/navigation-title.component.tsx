import type { ReactNode }        from 'react'
import type { ReactElement }     from 'react'

import React                     from 'react'

import { navigationTitleStyles } from './navigation-title.styles.css.js'

export interface NavigationTitleProps {
  children: ReactNode
}

export const NavigationTitle = (props: NavigationTitleProps): ReactElement => (
  <div {...props} className={navigationTitleStyles} />
)
