import React, { useMemo } from 'react'
import { useTable, useSortBy, useGlobalFilter, useFilters, useRowSelect } from 'react-table'
import ColumnFilter from './ColumnFilter.js'
import { COLUMNS } from './columns.js'
import './table.css'

const SpellTable = (props) => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => props.spells, [props.spells])
  
  const defaultColumn = useMemo(() => {
    return {
      Filter: ColumnFilter
    }
  }, [])
  
  const {
    getTableProps, 
    getTableBodyProps, 
    headerGroups, 
    footerGroups,
    rows, 
    prepareRow
  } = useTable({
    columns,
    data,
    defaultColumn
  },
  useFilters,
  useGlobalFilter,
  useSortBy,
  useRowSelect
  )

  return (
    <>
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                <div>{column.canFilter ? column.render('Filter') : null}</div>
                <span>
                  {column.isSorted ? (column.isSortedDesc ? '↓' : '↑') : ''}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()} onClick={() => props.handleSelect(row.original)}>
              {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()} >{cell.render('Cell')}</td>
                })}
            </tr>
          )
        })}
      </tbody>
      <tfoot>
        {
          footerGroups.map(footerGroup => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {
                footerGroup.headers.map(column => (
                  <td {...column.getFooterProps}>
                    {
                      column.render('Footer')
                    }
                  </td>
                ))
              }
            </tr>
          ))
        }
      </tfoot>
    </table>
    </>
  )
}

export default SpellTable