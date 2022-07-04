import { Root } from '@radix-ui/react-radio-group'

import React    from 'react'
import { FC }   from 'react'

export interface RadioGroupProps {
  required?: boolean
  value?: string
  onChange?(value: string): void
}

export const RadioGroup: FC<RadioGroupProps> = ({ children, required, value, onChange }) => (
  <Root required={required} value={value} onValueChange={onChange}>
    {children}
  </Root>
)
