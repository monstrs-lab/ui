import type { ScopedProps }              from './root.context'
import type { ComponentPropsWithoutRef } from '@radix-ui/react-primitive'
import type { ElementRef }               from 'react'

import { Primitive }                     from '@radix-ui/react-primitive'
import { useComposedRefs }               from '@radix-ui/react-compose-refs'

import React                             from 'react'
import { forwardRef }                    from 'react'

import { useInputContext }               from './root.context'

const ATTACHMENTS_PREFIX_NAME = 'AttachmentsPrefix'
const ATTACHMENTS_SUFFIX_NAME = 'AttachmentsSuffix'

type AttachmentsElement = ElementRef<typeof Primitive.div>
type PrimitiveDivProps = ComponentPropsWithoutRef<typeof Primitive.div>

export interface AttachmentsProps extends PrimitiveDivProps {}

export const AttachmentsPrefix = forwardRef<AttachmentsElement, AttachmentsProps>((
  { __scopeInput, children, ...containerProps }: ScopedProps<AttachmentsProps>,
  forwardedRef
) => {
  const context = useInputContext(ATTACHMENTS_PREFIX_NAME, __scopeInput)
  const composedRefs = useComposedRefs(forwardedRef, context.onChangeAttachmentsPrefix)

  if (!children) {
    return null
  }

  return (
    <Primitive.div {...containerProps} ref={composedRefs}>
      {children}
    </Primitive.div>
  )
})

export const AttachmentsSuffix = forwardRef<AttachmentsElement, AttachmentsProps>((
  { __scopeInput, children, ...containerProps }: ScopedProps<AttachmentsProps>,
  forwardedRef
) => {
  const context = useInputContext(ATTACHMENTS_SUFFIX_NAME, __scopeInput)
  const composedRefs = useComposedRefs(forwardedRef, context.onChangeAttachmentsSuffix)

  if (!children) {
    return null
  }

  return (
    <Primitive.div {...containerProps} ref={composedRefs}>
      {children}
    </Primitive.div>
  )
})
