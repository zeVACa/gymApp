import React, { useState, useEffect } from 'react';

import {
  Button,
  Box,
  Grid,
  Typography,
  Container,
  Card,
  CardContent,
  CardMedia,
  CardHeader,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import TrainingPlanList from './TrainingPlanList';
import { grey } from '@material-ui/core/colors';

export default function PreSesstionPage({ user, trainingPlan = [], setTrainingPlan }) {
  // const [trainingPlan, setTrainingPlan] = useState([]);

  useEffect(() => {
    console.log('user ID in pressesion page: ', user.id);

    if (!trainingPlan) {
      fetch(`http://fitness-app.germanywestcentral.cloudapp.azure.com/api/getPlan/1/1/${user.id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log('plan: ', data);
          setTrainingPlan(data);
        });
    }
  }, []);

  return (
    <div>
      <Container>
        <Grid
          container
          spacing={3}
          style={{ flexWrap: 'nowrap', overflowX: 'scroll', paddingTop: '48px' }}>
          {!trainingPlan ? (
            <h1>План загружается</h1>
          ) : (
            trainingPlan.map((exerciseItem) => {
              return (
                <Grid style={{ minWidth: '400px' }} item sm={3}>
                  <div style={{ height: 240, backgroundColor: '#ececec' }} />

                  <Card style={{ height: '55%' }}>
                    <CardContent style={{ padding: '24px 16px' }}>
                      <Typography
                        my={2}
                        align="left"
                        color="textPrimary"
                        component="h5"
                        variant="h5"
                        paragraph>{`${exerciseItem.excercise.name}`}</Typography>
                      <Typography align="left" paragraph color="textSecondary">
                        {exerciseItem.excercise.description}
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
