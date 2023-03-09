import type { Theme } from '@ui-proto/theme'
import type { FC }    from 'react'

import styled         from '@emotion/styled'
import { Fallback }   from '@radix-ui/react-avatar'

import { switchProp } from 'styled-tools'
import { prop }       from 'styled-tools'

export interface AvatarFallbackProps {
  size?: 'small' | 'normal' | 'large'
}

export const AvatarFallback: FC<AvatarFallbackProps> = styled(Fallback)<AvatarFallbackProps>(
  {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  switchProp(prop('size', 'normal'), ({ theme }: { theme: Theme }) => ({
    small: {
      fontSize: 18,
      fontWeight: theme.fontWeights.bold,
      fontFamily: theme.fonts.primary,
    },
    normal: {
      fontSize: 20,
      fontWeight: theme.fontWeights.bold,
      fontFamily: theme.fonts.primary,
    },
    large: {
      fontSize: 22,
      fontWeight: theme.fontWeights.bold,
      fontFamily: theme.fonts.primary,
    },
  }))
)
