import type { ReactNode }       from 'react'
import type { UIEventHandler }  from 'react'

import { forwardRef }           from 'react'
import React                    from 'react'

import { tableContainerStyles } from './table-container.styles.css.js'

export interface TableContainerProps {
  children: ReactNode
  onScroll: UIEventHandler<HTMLDivElement>
}

export const TableContainer = forwardRef<HTMLDivElement, TableContainerProps>((
  props: TableContainerProps,
  forwardedRef
) => <div {...props} ref={forwardedRef} className={tableContainerStyles} />)
