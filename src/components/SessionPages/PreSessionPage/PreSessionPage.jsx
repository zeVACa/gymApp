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

function PreSessionPage({ user, trainingPlan = [], setTrainingPlan, test }) {
  useEffect(() => {
    if (!trainingPlan) {
      fetch(`http://fitness-app.germanywestcentral.cloudapp.azure.com/api/getPlan/1/1/${user.id}`)
        .then((res) => res.json())
        .then((data) => {
          setTrainingPlan(data);
        });
    }
  }, []);

  return (
    <div>
      <Container>
        <div>{JSON.stringify(test)}</div>
        <Grid
          container
          spacing={3}
          style={{ flexWrap: 'nowrap', overflowX: 'scroll', paddingTop: '48px' }}>
          {!trainingPlan ? (
            <h1>План загружается</h1>
          ) : (
            trainingPlan.excercises.map((exerciseItem) => {
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
    </div>
  );
}

function mapStateToProps(state) {
  return { test: state.user };
}

export default connect(mapStateToProps)(PreSessionPage);
