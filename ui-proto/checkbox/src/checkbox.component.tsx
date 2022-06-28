import { CheckIcon }         from '@radix-ui/react-icons'

import React                 from 'react'
import { FC }                from 'react'

import { CheckboxIndicator } from './checkbox-indicator.component'
import { CheckboxRoot }      from './checkbox-root.component'
import { CheckboxProps }     from './checkbox.interfaces'

export const Checkbox: FC<CheckboxProps> = ({ required, value, onChange }) => (
  <CheckboxRoot required={required} checked={value} onCheckedChange={onChange}>
    <CheckboxIndicator>
      <CheckIcon color='black' width={20} height={20} />
    </CheckboxIndicator>
  </CheckboxRoot>
)
