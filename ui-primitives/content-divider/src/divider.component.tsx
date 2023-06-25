import type { FC }           from 'react'
import type { ReactElement } from 'react'

import React                 from 'react'

export interface DividerProps {
  divider?: number
  children: ReactElement
}

export const Divider: FC<DividerProps> = ({ divider = 12, children }) => (
  <span style={{ marginLeft: divider, display: 'flex' }}>{children}</span>
)
