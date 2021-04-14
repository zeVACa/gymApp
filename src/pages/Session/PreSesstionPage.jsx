import React from 'react';

import { Button, Box, Grid, Typography, Container } from '@material-ui/core';
import TrainingPlanList from './TrainingPlanList';

export default function PreSesstionPage() {
  const getTrainingPlan = async () => {};

  const fetchedTrainingPlan = [
    {
      exerciseId: 1,
      exercise: 'test',
    },
  ];

  return (
    <div>
      <div>
        <Container>
          <Grid container spacing={3}>
            <Grid item md={4}>
              <Typography paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
                elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
                hendrerit gravida rutrum
              </Typography>
            </Grid>
            <Grid item md={4}>
              <Typography paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
                elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
                hendrerit gravida rutrum
              </Typography>
            </Grid>
            <Grid item md={4}>
              <Typography paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
                elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
                hendrerit gravida rutrum
              </Typography>
            </Grid>
          </Grid>
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <Button variant="contained" color="primary">
              Начать тренировку
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
}
