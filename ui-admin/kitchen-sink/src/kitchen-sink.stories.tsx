import type { Meta }     from '@storybook/react'
import type { StoryObj } from '@storybook/react'

import { KitchenSink }   from './kitchen-sink.component.jsx'

const meta: Meta<typeof KitchenSink> = {
  title: 'KitchenSink/Common',
  component: KitchenSink,
}

export default meta

type Story = StoryObj<typeof KitchenSink>

export const Primary: Story = {
  args: {
    primary: true,
  },
}
