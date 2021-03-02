import { styleFn }                 from 'styled-system'
import { ifProp }                  from 'styled-tools'
import { prop, switchProp }        from 'styled-tools'

import { execAndSerialize }        from '@ui-parts/styles'
import { combine }                 from '@ui-parts/styles'

import { ButtonShapeRoudingProps } from './shape.interfaces'
import { ButtonShapeOffsetProps }  from './shape.interfaces'
import { ButtonShapeStyles }       from './shape.interfaces'

export const createBaseShapeStyles: styleFn = (
  size: number,
  fontSize: number | Function,
  fontWeight: string | Function,
  fontFamily: string | Function
) => () => ({ height: size, fontSize, fontWeight, fontFamily })

export const createOffsetStyles: styleFn = (size: number, ratio: number) =>
  ifProp(
    'offset',
    ({ offset }: ButtonShapeOffsetProps) => ({
      paddingLeft: offset,
      paddingRight: offset,
    }),
    {
      paddingLeft: size * ratio,
      paddingRight: size * ratio,
    }
  )

export const createFillStyles: styleFn = () => ifProp('fill', { width: '100%' })

export const createRoundingStyles: styleFn = (size: number, defaultRounding: number) =>
  ifProp(
    'rounding',
    ({ rounding }: ButtonShapeRoudingProps) => ({
      borderRadius: rounding === true ? size : rounding,
    }),
    { borderRadius: defaultRounding }
  )

export const createPatternStyles: styleFn = (size: number) =>
  switchProp(prop('shape', 'rectangle'), {
    rectangle: {
      height: size,
    },
    square: {
      padding: 0,
      width: size,
      height: size,
    },
    circle: {
      padding: 0,
      width: size,
      height: size,
      borderRadius: '50%',
    },
  })

export const createShapeStyles = ({
  size,
  fontFamily,
  fontSize,
  fontWeight,
  offsetRatio = 0.5,
  rounding = 0,
}: ButtonShapeStyles): styleFn =>
  execAndSerialize(
    combine(
      createBaseShapeStyles(size, fontSize, fontWeight, fontFamily),
      createOffsetStyles(size, offsetRatio),
      createRoundingStyles(size, rounding),
      createFillStyles(),
      createPatternStyles(size)
    )
  )
