import type { FC }            from 'react'

import type { ReactNode } from 'react'

import { Root }               from '@radix-ui/react-avatar'
import styled                 from '@emotion/styled'
import { switchProp }         from 'styled-tools'
import { prop }               from 'styled-tools'

export interface AvatarRootProps {
  size?: 'large' | 'normal' | 'small'
  children?: ReactNode
}

export const AvatarRoot: FC<AvatarRootProps> = styled(Root)<AvatarRootProps>(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    overflow: 'hidden',
    userSelect: 'none',
    boxSizing: 'border-box',
    borderRadius: 0,
    borderStyle: '100%',
    borderWidth: 'solid',
    backgroundColor: 'black',
    borderColor: 'black',
  },
  switchProp(prop('size', 'normal'), {
    small: {
      width: 40,
      height: 40,
    },
    normal: {
      width: 48,
      height: 48,
    },
    large: {
      width: 56,
      height: 56,
    },
  })
)
