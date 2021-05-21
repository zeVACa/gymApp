import React from 'react';
import { Container, Typography, Box, Card } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import TimelapseTwoToneIcon from '@material-ui/icons/TimelapseTwoTone';
import FitnessCenterTwoToneIcon from '@material-ui/icons/FitnessCenterTwoTone';

import { getTimeInSeconds } from './trainingTime';

const motivationalHeadline = ['Превосходно', 'Замечательно', 'Потрясно'];

export default function SesstionResults({ tonnageAccum, TrainingTimeInSeconds }) {
  const [valueRating, setValueRating] = React.useState(4);

  return (
    <Container style={{ color: '#737473', fontFamily: 'sans-serif MS Sans Serif' }}>
      <Typography
        variant="h4"
        gutterBottom
        style={{ color: '#689e83', textAlign: 'center', marginBottom: '25px' }}>
        {motivationalHeadline[Math.floor(Math.random() * (0 - 0 + 1)) + 0]}
      </Typography>
      <Card style={{ padding: '80px', color: '#737473', fontFamily: 'sans-serif MS Sans Serif' }}>
        <Box my={10}>
          <Typography variant="h5" gutterBottom>
            <TimelapseTwoToneIcon style={{ fontSize: 35 }} /> Общее время тренировки составило:{' '}
            <Typography color="textSecondary" variant="span">
              {Math.floor(getTimeInSeconds() / 3600)}:
              {Math.floor(getTimeInSeconds() / 60) < 10
                ? '0' + Math.floor(getTimeInSeconds() / 60)
                : Math.floor(getTimeInSeconds() / 60)}
              :{getTimeInSeconds() % 60}
            </Typography>
          </Typography>
        </Box>

        <Box mb={10}>
          <Typography variant="h5" gutterBottom>
            <FitnessCenterTwoToneIcon style={{ fontSize: 35 }} /> Общий тоннаж тренировки:{' '}
            {tonnageAccum} кг
          </Typography>
        </Box>
        <Typography variant="subtitle2" gutterBottom style={{ textAlign: 'center' }}>
          Оцените тренировку:
          <Rating
            name="simple-controlled"
            value={valueRating}
            onChange={(event, newValue) => {
              setValueRating(newValue);
            }}
          />
        </Typography>
      </Card>
    </Container>
  );
}
