import type { ColumnDef }       from '@tanstack/react-table'
import type { VisibilityState } from '@tanstack/react-table'
import type { TableMeta }       from '@tanstack/react-table'
import type { ReactElement }    from 'react'

import { flexRender }           from '@tanstack/react-table'
import { getCoreRowModel }      from '@tanstack/react-table'
import { getSortedRowModel }    from '@tanstack/react-table'
import { useReactTable }        from '@tanstack/react-table'
import { useEffect }            from 'react'
import { useState }             from 'react'
import React                    from 'react'

import { useWindowSize }        from '@ui-utils/use-window-size'

import { TableBody }            from './table-body/index.js'
import { TableCell }            from './table-cell/index.js'
import { TableElement }         from './table-element/index.js'
import { TableHeaderCell }      from './table-header-cell/index.js'
import { TableHeaderRow }       from './table-header-row/index.js'
import { TableHeader }          from './table-header/index.js'
import { TableRow }             from './table-row/index.js'

export interface TableProps<T> {
  data: Array<T>
  columns: Array<ColumnDef<T>>
  hideColumnsOnMobile?: Array<string>
  meta?: TableMeta<any>
}

export const Table = <T,>({
  columns,
  data,
  hideColumnsOnMobile,
  meta,
}: TableProps<T>): ReactElement => {
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const { innerWidth } = useWindowSize()

  const table = useReactTable({
    state: {
      columnVisibility,
    },
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    columns,
    data,
    meta,
  })

  useEffect(() => {
    if (!hideColumnsOnMobile?.length) return

    if (innerWidth < 832) {
      setColumnVisibility((prev) => ({
        ...prev,
        ...hideColumnsOnMobile.reduce((result, item) => ({ ...result, [item]: false }), {}),
      }))
    } else {
      setColumnVisibility((prev) => ({
        ...prev,
        ...hideColumnsOnMobile.reduce((result, item) => ({ ...result, [item]: true }), {}),
      }))
    }
  }, [table, innerWidth, hideColumnsOnMobile, setColumnVisibility])

  return (
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
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </TableElement>
  )
}
