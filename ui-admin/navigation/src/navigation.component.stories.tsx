import type { Meta }         from '@storybook/react'
import type { ReactElement } from 'react'

import React                 from 'react'

import { IconButton }        from '@ui-admin/button'
import { PlusIcon }          from '@ui-admin/icons'
import { FilterIcon }        from '@ui-admin/icons'

import { NavigationActions } from './navigation-actions/index.js'
import { NavigationTitle }   from './navigation-title/index.js'
import { Navigation }        from './navigation.component.jsx'

const NavigationStory = (): ReactElement => (
  <Navigation>
    <NavigationActions mr='1x'>
      <IconButton>
        <PlusIcon width={18} height={18} color='blue' />
      </IconButton>
    </NavigationActions>
    <NavigationTitle>Пользователи</NavigationTitle>
    <NavigationActions>
      <IconButton>
        <FilterIcon width={18} height={18} color='white' />
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
