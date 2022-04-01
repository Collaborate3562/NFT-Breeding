import { React, useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAppContext } from "../contexts/AppContext";
import { ethers } from "ethers";

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

export default function CustomizedTables({ NFT }) {
  const context = useAppContext();

  const [saleList, setSaleList] = useState([]);

  const NFTContract = context.NFTContract;
  useEffect(() => {
    const init = async () => {
      if(NFT) {
        console.log('table', NFT);
        const id = NFT.tokenId;

        const list = [];
        const _saleList = await NFTContract.methods.getSaleList().call();
        for(let i = 0; i < _saleList.length; i++) {
          console.log('sale', _saleList[i]);
          if(_saleList[i].tokenId === id) {
            list.push(_saleList[i]);
          }
        }
        setSaleList(list);
      }
    }
    if(context.walletConnected) {
      init();
    }
  }, [NFT])
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
          {saleList.map((row, idx) => (
            <StyledTableRow key={idx}>
              <StyledTableCell component="th" scope="row">
                {row.previousOwner === "0x0000000000000000000000000000000000000000" ? new Date(Number(row.mintedTime)*1000).toLocaleDateString() : new Date(Number(row.lastSaledTime)*1000).toLocaleDateString()}
              </StyledTableCell>
              <StyledTableCell align="center">{row.previousOwner === "0x0000000000000000000000000000000000000000" ? 'Minted' : 'sale'}</StyledTableCell>
              <StyledTableCell align="center">{Number(ethers.utils.formatEther(row.price))} BUSD</StyledTableCell>
              <StyledTableCell align="center">
              {
                String(row.previousOwner).substring(0, 6) +
                "..." +
                String(row.previousOwner).substring(38)
              }
              </StyledTableCell>
              <StyledTableCell align="center">
              {
                String(row.currentOwner).substring(0, 6) +
                "..." +
                String(row.currentOwner).substring(38)
              }
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
