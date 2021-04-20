import { Container, Typography, Grid, ButtonGroup, Button } from '@material-ui/core';
import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TemplateHistoryTrain from './TemplateHistoryTrain';
import { Pagination } from '@material-ui/lab';
import { useState, useEffect } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// let objTrain = [
//   {
//     nameTrain: 'Train1',
//     time: '45 минут',
//     calories: '400',
//     data: '14.04.2021',
//     MuscleGroup: 'Ноги',
//   },
//   {
//     nameTrain: 'Train2',
//     time: '50 минут',
//     calories: '500',
//     data: '13.04.2021',
//     MuscleGroup: 'Грудь, Бицепс',
//   },
//   {
//     nameTrain: 'Train3',
//     time: '55 минут',
//     calories: '600',
//     data: '10.04.2021',
//     MuscleGroup: 'Спина, Трицепс',
//   },
//   {
//     nameTrain: 'Train4',
//     time: '25 минут',
//     calories: '800',
//     data: '07.04.2021',
//     MuscleGroup: 'Кардио(Бег + Челночный бег)',
//   },
//   {
//     nameTrain: 'Train5',
//     time: '35 минут',
//     calories: '400',
//     data: '03.04.2021',
//     MuscleGroup: 'Пресс, Боковой пресс',
//   },
//   {
//     nameTrain: 'Train6',
//     time: '65 минут',
//     calories: '900',
//     data: '03.03.2021',
//     MuscleGroup: 'Ноги, Бицепс',
//   },
// ];

export default function HistoryPage({ user }) {
  const [periodValue, setPeriodValue] = useState(30);
  const [value, setValue] = useState(2);

  const [objTrain, setObjTrain] = useState([]);

  useEffect(() => {
    fetch(
      `http://fitness-app.germanywestcentral.cloudapp.azure.com/api/TrainingHistory/${user.id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      },
    )
      .then((res) => res.json())
      .then((data) => setObjTrain(data));
  }, []);

  var len = 1;

  var CurrentDate = new Date();
  var days = 86400000;
  var FromDataFormated = new Date(CurrentDate - periodValue * days);
  console.log('current-data = ', FromDataFormated);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Container>
        <Typography
          variant="h4"
          gutterBottom
          style={{ textAlign: 'center', color: '#4c3535', marginBottom: '15px' }}>
          История тренировок
        </Typography>
        {objTrain.length > 0 ? (
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example">
            <Tab label="7 дней" onClick={() => setPeriodValue(7)}></Tab>
            <Tab label="1 месяц" onClick={() => setPeriodValue(30)}></Tab>
            <Tab label="3 месяца" onClick={() => setPeriodValue(90)}></Tab>
          </Tabs>
        ) : (
          <br />
        )}
        <Grid item xs={12} style={{ marginTop: '50px' }}>
          {objTrain.length !== 0 ? (
            objTrain
              .filter(function (toTrain) {
                var date = new Date(
                  toTrain.endTime.substr(0, 10).replace(/(\d+).(\d+).(\d+)/, '$1/$2/$3'),
                );
                date >= FromDataFormated ? (len = len + 1) : (len = len);
                console.log(date);
                return date >= FromDataFormated;
              })
              .map((toTrain) => {
                return <TemplateHistoryTrain toTrain={toTrain} />;
              })
          ) : (
            <Typography
              variant="h4"
              gutterBottom
              style={{ textAlign: 'center', color: 'green', margintop: '60px' }}>
              Здесь будет история ваших тренировок
            </Typography>
          )}
        </Grid>
        {objTrain.length != 0 ? <Pagination count={Math.floor(len / 2)} size="small" /> : <br />}
      </Container>
    </div>
  );
}
