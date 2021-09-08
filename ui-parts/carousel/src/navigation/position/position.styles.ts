import { styleFn }          from 'styled-system'
import { ifProp }           from 'styled-tools'

import { execAndSerialize } from '@ui-parts/styles'
import { combine }          from '@ui-parts/styles'

export const createShowStyles: styleFn = () =>
  ifProp(
    'show',
    () => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }),
    {
      display: 'none',
    }
  )

export const createNavigationPositionStyles = (): styleFn =>
  execAndSerialize(combine(createShowStyles()))
