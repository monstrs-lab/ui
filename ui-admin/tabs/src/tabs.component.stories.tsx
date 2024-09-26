import type { Meta }     from '@storybook/react'
import type { StoryObj } from '@storybook/react'

import React             from 'react'

import { TabsContent }   from './tabs-content/index.js'
import { TabsList }      from './tabs-list/index.js'
import { TabsRoot }      from './tabs-root/index.js'
import { TabsTrigger }   from './tabs-trigger/index.js'

const meta: Meta = {
  title: 'Tabs',

  parameters: {
    layout: 'fullscreen',
  },
}

export const Base: StoryObj = {
  render: () => (
    <TabsRoot>
      <TabsList>
        <TabsTrigger value='1'>Tab 1</TabsTrigger>
        <TabsTrigger value='2'>Tab 2</TabsTrigger>
      </TabsList>
      <TabsContent value='1'>asdfasdfad</TabsContent>
      <TabsContent value='2'>asdfdsdddd</TabsContent>
    </TabsRoot>
  ),
}

export default meta
