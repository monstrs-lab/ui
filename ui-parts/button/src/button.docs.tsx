import React                      from 'react'
import styled                     from '@emotion/styled'

import { createBaseStyles }       from './base'
import { createShapeStyles }      from './shape'
import { createAppearanceStyles } from './appearance'

export const Native = ({ children }) => <button type='button'>{children}</button>

const BaseButton = styled.button(createBaseStyles())

export const Base = ({ children }) => <BaseButton>{children}</BaseButton>

const SmallShapeButton = styled.button(createBaseStyles(), createShapeStyles({ size: 24 }))
const NormalShapeButton = styled.button(createBaseStyles(), createShapeStyles({ size: 36 }))
const LargeShapeButton = styled.button(createBaseStyles(), createShapeStyles({ size: 48 }))

const shapeSizeButtons = {
  small: SmallShapeButton,
  normal: NormalShapeButton,
  large: LargeShapeButton,
}

export const Shape = ({ children, size, shape, rounding, fill }) => {
  const ShapeSizeButton = shapeSizeButtons[size] || NormalShapeButton

  return (
    <ShapeSizeButton shape={shape} rounding={rounding} fill={fill}>
      {children}
    </ShapeSizeButton>
  )
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
