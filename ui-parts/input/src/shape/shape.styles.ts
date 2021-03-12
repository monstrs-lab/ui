import { styleFn }                from 'styled-system'
import { ifProp }                 from 'styled-tools'

import { execAndSerialize }       from '@ui-parts/styles'
import { combine }                from '@ui-parts/styles'

import { InputShapeRoudingProps } from './shape.interfaces'
import { InputShapeStyles }       from './shape.interfaces'

export const createBaseShapeStyles: styleFn = (
  size: number,
  borderWidth: number | string,
  fontSize: number | Function,
  fontWeight: string | Function,
  fontFamily: string | Function
) => () => ({ height: size, borderWidth, fontSize, fontWeight, fontFamily })

export const createPaddingStyles: styleFn = (paddingLeft, paddingRight) => () => ({
  paddingLeft,
  paddingRight,
})

export const createRoundingStyles: styleFn = (defaultRounding: number) =>
  ifProp(
    'rounding',
    ({ rounding }: InputShapeRoudingProps) => ({
      borderRadius: rounding,
    }),
    { borderRadius: defaultRounding }
  )

export const createShapeStyles = ({
  size,
  borderWidth = 1,
  fontFamily,
  fontSize,
  fontWeight,
  paddingLeft,
  paddingRight,
  paddingRatio = 0.5,
  rounding = 0,
}: InputShapeStyles): styleFn =>
  execAndSerialize(
    combine(
      createBaseShapeStyles(size, borderWidth, fontSize, fontWeight, fontFamily),
      createPaddingStyles(paddingLeft || size * paddingRatio, paddingRight || size * paddingRatio),
      createRoundingStyles(rounding)
    )
  )
