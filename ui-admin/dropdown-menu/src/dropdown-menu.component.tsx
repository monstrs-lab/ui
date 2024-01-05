import type { DropdownMenuProps as BaseDropdownMenuProps } from '@radix-ui/react-dropdown-menu'
import type { DropdownMenuContentProps }                   from '@radix-ui/react-dropdown-menu'
import type { ReactElement }                               from 'react'
import type { ReactNode }                                  from 'react'

import { Root }                                            from '@radix-ui/react-dropdown-menu'
import { Trigger }                                         from '@radix-ui/react-dropdown-menu'
import React                                               from 'react'

import { DropdownMenuContent }                             from './dropdown-menu-content/index.js'

export interface DropdownMenuProps extends BaseDropdownMenuProps {
  content: ReactNode
  side?: DropdownMenuContentProps['side']
  align?: DropdownMenuContentProps['align']
  sideOffset?: number
  alignOffset?: number
  fillContent?: boolean
}

export const DropdownMenu = ({
  side = 'bottom',
  sideOffset = 8,
  alignOffset,
  align = 'end',
  children,
  content,
  fillContent,
  modal = true,
  ...props
}: DropdownMenuProps): ReactElement => (
  <Root {...props} modal={modal}>
    <Trigger asChild>{children}</Trigger>
    <DropdownMenuContent
      side={side}
      align={align}
      sideOffset={sideOffset}
      alignOffset={alignOffset}
      fill={fillContent}
    >
      {content}
    </DropdownMenuContent>
  </Root>
)
