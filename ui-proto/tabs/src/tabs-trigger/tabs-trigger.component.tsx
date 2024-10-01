import type { TabsTriggerProps } from '@radix-ui/react-tabs'
import type { ReactElement }     from 'react'

import { Trigger }               from '@radix-ui/react-tabs'
import React                     from 'react'

import { tabsTriggerStyles }     from './tabs-trigger.styles.css.js'

export const TabsTrigger = (props: TabsTriggerProps): ReactElement => (
  <Trigger className={tabsTriggerStyles()} {...props} />
)
