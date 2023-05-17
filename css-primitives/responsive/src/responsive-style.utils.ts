import { ResponsiveTarget } from './responsive-target.enum'

export const createResponsiveStyle = (properties: Array<string>, vars: Record<string, string>) => ({
  ...properties.reduce(
    (result, property) => ({
      ...result,
      [property]: vars[property],
    }),
    {}
  ),

  '@media': {
    'screen and (min-width: 40em)': properties.reduce(
      (result, property) => ({
        ...result,
        [property]: vars[`${property}${ResponsiveTarget.PHONE}`],
      }),
      {}
    ),
    'screen and (min-width: 52em)': properties.reduce(
      (result, property) => ({
        ...result,
        [property]: vars[`${property}${ResponsiveTarget.TABLET}`],
      }),
      {}
    ),
  },
})
