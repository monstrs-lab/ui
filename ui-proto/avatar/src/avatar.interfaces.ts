export type AvatarSize = 'small' | 'normal' | 'large'

export interface AvatarProps {
  children?: string
  size?: AvatarSize
  fallback?: string
  image?: string
}
