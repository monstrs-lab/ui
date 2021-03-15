import React                                from 'react'
import { useState }                         from 'react'
import { useMemo }                          from 'react'
import styled                               from '@emotion/styled'

import { fontNames, useGoogleFonts }        from '@monstrs/storybook-google-fonts'
import { ConditionalRender }                from '@ui-parts/conditional-render'
import { Box }                              from '@ui-parts/layout'

import { createAttachmentAppearanceStyles } from './attachment'
import { createAttachmentBaseStyles }       from './attachment'
import { createAttachmentPositionStyles }   from './attachment'
import { createAttachmentShapeStyles }      from './attachment'
import { createBaseStyles }                 from './input'
import { createShapeStyles }                from './input'
import { createAppearanceStyles }           from './input'
import { RawInput }                         from './input'

export default {
  title: 'Components/Input',
  parameters: {
    options: {
      enableShortcuts: false,
    },
  },
}

export const Input = ({
  containerWith,
  size,
  prefix,
  suffix,
  borderWidth,
  fontFamily,
  fontSize,
  fontWeight,
  shapeRounding,
  paddingLeft,
  paddingRight,
  fontColor,
  backgroundColor,
  borderColor,
  rounding,
}) => {
  useGoogleFonts(fontFamily, fontWeight)
  const [value, setValue] = useState('контент')

  const Attachment = useMemo(
    () =>
      styled(ConditionalRender())(
        createAttachmentBaseStyles(),
        createAttachmentShapeStyles({
          fontFamily,
          fontSize,
          fontWeight,
        }),
        createAttachmentPositionStyles(6, 6),
        createAttachmentAppearanceStyles({
          fontColor,
        })
      ),
    [fontFamily, fontSize, fontWeight, fontColor]
  )

  const StoryInput = useMemo(
    () =>
      styled.div(
        createBaseStyles(),
        createShapeStyles({
          size,
          borderWidth,
          fontFamily,
          fontSize,
          fontWeight,
          rounding: shapeRounding,
          paddingLeft,
          paddingRight,
        }),
        createAppearanceStyles({
          fontColor,
          backgroundColor,
          borderColor,
        })
      ),
    [
      size,
      borderWidth,
      fontFamily,
      fontSize,
      fontWeight,
      shapeRounding,
      paddingLeft,
      paddingRight,
      fontColor,
      backgroundColor,
      borderColor,
    ]
  )

  return (
    <Box width={containerWith} justifyContent='center'>
      <StoryInput rounding={rounding}>
        <Attachment>{prefix}</Attachment>
        <RawInput value={value} onChange={(event) => setValue(event.target.value)} />
        <Attachment type='suffix'>{suffix}</Attachment>
      </StoryInput>
    </Box>
  )
}

Input.args = {
  containerWith: 300,
  prefix: '',
  suffix: '',
  size: 36,
  borderWidth: 1,
  fontFamily: 'Roboto',
  fontWeight: 400,
  fontSize: 12,
  shapeRounding: undefined,
  paddingLeft: 8,
  paddingRight: 12,
  fontColor: 'blue',
  backgroundColor: 'white',
  borderColor: 'blue',
  rounding: 0,
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
      min: 300,
      max: 1200,
      step: 10,
    },
  },
  prefix: {
    name: 'Префикс',
    description: 'Дополнительная информация перед полем ввода',
    table: {
      category: 'Наполнение',
    },
  },
  suffix: {
    name: 'Суффикс',
    description: 'Дополнительная информация после поля ввода',
    table: {
      category: 'Наполнение',
    },
  },
  size: {
    name: 'Размер',
    description: 'Высота',
    table: {
      category: 'Представление',
      subcategory: 'Форма',
    },
    control: {
      type: 'number',
    },
  },
  borderWidth: {
    name: 'Размер',
    description: 'Размер обводки',
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
  shapeRounding: {
    name: 'Скругление',
    description: 'Скругление углов кнопки',
    table: {
      category: 'Представление',
      subcategory: 'Форма',
    },
    control: {
      type: 'number',
    },
  },
  paddingLeft: {
    name: 'Отступ слева',
    description: 'Отступ слева от края до контента',
    table: {
      category: 'Представление',
      subcategory: 'Форма',
    },
    control: {
      type: 'number',
    },
  },
  paddingRight: {
    name: 'Отступ справа',
    description: 'Отступ справа от края до контента',
    table: {
      category: 'Представление',
      subcategory: 'Форма',
    },
    control: {
      type: 'number',
    },
  },
  fontColor: {
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
  backgroundColor: {
    name: 'Цвет заливки',
    description: 'Цвет текста',
    table: {
      category: 'Представление',
      subcategory: 'Внешний вид',
    },
    control: {
      type: 'color',
    },
  },
  borderColor: {
    name: 'Цвет обводки',
    description: 'Цвет обводки',
    table: {
      category: 'Представление',
      subcategory: 'Внешний вид',
    },
    control: {
      type: 'color',
    },
  },
  rounding: {
    name: 'Скругление',
    description: 'Устанавливает величину скругления',
    table: {
      category: 'Модификаторы',
      subcategory: 'Форма',
    },
  },
}
