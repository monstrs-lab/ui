import type { SelectProps }       from '@radix-ui/react-select'
import type { FC }                from 'react'

import { ChevronDownIcon }        from '@radix-ui/react-icons'
import { ChevronUpIcon }          from '@radix-ui/react-icons'
import { Value as SelectValue }   from '@radix-ui/react-select'
import { Icon as SelectIcon }     from '@radix-ui/react-select'

import React                      from 'react'

import { SelectContent }          from './select-content.component'
import { SelectRoot }             from './select-root.component'
import { SelectScrollDownButton } from './select-scroll-button.component'
import { SelectScrollUpButton }   from './select-scroll-button.component'
import { SelectTrigger }          from './select-trigger.component'
import { SelectViewport }         from './select-viewport.component'

export const Select: FC<SelectProps> = ({ children, ...props }) => (
  <SelectRoot {...props}>
    <SelectTrigger>
      <SelectValue />
      <SelectIcon>
        <ChevronDownIcon />
      </SelectIcon>
    </SelectTrigger>
    <SelectContent>
      <SelectScrollUpButton>
        <ChevronUpIcon />
      </SelectScrollUpButton>
      <SelectViewport>{children}</SelectViewport>
      <SelectScrollDownButton>
        <ChevronDownIcon />
      </SelectScrollDownButton>
    </SelectContent>
  </SelectRoot>
)
