import type { RadioGroupItemProps } from '@radix-ui/react-radio-group'
import type { FC }                  from 'react'

import React                        from 'react'

import { RadioGroupIndicator }      from './radio-group-indicator.component'
import { RadioGroupItem }           from './radio-group-item.component'

export type RadioGroupRadioProps = RadioGroupItemProps

export const RadioGroupRadio: FC<RadioGroupRadioProps> = ({ id, value }) => (
  <RadioGroupItem id={id} value={value}>
    <RadioGroupIndicator />
  </RadioGroupItem>
)
