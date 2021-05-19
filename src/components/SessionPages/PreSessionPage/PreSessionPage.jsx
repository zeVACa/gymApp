import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import {
  Button,
  Grid,
  Typography,
  Container,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Box,
} from '@material-ui/core';
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
            return cloneState;
          });
        });
    }
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
      {/* <Grid
        container
        spacing={3}
        style={{ flexWrap: 'nowrap', overflowX: 'scroll', paddingTop: '48px' }}>
        {!trainingPlan[currentDayIndex] ? (
          <h1>План загружается</h1>
        ) : (
          trainingPlan[currentDayIndex].excercises.map((exerciseItem) => {
            return (
              <Grid style={{ minWidth: '400px' }} item sm={3}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image
                    image={exerciseItem.photo}
                    title="Contemplative Reptile"
                    height="250px"
                  />
                </CardActionArea>

                <Card style={{ height: '55%' }}>
                  <CardContent style={{ padding: '24px 16px' }}>
                    <Typography
                      my={2}
                      align="left"
                      color="textPrimary"
                      component="h5"
                      variant="h5"
                      paragraph>{`${exerciseItem.name}`}</Typography>
                    <Typography align="left" paragraph color="textSecondary">
                      {exerciseItem.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })
        )}
      </Grid> */}
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
