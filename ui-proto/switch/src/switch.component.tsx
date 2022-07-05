import type { SwitchProps } from '@radix-ui/react-switch'
import type { FC }          from 'react'

import React                from 'react'

import { SwitchRoot }       from './switch-root.component'
import { SwitchThumb }      from './switch-thumb.component'

export const Switch: FC<SwitchProps> = (props) => (
  <SwitchRoot {...props}>
    <SwitchThumb />
  </SwitchRoot>
)
