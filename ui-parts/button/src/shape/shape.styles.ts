import { styleFn }                 from 'styled-system'
import { ifProp }                  from 'styled-tools'

import { execAndSerialize }        from '@ui-parts/styles'
import { combine }                 from '@ui-parts/styles'

import { ButtonShapeRoudingProps } from './shape.interfaces'
import { ButtonShapeOffsetProps }  from './shape.interfaces'

export const createBaseShapeStyles: styleFn = (
  size: number,
  fontSize: number | Function,
  fontWeight: string | Function
) => () => ({ height: size, fontSize, fontWeight })

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

export const createEqualStyles: styleFn = (size: number) =>
  ifProp('equal', { padding: 0, width: size })

export const createFillStyles: styleFn = () => ifProp('fill', { width: '100%' })

export const createRoundingStyles: styleFn = (size: number, defaultRounding: number) =>
  ifProp(
    'rounding',
    ({ rounding }: ButtonShapeRoudingProps) => ({
      borderRadius: rounding === true ? size : rounding,
    }),
    { borderRadius: defaultRounding }
  )

export const createRoundStyles: styleFn = () => ifProp('round', { borderRadius: '50%' })

export const createShapeStyles = (
  name: string,
  size: number,
  fontSize?: number | Function,
  fontWeight?: string | Function,
  offsetRatio: number = 0.5,
  rounding: number = 0
): styleFn =>
  execAndSerialize(
    combine(
      createBaseShapeStyles(size, fontSize, fontWeight),
      createOffsetStyles(size, offsetRatio),
      createEqualStyles(size),
      createFillStyles(),
      createRoundingStyles(size, rounding),
      createRoundStyles()
    )
  )
