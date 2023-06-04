export type AvatarSize = 'large' | 'normal' | 'small'

export interface AvatarProps {
  children?: string
  size?: AvatarSize
  fallback?: string
  image?: string
}
