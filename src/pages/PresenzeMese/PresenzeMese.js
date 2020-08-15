import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Typography 
} from '@material-ui/core/';
import getMonthDays from 'utils/getMonthDays';
import createRows from 'utils/createRows';
import HeaderPresenzeMese from 'pages/PresenzeMese/HeaderPresenzeMese'

const useStyles = makeStyles(theme => ({
  container: {...theme.workBench, ...theme.container},
  datePadding: {
    padding: '0 0 0 16px'
  }
}));

const weekDays = (style) => getMonthDays(2020, 8).map(day => <TableCell className={style}><b>{day}</b></TableCell>)
const primiPiatti = getMonthDays(2020, 8).map(day => 'uova ')

const numeri = weekDays().map(day => (Math.random() * 101).toFixed(0))

const oggetti = {
  "Cociv Badge": [...numeri],
  "Cociv Firme": [...numeri],
  "Tot. Cociv": [...numeri],
  "Tot.": [...numeri]
}

const PresenzeMese = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table>

        <TableHead>
          <HeaderPresenzeMese colSpan={30}/>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell></TableCell>
            { weekDays(classes.datePadding) }
          </TableRow>
          { createRows(oggetti) }
        </TableBody>

      </Table>
    </TableContainer>
  );
}

export default PresenzeMese;