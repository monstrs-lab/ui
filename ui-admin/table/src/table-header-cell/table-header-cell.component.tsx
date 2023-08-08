import type { ReactNode }        from 'react'
import type { ReactElement }     from 'react'
import type { HTMLProps }        from 'react'

import React                     from 'react'

import { tableHeaderCellStyles } from './table-header-cell.styles.css.js'

export interface TableHeaderCellProps extends HTMLProps<HTMLTableCellElement> {
  children: ReactNode
}

export const TableHeaderCell = (props: TableHeaderCellProps): ReactElement => (
  <th {...props} className={tableHeaderCellStyles} />
)
