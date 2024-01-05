import type { DropdownMenuItemProps } from '@radix-ui/react-dropdown-menu'
import type { ReactElement }          from 'react'

import { Item }                       from '@radix-ui/react-dropdown-menu'
import React                          from 'react'

import { dropdownMenuItemStyles }     from './dropdown-menu-item.styles.css.js'

export const DropdownMenuItem = (props: DropdownMenuItemProps): ReactElement => (
  <Item className={dropdownMenuItemStyles} {...props} />
)
