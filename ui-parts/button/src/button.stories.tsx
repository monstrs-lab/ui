import React                         from 'react'
import styled                        from '@emotion/styled'

import { fontNames, useGoogleFonts } from '@ui-parts/design-fonts'

// @ts-ignore
import mdx                           from './button.docs.mdx'
import { createBaseStyles }          from './base'
import { createShapeStyles }         from './shape'
import { createAppearanceStyles }    from './appearance'
import { createContentStyles }       from './content'
import { Content }                   from './content'

export const Native = ({ children }) => <button type='button'>{children}</button>

Native.args = {
  children: 'Кнопка',
}

export default {
  title: 'Components/Button',
  parameters: {
    component: Native,
    docs: {
      page: mdx,
    },
  },
}

const BaseButton = styled.button(createBaseStyles())

export const Base = ({ children }) => <BaseButton>{children}</BaseButton>

Base.args = {
  children: 'Кнопка',
}

const SmallShapeButton = styled.button(createBaseStyles(), createShapeStyles({ size: 24 }))
const NormalShapeButton = styled.button(createBaseStyles(), createShapeStyles({ size: 36 }))
const LargeShapeButton = styled.button(createBaseStyles(), createShapeStyles({ size: 48 }))

const shapeSizeButtons = {
  small: SmallShapeButton,
  normal: NormalShapeButton,
  large: LargeShapeButton,
}

export const Shape = ({ children, size, shape, rounding, offset, fill }) => {
  const ShapeSizeButton = shapeSizeButtons[size] || NormalShapeButton

  return (
    <ShapeSizeButton shape={shape} rounding={rounding} offset={offset} fill={fill}>
      {children}
    </ShapeSizeButton>
  )
}

Shape.args = {
  children: 'Кнопка',
  size: 'normal',
  shape: 'rectangle',
  fill: false,
  rounding: 0,
  offset: 0,
}

Shape.argTypes = {
  size: {
    control: {
      type: 'inline-radio',
      options: ['small', 'normal', 'large'],
    },
  },
  shape: {
    control: {
      type: 'inline-radio',
      options: ['rectangle', 'square', 'circle'],
    },
  },
}

const PrimaryAppearanceButton = styled.button(
  createBaseStyles(),
  createShapeStyles({ size: 36 }),
  createAppearanceStyles({
    fontColor: 'white',
    backgroundColor: 'blue',
  })
)

const SecondaryAppearanceButton = styled.button(
  createBaseStyles(),
  createShapeStyles({ size: 36 }),
  createAppearanceStyles({
    fontColor: 'white',
    backgroundColor: 'gray',
  })
)
const DangerAppearanceButton = styled.button(
  createBaseStyles(),
  createShapeStyles({ size: 36 }),
  createAppearanceStyles({
    fontColor: 'white',
    backgroundColor: 'red',
  })
)
const LinkAppearanceButton = styled.button(
  createBaseStyles(),
  createShapeStyles({ size: 36 }),
  createAppearanceStyles({
    fontColor: 'blue',
    backgroundColor: 'transparent',
  })
)

const appearanceButtons = {
  primary: PrimaryAppearanceButton,
  secondary: SecondaryAppearanceButton,
  danger: DangerAppearanceButton,
  link: LinkAppearanceButton,
}

export const Appearance = ({ children, variant, inverted }) => {
  const AppearanceButton = appearanceButtons[variant] || PrimaryAppearanceButton
  return <AppearanceButton inverted={inverted}>{children}</AppearanceButton>
}

Appearance.args = {
  children: 'Кнопка',
  variant: 'primary',
  inverted: false,
}

Appearance.argTypes = {
  variant: {
    control: {
      type: 'radio',
      options: ['primary', 'secondary', 'danger', 'link'],
    },
  },
}

export const Playground = ({
  children,
  childrenPrefix,
  childrenSuffix,
  size,
  fontFamily,
  fontSize,
  fontWeight,
  shapeRounding,
  offsetRatio,
  contentDivider,
  fontColor,
  backgroundColor,
  borderColor,
  invertedBorderWidth,
  shape,
  fill,
  rounding,
  offset,
  inverted,
  contentAlign,
}) => {
  useGoogleFonts(fontFamily, fontWeight)

  const PlaygroundButton = styled.button(
    createBaseStyles(),
    createContentStyles(),
    createShapeStyles({
      size,
      fontFamily,
      fontSize,
      fontWeight,
      rounding: shapeRounding,
      offsetRatio,
    }),
    createAppearanceStyles({
      fontColor,
      backgroundColor,
      borderColor,
      invertedBorderWidth,
    })
  )

  return (
    <PlaygroundButton
      fill={fill}
      shape={shape}
      rounding={rounding}
      offset={offset}
      inverted={inverted}
      contentAlign={contentAlign}
    >
      <Content divider={contentDivider}>
        {childrenPrefix && <span>{childrenPrefix}</span>}
        {children}
        {childrenSuffix && <span>{childrenSuffix}</span>}
      </Content>
    </PlaygroundButton>
  )
}

Playground.args = {
  children: 'Кнопка',
  childrenPrefix: '',
  childrenSuffix: '',
  size: 36,
  fontFamily: 'Roboto',
  fontWeight: 400,
  fontSize: 12,
  shapeRounding: 0,
  offsetRatio: 0.5,
  contentDivider: 12,
  fontColor: 'white',
  backgroundColor: 'blue',
  borderColor: 'blue',
  invertedBorderWidth: 1,
  shape: 'rectangle',
  fill: false,
  rounding: 0,
  offset: 0,
  inverted: false,
  contentAlign: 'center',
}

Playground.argTypes = {
  children: {
    name: 'Контент',
    description: 'Основной контент, описание',
    table: {
      category: 'Контент',
    },
  },
  childrenPrefix: {
    name: 'Контент слева',
    description: 'Дополнительный контент слева, текст или иконка',
    table: {
      category: 'Контент',
    },
  },
  childrenSuffix: {
    name: 'Контент справа',
    description: 'Дополнительный контент справа, текст или иконка',
    table: {
      category: 'Контент',
    },
  },
  size: {
    name: 'Размер',
    description: 'Высота',
    table: {
      category: 'Представление',
      subcategory: 'Форма',
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
      type: 'range',
      min: 1,
      max: 96,
      step: 1,
    },
  },
  shapeRounding: {
    name: 'Скругление',
    description: 'Скругление углов кнопки',
    table: {
      category: 'Представление',
      subcategory: 'Форма',
    },
  },
  offsetRatio: {
    name: 'Отступы',
    description: 'Соотношение высоты к размеру отступов',
    table: {
      category: 'Представление',
      subcategory: 'Форма',
    },
  },
  fontColor: {
    name: 'Цвет текста',
    description: 'Цвет текста',
    control: 'color',
    table: {
      category: 'Представление',
      subcategory: 'Внешний вид',
    },
  },
  backgroundColor: {
    name: 'Цвет заливки',
    description: 'Цвет текста',
    control: 'color',
    table: {
      category: 'Представление',
      subcategory: 'Внешний вид',
    },
  },
  borderColor: {
    name: 'Цвет обводки',
    description: 'Цвет обводки',
    control: 'color',
    table: {
      category: 'Представление',
      subcategory: 'Внешний вид',
    },
  },
  invertedBorderWidth: {
    name: 'Ширина обводки',
    description: 'Ширина обводки',
    table: {
      category: 'Представление',
      subcategory: 'Внешний вид',
    },
  },
  contentDivider: {
    name: 'Отступы контента',
    description: 'Отступы внутри контента',
    table: {
      category: 'Представление',
      subcategory: 'Контент',
    },
  },
  fill: {
    name: 'Во всю ширину',
    description: 'Делает кнопку во всю ширину контейнера',
    table: {
      category: 'Модификаторы',
      subcategory: 'Форма',
    },
  },
  shape: {
    name: 'Форма',
    description: 'Форма кнопки',
    table: {
      category: 'Модификаторы',
      subcategory: 'Форма',
    },
    control: {
      type: 'inline-radio',
      options: ['rectangle', 'square', 'circle'],
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
  offset: {
    name: 'Отступы',
    description: 'Устанавливает величину отступов от края до контента',
    table: {
      category: 'Модификаторы',
      subcategory: 'Форма',
    },
  },
  inverted: {
    name: 'Инвертированная',
    description: 'Прозрачная заливка, с обводкой и текстом одного цвета',
    table: {
      category: 'Модификаторы',
      subcategory: 'Внешний вид',
    },
  },
  contentAlign: {
    name: 'Выравнивание контента',
    description: 'Выравнивание контента',
    table: {
      category: 'Модификаторы',
      subcategory: 'Контент',
    },
    control: {
      type: 'select',
      options: ['center', 'flex-start', 'flex-end', 'space-between', 'space-around'],
    },
  },
}
