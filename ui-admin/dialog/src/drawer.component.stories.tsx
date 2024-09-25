import type { Meta }        from '@storybook/react'
import type { StoryObj }    from '@storybook/react'

import type { DialogProps } from './dialog.component.js'

import React                from 'react'

import { Button }           from '@ui-admin/button'
import { CloseIcon }        from '@ui-admin/icons'
import { Column }           from '@ui-admin/layout'

import { DialogClose }      from './dialog-close/index.js'
import { Dialog }           from './dialog.component.jsx'

const meta: Meta<DialogProps> = {
  title: 'Dialog',

  parameters: {
    layout: 'fullscreen',
  },

  component: Dialog,
}

export const Base: StoryObj<DialogProps> = {
  args: {
    size: 'small',
    children: <Button>Trigger</Button>,
    content: (
      <Column>
        <DialogClose asChild>
          <CloseIcon width={24} height={24} color='blue' />
        </DialogClose>
      </Column>
    ),
  },
  render: (args) => (
    <Column height='100%' justifyContent='center' alignItems='center'>
      <Dialog {...args} />
    </Column>
  ),
}

export default meta
