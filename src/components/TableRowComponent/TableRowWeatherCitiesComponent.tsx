import { TableCell, TableRow } from '@material-ui/core';
import React from 'react';

export interface TableRowWeatherCitiesComponentProps {
  row?: any;
}

const TableRowWeatherCitiesComponent: React.FC<TableRowWeatherCitiesComponentProps> = ({
  row,
}) => {
  return (
    <TableRow key={row.key}>
      <TableCell component='th' scope='row'>
        {row.city}
      </TableCell>
      <TableCell>{row.temp}</TableCell>
      <TableCell>{row.humidity}</TableCell>
      <TableCell>{row.wind}</TableCell>
    </TableRow>
  );
};

export default TableRowWeatherCitiesComponent;
