import { createVar }        from '@vanilla-extract/css'

import { ResponsiveTarget } from './responsive-target.enum'

export const createResponsiveVars = (properties: Array<string>): Record<string, string> =>
  properties.reduce<Record<string, string>>((result, property) => {
    const desktop = createVar()
    const tablet = createVar()
    const PHONE = createVar()

    return {
      ...result,
      [`${property}${ResponsiveTarget.DESKTOP}`]: desktop,
      [`${property}${ResponsiveTarget.TABLET}`]: tablet,
      [`${property}${ResponsiveTarget.PHONE}`]: PHONE,
    }
  }, {})
