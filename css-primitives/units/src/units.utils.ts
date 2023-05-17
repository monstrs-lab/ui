import { unitless } from './unitless.keys'

const isCustomProperty = (property: string) => property.charCodeAt(1) === 45

export const getValueWithUnit = (property, value) => {
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
