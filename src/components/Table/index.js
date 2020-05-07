import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import keyGenerator from "../../helpers/keyGenerator";

export default (props) => {
  let tableHead = "";
  let tableBody = [];
  if (props.cost) {
    tableHead = (
      <TableHead>
        <TableRow key={keyGenerator(5)}>
          <TableCell align="right">Geese</TableCell>
          <TableCell align="right">Corn</TableCell>
          <TableCell align="right">Fox</TableCell>
          <TableCell align="right">Cost (£)</TableCell>
        </TableRow>
      </TableHead>
    );
    tableBody = (
      <TableBody>
        {props.data.map((row) => (
          <TableRow key={keyGenerator(5)}>
            <TableCell align="right">{row.geese}</TableCell>
            <TableCell align="right">{row.corn}</TableCell>
            <TableCell align="right">{row.fox}</TableCell>
            <TableCell align="right">{row.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    );
  }
  if (props.route) {
    tableHead = (
      <TableHead>
        <TableRow key={keyGenerator(5)}>
          <TableCell align="center">Route</TableCell>
        </TableRow>
      </TableHead>
    );
    tableBody = (
      <TableBody>
        {props.data.map((row) => (
          <TableRow key={keyGenerator(5)}>
            <TableCell key={keyGenerator(5)} align="right">
              {row}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    );
  }
  return (
    <TableContainer>
      <Table>
        {tableHead}
        {tableBody}
      </Table>
    </TableContainer>
  );
};
