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
    <div style={{ width: '100%', height: '100%', boxSizing: 'border-box', padding: 40 }}>
      <TabsRoot value='1'>
        <TabsList>
          <TabsTrigger value='1'>Tab 1</TabsTrigger>
          <TabsTrigger value='2'>Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value='1'>Content 1</TabsContent>
        <TabsContent value='2'>Content 2</TabsContent>
      </TabsRoot>
    </div>
  ),
}

export default meta
