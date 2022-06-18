import { Root }   from '@radix-ui/react-avatar'

import { root }   from '@ui-parts/avatar'
import { styled } from '@ui-proto/core'
import { theme }  from '@ui-proto/core'

export const AvatarRoot = styled(
  Root,
  root.base(),
  root.shape(0),
  root.appearance(theme.colors.black, theme.colors.black),
  {
    variants: {
      size: {
        small: root.size(40),
        normal: root.size(48),
        large: root.size(56),
      },
    },

    defaultVariants: {
      size: 'normal',
    },
  }
)
