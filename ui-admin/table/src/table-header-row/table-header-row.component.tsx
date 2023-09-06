import type { ReactNode }       from 'react'
import type { ReactElement }    from 'react'
import type { HTMLProps }       from 'react'

import React                    from 'react'

import { tableHeaderRowStyles } from './table-header-row.styles.css.js'

export interface TableHeaderRowProps extends HTMLProps<HTMLTableRowElement> {
  children: ReactNode
}

export const TableHeaderRow = (props: TableHeaderRowProps): ReactElement => (
  <tr {...props} className={tableHeaderRowStyles} />
)
