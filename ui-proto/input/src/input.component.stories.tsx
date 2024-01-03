import type { Meta }       from '@storybook/react'
import type { StoryObj }   from '@storybook/react'

import type { InputProps } from './input.component.jsx'

import { Input }           from './input.component.jsx'

const meta: Meta<InputProps> = {
  title: 'Инпут',

  component: Input,
}

export const Base: StoryObj<InputProps> = {
  args: {
    placeholder: 'Введите текст',
  },
}

export default meta
