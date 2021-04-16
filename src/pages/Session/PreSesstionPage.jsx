import React from 'react';

import { Button, Box, Grid, Typography, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import TrainingPlanList from './TrainingPlanList';

export default function PreSesstionPage() {
  const getTrainingPlan = async () => {};

  const testData = [
    {
      id: 5,
      planId: 5,
      trainingPlan: {
        id: 5,
        discription: 'План для начинающих',
        name: 'Start plan',
        difficulty: 10,
        price: 32.114,
        rating: 45,
        photo: null,
        muscleGroupId: 3,
        muscleGroup: null,
      },
      excerciseId: 3,
      excercise: {
        id: 3,
        name: 'Подтягивание',
        description: 'Стандартное Подтягивание',
        photo: null,
      },
      day: 0,
    },
    {
      id: 6,
      planId: 5,
      trainingPlan: {
        id: 5,
        discription: 'План для начинающих',
        name: 'Start plan',
        difficulty: 10,
        price: 32.114,
        rating: 45,
        photo: null,
        muscleGroupId: 3,
        muscleGroup: null,
      },
      excerciseId: 4,
      excercise: {
        id: 4,
        name: 'Приседание',
        description: 'Стандартное Приседание',
        photo: null,
      },
      day: 0,
    },
    {
      id: 5,
      planId: 5,
      trainingPlan: {
        id: 5,
        discription: 'План для начинающих',
        name: 'Start plan',
        difficulty: 10,
        price: 32.114,
        rating: 45,
        photo: null,
        muscleGroupId: 3,
        muscleGroup: null,
      },
      excerciseId: 3,
      excercise: {
        id: 3,
        name: 'Подтягивание',
        description: 'Стандартное Подтягивание',
        photo: null,
      },
      day: 0,
    },
    {
      id: 5,
      planId: 5,
      trainingPlan: {
        id: 5,
        discription: 'План для начинающих',
        name: 'Start plan',
        difficulty: 10,
        price: 32.114,
        rating: 45,
        photo: null,
        muscleGroupId: 3,
        muscleGroup: null,
      },
      excerciseId: 3,
      excercise: {
        id: 3,
        name: 'Подтягивание',
        description: 'Стандартное Подтягивание',
        photo: null,
      },
      day: 0,
    },
    {
      id: 5,
      planId: 5,
      trainingPlan: {
        id: 5,
        discription: 'План для начинающих',
        name: 'Start plan',
        difficulty: 10,
        price: 32.114,
        rating: 45,
        photo: null,
        muscleGroupId: 3,
        muscleGroup: null,
      },
      excerciseId: 3,
      excercise: {
        id: 3,
        name: 'Подтягивание',
        description: 'Стандартное Подтягивание',
        photo: null,
      },
      day: 0,
    },
    {
      id: 5,
      planId: 5,
      trainingPlan: {
        id: 5,
        discription: 'План для начинающих',
        name: 'Start plan',
        difficulty: 10,
        price: 32.114,
        rating: 45,
        photo: null,
        muscleGroupId: 3,
        muscleGroup: null,
      },
      excerciseId: 3,
      excercise: {
        id: 3,
        name: 'Подтягивание',
        description: 'Стандартное Подтягивание',
        photo: null,
      },
      day: 0,
    },
    {
      id: 5,
      planId: 5,
      trainingPlan: {
        id: 5,
        discription: 'План для начинающих',
        name: 'Start plan',
        difficulty: 10,
        price: 32.114,
        rating: 45,
        photo: null,
        muscleGroupId: 3,
        muscleGroup: null,
      },
      excerciseId: 3,
      excercise: {
        id: 3,
        name: 'Подтягивание',
        description: 'Стандартное Подтягивание',
        photo: null,
      },
      day: 0,
    },
    {
      id: 5,
      planId: 5,
      trainingPlan: {
        id: 5,
        discription: 'План для начинающих',
        name: 'Start plan',
        difficulty: 10,
        price: 32.114,
        rating: 45,
        photo: null,
        muscleGroupId: 3,
        muscleGroup: null,
      },
      excerciseId: 3,
      excercise: {
        id: 3,
        name: 'Подтягивание',
        description: 'Стандартное Подтягивание',
        photo: null,
      },
      day: 0,
    },
    {
      id: 5,
      planId: 5,
      trainingPlan: {
        id: 5,
        discription: 'План для начинающих',
        name: 'Start plan',
        difficulty: 10,
        price: 32.114,
        rating: 45,
        photo: null,
        muscleGroupId: 3,
        muscleGroup: null,
      },
      excerciseId: 3,
      excercise: {
        id: 3,
        name: 'Подтягивание',
        description: 'Стандартное Подтягивание',
        photo: null,
      },
      day: 0,
    },
    {
      id: 5,
      planId: 5,
      trainingPlan: {
        id: 5,
        discription: 'План для начинающих',
        name: 'Start plan',
        difficulty: 10,
        price: 32.114,
        rating: 45,
        photo: null,
        muscleGroupId: 3,
        muscleGroup: null,
      },
      excerciseId: 3,
      excercise: {
        id: 3,
        name: 'Подтягивание',
        description: 'Стандартное Подтягивание',
        photo: null,
      },
      day: 0,
    },
    {
      id: 5,
      planId: 5,
      trainingPlan: {
        id: 5,
        discription: 'План для начинающих',
        name: 'Start plan',
        difficulty: 10,
        price: 32.114,
        rating: 45,
        photo: null,
        muscleGroupId: 3,
        muscleGroup: null,
      },
      excerciseId: 3,
      excercise: {
        id: 3,
        name: 'Подтягивание',
        description: 'Стандартное Подтягивание',
        photo: null,
      },
      day: 0,
    },
    {
      id: 5,
      planId: 5,
      trainingPlan: {
        id: 5,
        discription: 'План для начинающих',
        name: 'Start plan',
        difficulty: 10,
        price: 32.114,
        rating: 45,
        photo: null,
        muscleGroupId: 3,
        muscleGroup: null,
      },
      excerciseId: 3,
      excercise: {
        id: 3,
        name: 'Подтягивание',
        description: 'Стандартное Подтягивание',
        photo: null,
      },
      day: 0,
    },
    {
      id: 5,
      planId: 5,
      trainingPlan: {
        id: 5,
        discription: 'План для начинающих',
        name: 'Start plan',
        difficulty: 10,
        price: 32.114,
        rating: 45,
        photo: null,
        muscleGroupId: 3,
        muscleGroup: null,
      },
      excerciseId: 3,
      excercise: {
        id: 3,
        name: 'Подтягивание',
        description: 'Стандартное Подтягивание',
        photo: null,
      },
      day: 0,
    },
  ];

  return (
    <div>
      <div>
        <Container>
          <Grid container spacing={3}>
            {/* {{
              // Exercise item
              id: 5,
              planId: 5,
              trainingPlan: {
                id: 5,
                discription: 'План для начинающих',
                name: 'Start plan',
                difficulty: 10,
                price: 32.114,
                rating: 45,
                photo: null,
                muscleGroupId: 3,
                muscleGroup: null,
              },
              excerciseId: 3,
              excercise: {
                id: 3,
                name: 'Подтягивание',
                description: 'Стандартное Подтягивание',
                photo: null,
              },
              day: 0,
            }} */}
            {testData.map((exerciseItem) => {
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
