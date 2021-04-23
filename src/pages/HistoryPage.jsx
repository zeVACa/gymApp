import { Container, Typography, Grid,  } from '@material-ui/core';
import React from 'react';
import TemplateHistoryTrain from './TemplateHistoryTrain';
import { Pagination } from '@material-ui/lab';
import { useState, useEffect } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

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
