import React                         from 'react'

import { Avatar as AvatarComponent } from './avatar.component'

export default {
  title: 'Components/Avatar',
}

export const Avatar = (props) => <AvatarComponent {...props} />

Avatar.args = {
  image: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
  fallback: 'Аватар',
  size: 'normal',
}

Avatar.argTypes = {
  image: {
    name: 'Изображение',
    description: 'Основной контент, изображение',
    table: {
      category: 'Наполнение',
    },
  },
  fallback: {
    name: 'Контент',
    description: 'Основной контент, описание',
    table: {
      category: 'Наполнение',
    },
  },
  size: {
    name: 'Размер',
    description: 'Размер',
    control: {
      type: 'radio',
      options: ['small', 'normal', 'large'],
    },
    table: {
      category: 'Форма',
    },
  },
}
