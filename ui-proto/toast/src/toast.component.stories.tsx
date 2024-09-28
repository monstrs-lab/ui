import type { Meta }       from '@storybook/react'
import type { StoryObj }   from '@storybook/react'

import type { ToastProps } from './toast.component.js'

import { ToastProvider }   from '@radix-ui/react-toast'
import React               from 'react'

import { Text }            from '@ui-proto/text'

import { ToastViewport }   from './toast-viewport/index.js'
import { Toast }           from './toast.component.jsx'

const meta: Meta<ToastProps> = {
  title: 'Toast',

  parameters: {
    layout: 'fullscreen',
  },

  component: Toast,
}

export const Base: StoryObj<ToastProps> = {
  render: () => (
    <ToastProvider>
      <ToastViewport />
      <Toast duration={1000}>
        <Text>Toast message</Text>
      </Toast>
    </ToastProvider>
  ),
}

export default meta
