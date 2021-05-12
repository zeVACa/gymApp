import { Container, Button } from '@material-ui/core';
import React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import CircularProgress from '@material-ui/core/CircularProgress';

import TemplateTrainCard from './TrainingPlans/TemplateTrainCard';
import PlanViewer from './TrainingPlans/PlanViewer';

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

// let plans = [
//   {
//     name: 'Интенсивное снижение веса',
//     id: 1,
//     isActive: false,
//     image: `https://wallpaperscave.ru/images/original/18/03-11/sports-fitness-27570.jpg`,
//     excercises: [
//       {
//         id: 1,
//         name: 'Молотковые сгибания на бицепс',
//         description:
//           'Локти зафиксируйте по бокам туловища, гантели возьмите нейтральным хватом, на выдохе выполните подъем рук почти до уровня плеч, медленно опустите гантели вниз, вернувшись в начальное положение',
//         targetMuscleId: 0,
//         assistantMuscleId: 0,
//         setsNumber: 10,
//         targetMuscle: null,
//         assistantMuscle: null,
//       },
//       {
//         id: 2,
//         name: 'Французский жим с гантелей сидя',
//         description:
//           'Жим сидя на скамье выполняется без прогиба в пояснице. Он может быть только небольшим, обусловленным анатомически, выполнять движение «в мост» не следует; Локти разводить не следует, предплечья должны направляться параллельно друг другу; Плечи не должны подниматься вверх, или смещаться вперед и вбок при выполнении жимов;',
//         targetMuscleId: 0,
//         assistantMuscleId: 0,
//         setsNumber: 15,
//         targetMuscle: null,
//         assistantMuscle: null,
//       },
//     ],
//   },
//   {
//     name: 'Пресс к лету',
//     id: 2,
//     isActive: true,
//     image: `https://wallpaperscave.ru/images/original/18/01-25/sports-fitness-14791.jpg`,
//     excercises: [
//       {
//         id: 3,
//         name: 'Молотковые сгибания на бицепс',
//         description:
//           'Локти зафиксируйте по бокам туловища, гантели возьмите нейтральным хватом, на выдохе выполните подъем рук почти до уровня плеч, медленно опустите гантели вниз, вернувшись в начальное положение',
//         targetMuscleId: 0,
//         assistantMuscleId: 0,
//         setsNumber: 10,
//         targetMuscle: null,
//         assistantMuscle: null,
//       },
//       {
//         id: 4,
//         name: 'Французский жим с гантелей сидя',
//         description:
//           'Жим сидя на скамье выполняется без прогиба в пояснице. Он может быть только небольшим, обусловленным анатомически, выполнять движение «в мост» не следует; Локти разводить не следует, предплечья должны направляться параллельно друг другу; Плечи не должны подниматься вверх, или смещаться вперед и вбок при выполнении жимов;',
//         targetMuscleId: 0,
//         assistantMuscleId: 0,
//         setsNumber: 15,
//         targetMuscle: null,
//         assistantMuscle: null,
//       },
//     ],
//   },
//   {
//     name: 'Экстримальная сгонка',
//     id: 3,
//     isActive: false,
//     image: `https://olympic-lifting.ru/wp-content/uploads/2016/11/maxresdefault.jpg`,
//     excercises: [
//       {
//         id: 5,
//         name: 'Молотковые сгибания на бицепс',
//         description:
//           'Локти зафиксируйте по бокам туловища, гантели возьмите нейтральным хватом, на выдохе выполните подъем рук почти до уровня плеч, медленно опустите гантели вниз, вернувшись в начальное положение',
//         targetMuscleId: 0,
//         assistantMuscleId: 0,
//         setsNumber: 10,
//         targetMuscle: null,
//         assistantMuscle: null,
//       },
//       {
//         id: 6,
//         name: 'Французский жим с гантелей сидя',
//         description:
//           'Жим сидя на скамье выполняется без прогиба в пояснице. Он может быть только небольшим, обусловленным анатомически, выполнять движение «в мост» не следует; Локти разводить не следует, предплечья должны направляться параллельно друг другу; Плечи не должны подниматься вверх, или смещаться вперед и вбок при выполнении жимов;',
//         targetMuscleId: 0,
//         assistantMuscleId: 0,
//         setsNumber: 15,
//         targetMuscle: null,
//         assistantMuscle: null,
//       },
//     ],
//   },
// ];

let isGoals = {
  Похудение: 'WeightLoss',
};

export default function MyTrainingPlan({ user, setCurrentDayIndex, currentDayIndex, setUser }) {
  const classes = useStyles();

  const [loading, SetLoading] = useState(false);
  const [loading2, SetLoading2] = useState(false);
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
      .then(
        (data) => setIsGoal(data.metricGoal),
        setTimeout(() => SetLoading(true), 800),
      );
  }, []);

  useEffect(() => {
    fetch(
      `http://fitness-app.germanywestcentral.cloudapp.azure.com/api/TrainingPlansByCategory/${isGoals[isGoal]}`,
    )
      .then((res) => res.json())
      .then(
        (data) => {
          setPlans(data);
        },
        setTimeout(() => SetLoading2(true), 800),
      );
  }, [loading]);

  console.log(plans);
  // if (!idPlan) {
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
                  {' '}
                  <TemplateTrainCard
                    user={user}
                    idPlan={idPlan}
                    SetIdPlan={SetIdPlan}
                    plan={plan}
                    plans={plans}
                    setCurrentDayIndex={setCurrentDayIndex}
                    currentDayIndex={currentDayIndex}
                    setUser={setUser}
                  />{' '}
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
  // } else {
  //   return (
  //     <div>
  //       <PlanViewer id={idPlan} />
  //     </div>
  //   );
  // }
}
