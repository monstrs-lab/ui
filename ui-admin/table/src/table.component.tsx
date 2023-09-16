import type { ColumnDef }    from '@tanstack/react-table'
import type { ReactElement } from 'react'

import { flexRender }        from '@tanstack/react-table'
import { getCoreRowModel }   from '@tanstack/react-table'
import { getSortedRowModel } from '@tanstack/react-table'
import { useReactTable }     from '@tanstack/react-table'
import { useCallback }       from 'react'
import { useVirtual }        from 'react-virtual'
import React                 from 'react'

import { TableBody }         from './table-body/index.js'
import { TableCell }         from './table-cell/index.js'
import { TableContainer }    from './table-container/index.js'
import { TableElement }      from './table-element/index.js'
import { TableHeaderCell }   from './table-header-cell/index.js'
import { TableHeaderRow }    from './table-header-row/index.js'
import { TableHeader }       from './table-header/index.js'
import { TableRow }          from './table-row/index.js'

export interface TableProps {
  columns: Array<ColumnDef<object, any>>
  data: Array<object>
  onLoadMore?: () => void
}

export const Table = ({ columns, data, onLoadMore }: TableProps): ReactElement => {
  const tableContainerRef = React.useRef<HTMLDivElement>(null)

  const table = useReactTable({
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    columns,
    data,
  })

  const { rows } = table.getRowModel()

  const { virtualItems: virtualRows } = useVirtual({
    parentRef: tableContainerRef,
    size: rows.length,
    overscan: 10,
  })

  const fetchMoreOnBottomReached = useCallback(
    (containerRefElement?: HTMLDivElement | null) => {
      if (containerRefElement) {
        const { scrollHeight, scrollTop, clientHeight } = containerRefElement

        if (scrollHeight - scrollTop - clientHeight < 300) {
          onLoadMore?.()
        }
      }
    },
    [onLoadMore]
  )

  return (
    <TableContainer
      ref={tableContainerRef}
      onScroll={(event): void => {
        fetchMoreOnBottomReached(event.target as HTMLDivElement)
      }}
    >
      <TableElement>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableHeaderRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHeaderCell
                  key={header.id}
                  colSpan={header.colSpan}
                  style={{ width: header.getSize() }}
                >
                  {header.isPlaceholder ? null : (
                    <div>{flexRender(header.column.columnDef.header, header.getContext())}</div>
                  )}
                </TableHeaderCell>
              ))}
            </TableHeaderRow>
          ))}
        </TableHeader>
        <TableBody>
          {virtualRows.map((virtualRow) => {
            const row = rows[virtualRow.index]

            return (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            )
          })}
        </TableBody>
      </TableElement>
    </TableContainer>
  )
}
