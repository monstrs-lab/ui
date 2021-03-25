import { AvatarProps as BaseAvatarProps } from '@ui-parts/avatar'

export type AvatarVariant = 'primary'

export type AvatarSize = 'small' | 'normal' | 'large'

export interface AvatarProps extends Omit<BaseAvatarProps, 'children'> {
  children?: string
  variant?: AvatarVariant
  size?: AvatarSize
  src?: string
}
