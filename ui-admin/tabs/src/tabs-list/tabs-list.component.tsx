import type { TabsListProps } from '@radix-ui/react-tabs'
import type { ReactElement }  from 'react'

import { List }               from '@radix-ui/react-tabs'
import React                  from 'react'

import { tabsListStyles }     from './tabs-list.styles.css.js'

export const TabsList = (props: TabsListProps): ReactElement => (
  <List className={tabsListStyles()} {...props} />
)
