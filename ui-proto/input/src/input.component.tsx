import type { RootProps }                      from '@ui-primitives/input'
import type { ControlElement }                 from '@ui-primitives/input'
import type { ReactNode }                      from 'react'

import type { InputControlAttachPositionType } from './input-control/index.js'
import type { InputControlSizeType }           from './input-control/index.js'

import { forwardRef }                          from 'react'
import React                                   from 'react'

import { InputAttachmentsPrefix }              from './input-attachments/index.js'
import { InputAttachmentsSuffix }              from './input-attachments/index.js'
import { InputContainer }                      from './input-container/index.js'
import { InputControl }                        from './input-control/index.js'
import { InputRoot }                           from './input-root/index.js'

export interface InputProps extends RootProps {
  attach?: InputControlAttachPositionType
  size?: InputControlSizeType
  prefix?: ReactNode
  suffix?: ReactNode
}

export const Input = forwardRef<ControlElement, InputProps>((
  { prefix, suffix, attach, size, ...props },
  forwardedRef
) => (
  <InputContainer>
    <InputRoot {...props}>
      <InputAttachmentsPrefix>{prefix}</InputAttachmentsPrefix>
      <InputControl ref={forwardedRef} attach={attach} controlSize={size} />
      <InputAttachmentsSuffix>{suffix}</InputAttachmentsSuffix>
    </InputRoot>
  </InputContainer>
))
