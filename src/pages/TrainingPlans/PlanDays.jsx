import React from 'react';
import ExercisesInPlan from './ExercisesInPlan';

export default function PlanDays({ trainingPlan }) {
  const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

  return (
    <div>
      {days.map((day, index) => {
        return <ExercisesInPlan index={index} day={day} trainingPlan={trainingPlan} />;
      })}
    </div>
  );
}
