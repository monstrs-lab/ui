import { Fallback } from '@radix-ui/react-avatar'

import { fallback } from '@ui-parts/avatar'
import { styled }   from '@ui-proto/core'
import { theme }    from '@ui-proto/core'

export const AvatarFallback = styled(
  Fallback,
  fallback.base(),
  fallback.appearance(theme.colors.white),
  {
    variants: {
      size: {
        small: fallback.shape(18, theme.fontWeights.bold, theme.fonts.primary),
        normal: fallback.shape(20, theme.fontWeights.bold, theme.fonts.primary),
        large: fallback.shape(22, theme.fontWeights.bold, theme.fonts.primary),
      },
    },

    defaultVariants: {
      size: 'normal',
    },
  }
)
