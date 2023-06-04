import type { ComponentPropsWithoutRef } from '@radix-ui/react-primitive'
import type { ElementRef }               from 'react'

import type { ScopedProps }              from './root.context'

import { useLayoutEffect }               from '@radix-ui/react-use-layout-effect'
import { forwardRef }                    from 'react'
import { useState }                      from 'react'
import React                             from 'react'

import { useInputContext }               from './root.context'

const CONTROL_NAME = 'Control'

export type ControlElement = ElementRef<'input'>
export type ControlProps = ComponentPropsWithoutRef<'input'>

export const Control = forwardRef<ControlElement, ControlProps>((
  { __scopeInput, ...inputProps }: ScopedProps<ControlProps>,
  forwardedRef
) => {
  const context = useInputContext(CONTROL_NAME, __scopeInput)
  const [offsetLeft, setOffsetLeft] = useState<number | undefined>(undefined)
  const [offsetRight, setOffsetRight] = useState<number | undefined>(undefined)

  useLayoutEffect(() => {
    if (context.attachmentsPrefix) {
      const rect = context.attachmentsPrefix.getBoundingClientRect()

      setOffsetLeft(rect.width ? rect.width : undefined)
    } else {
      setOffsetLeft(undefined)
    }
  }, [context.attachmentsPrefix])

  useLayoutEffect(() => {
    if (context.attachmentsSuffix) {
      const rect = context.attachmentsSuffix.getBoundingClientRect()

      setOffsetRight(rect.width ? rect.width : undefined)
    } else {
      setOffsetRight(undefined)
    }
  }, [context.attachmentsSuffix])

  return (
    <input
      {...inputProps}
      ref={forwardedRef}
      id={context.id}
      type={context.type}
      name={context.name}
      required={context.required}
      value={context.value}
      placeholder={context.placeholder}
      style={{
        paddingLeft: offsetLeft,
        paddingRight: offsetRight,
      }}
      onChange={(event) => {
        context.onValueChange(event?.target.value)
      }}
    />
  )
})
