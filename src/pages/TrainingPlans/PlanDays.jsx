import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';

import ExercisesInPlan from './ExercisesInPlan';
const useStyles = makeStyles((theme) => ({
  Container: {
    display: 'flex',
  },
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function PlanDays({ trainingPlan }) {
  const classes = useStyles();

  const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

  return (
    <div>
      {days.map((day, index) => {
        console.log(index);
        return <ExercisesInPlan index={index} day={day} trainingPlan={trainingPlan} />;
      })}
    </div>
  );
}
