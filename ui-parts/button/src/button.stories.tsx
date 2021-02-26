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

export const Shape = ({ children, size, equal, round, rounding, offset, fill }) => {
  const ShapeSizeButton = shapeSizeButtons[size] || NormalShapeButton

  return (
    <ShapeSizeButton equal={equal} round={round} rounding={rounding} offset={offset} fill={fill}>
      {children}
    </ShapeSizeButton>
  )
}

Shape.args = {
  children: 'Кнопка',
  size: 'normal',
  fill: false,
  equal: false,
  round: false,
  rounding: 0,
  offset: 0,
}

Shape.argTypes = {
  size: {
    control: {
      type: 'select',
      options: ['small', 'normal', 'large'],
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
