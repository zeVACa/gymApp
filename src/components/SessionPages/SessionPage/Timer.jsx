import { Paper, Typography } from '@material-ui/core';
import AlarmIcon from '@material-ui/icons/Alarm';
import React, { useState } from 'react';

export default function Timer() {
  const [timeInSeconds, setTimeInSeconds] = useState(3600);

  return (
    <Paper style={{ padding: '16px' }}>
      <Typography variant="h5" align="center">
        Оставшееся время тренировки
      </Typography>
      <Typography variant="h6" color="textSecondary" align="center">
        <AlarmIcon
          fontSize="medium"
          style={{ verticalAlign: 'text-top', color: '#aaa', marginRight: '8px' }}
        />
        {timeInSeconds / 3600}:15:31
      </Typography>
    </Paper>
  );
}
