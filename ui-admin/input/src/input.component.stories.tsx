import type { Meta }       from '@storybook/react'
import type { StoryObj }   from '@storybook/react'

import type { InputProps } from './input.component.jsx'

import { Input }           from './input.component.jsx'

const meta: Meta<InputProps> = {
  title: 'Input',

  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#101213',
        },
      ],
    },
  },

  component: Input,
}

export const Base: StoryObj<InputProps> = {
  args: {
    placeholder: 'Введите текст',
    label: 'Лейбл',
  },
}

export default meta
