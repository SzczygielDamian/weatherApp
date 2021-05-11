import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import TableRowWeatherCitiesComponent from '../TableRowComponent/TableRowWeatherCitiesComponent';

import classes from './TableComponent.module.scss';
import { RowModel } from '../../Model/rowModel';

export interface TableComponentProps {
  colsName: Array<string>;
  title: string;
  rows: Array<RowModel>;
}

export const tableRowData = (index: number, title: string, row: any) => {
  switch (title) {
    case 'weatherCities':
      return (
        <TableRowWeatherCitiesComponent
          key={row.city}
          index={index}
          row={row}
        />
      );
  }
};

const TableComponent: React.FC<TableComponentProps> = ({
  colsName,
  title,
  rows,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            {colsName.map((col, index) => (
              <TableCell key={col} align={index === 0 ? 'left' : 'right'}>
                <strong>{col}</strong>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: RowModel, index: number) =>
            tableRowData(index, title, row)
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
