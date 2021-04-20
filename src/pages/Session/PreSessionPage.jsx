import React, { useState, useEffect } from 'react';

import { Button, Box, Grid, Typography, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import TrainingPlanList from './TrainingPlanList';

export default function PreSesstionPage({ user }) {
  const [trainingPlan, setTrainingPlan] = useState([]);

  useEffect(() => {
    console.log('user ID in pressesion page: ', user.id);

    fetch(`http://fitness-app.germanywestcentral.cloudapp.azure.com/api/getPlan/1/1/${user.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('plan: ', data);
        setTrainingPlan(data);
      });
  }, []);

  return (
    <div>
      <div>
        <Container>
          <Grid container spacing={3}>
            {trainingPlan.map((exerciseItem) => {
              return (
                <Grid item md={3}>
                  <div style={{ height: 300, backgroundColor: '#ececec' }}></div>
                  <Typography
                    my={2}
                    align="center"
                    component="h5"
                    variant="h5">{`${exerciseItem.excercise.name}`}</Typography>
                  <Typography align="left" component="p" variant="p">
                    {exerciseItem.excercise.description}
                  </Typography>
                </Grid>
              );
            })}

            <Grid item md={4}></Grid>
            <Grid item md={4}></Grid>
          </Grid>
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <Button variant="contained" color="primary">
              <Link style={{ color: 'inherit' }} to="/session">
                Начать тренировку
              </Link>
            </Button>
            <div></div>
          </div>
        </Container>
      </div>
    </div>
  );
}
