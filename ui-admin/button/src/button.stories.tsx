import React      from 'react'

import { Button } from './button.component'

export const Primary = (props) => <Button {...props} />

export default {
  title: 'Components/Button',
  parameters: {
    component: Primary,
  },
  args: {
    children: 'Кнопка',
    variant: 'primary',
    ghost: false,
    size: 'normal',
    fill: false,
    equal: false,
    round: false,
    rounding: 0,
    offset: 0,
  },
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: ['primary'],
      },
    },
    size: {
      control: {
        type: 'radio',
        options: ['small', 'normal', 'large'],
      },
    },
  },
}
