import React from 'react';

import {Table, TableBody, TableContainer, TableHead, TableRow, Paper, TableFooter, TablePagination} from '@mui/material';

import {TCellAction, TableDataType, TableColumns} from '@/types';
import CustomTableCell from './components/CustomTableCell';
import EnhancedTableToolbar from './components/EnhancedToolbar';
import {ITableButtonProps} from './components/TableButton';
import {HeaderCell, RowCell} from './styles';
import TablePaginationActions from './components/TablePaginationActions';
import {ISelectInputProps} from '../formFields/SelectInput';
import {ISearchBarProps} from '../searchbar';

interface IPaginatedTableProps<T> {
  data: TableDataType<T>;
  headers: string[];
  columns: TableColumns<T>;
  cellAttrs: {[K in keyof T]?: TCellAction<T>};
  title: string;
  selectInputProps?: ISelectInputProps;
  searchBarProps?: ISearchBarProps;
  toolbarButtonProps?: ITableButtonProps;
}

export default function PaginatedTable<T = unknown>(props: IPaginatedTableProps<T>) {
  const {data = [], headers = [], cellAttrs, title, toolbarButtonProps, searchBarProps, columns = [], selectInputProps} = props;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper sx={{width: '100%'}}>
      <EnhancedTableToolbar title={title} buttonProps={toolbarButtonProps} searchBarProps={searchBarProps} selectInputProps={selectInputProps} />
      <TableContainer>
        <Table sx={{minWidth: 650, maxHeight: 300}} aria-label={`${title} Table`}>
          <TableHead>
            <TableRow>
              {headers.map((header, index) => {
                return <HeaderCell key={header + index.toString()}>{header}</HeaderCell>;
              })}
            </TableRow>
          </TableHead>

          <TableBody>
            {(rowsPerPage > 0 ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : data).map((row, index) => {
              return (
                <TableRow key={index.toString()} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                  {columns.map((colKey, colIndex) => {
                    const value = row[colKey];
                    const cell = cellAttrs[colKey];
                    return <CustomTableCell<typeof value, T> key={colIndex.toString()} type={cell?.type} value={value} callback={cell?.callback} component={cell?.component} resource={row} />;
                  })}
                </TableRow>
              );
            })}
            {emptyRows > 0 && (
              <TableRow style={{height: 75 * emptyRows}}>
                <RowCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, {label: 'All', value: -1}]}
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Paper>
  );
}
