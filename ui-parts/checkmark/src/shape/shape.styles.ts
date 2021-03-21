import { styleFn }              from 'styled-system'
import { ifProp }               from 'styled-tools'

import { execAndSerialize }     from '@ui-parts/styles'
import { combine }              from '@ui-parts/styles'

import { CheckmarkShapeStyles } from './shape.interfaces'

export const createBaseShapeStyles: styleFn = (
  size: number,
  borderRadius: number | string
) => () => ({ height: size, width: size, borderRadius })

export const createCheckedStyles: styleFn = () =>
  ifProp('checked', { transform: 'translate(-50%, -50%) scale(1)' })

export const createCheckmarkShapeStyles = ({ size, borderRadius }: CheckmarkShapeStyles): styleFn =>
  execAndSerialize(combine(createBaseShapeStyles(size, borderRadius), createCheckedStyles()))
