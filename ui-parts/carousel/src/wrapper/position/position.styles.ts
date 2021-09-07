import { styleFn }          from 'styled-system'
import { switchProp }       from 'styled-tools'
import { prop }             from 'styled-tools'

import { execAndSerialize } from '@ui-parts/styles'
import { combine }          from '@ui-parts/styles'

export const createDirectionStyles: styleFn = () =>
  switchProp(prop('direction'), () => ({
    horizontal: {
      flexDirection: 'row',
      height: '100%',
    },
    vertical: {
      flexDirection: 'column',
      width: '100%',
    },
  }))

export const createWrapperPositionStyles = (): styleFn =>
  execAndSerialize(combine(createDirectionStyles()))
