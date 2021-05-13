import { Card } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import '../TrainingPlans/TepmplateTrainCard.css';

const useStyles = makeStyles((theme) => ({
  Card: {
    padding: '150px 160px',
    cursor: 'pointer',
    transition: 'all 0.5s',
    background: '#bab5b5',
    boxShadow: '0 0 5px',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  isActiveCard: {
    padding: '150px 160px',
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
    marginTop: '50px',
  },
  PlanName: {
    fontFamily: 'Times New Roman, Georgia, Serif',
    fontSize: '20px',
    fontWeight: 'bold',
    marginTop: '15px',
    color: 'rgb(60 62 72)',
  },
}));

let countBgImage = 0;
let bgImage = [
  'https://sun9-32.userapi.com/impf/c834304/v834304102/8f9b3/UBTEpiNTr5Y.jpg?size=1920x1080&quality=96&sign=8b133ac63cb03034809dea8196dabba2&type=album',
  'https://sun9-16.userapi.com/impf/c846018/v846018553/45d58/_LoJna0OGqA.jpg?size=1920x1080&quality=96&sign=1c8dd4288fc1212d87d6f737e76ee87b&type=album',
];
export default function MyTrainingPlan(props) {
  const classes = useStyles();

  const handleClick = (event) => {
    // console.log(event.currentTarget.id);
    props.SetIdPlan(event.currentTarget.id);
  };

  return (
    <div>
      <Link
        to={{
          pathname: '/plan',
          propsSearch: props.plan,
          PlanId: props.idPlan,
          currentDayIndex: props.currentDayIndex,
          setCurrentDayIndex: props.setCurrentDayIndex,
          user: props.user,
        }}>
        <div className={`${classes.Wrapper}`}>
          <span id={props.plan.id} onClick={handleClick} className={`${classes.descr} descr`}>
            Нажмите, чтобы перейти к описанию плана
          </span>
          {props.plan.isActive ? (
            <Card
              className={classes.isActiveCard}
              style={{
                backgroundImage: `url(${bgImage[countBgImage++]})`,
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
              }}>
              {/* <img url={props.plan.image} /> */}
            </Card>
          ) : (
            <Card
              className={classes.Card}
              style={{
                backgroundImage: `url(${
                  bgImage[countBgImage === 1 ? --countBgImage : ++countBgImage]
                })`,
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
              }}></Card>
          )}
        </div>
        <span className={classes.PlanName}>{props.plan.name}</span>
      </Link>
    </div>
  );
}
