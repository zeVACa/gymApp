import React, { useState, useEffect } from 'react';

import { Box, Container, Grid, Hidden, Typography } from '@material-ui/core';

import StepperProgress from './StepperProgress';
import Timer from './Timer';
import TableSession from './TableSession/TableSession';

const makeDataRow = (kg = 0, quantity = 0, exerciseId, setsNumber) => {
  let stamp = new Date();

  stamp.setDate(stamp.getDate());

  const fullDate = `${stamp.getFullYear()}-${
    stamp.getMonth() + 1 < 10 ? '0' + (stamp.getMonth() + 1) : stamp.getMonth() + 1
  }-${stamp.getDate() < 10 ? '0' + stamp.getDate() : stamp.getDate()}T${
    stamp.getHours() < 10 ? '0' + stamp.getHours() : stamp.getHours()
  }:${stamp.getMinutes() < 10 ? '0' + stamp.getMinutes() : stamp.getMinutes()}:${
    stamp.getSeconds() < 10 ? '0' + stamp.getSeconds() : stamp.getSeconds()
  }`;

  if (setsNumber === 1) {
    return {
      exerciseId,
      kg: 0,
      quantity: 0,
      startTime: fullDate,
      endTime: fullDate,
    };
  }

  return {
    exerciseId,
    kg: '',
    quantity: '',
    startTime: fullDate,
    endTime: fullDate,
  };
};

export default function SessionPage({
  trainingPlan,
  user,
  setCurrentDayIndex,
  currentDayIndex,
  setTonnageAccum,
  setTrainingTimeInSeconds,
}) {
  let pageAmount = trainingPlan ? trainingPlan[currentDayIndex].excercises.length : 0;

  const excercisesWithZeroValue = trainingPlan[currentDayIndex].excercises.map((excerciseItem) => {
    return Array(excerciseItem.setsNumber).fill(
      makeDataRow(null, null, excerciseItem.id, excerciseItem.setsNumber),
    );
  });

  const [page, setPage] = useState(0);
  const [lastTrainingExercises, setLastTrainingExercises] = useState([]);
  const [currentTrainingExercises, setCurrentTrainingExercises] = useState(excercisesWithZeroValue);

  const [previousTraining, setPreviousTraining] = useState([]);

  useEffect(() => {
    try {
      fetch(
        `http://fitness-app.germanywestcentral.cloudapp.azure.com/api/getPreviousTraining/1/3/${user.id}`,
      )
        .then((res) => res.json())
        .then((data) => {
          console.log('prev training', data);
          setPreviousTraining(data);
        });
    } catch (error) {
      console.log('prev training error', error);
    }
  }, []);

  const excerciseOnPage = trainingPlan[currentDayIndex].excercises[page];

  console.log('current:', currentTrainingExercises);
  console.log('trainingPlan', trainingPlan);

  return (
    <div>
      {!trainingPlan ? (
        <h1>No plan</h1>
      ) : (
        <Container>
          <Grid container spacing={2} style={{ marginBottom: '48px' }}>
            <Grid item md={7} pt={3}>
              <StepperProgress
                handleBack={() => setPage((prevPage) => prevPage - 1)}
                handleNext={() => setPage((prevPage) => prevPage + 1)}
                currentDayIndex={currentDayIndex}
                page={page}
                user={user}
                pageAmount={pageAmount}
                currentTrainingExercises={currentTrainingExercises}
                trainingPlan={trainingPlan}
                setTonnageAccum={setTonnageAccum}
              />
              <Typography component="h5" variant="h5" align="center" color="textSecondary">
                Упражнение {page + 1} / {pageAmount}
              </Typography>
            </Grid>
            <Grid item md={1} implementation="css" smDown component={Hidden} />
            <Grid item md={4} style={{ height: '100%' }}>
              <Timer setTrainingTimeInSeconds={setTrainingTimeInSeconds} />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <Box my={2}>
                <Typography
                  component="h4"
                  variant="h4"
                  style={{ display: 'block', marginRight: '16px', marginBottom: '16px' }}>
                  {excerciseOnPage.name}
                </Typography>
              </Box>
            </Grid>
            <Grid container spacing={2}>
              <Grid item md={7} sm-offset={1}>
                {excerciseOnPage.setsNumber === 1 ? (
                  <Typography variant="h5" color="textSecondary">
                    Данное упражнение делается на время
                  </Typography>
                ) : (
                  <TableSession
                    page={page}
                    trainingPlan={trainingPlan}
                    currentTrainingExercises={currentTrainingExercises}
                    setCurrentTrainingExercises={setCurrentTrainingExercises}
                    currentDayIndex={currentDayIndex}
                  />
                )}
              </Grid>
              <Grid item md={1} implementation="css" smDown component={Hidden} />

              <Grid item sm={4}>
                <div style={{ height: '100%', backgroundColor: '#ececec' }}></div>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      )}
    </div>
  );
}
