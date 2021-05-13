import React, { useState, useEffect } from 'react';
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
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import WeekdaysBar from './WeekdaysBar';

function PreSessionPage({
  user,
  trainingPlan,
  setTrainingPlan,
  currentDayIndex,
  setCurrentDayIndex,
}) {
  useEffect(() => {
    if (!trainingPlan[currentDayIndex]) {
      console.log('fetch here');
      fetch(
        `http://fitness-app.germanywestcentral.cloudapp.azure.com/api/getPlan/1/${
          currentDayIndex + 1
        }/${user.id}`,
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

  useEffect(() => {}, [currentDayIndex]);

  return (
    <Container pt={10}>
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
      <Grid
        container
        spacing={3}
        style={{ flexWrap: 'nowrap', overflowX: 'scroll', paddingTop: '48px' }}>
        {!trainingPlan[currentDayIndex] ? (
          <h1>План загружается</h1>
        ) : (
          trainingPlan[currentDayIndex].excercises.map((exerciseItem) => {
            return (
              <Grid style={{ minWidth: '400px' }} item sm={3}>
                {/* <div style={{ height: 240, backgroundColor: '#ececec' }}>
                    <img
                      src="http://fitness-app.germanywestcentral.cloudapp.azure.com/Images/%D0%B0%D1%80%D0%B1%D1%83%D0%B7.jpg"
                      alt=""
                    />
                  </div> */}
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image
                    // className={classes.media}
                    image="http://fitness-app.germanywestcentral.cloudapp.azure.com/Images/%D0%B0%D1%80%D0%B1%D1%83%D0%B7.jpg"
                    title="Contemplative Reptile"
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
      </Grid>
      <div style={{ textAlign: 'center', padding: '64px 0' }}>
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
