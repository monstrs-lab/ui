import type { ReactElement }    from 'react'
import type { ReactNode }       from 'react'

import { Slot }                 from '@radix-ui/react-slot'
import React                    from 'react'

import { Button }               from '@ui-primitives/button'

import { tableRowActionStyles } from './table-row-action.styles.css.js'

export interface TableRowActionProps {
  asChild?: boolean
  children?: ReactNode
}

export const TableRowAction = ({ asChild, ...props }: TableRowActionProps): ReactElement => {
  const Component = asChild ? Slot : Button

  return <Component {...props} className={tableRowActionStyles} />
}
