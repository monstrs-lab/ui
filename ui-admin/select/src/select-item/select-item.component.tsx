import type { SelectItemProps } from '@radix-ui/react-select'
import type { ReactElement }    from 'react'

import { Item }                 from '@radix-ui/react-select'
import React                    from 'react'

import { SelectItemText }       from '../select-item-text/index.js'
import { selectItemStyles }     from './select-item.styles.css.js'

export const SelectItem = ({ children, ...props }: SelectItemProps): ReactElement => (
  <Item className={selectItemStyles} {...props}>
    <SelectItemText>{children}</SelectItemText>
  </Item>
)
