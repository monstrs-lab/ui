import { ButtonProps as BaseButtonProps } from '@ui-parts/button'

export type ButtonVariant = 'primary'

export type ButtonSize = 'small' | 'normal' | 'large'

export interface ButtonProps extends BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
}
