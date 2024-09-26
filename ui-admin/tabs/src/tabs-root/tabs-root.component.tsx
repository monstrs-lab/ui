import type { TabsProps }    from '@radix-ui/react-tabs'
import type { ReactElement } from 'react'

import { Root }              from '@radix-ui/react-tabs'
import React                 from 'react'

import { tabsRootStyles }    from './tabs-root.styles.css.js'

export const TabsRoot = (props: TabsProps): ReactElement => (
  <Root className={tabsRootStyles()} {...props} />
)
