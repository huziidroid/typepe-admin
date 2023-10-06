import React from 'react';
import {Else, If, Then} from 'react-if';
import {Table, TableBody, TableContainer, TableHead, TableRow, Paper, TableFooter, TablePagination} from '@mui/material';

import {TCellAction, TableDataType, TableColumns} from '@/types';
import CustomTableCell from './components/CustomTableCell';
import EnhancedTableToolbar from './components/EnhancedToolbar';
import {ITableButtonProps} from './components/TableButton';
import {HeaderCell, RowCell} from './styles';
import {ISelectInputProps} from '../formFields/SelectInput';
import {ISearchBarProps} from '../searchbar';
import BlankState from '../blankState';

interface IPaginatedTableProps<T> {
  data: TableDataType<T>;
  headers: string[];
  columns: TableColumns<T>;
  cellAttrs: {[K in keyof T]?: TCellAction<T>};
  title?: string;
  selectInputProps?: ISelectInputProps;
  searchBarProps?: ISearchBarProps;
  toolbarButtonProps?: ITableButtonProps;

  // pagination props
  page?: number;
  pageSize?: number;
  handlePageChange?: (page: number) => void;
  handlePageSizeChange?: (pageSize: number) => void;
  total?: number;
}

export default function PaginatedTable<T = unknown>(props: IPaginatedTableProps<T>) {
  const {
    data = [],
    headers = [],
    cellAttrs,
    title = '',
    toolbarButtonProps,
    searchBarProps,
    columns = [],
    selectInputProps,
    handlePageChange,
    handlePageSizeChange,
    page = 0,
    pageSize = 5,
    total = 0,
  } = props;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * pageSize - total) : 0;

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => handlePageChange && handlePageChange(newPage);

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    handlePageSizeChange && handlePageSizeChange(parseInt(event.target.value, 10));
    handlePageChange && handlePageChange(0);
  };

  return (
    <Paper sx={{width: '100%', borderRadius: 2}}>
      <EnhancedTableToolbar title={title} buttonProps={toolbarButtonProps} searchBarProps={searchBarProps} selectInputProps={selectInputProps} />
      <TableContainer sx={{borderRadius: 2}}>
        <Table sx={{minWidth: 650, maxHeight: 300}} aria-label={`${title} Table`}>
          <TableHead>
            <TableRow>
              {headers.map((header, index) => {
                return <HeaderCell key={header + index.toString()}>{header}</HeaderCell>;
              })}
            </TableRow>
          </TableHead>

          <TableBody>
            <If condition={data.length > 0}>
              <Then>
                {data.map((row, index) => {
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
                  <TableRow style={{height: 65.5 * emptyRows}}>
                    <RowCell colSpan={6} />
                  </TableRow>
                )}
              </Then>
              <Else>
                <TableRow>
                  <RowCell colSpan={6}>
                    <BlankState label={`No ${title} found`} infoText={`There are no ${title}`} />
                  </RowCell>
                </TableRow>
              </Else>
            </If>
          </TableBody>

          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, {label: 'All', value: -1}]}
                count={total}
                rowsPerPage={pageSize}
                page={total <= 0 ? 0 : page}
                SelectProps={{inputProps: {'aria-label': 'rows per page'}, native: true}}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Paper>
  );
}
