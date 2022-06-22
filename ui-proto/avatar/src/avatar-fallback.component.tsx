import type { Theme } from '@ui-proto/theme'
import type { FC }    from 'react'

import styled         from '@emotion/styled'
import { Fallback }   from '@radix-ui/react-avatar'

import { switchProp } from 'styled-tools'
import { prop }       from 'styled-tools'

import { fallback }   from '@ui-parts/avatar'

export interface AvatarFallbackProps {
  size?: 'small' | 'normal' | 'large'
}

export const AvatarFallback: FC<AvatarFallbackProps> = styled(Fallback)<AvatarFallbackProps>(
  fallback.base(),
  ({ theme }) => fallback.appearance(theme.colors.white),
  switchProp(prop('size', 'normal'), ({ theme }: { theme: Theme }) => ({
    small: fallback.shape(18, theme.fontWeights.bold, theme.fonts.primary),
    normal: fallback.shape(20, theme.fontWeights.bold, theme.fonts.primary),
    large: fallback.shape(22, theme.fontWeights.bold, theme.fonts.primary),
  }))
)
