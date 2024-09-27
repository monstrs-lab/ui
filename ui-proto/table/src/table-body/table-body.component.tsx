import type { ReactNode }    from 'react'
import type { ReactElement } from 'react'

import React                 from 'react'

import { tableBodyStyles }   from './table-body.styles.css.js'

export interface TableBodyProps {
  children: ReactNode
}

export const TableBody = (props: TableBodyProps): ReactElement => (
  <tbody {...props} className={tableBodyStyles} />
)
