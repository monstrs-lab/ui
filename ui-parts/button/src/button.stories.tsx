import React                      from 'react'
import styled                     from '@emotion/styled'

// @ts-ignore
import mdx                        from './button.docs.mdx'
import { createBaseStyles }       from './base'
import { createShapeStyles }      from './shape'
import { createAppearanceStyles } from './appearance'

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

export const Appearance = ({ children, variant, ghost }) => {
  const AppearanceButton = appearanceButtons[variant] || PrimaryAppearanceButton
  return <AppearanceButton ghost={ghost}>{children}</AppearanceButton>
}

Appearance.args = {
  children: 'Кнопка',
  variant: 'primary',
  ghost: false,
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
  size,
  fontSize,
  fontWeight,
  shapeRounding,
  offsetRatio,
  fontColor,
  backgroundColor,
  borderColor,
  ghostBorderWidth,
  shape,
  fill,
  rounding,
  offset,
  ghost,
}) => {
  const PlaygroundButton = styled.button(
    createBaseStyles(),
    createShapeStyles({ size, fontSize, fontWeight, rounding: shapeRounding, offsetRatio }),
    createAppearanceStyles({
      fontColor,
      backgroundColor,
      borderColor,
      ghostBorderWidth,
    })
  )

  return (
    <PlaygroundButton fill={fill} shape={shape} rounding={rounding} offset={offset} ghost={ghost}>
      {children}
    </PlaygroundButton>
  )
}

Playground.args = {
  children: 'Кнопка',
  size: 36,
  fontSize: 12,
  fontWeight: 'normal',
  shapeRounding: 0,
  offsetRatio: 0.5,
  fontColor: 'white',
  backgroundColor: 'blue',
  borderColor: 'blue',
  ghostBorderWidth: 1,
  shape: 'rectangle',
  fill: false,
  rounding: 0,
  offset: 0,
  ghost: false,
}

Playground.argTypes = {
  children: {
    name: 'Контент',
    description: 'Внутренний контент кнопки',
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
  fontSize: {
    name: 'Размер шрифта',
    description: 'Размер шрифта текста',
    table: {
      category: 'Представление',
      subcategory: 'Форма',
    },
  },
  fontWeight: {
    name: 'Насыщенность шрифта',
    description: 'Насыщенность шрифта текста',
    table: {
      category: 'Представление',
      subcategory: 'Форма',
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
  ghostBorderWidth: {
    name: 'Ширина обводки',
    description: 'Ширина обводки',
    table: {
      category: 'Представление',
      subcategory: 'Внешний вид',
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
  ghost: {
    name: 'Прозрачная',
    description: 'Прозрачная',
    table: {
      category: 'Модификаторы',
      subcategory: 'Внешний вид',
    },
  },
}
