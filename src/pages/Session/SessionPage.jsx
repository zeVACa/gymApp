// import React from 'react';

// export default function SesstionPage() {
//   return <div>Session was started</div>;
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Box, Button, Container, Select, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, 159, 6.0),
  createData(1, 237, 9.0),
  createData(1, 262, 16.0),
  createData(1, 305, 3.7),
  createData(1, 356, 16.0),
];

export default function SessionPage() {
  const classes = useStyles();

  return (
    <Container>
      <Box my={2}>
        <Typography component="h3" variant="h3">
          Жим лежа
        </Typography>
      </Box>
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
            {rows.map((row, index) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">
                  <TextField type="number" />
                  {/* <Select></Select> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box my={2}>
        <Typography component="h4" variant="h4">
          1 / 6
        </Typography>
      </Box>
      <Box style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <Button
          variant="contained"
          style={{ display: 'inline-block', marginRight: '16px' }}
          color="default"
          mr={4}>
          Назад
        </Button>

        <Button variant="contained" style={{ display: 'inline-block' }} color="primary" mr={4}>
          Далее
        </Button>
      </Box>
    </Container>
  );
}
