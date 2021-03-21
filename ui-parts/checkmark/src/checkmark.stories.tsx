import React                               from 'react'
import styled                              from '@emotion/styled'

// @ts-ignore
import { createCheckmarkBaseStyles }       from './base'
import { createCheckmarkShapeStyles }      from './shape'
import { createCheckmarkAppearanceStyles } from './appearance'

export default { title: 'Components/Checkmark' }

export const Checkmark = ({ size, color, borderRadius }) => {
  const StyledCheckmark = styled.div(
    createCheckmarkBaseStyles(),
    createCheckmarkAppearanceStyles({
      backgroundColor: color,
    }),
    createCheckmarkShapeStyles({
      borderRadius,
      size,
    })
  )

  return <StyledCheckmark checked />
}

Checkmark.args = {
  size: 24,
  borderRadius: 12,
  color: 'blue',
}

Checkmark.argTypes = {
  size: {
    name: 'Размер',
    description: 'Размер метки',
    table: {
      category: 'Представление',
      subcategory: 'Форма',
    },
    control: {
      type: 'number',
    },
  },
  borderRadius: {
    name: 'Скругление',
    description: 'Устанавливает величину скругления',
    table: {
      category: 'Представление',
      subcategory: 'Форма',
    },
    control: {
      type: 'number',
    },
  },
  color: {
    name: 'Цвет',
    description: 'Цвет метки',
    table: {
      category: 'Представление',
      subcategory: 'Внешний вид',
    },
    control: {
      type: 'color',
    },
  },
}
