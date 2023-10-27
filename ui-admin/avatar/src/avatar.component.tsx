import type { ReactElement }     from 'react'

import type { AvatarImageProps } from './avatar-image/index.js'
import type { AvatarRootProps }  from './avatar-root/index.js'

import React                     from 'react'

import { AvatarFallback }        from './avatar-fallback/index.js'
import { AvatarImage }           from './avatar-image/index.js'
import { AvatarRoot }            from './avatar-root/index.js'

export interface AvatarProps extends AvatarRootProps {
  children?: AvatarImageProps['children']
}

export const Avatar = ({ size, title, children, ...props }: AvatarProps): ReactElement => (
  <AvatarRoot size={size} title={title} {...props}>
    {!!children && <AvatarImage>{children}</AvatarImage>}
    {!children && <AvatarFallback>{title}</AvatarFallback>}
  </AvatarRoot>
)
