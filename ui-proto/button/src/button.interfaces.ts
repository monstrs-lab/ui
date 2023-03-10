import { ButtonProps as ButtonPrimitivesProps } from '@ui-primitives/button'

export interface ButtonProps extends ButtonPrimitivesProps {
  fill?: boolean
  inverted?: boolean
  size?: 'small' | 'normal' | 'large'
  shape?: 'circle' | 'square' | 'rectangle'
  rounding?: number
}
