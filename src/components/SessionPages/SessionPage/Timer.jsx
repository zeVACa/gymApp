import { Paper, Typography } from '@material-ui/core';
import AlarmIcon from '@material-ui/icons/Alarm';
import React, { useState, useEffect } from 'react';

import { incTimeInSeconds } from '../trainingTime';

export default function Timer({ setTrainingTimeInSeconds }) {
  const [hours, setHours] = useState(1);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(15);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          if (hours > 0) {
            setHours((hours) => hours - 1);
            setMinutes(59);
          }
          if (hours === 0) {
            clearInterval(myInterval);
          }
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
      incTimeInSeconds();
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <Paper style={{ padding: '16px' }}>
      {minutes === 0 && seconds === 0 && hours === 0 ? (
        <div>Время вышло</div>
      ) : (
        [
          <Typography variant="h5" align="center">
            Оставшееся время тренировки
          </Typography>,
          <Typography
            variant="h6"
            color="textSecondary"
            align="center"
            style={{ fontFamily: 'sans-serif', marginTop: '8px' }}>
            <AlarmIcon
              fontSize="medium"
              style={{ verticalAlign: 'text-bottom', marginRight: '10px' }}
            />
            {hours}:{minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </Typography>,
        ]
      )}
    </Paper>
  );
}
