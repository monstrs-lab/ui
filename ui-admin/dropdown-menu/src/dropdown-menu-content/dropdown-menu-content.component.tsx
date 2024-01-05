import type { DropdownMenuContentProps } from '@radix-ui/react-dropdown-menu'
import type { ReactElement }             from 'react'

import { Content }                       from '@radix-ui/react-dropdown-menu'
import React                             from 'react'

import { dropdownMenuContentStyles }     from './dropdown-menu-content.styles.css.js'

export interface MenuContentProps extends DropdownMenuContentProps {
  fill?: boolean
}

export const DropdownMenuContent = ({ fill, ...props }: MenuContentProps): ReactElement => (
  <Content className={dropdownMenuContentStyles({ fill })} {...props} />
)
