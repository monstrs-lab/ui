import * as fallback      from './avatar-fallback.styles'
import * as image         from './avatar-image.styles'
import * as root          from './avatar-root.styles'

import styled             from '@emotion/styled'
import { Root }           from '@radix-ui/react-avatar'
import { Image }          from '@radix-ui/react-avatar'
import { Fallback }       from '@radix-ui/react-avatar'

import React              from 'react'

import { TextTransform }  from '@ui-primitives/text-transform'
import { fontNames }      from '@monstrs/storybook-google-fonts'
import { useGoogleFonts } from '@monstrs/storybook-google-fonts'
import { theme }          from '@ui-parts/theme'

export default {
  title: 'Components/Avatar',
}

export const Avatar = ({
  src,
  text,
  size,
  fontSize,
  fontWeight,
  fontFamily,
  color,
  backgroundColor,
  borderStyle,
  borderWidth,
  borderColor,
  borderRadius,
}) => {
  useGoogleFonts(fontFamily, fontWeight)

  const AvatarImage = styled(Image)(image.base())

  const AvatarFallback = styled(Fallback)(
    fallback.base(),
    fallback.appearance(color),
    fallback.shape(fontSize, fontWeight, fontFamily)
  )

  const AvatarRoot = styled(Root)(
    root.base(),
    root.size(size),
    root.shape(borderWidth, borderRadius, borderStyle),
    root.appearance(backgroundColor, borderColor)
  )

  return (
    <AvatarRoot>
      <AvatarImage src={src} />
      <AvatarFallback>
        <TextTransform firstLetter upperCase>
          {text}
        </TextTransform>
      </AvatarFallback>
    </AvatarRoot>
  )
}

Avatar.args = {
  src: 'https://cdn.drawize.com/Content/Images/avatars/placeholder.png?s=1&width=100',
  text: 'Аватар',
  fontFamily: 'Roboto',
  color: theme.colors.white,
  backgroundColor: theme.colors.blue,
  fontWeight: theme.fontWeights.normal,
  borderColor: theme.colors.blue,
  borderRadius: 48,
  borderStyle: 'solid',
  borderWidth: 1,
  fontSize: 20,
  size: 48,
}

Avatar.argTypes = {
  src: {
    name: 'Изображение',
    description: 'Адресс изображения',
    table: {
      category: 'Наполнение',
    },
  },
  text: {
    name: 'Текст',
    description: 'Текст внутри',
    table: {
      category: 'Наполнение',
    },
  },
  size: {
    name: 'Размер',
    description: 'Размер аватара',
    table: {
      category: 'Представление',
      subcategory: 'Форма',
    },
    control: {
      type: 'number',
    },
  },
  fontFamily: {
    name: 'Шрифт',
    description: 'Шрифт',
    table: {
      category: 'Представление',
      subcategory: 'Форма',
    },
    control: {
      type: 'select',
      options: fontNames,
    },
  },
  fontWeight: {
    name: 'Насыщенность шрифта',
    description: 'Насыщенность шрифта текста',
    table: {
      category: 'Представление',
      subcategory: 'Форма',
    },
    control: {
      type: 'select',
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
  fontSize: {
    name: 'Размер шрифта',
    description: 'Размер шрифта текста',
    table: {
      category: 'Представление',
      subcategory: 'Форма',
    },
    control: {
      type: 'number',
    },
  },
  backgroundColor: {
    name: 'Цвет заливки',
    description: 'Цвет заливки',
    table: {
      category: 'Представление',
      subcategory: 'Внешний вид',
    },
    control: {
      type: 'color',
    },
  },
  color: {
    name: 'Цвет текста',
    description: 'Цвет текста',
    table: {
      category: 'Представление',
      subcategory: 'Внешний вид',
    },
    control: {
      type: 'color',
    },
  },
  borderStyle: {
    name: 'Стиль обводки',
    description: 'Стиль обводки',
    table: {
      category: 'Представление',
      subcategory: 'Обводка',
    },
    control: {
      type: 'select',
      options: ['dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset'],
    },
  },
  borderWidth: {
    name: 'Размер обводки',
    description: 'Размер обводки',
    table: {
      category: 'Представление',
      subcategory: 'Обводка',
    },
    control: {
      type: 'number',
    },
  },
  borderColor: {
    name: 'Цвет обводки',
    description: 'Цвет обводки',
    table: {
      category: 'Представление',
      subcategory: 'Обводка',
    },
    control: {
      type: 'color',
    },
  },
  borderRadius: {
    name: 'Скругление',
    description: 'Устанавливает величину скругления',
    table: {
      category: 'Представление',
      subcategory: 'Обводка',
    },
    control: {
      type: 'number',
    },
  },
}
