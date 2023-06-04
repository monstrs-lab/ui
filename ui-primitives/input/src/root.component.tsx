import type { ComponentPropsWithoutRef } from '@radix-ui/react-primitive'
import type { FC }                       from 'react'
import type { ReactNode }                from 'react'
import type { ElementRef }               from 'react'

import type { InputContextValue }        from './root.context'
import type { ScopedProps }              from './root.context'

import { Primitive }                     from '@radix-ui/react-primitive'
import { useControllableState }          from '@radix-ui/react-use-controllable-state'
import { useState }                      from 'react'
import React                             from 'react'

import { InputProvider }                 from './root.context'

type PrimitiveDivProps = ComponentPropsWithoutRef<typeof Primitive.div>

export interface RootProps extends PrimitiveDivProps {
  defaultValue?: string
  type?: InputContextValue['type']
  name?: InputContextValue['name']
  required?: InputContextValue['required']
  value?: InputContextValue['value']
  placeholder?: InputContextValue['placeholder']
  onValueChange?: InputContextValue['onValueChange']
  children?: ReactNode
}

export const Root: FC<RootProps> = ({
  __scopeInput,
  children,
  id,
  name,
  type,
  required,
  placeholder,
  value: valueProp,
  defaultValue,
  onValueChange,
  ...rootProps
}: ScopedProps<RootProps>) => {
  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange,
  })
  const [attachmentsPrefix, setAttachmentsPrefix] = useState<ElementRef<
    typeof Primitive.div
  > | null>(null)
  const [attachmentsSuffix, setAttachmentsSuffix] = useState<ElementRef<
    typeof Primitive.div
  > | null>(null)

  return (
    <InputProvider
      scope={__scopeInput}
      id={id}
      type={type}
      name={name}
      required={required}
      value={value}
      placeholder={placeholder}
      attachmentsPrefix={attachmentsPrefix}
      attachmentsSuffix={attachmentsSuffix}
      onValueChange={setValue}
      onChangeAttachmentsPrefix={setAttachmentsPrefix}
      onChangeAttachmentsSuffix={setAttachmentsSuffix}
    >
      <Primitive.div {...rootProps}>{children}</Primitive.div>
    </InputProvider>
  )
}
