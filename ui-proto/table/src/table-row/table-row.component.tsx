import type { ReactNode }      from 'react'
import type { ReactElement }   from 'react'
import type { HTMLAttributes } from 'react'

import React                   from 'react'

import { tableRowStyles }      from './table-row.styles.css.js'

export interface TableRowProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export const TableRow = (props: TableRowProps): ReactElement => (
  <tr {...props} className={tableRowStyles} />
)
