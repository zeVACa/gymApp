import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Box, Container, Grid, TextField, Typography } from '@material-ui/core';

import StepperProgress from '../../components/StepperProgress';

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

  const [page, setPage] = useState(0);

  let pageAmount = 10;

  return (
    <Container>
      <Grid container>
        <Box my={2}>
          <Typography component="h3" variant="h3" style={{ display: 'block', marginRight: '16px' }}>
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
                      value={10}
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
                      value={10}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid container style={{ marginTop: '24px', display: 'flex', justifyContent: 'center' }}>
        <Typography component="h5" variant="h5" style={{ display: 'block', color: '#a5a5a5' }}>
          Упражнение {page + 1} / {pageAmount}
        </Typography>
      </Grid>
      <Grid container pt={3}>
        <Grid item md={12} xs={12} pt={3}>
          <StepperProgress
            handleBack={() => setPage((prevPage) => prevPage - 1)}
            handleNext={() => setPage((prevPage) => prevPage + 1)}
            page={page}
            pageAmount={pageAmount}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
