import type { FC }        from 'react'
import type { ReactNode } from 'react'

import { Root }           from '@radix-ui/react-radio-group'

import React              from 'react'

export interface RadioGroupProps {
  children?: ReactNode
  required?: boolean
  value?: string
  defaultValue?: string
  onChange?(value: string): void
}

export const RadioGroup: FC<RadioGroupProps> = ({
  children,
  required,
  value,
  defaultValue,
  onChange,
}) => (
  <Root required={required} value={value} defaultValue={defaultValue} onValueChange={onChange}>
    {children}
  </Root>
)
