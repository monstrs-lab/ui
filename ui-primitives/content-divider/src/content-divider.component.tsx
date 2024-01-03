import type { FC }            from 'react'
import type { ReactNode }     from 'react'
import type { ReactElement }  from 'react'

import { Divider }            from './divider.component'
import { useDividedChildren } from './use-divided-children.hook'

export interface ContentDividerProps {
  children?: ReactNode
  divider?: number
}

export const ContentDivider: FC<ContentDividerProps> = ({ divider = 12, children }) =>
  useDividedChildren(children, Divider, { divider }) as ReactElement
