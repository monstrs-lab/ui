import type { SelectItemProps } from '@radix-ui/react-select'
import type { FC }              from 'react'

import { CheckIcon }            from '@radix-ui/react-icons'

import React                    from 'react'

import { SelectItemContainer }  from './select-item-container.component'
import { SelectItemIndicator }  from './select-item-indicator.component'
import { SelectItemText }       from './select-item-text.component'

export const SelectItem: FC<SelectItemProps> = ({ children, ...props }) => (
  <SelectItemContainer {...props}>
    <SelectItemText>{children}</SelectItemText>
    <SelectItemIndicator>
      <CheckIcon />
    </SelectItemIndicator>
  </SelectItemContainer>
)
