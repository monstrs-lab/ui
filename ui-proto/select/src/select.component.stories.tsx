import type { Meta }        from '@storybook/react'
import type { StoryObj }    from '@storybook/react'

import type { SelectProps } from './select.component.js'

import React                from 'react'

import { Layout }           from '@ui-proto/layout'

import { Select }           from './select.component.jsx'

const meta: Meta<SelectProps> = {
  title: 'Select',

  parameters: {
    layout: 'fullscreen',
  },

  component: Select,
}

export const Base: StoryObj<SelectProps> = {
  args: {
    placeholder: 'placeholder',
    fill: true,
    options: [
      {
        value: 'Item 1',
      },
      {
        value: 'Item 2',
      },
      {
        value: 'Item 3',
      },
      {
        value: 'Item 4',
      },
      {
        value: 'Item 5',
      },
      {
        value: 'Item 6',
      },
      {
        value: 'Item 7',
      },
    ],
  },
  render: (args) => (
    <Layout width='100%' height='100%' justifyContent='center' alignItems='center'>
      <Layout width='50%'>
        <Select {...args} />
      </Layout>
    </Layout>
  ),
}

export default meta
