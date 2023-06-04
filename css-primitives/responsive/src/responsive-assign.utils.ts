import { getValueWithUnit } from '@css-primitives/units'

import { ResponsiveTarget } from './responsive-target.enum'

type BreakpointValue = number | string | [number | string, number | string, number | string]

export const getBreakpointValue = (value: BreakpointValue, index: number): number | string => {
  if (Array.isArray(value)) {
    return value[index]
  }

  return value
}

export const createResponsiveAssign = (properties: Array<string>, vars) => (props) =>
  properties.reduce((result, property) => {
    const value = props[property]

    if (!value) {
      return result
    }

    return {
      ...result,
      [vars[`${property}${ResponsiveTarget.DESKTOP}`]]: getValueWithUnit(
        property,
        getBreakpointValue(value, 0)
      ),
      [vars[`${property}${ResponsiveTarget.PHONE}`]]: getValueWithUnit(
        property,
        getBreakpointValue(value, 1)
      ),
      [vars[`${property}${ResponsiveTarget.TABLET}`]]: getValueWithUnit(
        property,
        getBreakpointValue(value, 2)
      ),
    }
  }, {})
