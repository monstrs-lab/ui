import type { ReactNode }    from 'react'
import type { ReactElement } from 'react'

import React                 from 'react'

import { tableCellStyles }   from './table-cell.styles.css.js'

export interface TableCellProps {
  children: ReactNode
}

export const TableCell = (props: TableCellProps): ReactElement => (
  <td {...props} className={tableCellStyles} />
)
