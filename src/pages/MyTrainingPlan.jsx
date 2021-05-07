import { Container, Card } from '@material-ui/core';
import React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import CircularProgress from '@material-ui/core/CircularProgress';

import TemplateTrainCard from './TrainingPlans/TemplateTrainCard';

const useStyles = makeStyles((theme) => ({
  Container: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  Heading: {
    // textAlign: 'center',
    display: 'inline-block',
    background: ' #fff',
    marginBottom: 0,
    fontSize: '1.5rem',
    textTransform: 'uppercase',
    padding: '.5rem 1.5rem',
    border: '.125rem solid #3f51b5',
    color: '#535658',
    '&:after': {
      content: '""',
      position: 'absolute',
      background: '#3f51b5',
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
    marginBottom: '.5rem',
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
}));

let plans = [
  {
    name: 'Интенсивное снижение веса',
    id: 1,
    isActive: false,
    image: `https://wallpaperscave.ru/images/original/18/03-11/sports-fitness-27570.jpg`,
  },
  {
    name: 'Пресс к лету',
    id: 2,
    isActive: true,
    image: `https://wallpaperscave.ru/images/original/18/01-25/sports-fitness-14791.jpg`,
  },
  {
    name: 'Экстримальная сгонка',
    id: 3,
    isActive: false,
    image: `https://olympic-lifting.ru/wp-content/uploads/2016/11/maxresdefault.jpg`,
  },
];

export default function MyTrainingPlan() {
  const classes = useStyles();

  const [loading, SetLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => SetLoading(true), 800);
  }, []);

  return (
    <div>
      {loading === true ? (
        <div>
          <div className={classes.headerH1}>
            <h1 className={classes.Heading}>Планы тренировок</h1>
          </div>
          <Container className={`${classes.Container} ContainerLi`}>
            {plans.map((plan) => {
              return (
                <li className={classes.li}>
                  {' '}
                  <TemplateTrainCard plan={plan} key={plan.id} />{' '}
                </li>
              );
            })}
          </Container>{' '}
        </div>
      ) : (
        <div className={classes.Loading}>
          <CircularProgress className={classes.BootScreen} />
        </div>
      )}
    </div>
  );
}
