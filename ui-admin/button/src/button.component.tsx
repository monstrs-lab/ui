import type { ButtonProps as PrimitiveProps } from '@ui-primitives/button'

import { forwardRef }                         from 'react'
import React                                  from 'react'

import { Button as Primitives }               from '@ui-primitives/button'

import { buttonStyles }                       from './button.styles.css.js'

export interface ButtonProps extends PrimitiveProps {
  size?: 'large' | 'normal' | 'small'
  variant?: 'primary' | 'secondary'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((
  { size, variant, children, ...props },
  ref
) => (
  <Primitives ref={ref} className={buttonStyles({ size, variant })} {...props}>
    {children}
  </Primitives>
))
