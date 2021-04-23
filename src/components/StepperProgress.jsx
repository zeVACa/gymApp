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

export default function ProgressMobileStepper({ handleBack, handleNext, page, pageAmount }) {
  const classes = useStyles();
  const theme = useTheme();

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
            <Button size="small" onClick={handleNext} color="primary" variant="contained">
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
