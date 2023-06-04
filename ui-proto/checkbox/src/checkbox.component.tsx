import type { FC }            from 'react'

import type { CheckboxProps } from './checkbox.interfaces'

import { CheckIcon }          from '@radix-ui/react-icons'
import React                  from 'react'

import { CheckboxIndicator }  from './checkbox-indicator.component'
import { CheckboxRoot }       from './checkbox-root.component'

export const Checkbox: FC<CheckboxProps> = ({ id, required, value, onChange }) => (
  <CheckboxRoot id={id} required={required} checked={value} onCheckedChange={onChange}>
    <CheckboxIndicator>
      <CheckIcon color='black' width={20} height={20} />
    </CheckboxIndicator>
  </CheckboxRoot>
)
