import React                       from 'react'

import { text } from './text.styles'

export default {
  title: 'Components/Text',
}

export const Text = ({ children }) => <span className={text}>{children}</span>

Text.args = {
    children: 'Текст',
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