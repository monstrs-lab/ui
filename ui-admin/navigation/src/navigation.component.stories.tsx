import type { Meta }            from '@storybook/react'
import type { StoryObj }        from '@storybook/react'

import type { NavigationProps } from './navigation.component.jsx'

import { PlusIcon }             from '@radix-ui/react-icons'
import { GearIcon }             from '@radix-ui/react-icons'
import React                    from 'react'

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
    left: <PlusIcon color='white' />,
    right: <GearIcon color='white' />,
  },
}

export default meta
