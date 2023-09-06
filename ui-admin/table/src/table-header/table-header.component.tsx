import type { ReactNode }    from 'react'
import type { ReactElement } from 'react'

import React                 from 'react'

import { tableHeaderStyles } from './table-header.styles.css.js'

export interface TableHeaderProps {
  children: ReactNode
}

export const TableHeader = (props: TableHeaderProps): ReactElement => (
  <thead {...props} className={tableHeaderStyles} />
)
