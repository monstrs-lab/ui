import type { ReactElement } from 'react'

import { cloneElement }      from 'react'

import { avatarImageStyles } from './avatar-image.styles.css.js'

export interface AvatarImageProps {
  children: ReactElement
}

export const AvatarImage = ({ children }: AvatarImageProps): ReactElement =>
  cloneElement(children, {
    className: avatarImageStyles,
  })
