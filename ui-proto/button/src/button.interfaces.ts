import type { ButtonProps as ButtonPrimitivesProps } from '@ui-primitives/button'

export interface ButtonProps extends ButtonPrimitivesProps {
  fill?: boolean
  inverted?: boolean
  size?: 'large' | 'normal' | 'small'
  shape?: 'circle' | 'rectangle' | 'square'
  rounding?: number
}
