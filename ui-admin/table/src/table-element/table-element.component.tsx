import type { ReactNode }     from 'react'
import type { ReactElement }  from 'react'
import type { HTMLProps }     from 'react'

import React                  from 'react'

import { tableElementStyles } from './table-element.styles.css.js'

export interface TableElementProps extends HTMLProps<HTMLTableElement> {
  children: ReactNode
}

export const TableElement = (props: TableElementProps): ReactElement => (
  <table {...props} className={tableElementStyles} />
)
