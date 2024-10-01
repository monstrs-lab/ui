import type { TabsContentProps } from '@radix-ui/react-tabs'
import type { ReactElement }     from 'react'

import { Content }               from '@radix-ui/react-tabs'
import React                     from 'react'

import { tabsContentStyles }     from './tabs-content.styles.css.js'

export const TabsContent = (props: TabsContentProps): ReactElement => (
  <Content className={tabsContentStyles()} {...props} />
)
