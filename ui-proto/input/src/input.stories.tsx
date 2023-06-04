/* eslint-disable react/prop-types */

import { useState }                from 'react'
import React                       from 'react'

import { Input as InputComponent } from './input.component'

export default {
  title: 'Components/Input',
}

export const Input = ({ containerWith, ...props }) => {
  const [value, setValue] = useState('Контент')

  return (
    <div style={{ width: containerWith, display: 'flex', justifyContent: 'center' }}>
      <InputComponent {...props} value={value} onValueChange={setValue} />
    </div>
  )
}

Input.args = {
  containerWith: 200,
}

Input.argTypes = {
  containerWith: {
    name: 'Контейнер',
    description: 'Ширина контейнера',
    table: {
      category: 'Наполнение',
    },
    control: {
      type: 'range',
      min: 200,
      max: 1200,
      step: 10,
    },
  },
}
