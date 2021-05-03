import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Box, Button, Container, Grid, Select, TextField, Typography } from '@material-ui/core';

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
  // createData(1, 159, 6.0),
  // createData(1, 237, 9.0),
  // createData(1, 262, 16.0),
  // createData(1, 305, 3.7),
  // createData(1, 356, 16.0),
];

export default function SessionPage({ trainingPlan, user }) {
  const classes = useStyles();

  const [page, setPage] = useState(0);
  const [lastTrainingExercises, setLastTrainingExercises] = useState(null);

  let pageAmount = trainingPlan ? trainingPlan.excercises.length : 0;

  const createTableRow = (exerciseId, kg, quantity) => {
    return { exerciseId, kg, quantity, startTime: Date.now(), endTime: Date.now() };
  };

  let mockData2 = [createTableRow(1, 60, 12)];

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

  useEffect(() => {
    console.log('page: ', page);
    console.log('plan: ', trainingPlan);
    console.log('sets: ', trainingPlan.excercises[page].setsNumber);

    fetch(
      `http://fitness-app.germanywestcentral.cloudapp.azure.com/api/getPreviousTraining/1/${1}/${
        user.id
      }`,
    )
      .then((res) => res.json())
      .then((data) => {
        // setTrainingPlan(data);
        console.log('fetched prev training: ', data);
      });

    // console.log('sendidngData: ', sendidngData);
  }, [page]);

  return (
    <div>
      {!trainingPlan ? (
        <h1>No plan</h1>
      ) : (
        <Container>
          <Grid container>
            <Grid item md={12} xs={12} pt={3}>
              <StepperProgress
                handleBack={() => setPage((prevPage) => prevPage - 1)}
                handleNext={() => setPage((prevPage) => prevPage + 1)}
                page={page}
                pageAmount={pageAmount}
              />
            </Grid>

            <Grid item sm={8}>
              <Box my={2}>
                <Typography
                  component="h4"
                  variant="h4"
                  style={{ display: 'block', marginRight: '16px' }}>
                  {trainingPlan.excercises[page].name}
                </Typography>
              </Box>
              {trainingPlan.excercises[page].setsNumber === 1 ? (
                <div>Данное упражнение делается на время</div>
              ) : (
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
                      {Array.from({ length: trainingPlan.excercises[page].setsNumber }).map(
                        (row, index) => (
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
                        ),
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </Grid>
          </Grid>
          <Grid
            sm={8}
            container
            style={{ marginTop: '24px', display: 'flex', justifyContent: 'center' }}>
            <Typography component="h5" variant="h5" style={{ display: 'block', color: '#a5a5a5' }}>
              Упражнение {page + 1} / {pageAmount}
            </Typography>
          </Grid>
        </Container>
      )}
    </div>
  );
}
