import React                     from 'react'

import { Box }                   from '@ui-proto/layout'
import { Text }                  from '@ui-proto/text'

import { TabsContent }           from './tabs-content.component'
import { TabsList }              from './tabs-list.component'
import { Tabs as TabsComponent } from './tabs-root.component'
import { TabsTrigger }           from './tabs-trigger.component'

export default {
  title: 'Components/Tabs',
}

export const Tabs = () => (
  <Box width={300}>
    <TabsComponent defaultValue='tab1'>
      <TabsList aria-label='Manage your account'>
        <TabsTrigger value='tab1'>Tab1</TabsTrigger>
        <TabsTrigger value='tab2'>Tab2</TabsTrigger>
      </TabsList>
      <TabsContent value='tab1'>
        <Text>Tab1 Content</Text>
      </TabsContent>
      <TabsContent value='tab2'>
        <Text>Tab2 Content</Text>
      </TabsContent>
    </TabsComponent>
  </Box>
)
