import { unitless } from './unitless.keys'

const isCustomProperty = (property: string): boolean => property.charCodeAt(1) === 45

export const getValueWithUnit = (property, value: number | string): number | string => {
  if (
    unitless[property] !== 1 &&
    !isCustomProperty(property) &&
    typeof value === 'number' &&
    value !== 0
  ) {
    return `${value}px`
  }

  return value
}
