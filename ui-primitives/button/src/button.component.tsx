import type { ComponentPropsWithoutRef } from '@radix-ui/react-primitive'
import type { ElementRef }               from 'react'

import { Primitive }                     from '@radix-ui/react-primitive'
import { forwardRef }                    from 'react'
import React                             from 'react'

import { ContentDivider }                from '@ui-primitives/content-divider'

export type ButtonElement = ElementRef<typeof Primitive.button>
export type PrimitiveButtonProps = ComponentPropsWithoutRef<typeof Primitive.button>
export interface ButtonProps extends PrimitiveButtonProps {
  contentDivider?: number
}

export const Button = forwardRef<ButtonElement, ButtonProps>((
  { children, contentDivider = 12, ...buttonProps },
  forwardedRef
) => (
  <Primitive.button {...buttonProps} ref={forwardedRef}>
    <ContentDivider divider={contentDivider}>{children}</ContentDivider>
  </Primitive.button>
))
