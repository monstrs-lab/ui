import type { Scope }                  from '@radix-ui/react-context'
import type { HTMLInputTypeAttribute } from 'react'
import type { ElementRef }             from 'react'
import type { Primitive }              from '@radix-ui/react-primitive'

import { createContextScope }          from '@radix-ui/react-context'

export const ROOT_NAME = 'Input'

export type ScopedProps<P> = P & { __scopeInput?: Scope }

export type InputContextValue = {
  id?: string
  type?: HTMLInputTypeAttribute
  name?: string
  required?: boolean
  value?: string
  placeholder?: string
  onValueChange: (value: string) => void
  attachmentsPrefix: ElementRef<typeof Primitive.div> | null
  onChangeAttachmentsPrefix: (node: ElementRef<typeof Primitive.div> | null) => void
  attachmentsSuffix: ElementRef<typeof Primitive.div> | null
  onChangeAttachmentsSuffix: (node: ElementRef<typeof Primitive.div> | null) => void
}

const [createInputContext, createInputScope] = createContextScope(ROOT_NAME)
const [InputProvider, useInputContext] = createInputContext<InputContextValue>(ROOT_NAME)
const useInputScope = createInputScope()

export { createInputScope, InputProvider, useInputContext, useInputScope }
