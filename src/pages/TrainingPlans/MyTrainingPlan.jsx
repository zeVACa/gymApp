import { Container, Button } from '@material-ui/core';
import React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import CircularProgress from '@material-ui/core/CircularProgress';

import TemplateTrainCard from './TemplateTrainCard';

const useStyles = makeStyles((theme) => ({
  Container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: '40px',
  },
  Heading: {
    // textAlign: 'center',
    display: 'inline-block',
    background: ' #fff',
    marginBottom: '0',
    fontSize: '1.5rem',
    textTransform: 'uppercase',
    padding: '.5rem 1.5rem',
    border: '.125rem solid #3c3e48',
    color: '#3c3e48',
    '&:after': {
      content: '""',
      position: 'absolute',
      background: '#3c3e48',
      height: '.125rem',
      left: 0,
      top: '50%',
      width: '100%',
      transform: 'translateY(-50%)',
      zIndex: '-999',
    },
  },
  li: {
    listStyleType: 'none',
    textAlign: 'center',
  },
  headerH1: {
    position: 'relative',
    textAlign: 'center',
    marginTop: '15px',
    marginBottom: '35px',
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
  PlanConstructor: {
    textAlign: 'center',
  },
}));

let isGoals = {
  Похудение: 'WeightLoss',
  'Набор мышечной массы': 'MuscleGain',
};

export default function MyTrainingPlan({
  user,
  setCurrentDayIndex,
  currentDayIndex,
  setUser,
  trainingPlan,
  setTrainingPlan,
}) {
  const classes = useStyles();

  const [loading, SetLoading] = useState(false);
  const [idPlan, SetIdPlan] = useState(false);
  const [isGoal, setIsGoal] = useState(false);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch(`http://fitness-app.germanywestcentral.cloudapp.azure.com/api/UserMetrics/${user.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setIsGoal(data.metricGoal.toString());
        SetLoading(true);
      });
  }, []);

  useEffect(() => {
    fetch(
      `http://fitness-app.germanywestcentral.cloudapp.azure.com/api/TrainingPlansByCategory/${isGoals[isGoal]}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setPlans(data);
      });
  }, [loading]);

  return (
    <div>
      {loading === true && loading === true ? (
        <div>
          <div className={classes.headerH1}>
            <h1 className={classes.Heading}>Планы тренировок</h1>
          </div>
          <div className={classes.PlanConstructor}>
            <Button disabled size="large" variant="contained" color="primary" disableElevation>
              Конструктор плана
            </Button>
          </div>
          <Container className={`${classes.Container} ContainerLi`}>
            {plans.map((plan) => {
              return (
                <li className={classes.li}>
                  <TemplateTrainCard
                    user={user}
                    idPlan={idPlan}
                    SetIdPlan={SetIdPlan}
                    plan={plan}
                    plans={plans}
                    setCurrentDayIndex={setCurrentDayIndex}
                    currentDayIndex={currentDayIndex}
                    setUser={setUser}
                    trainingPlan={trainingPlan}
                    setTrainingPlan={setTrainingPlan}
                  />
                </li>
              );
            })}
          </Container>
        </div>
      ) : (
        <div className={classes.Loading}>
          <CircularProgress className={classes.BootScreen} />
        </div>
      )}
    </div>
  );
}
