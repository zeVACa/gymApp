import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
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
}) {
  const classes = useStyles();
  const theme = useTheme();

  const handleSubmit = (exercises) => {
    const clone = exercises.slice().flat(2);

    console.log('clone', clone);

    const filteredData = clone.filter((item) => (item ? true : false));
    console.log('filtered', filteredData);

    const requestBody = {
      trainingPlanId: trainingPlan.planId,
      muscleGroupId: trainingPlan.muscleGroupId,
      exercises: filteredData,
    };

    console.log('requestBody', requestBody);

    fetch(
      `http://fitness-app.germanywestcentral.cloudapp.azure.com/api/trainingSubmit/${user.id}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(requestBody),
      },
    ).then((res) => {
      console.log(res.status);
      if (res.status === 200) {
        // redirect
        console.log('training send sucessfully');
      } else {
        console.log('something wents wrong', res.status);
      }
    });
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
              onClick={() => handleSubmit(currentTrainingExercises)}
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
