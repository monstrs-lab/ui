import type { Meta }              from '@storybook/react'
import type { StoryObj }          from '@storybook/react'

import type { DropdownMenuProps } from './dropdown-menu.component.jsx'

import React                      from 'react'

import { Button }                 from '@ui-admin/button'
import { Layout }                 from '@ui-admin/layout'
import { colors }                 from '@ui-admin/theme'

import { DropdownMenuItem }       from './dropdown-menu-item/dropdown-menu-item.component.jsx'
import { DropdownMenu }           from './dropdown-menu.component.jsx'

const meta: Meta<DropdownMenuProps> = {
  title: 'Dropdown Menu',

  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: colors.black,
        },
      ],
    },
  },

  component: DropdownMenu,
}

export const Base: StoryObj<DropdownMenuProps> = {
  args: {
    side: 'bottom',
    sideOffset: 8,
    alignOffset: 0,
    align: 'end',
    children: <Button>Trigger</Button>,
    content: (
      <>
        <DropdownMenuItem>Item 1</DropdownMenuItem>
        <DropdownMenuItem>Item 2</DropdownMenuItem>
        <DropdownMenuItem>Item 3</DropdownMenuItem>
      </>
    ),
  },
  render: (args) => (
    <Layout width='100%' height='100%' justifyContent='center' alignItems='center'>
      <DropdownMenu {...args} />
    </Layout>
  ),
}

export default meta
