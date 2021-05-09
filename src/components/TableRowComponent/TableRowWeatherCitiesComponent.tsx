import { TableCell, TableRow } from "@material-ui/core";
import React from "react";

export interface TableRowWeatherCitiesComponentProps {
  row?: any;
}

const TableRowWeatherCitiesComponent: React.FC<TableRowWeatherCitiesComponentProps> = ({
  row,
}) => {
  console.log(row);
  return (
    <TableRow key={row.name}>
      <TableCell component="th" scope="row">
        {row.name}
      </TableCell>
      <TableCell>{row.calories}</TableCell>
      <TableCell>{row.fat}</TableCell>
      <TableCell>{row.protein}</TableCell>
    </TableRow>
  );
};

export default TableRowWeatherCitiesComponent;
