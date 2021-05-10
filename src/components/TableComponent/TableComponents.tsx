import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { createData } from '../../serivces/TableColName/tableRowData';
import TableRowWeatherCitiesComponent from '../TableRowComponent/TableRowWeatherCitiesComponent';

export interface TableComponentProps {
  colsName: Array<string>;
  title: string;
  rows: any;
}

export const tableRowData = (index: number, title: string, row: any) => {
  switch (title) {
    case 'weatherCities':
      return <TableRowWeatherCitiesComponent key={title + index} row={row} />;
  }
};

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 4.3),
  createData('Eclair', 262, 16.0, 6.0),
  createData('Cupcake', 305, 3.7, 4.3),
  createData('Gingerbread', 356, 16.0, 3.9),
];

const TableComponent: React.FC<TableComponentProps> = ({
  colsName,
  title,
  rows,
}) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            {colsName.map((col) => (
              <TableCell key={col}>{col}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any, index: number) =>
            tableRowData(index, title, row)
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
