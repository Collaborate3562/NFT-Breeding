import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(date, event, price, from, to) {
  return { date, event, price, from, to };
}

const rows = [
  createData('28/01/2022', 'sale', 10368, '0x...etc','0x...etc'),
  createData('27/01/2022', 'sale', 8640,  '0x...etc',  '0x...etc'),
  createData('26/01/2022', 'sale', 7224,  '0x...etc','0x...etc'),
  createData('25/01/2022', 'sale', 6067,  '0x...etc','0x...etc'),
  createData('24/01/2022', 'sale', 5049,  '0x...etc','0x...etc'),
]; 

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: '100%', border: '1px solid #7414f5' }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>DATE</StyledTableCell>
            <StyledTableCell align="center">EVENT</StyledTableCell>
            <StyledTableCell align="center">PRICE</StyledTableCell>
            <StyledTableCell align="center">FROM</StyledTableCell>
            <StyledTableCell align="center">TO</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.date}>
              <StyledTableCell component="th" scope="row">
                {row.date}
              </StyledTableCell>
              <StyledTableCell align="center">{row.event}</StyledTableCell>
              <StyledTableCell align="center">{row.price} BUSD</StyledTableCell>
              <StyledTableCell align="center">{row.from}</StyledTableCell>
              <StyledTableCell align="center">{row.to}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
