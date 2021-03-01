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
  fill,
  equal,
  round,
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
    <PlaygroundButton
      fill={fill}
      equal={equal}
      round={round}
      rounding={rounding}
      offset={offset}
      ghost={ghost}
    >
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
  fill: false,
  equal: false,
  round: false,
  rounding: 0,
  offset: 0,
  ghost: false,
}

Playground.argTypes = {
  children: {
    table: {
      category: 'Content',
    },
  },
  size: {
    table: {
      category: 'Representation',
      subcategory: 'Shape',
    },
  },
  fontSize: {
    table: {
      category: 'Representation',
      subcategory: 'Shape',
    },
  },
  fontWeight: {
    table: {
      category: 'Representation',
      subcategory: 'Shape',
    },
  },
  shapeRounding: {
    table: {
      category: 'Representation',
      subcategory: 'Shape',
    },
  },
  offsetRatio: {
    table: {
      category: 'Representation',
      subcategory: 'Shape',
    },
  },
  fontColor: {
    control: 'color',
    table: {
      category: 'Representation',
      subcategory: 'Appearance',
    },
  },
  backgroundColor: {
    control: 'color',
    table: {
      category: 'Representation',
      subcategory: 'Appearance',
    },
  },
  borderColor: {
    control: 'color',
    table: {
      category: 'Representation',
      subcategory: 'Appearance',
    },
  },
  ghostBorderWidth: {
    table: {
      category: 'Representation',
      subcategory: 'Appearance',
    },
  },
  fill: {
    table: {
      category: 'Modifiers',
      subcategory: 'Shape',
    },
  },
  equal: {
    table: {
      category: 'Modifiers',
      subcategory: 'Shape',
    },
  },
  round: {
    table: {
      category: 'Modifiers',
      subcategory: 'Shape',
    },
  },
  rounding: {
    table: {
      category: 'Modifiers',
      subcategory: 'Shape',
    },
  },
  offset: {
    table: {
      category: 'Modifiers',
      subcategory: 'Shape',
    },
  },
  ghost: {
    table: {
      category: 'Modifiers',
      subcategory: 'Appearance',
    },
  },
}
