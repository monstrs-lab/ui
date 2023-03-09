import type { InputControlAttachPosition } from './input-control.component'
import type { RootProps }                  from '@ui-primitives/input'
import type { ControlElement }             from '@ui-primitives/input'
import type { ReactNode }                  from 'react'

import React                               from 'react'
import { forwardRef }                      from 'react'

import { InputAttachmentsPrefix }          from './input-attachments.component'
import { InputAttachmentsSuffix }          from './input-attachments.component'
import { InputControl }                    from './input-control.component'
import { InputRoot }                       from './input-root.component'

export interface InputProps extends Omit<RootProps, 'prefix'> {
  attach?: InputControlAttachPosition
  prefix?: ReactNode
  suffix?: ReactNode
}

export const Input = forwardRef<ControlElement, InputProps>((
  { prefix, suffix, attach, ...props },
  forwardedRef
) => (
  <InputRoot {...props}>
    <InputAttachmentsPrefix>{prefix}</InputAttachmentsPrefix>
    <InputControl ref={forwardedRef} attach={attach} />
    <InputAttachmentsSuffix>{suffix}</InputAttachmentsSuffix>
  </InputRoot>
))
