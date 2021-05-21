import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 1600,
    flexGrow: 1,
  },
});

export default function ProgressMobileStepper({
  handleBack,
  handleNext,
  page,
  pageAmount,
  currentTrainingExercises,
  user,
  trainingPlan,
  currentDayIndex,
  setTonnageAccum,
}) {
  const classes = useStyles();

  const handleSubmit = () => {
    const clone = currentTrainingExercises.slice().flat(2);

    const filteredData = clone.filter((item) => (item ? true : false));

    const requestBody = {
      trainingPlanId: trainingPlan[currentDayIndex].planId,
      muscleGroupId: trainingPlan[currentDayIndex].muscleGroupId,
      exercises: filteredData.map((el) => {
        if (typeof el.kg === 'string') el.kg = 0;
        if (typeof el.quantity === 'string') el.quantity = 0;
        return el;
      }),
    };

    const currentSessionTonnage = requestBody.exercises.reduce(
      (accum, value) => accum + value.kg * value.quantity,
      0,
    );

    setTonnageAccum(currentSessionTonnage);

    fetch(
      `http://fitness-app.germanywestcentral.cloudapp.azure.com/api/trainingSubmit/${user.id}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(requestBody),
      },
    );

    console.log('tonnage', currentSessionTonnage);
    setTonnageAccum(currentSessionTonnage);

    console.log('requestBody', requestBody);
    try {
      fetch(
        `http://fitness-app.germanywestcentral.cloudapp.azure.com/api/trainingSubmit/${user.id}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: JSON.stringify(requestBody),
        },
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MobileStepper
      variant="progress"
      steps={pageAmount}
      position="static"
      activeStep={page}
      className={classes.root}
      backButton={
        <Button variant="contained" size="small" onClick={handleBack} disabled={page === 0}>
          <KeyboardArrowLeft />
          Назад
        </Button>
      }
      nextButton={
        page === pageAmount - 1 ? (
          <Link to="/SessionResults">
            <Button
              size="small"
              onClick={() => {
                handleSubmit();
              }}
              color="primary"
              variant="contained">
              Завершить
              <KeyboardArrowRight />
            </Button>
          </Link>
        ) : (
          <Button size="small" variant="contained" onClick={handleNext}>
            Далее
            <KeyboardArrowRight />
          </Button>
        )
      }
    />
  );
}
