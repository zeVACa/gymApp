import React, { useEffect } from 'react';
// import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import { Button, Grid, Typography, Container, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import WeekdaysBar from './WeekdaysBar';

import ExcercisesSlider from './ExcercisesSlider';

function PreSessionPage({
  user,
  trainingPlan,
  setTrainingPlan,
  currentDayIndex,
  setCurrentDayIndex,
}) {
  useEffect(() => {
    if (!trainingPlan[currentDayIndex]) {
      fetch(
        `http://fitness-app.germanywestcentral.cloudapp.azure.com/api/getPlan/${
          user.activePlanId
        }/${currentDayIndex + 1}/${user.id}`,
      )
        .then((res) => res.json())
        .then((data) => {
          setTrainingPlan((prevState) => {
            const cloneState = JSON.parse(JSON.stringify(prevState));
            cloneState[currentDayIndex] = data;
            console.log('todays training plan: ', cloneState[currentDayIndex]);
            return cloneState;
          });
        });
    }

    // if (previousTraining.length === 0) {

    // }
  }, [currentDayIndex]);

  return (
    <Container pt={10} style={{ overflowX: 'none' }}>
      <Typography variant="h4" component="h4" color="textPrimary">
        <Typography component="span" variant="span" color="textSecondary">
          Большая мышечная группа:
        </Typography>
        {trainingPlan[currentDayIndex]
          ? ' ' + trainingPlan[currentDayIndex].muscleGroupName
          : ' Загрузка'}
      </Typography>
      <Typography variant="h6" component="h6" color="textSecondary">
        Дополнительные: трицепс, предплечье
      </Typography>
      <WeekdaysBar currentDayIndex={currentDayIndex} setCurrentDayIndex={setCurrentDayIndex} />
      <Grid container sm={12} xs={1} style={{ width: '100%', overflowX: 'none' }}>
        <Box my={4} style={{ overflowX: 'hidden' }}>
          <ExcercisesSlider trainingPlan={trainingPlan} currentDayIndex={currentDayIndex} />
        </Box>
      </Grid>
      <div style={{ textAlign: 'center', padding: '0 0' }}>
        <Button variant="contained" color="primary">
          <Link style={{ color: 'inherit' }} to="/session">
            Начать тренировку
          </Link>
        </Button>
      </div>
    </Container>
  );
}

function mapStateToProps(state) {
  return { test: state.user };
}

export default connect(mapStateToProps)(PreSessionPage);
