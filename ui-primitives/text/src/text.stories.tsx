import React                     from 'react'

import { Text as TextComponent } from './text.component'

export default {
  title: 'Components/Text',
}

export const Text = ({ children, cursor }) => (
  <TextComponent cursor={cursor}>{children}</TextComponent>
)

Text.args = {
  children: 'Текст',
  cursor: 'pointer',
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
