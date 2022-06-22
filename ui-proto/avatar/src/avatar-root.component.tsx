import type { FC }    from 'react'

import styled         from '@emotion/styled'
import { Root }       from '@radix-ui/react-avatar'

import { switchProp } from 'styled-tools'
import { prop }       from 'styled-tools'

import { root }       from '@ui-parts/avatar'

export interface AvatarRootProps {
  size?: 'small' | 'normal' | 'large'
}

export const AvatarRoot: FC<AvatarRootProps> = styled(Root)<AvatarRootProps>(
  root.base(),
  root.shape(0),
  ({ theme }) => root.appearance(theme.colors.black, theme.colors.black),
  switchProp(prop('size', 'normal'), {
    small: root.size(40),
    normal: root.size(48),
    large: root.size(56),
  })
)
