import React from 'react';
import { Container, Typography, Box, Card } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import TimelapseTwoToneIcon from '@material-ui/icons/TimelapseTwoTone';
import FitnessCenterTwoToneIcon from '@material-ui/icons/FitnessCenterTwoTone';

const motivationalHeadline = ['Превосходно', 'Замечательно', 'Потрясно'];

<<<<<<< Updated upstream
const trainingResults = {
  time: '48 минут',
  calories: '900kk',
  generalTonnage: '850 кг.',
};

export default function SesstionResults() {
=======
export default function SesstionResults({ tonnageAccum, TrainingTimeInSeconds }) {
>>>>>>> Stashed changes
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
            {trainingResults.time}
          </Typography>
        </Box>

        <Box mb={10}>
          <Typography variant="h5" gutterBottom>
            <WhatshotTwoToneIcon style={{ fontSize: 35 }} /> Сожжено калорий:{' '}
            {trainingResults.calories}
          </Typography>
        </Box>

        <Box mb={10}>
          <Typography variant="h5" gutterBottom>
            <FitnessCenterTwoToneIcon style={{ fontSize: 35 }} /> Общий тоннаж тренировки:{' '}
            {trainingResults.generalTonnage}
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
