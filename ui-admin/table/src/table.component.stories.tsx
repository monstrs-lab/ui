import type { Meta }     from '@storybook/react'
import type { StoryObj } from '@storybook/react'

import { Table }         from './table.component.jsx'

const meta: Meta<typeof Table> = {
  title: 'Table',
  component: Table,
}

export default meta

type Story = StoryObj<typeof Table>

export const Base: Story = {
  args: {
    columns: [
      {
        accessorKey: 'firstName',
      },
      {
        accessorKey: 'lastName',
      },
    ],
    data: [
      {
        firstName: 'John',
        lastName: 'Black',
      },
    ],
  },
}
