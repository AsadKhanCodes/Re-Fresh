import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableData from './TableData'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(produce, avgMonthlyUsage, stock, cpu, percentage) {
  return { produce, avgMonthlyUsage, stock, cpu, percentage};
}

const rows = [];

for (let i = 0; i < TableData.length; i++){
  var produce = TableData[i]['Produce'];
  var usage = TableData[i]['Avg Monthly Usage'];
  var stock = TableData[i]['Stock'];
  var cpu = TableData[i]['Cost Per Unit'];
  var percentage = TableData[i]['Percentage']
  rows.push(createData(produce, usage, stock, cpu, percentage));
}

export default function BasicTable() {
  const classes = useStyles();

  
async function Produce() {
  console.log(
      fetch(
          'http://localhost:3001/produce',
          {method: "POST"}
          ).then(response => {
      return response.json();
  }));
  
}

async function Menu() {
  console.log(
      fetch(
          'http://localhost:3001/menu',
          {method: "POST"}
          ).then(response => {
      return response.json();
  }));
  
}

var menuItem;

async function FillData() {
  var menuObj = Menu();
  var prodObj = Produce();

  menuItem = menuObj;
  console.log(menuObj);
  
}

  return (
    

    <TableContainer onClick={FillData} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Produce</b></TableCell>
            <TableCell align="right"><b>Stock&nbsp;</b></TableCell>
            <TableCell align="right"><b>Cost Per Unit&nbsp;</b></TableCell>
            <TableCell align="right"><b>Average Monthly Usage</b></TableCell>
            <TableCell align="right"><b>Requisition&nbsp;</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.produce}>
              <TableCell component="th" scope="row">
                {row.produce}
              </TableCell>
              <TableCell align="right">{row.avgMonthlyUsage}</TableCell>
              <TableCell align="right">{row.stock}</TableCell>
              <TableCell align="right">{row.cpu}</TableCell>
              <TableCell align="right">{(row.stock < row.avgMonthlyUsage * row.percentage) ? row.avgMonthlyUsage * row.percentage: 0}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      <br></br><br></br><br></br>
      
      
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Menu Items</b></TableCell>
            <TableCell align="right"><b>Price Per Unit&nbsp;</b></TableCell>
            <TableCell align="right"><b>Average Monthly Sales</b></TableCell>
            <TableCell align="right"><b>Average Monthly Revenue&nbsp;</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.produce}>
              <TableCell component="th" scope="row">
                {menuItem}
              </TableCell>
              <TableCell align="right">{row.avgMonthlyUsage}</TableCell>
              <TableCell align="right">{row.stock}</TableCell>
              <TableCell align="right">{row.cpu}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    
  );
}
