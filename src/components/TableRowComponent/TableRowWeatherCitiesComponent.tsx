import { TableCell, TableRow } from '@material-ui/core';
import React from 'react';
import { WeatherCitiesModel } from '../../Model/weatherCitiesModel';

export interface TableRowWeatherCitiesComponentProps {
  row: WeatherCitiesModel;
  index: number;
}

const TableRowWeatherCitiesComponent: React.FC<TableRowWeatherCitiesComponentProps> =
  ({ row, index }) => {
    return (
      <TableRow key={row.key}>
        <TableCell component='th' scope='row' align='left'>
          {row.city}
        </TableCell>
        <TableCell align='right'>{row.temp}</TableCell>
        <TableCell align='right'>{row.humidity}</TableCell>
        <TableCell align='right'>{row.wind}</TableCell>
      </TableRow>
    );
  };

export default TableRowWeatherCitiesComponent;
