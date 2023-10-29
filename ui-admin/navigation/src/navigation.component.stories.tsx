import type { Meta }         from '@storybook/react'
import type { ReactElement } from 'react'

import { PlusIcon }          from '@radix-ui/react-icons'
import { GearIcon }          from '@radix-ui/react-icons'
import React                 from 'react'

import { IconButton }        from '@ui-admin/button'

import { NavigationActions } from './navigation-actions/index.js'
import { NavigationTitle }   from './navigation-title/index.js'
import { Navigation }        from './navigation.component.jsx'

const NavigationStory = (): ReactElement => (
  <Navigation>
    <NavigationActions>
      <IconButton>
        <PlusIcon color='white' />
      </IconButton>
    </NavigationActions>
    <NavigationTitle>Пользователи</NavigationTitle>
    <NavigationActions>
      <IconButton>
        <GearIcon color='white' />
      </IconButton>
    </NavigationActions>
  </Navigation>
)

const meta: Meta<typeof NavigationStory> = {
  title: 'Navigation',

  parameters: {
    layout: 'fullscreen',
  },

  component: NavigationStory,
}

export const Base = {}

export default meta
