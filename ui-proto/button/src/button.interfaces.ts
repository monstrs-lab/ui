import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fill?: boolean
  inverted?: boolean
  size?: 'small' | 'normal' | 'large'
  shape?: 'circle' | 'square' | 'rectangle'
  rounding?: number
}
