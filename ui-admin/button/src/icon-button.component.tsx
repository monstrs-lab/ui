import type { ButtonProps as PrimitiveProps } from '@ui-primitives/button'

import { forwardRef }                         from 'react'
import React                                  from 'react'

import { Button as Primitives }               from '@ui-primitives/button'

import { iconButtonStyles }                   from './icon-button.styles.css.js'

export interface IconButtonProps extends PrimitiveProps {
  size?: 'large' | 'normal' | 'small'
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>((
  { size, children, ...props },
  ref
) => (
  <Primitives ref={ref} className={iconButtonStyles({ size })} {...props}>
    {children}
  </Primitives>
))
