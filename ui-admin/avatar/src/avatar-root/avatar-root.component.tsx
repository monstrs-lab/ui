import type { AvatarProps }  from '@radix-ui/react-avatar'
import type { ReactElement } from 'react'
import type { ReactNode }    from 'react'

import { Root }              from '@radix-ui/react-avatar'
import React                 from 'react'

import { avatarRootStyles }  from './avatar-root.styles.css.js'

export type AvatarSizes = 'normal'

export interface AvatarRootProps extends AvatarProps {
  size?: AvatarSizes
  children?: ReactNode
}

export const AvatarRoot = ({ size, ...props }: AvatarRootProps): ReactElement => (
  <Root className={avatarRootStyles({ size })} {...props} />
)
