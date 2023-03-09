import { RadioGroupItemProps } from '@radix-ui/react-radio-group'

import React                   from 'react'
import { FC }                  from 'react'

import { RadioGroupIndicator } from './radio-group-indicator.component'
import { RadioGroupItem }      from './radio-group-item.component'

export interface RadioGroupRadioProps extends RadioGroupItemProps {}

export const RadioGroupRadio: FC<RadioGroupRadioProps> = ({ id, value }) => (
  <RadioGroupItem id={id} value={value}>
    <RadioGroupIndicator />
  </RadioGroupItem>
)
