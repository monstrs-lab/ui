import type { Meta }            from '@storybook/react'
import type { StoryObj }        from '@storybook/react'

import type { NavigationProps } from './navigation.component.jsx'

import { PlusIcon }             from '@radix-ui/react-icons'
import { GearIcon }             from '@radix-ui/react-icons'
import React                    from 'react'

import { IconButton }           from '@ui-admin/button'

import { Navigation }           from './navigation.component.jsx'

const meta: Meta<NavigationProps> = {
  title: 'Navigation',

  parameters: {
    layout: 'fullscreen',
  },

  component: Navigation,
}

export const Base: StoryObj<NavigationProps> = {
  args: {
    title: 'Пользователи',
    left: (
      <IconButton>
        <PlusIcon color='white' />
      </IconButton>
    ),
    right: (
      <IconButton>
        <GearIcon color='white' />
      </IconButton>
    ),
  },
}

export default meta
