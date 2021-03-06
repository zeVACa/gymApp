import { Container, Typography, Box } from '@material-ui/core';

import React from 'react';
import TemplateHistoryTrain from './HistoryTemplate';
import { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  Loading: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  BootScreen: {
    margin: '20% auto',
  },
  SaveButton: {
    margin: '25px 27%',
  },
}));

export default function TrainingHistoryPage({ user }) {
  const classes = useStyles();

  const [isLoaded, setIsLoaded] = useState(false);

  const [trainingDays, setTrainingDays] = useState([]);

  useEffect(() => {
    fetch(
      `http://fitness-app.germanywestcentral.cloudapp.azure.com/api/TrainingHistory/${user.id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        console.log('prev trainings');
        setTrainingDays(data);
        setIsLoaded(true);
      });
  }, []);

  return (
    <Container>
      {isLoaded ? (
        <Box>
          {trainingDays.length === 0 ? (
            <div style={{ paddingTop: '90px' }}>
              <Typography variant="h3">У вас нет завершенных тренировок</Typography>
            </div>
          ) : (
            <div>
              <Box mt={4} mb={3}>
                <Typography component="h3" variant="h3">
                  История тренировок
                </Typography>
              </Box>
              {trainingDays.reverse().map((historyItem) => {
                const date = historyItem.date.split('T')[0];

                const tonnage = historyItem.excercises.reduce(
                  (accum, value) => accum + value.weight * value.quantity,
                  0,
                );

                return (
                  <Box my={2}>
                    <TemplateHistoryTrain
                      date={date}
                      tonnage={tonnage}
                      excercises={historyItem.excercises}
                      timeInSeconds={Math.floor(Math.random() * (80 - 45 + 1) + 45) * 60}
                    />
                  </Box>
                );
              })}
            </div>
          )}
        </Box>
      ) : (
        <div className={classes.Loading}>
          <CircularProgress className={classes.BootScreen} />
        </div>
      )}
    </Container>
  );
}
