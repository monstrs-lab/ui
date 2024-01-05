import type { Meta }        from '@storybook/react'
import type { StoryObj }    from '@storybook/react'

import type { DrawerProps } from './drawer.component.jsx'

import React                from 'react'

import { Button }           from '@ui-admin/button'
import { ArrowLeftIcon }    from '@ui-admin/icons'
import { Column }           from '@ui-admin/layout'

import { DrawerClose }      from './drawer-close/index.js'
import { Drawer }           from './drawer.component.jsx'

const meta: Meta<DrawerProps> = {
  title: 'Drawer',

  parameters: {
    layout: 'fullscreen',
  },

  component: Drawer,
}

export const Base: StoryObj<DrawerProps> = {
  args: {
    direction: 'left',
    children: <Button>Trigger</Button>,
    content: (
      <Column>
        <DrawerClose asChild>
          <ArrowLeftIcon width={24} height={24} color='blue' />
        </DrawerClose>
      </Column>
    ),
  },
  render: (args) => (
    <Column height='100%' justifyContent='center' alignItems='center'>
      <Drawer {...args} />
    </Column>
  ),
}

export default meta
