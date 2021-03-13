import { styleFn }                     from 'styled-system'
import { ifProp }                      from 'styled-tools'

import { execAndSerialize }            from '@ui-parts/styles'
import { combine }                     from '@ui-parts/styles'

import { InputShapeRoudingProps }      from './shape.interfaces'
import { InputShapePaddingLeftProps }  from './shape.interfaces'
import { InputShapePaddingRightProps } from './shape.interfaces'
import { InputShapeStyles }            from './shape.interfaces'

export const createBaseShapeStyles: styleFn = (
  size: number,
  borderWidth: number | string,
  fontSize: number | Function,
  fontWeight: string | Function,
  fontFamily: string | Function
) => () => ({ height: size, borderWidth, fontSize, fontWeight, fontFamily })

export const createPaddingLeftStyles: styleFn = (defaultPaddingLeft: number) =>
  ifProp(
    'paddingLeft',
    ({ paddingLeft }: InputShapePaddingLeftProps) => ({
      paddingLeft,
    }),
    { paddingLeft: defaultPaddingLeft }
  )

export const createPaddingRightStyles: styleFn = (defaultPaddingRight: number) =>
  ifProp(
    'paddingRight',
    ({ paddingRight }: InputShapePaddingRightProps) => ({
      paddingRight,
    }),
    { paddingRight: defaultPaddingRight }
  )

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
      createPaddingLeftStyles(paddingLeft || size * paddingRatio),
      createPaddingRightStyles(paddingRight || size * paddingRatio),
      createRoundingStyles(rounding)
    )
  )
