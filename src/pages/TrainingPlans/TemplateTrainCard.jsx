import { Container, Card } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

import '../TrainingPlans/TepmplateTrainCard.css';

const useStyles = makeStyles((theme) => ({
  Card: {
    padding: '200px 170px',
    cursor: 'pointer',
    transition: 'all 0.5s',
    background: '#bab5b5',
    boxShadow: '0 0 5px',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  isActiveCard: {
    padding: '200px 170px',
    background: '#5ed95e',
    transition: 'all 0.5s ',
    cursor: 'pointer',
    boxShadow: '0 0 5px ',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  descr: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,.5)',
    color: '#fff',
    textAlign: 'center',
    paddingTop: '80px',
    // display: 'none',
    transition: 'all .5s',
    WebkitTransition: 'all .5s',
    opacity: 0,
    cursor: 'pointer',
  },
  Wrapper: {
    position: 'relative',
    '&:hover descr': {
      display: 'block',
    },
  },
  PlanName: {
    fontFamily: 'Times New Roman, Georgia, Serif',
    fontSize: '20px',
    fontWeight: 'bold',
    marginTop: '15px',
    color: 'rgba(0, 0, 0, 0.54)',
  },
}));

export default function MyTrainingPlan(props) {
  const classes = useStyles();
  return (
    <div>
      <div className={`${classes.Wrapper}`}>
        <span className={`${classes.descr} descr`}>Нажмите, чтобы перейти к описанию палана</span>
        {props.plan.isActive ? (
          <Card
            className={classes.isActiveCard}
            style={{
              backgroundImage: `url(${props.plan.image})`,
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat',
            }}>
            {/* <img url={props.plan.image} /> */}
          </Card>
        ) : (
          <Card
            className={classes.Card}
            style={{
              backgroundImage: `url(${props.plan.image})`,
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat',
            }}></Card>
        )}
      </div>
      <span className={classes.PlanName}>{props.plan.name}</span>
    </div>
  );
}
