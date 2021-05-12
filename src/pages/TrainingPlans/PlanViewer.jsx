import { Container, Button, Snackbar } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import MuiAlert from '@material-ui/lab/Alert';

import Timeline from '@material-ui/lab/Timeline';

import PlanDays from './PlanDays';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
  ContainnerExercieses: {
    margin: '20px 15px',
  },
  Header: {
    textAlign: 'center',
    marginBottom: '45px',
  },
  SaveButton: {
    background: '#239546',
  },
  Loading: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  BootScreen: {
    margin: '20% auto',
  },
}));

export default function PlanViewer(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [trainingPlan, setTrainingPlan] = useState({});
  const [loading, SetLoading] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleActivePlan = (e) => {
    // e.preventDefault();
    fetch(
      `http://fitness-app.germanywestcentral.cloudapp.azure.com/api/ChangeUserActivePlan/${props.location.propsSearch.id}/${props.location.user.id}`,
      {
        method: 'POST',
      },
    ).then((res) => {});

    setOpen(true);
  };

  useEffect(() => {
    fetch(
      `http://fitness-app.germanywestcentral.cloudapp.azure.com/api/GetPlanById/${props.location.propsSearch.id}/${props.location.user.id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      },
    )
      .then((res) => res.json())
      .then(
        (data) => setTrainingPlan(data),
        setTimeout(() => SetLoading(true), 800),
      );
  }, []);

  return (
    <div>
      {loading === true && Object.keys(trainingPlan).length ? (
        <Container pt={10}>
          <Container className={classes.Header}>
            <h1>{trainingPlan.planName}</h1>
            <h2>{trainingPlan.planDescription}</h2>
          </Container>
          <Container className={classes.ContainnerExercieses}>
            <h2>Пример тренировой недели:</h2>
          </Container>

          <Timeline align="alternate">
            <PlanDays trainingPlan={trainingPlan} />
          </Timeline>

          <div style={{ textAlign: 'center', marginTop: '25px' }}>
            <Button
              onClick={handleActivePlan}
              className={classes.SaveButton}
              size="large"
              variant="contained"
              color="primary">
              Активировать план
            </Button>
          </div>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              План активирован!
            </Alert>
          </Snackbar>
        </Container>
      ) : (
        <div className={classes.Loading}>
          <CircularProgress className={classes.BootScreen} />
        </div>
      )}
    </div>
  );
}
