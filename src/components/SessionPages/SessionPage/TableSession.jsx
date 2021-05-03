import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles, TextField } from '@material-ui/core';

const createTableRow = (exerciseId, kg, quantity) => {
  return { exerciseId, kg, quantity, startTime: Date.now(), endTime: Date.now() };
};

let mockData2 = [createTableRow(1, 60, 12)];

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

let mockData = [
  {
    exerciseId: 1,
    kg: 60,
    quantity: 1,
    startTime: '2019-01-06T17:16:40',
    endTime: '2019-01-08T17:16:40',
  },
  {
    exerciseId: 1,
    kg: 60,
    quantity: 1,
    startTime: '2019-01-06T17:16:40',
    endTime: '2019-01-08T17:16:40',
  },
  {
    exerciseId: 1,
    kg: 60,
    quantity: 1,
    startTime: '2019-01-06T17:16:40',
    endTime: '2019-01-08T17:16:40',
  },
  {
    exerciseId: 1,
    kg: 60,
    quantity: 1,
    startTime: '2019-01-06T17:16:40',
    endTime: '2019-01-08T17:16:40',
  },
];

export default function TableSession({ page, trainingPlan }) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Подход</TableCell>
            <TableCell align="right">Вес, кг</TableCell>
            <TableCell align="right">Количество повторений</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from({ length: trainingPlan.excercises[page].setsNumber }).map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="right">
                <TextField
                  type="number"
                  InputProps={{
                    inputProps: {
                      max: 100,
                      min: 10,
                    },
                  }}
                  style={{ width: '40px' }}
                />
              </TableCell>
              <TableCell align="right">
                <TextField
                  type="number"
                  InputProps={{
                    inputProps: {
                      max: 100,
                      min: 10,
                    },
                  }}
                  style={{ width: '40px' }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
