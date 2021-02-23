import React                 from 'react'
import styled                from '@emotion/styled'

// @ts-ignore
import mdx                   from './button.docs.mdx'
import { createBaseStyles }  from './base'
import { createShapeStyles } from './shape'

export const Native = () => <button type='button'>Button</button>

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

const ShapeButton = styled.button(createBaseStyles(), createShapeStyles('small', 24))

export const Shape = ({ children, equal, round, rounding, offset, fill }) => (
  <ShapeButton equal={equal} round={round} rounding={rounding} offset={offset} fill={fill}>
    {children}
  </ShapeButton>
)

Shape.args = {
  children: 'Кнопка',
  fill: false,
  equal: false,
  round: false,
  rounding: 0,
  offset: 0,
}
