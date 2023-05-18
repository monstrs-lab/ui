import React                     from 'react'

import { Text as TextComponent } from './text.component'

export default {
  title: 'Components/Text',
}

export const Text = ({ children, cursor, color, fontSize }) => (
  <TextComponent cursor={cursor} color={color} fontSize={fontSize}>
    {children}
  </TextComponent>
)

Text.args = {
  children: 'Текст',
  cursor: 'pointer',
  color: { mobile: 'green', tablet: 'blue', desktop: 'red' },
  fontSize: { mobile: '16px', desktop: '32px' },
}

Text.argTypes = {
  children: {
    name: 'Контент',
    description: 'Основной контент, описание',
    table: {
      category: 'Наполнение',
    },
  },
}
