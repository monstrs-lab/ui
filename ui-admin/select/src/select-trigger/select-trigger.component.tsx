import type { SelectTriggerProps as SelectTriggerBaseProps } from '@radix-ui/react-select'
import type { ReactElement }                                 from 'react'

import type { SelectSizeType }                               from '../select.component.jsx'

import { Trigger }                                           from '@radix-ui/react-select'
import React                                                 from 'react'

import { selectTriggerStyles }                               from './select-trigger.styles.css.js'

export interface SelectTriggerProps extends SelectTriggerBaseProps {
  fill?: boolean
  size?: SelectSizeType
}

export const SelectTrigger = ({ fill, size, ...props }: SelectTriggerProps): ReactElement => (
  <Trigger className={selectTriggerStyles({ fill, size })} {...props} />
)
