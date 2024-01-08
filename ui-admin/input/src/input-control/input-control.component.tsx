import type { ControlProps }  from '@ui-primitives/input'
import type { ForwardedRef }  from 'react'
import type { ReactElement }  from 'react'

import React                  from 'react'

import { Control }            from '@ui-primitives/input'

import { inputControlStyles } from './input-control.styles.css.js'

export type InputControlAttachPositionType = 'both' | 'left' | 'right'
export type InputControlSizeType = 'normal'

export interface InputControlProps extends ControlProps {
  attach?: InputControlAttachPositionType
  controlSize?: InputControlSizeType
  ref?: ForwardedRef<HTMLInputElement>
}

export const InputControl = ({
  controlSize,
  attach,
  disabled,
  ...props
}: InputControlProps): ReactElement => (
  <Control
    disabled={disabled}
    className={inputControlStyles({ attach, controlSize, disabled })}
    {...props}
  />
)
