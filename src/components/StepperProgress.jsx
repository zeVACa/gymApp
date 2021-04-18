import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

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
        <Button size="small" onClick={handleBack} disabled={page === 0}>
          <KeyboardArrowLeft />
          Назад
        </Button>
      }
      nextButton={
        <Button size="small" onClick={handleNext} disabled={page === pageAmount - 1}>
          Далее
          <KeyboardArrowRight />
        </Button>
      }
    />
  );
}
