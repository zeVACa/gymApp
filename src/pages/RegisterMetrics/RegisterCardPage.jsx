import React from 'react';
import { useState, useEffect } from 'react';
import MetricsPage1 from './MetricsPage1';
import MetricsPage2 from './MetricsPage2';
import MetricsPage3 from './MetricsPage3';
import MetricsPage4 from './MetricsPage4';
import { Card, Button } from '@material-ui/core';

// import SideMenu from '.../components/AuthedContent';
import SideMenu from '../../components/AuthedContent';

function RegisterCardPage(props) {
  function handleSubmit(e) {
    // console.log(e);
    // console.log(e.target.innerHTML);
    // console.log('myUser', props.user);

    if (e.target.innerHTML !== 'Завершить') {
      props.setregistrationPage((prevregistrationPage) => {
        props.setValidPage(false);
        return prevregistrationPage + 1;
      });
    } else {
      console.log('propsi', props.DataMetricsUser);

      fetch(
        `http://fitness-app.germanywestcentral.cloudapp.azure.com/api/sendMetrics/${props.user.id}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: JSON.stringify(props.DataMetricsUser),
        },
      )
        .then((res) => {
          console.log('status', res.status);
          res.text();
        })
        .then((data) => console.log(data));

      props.setisMetricscollected(true);
    }
  }
  console.log('Я тут', props.isMetricscollected);

  if (props.registrationPage === 3) {
    props.SetButtonNextorEnd('Завершить');
  } else {
    props.SetButtonNextorEnd('Далее');
  }
  if (props.registrationPage === 2) props.setValidPage(true);

  const arr = [
    <MetricsPage1
      DataMetricsUser={props.DataMetricsUser}
      setMetricObject={props.setMetricObject}
      MetricObject={props.MetricObject}
      validPage={props.validPage}
      setValidPage={props.setValidPage}
    />,
    <MetricsPage2
      DataMetricsUser={props.DataMetricsUser}
      setMetricObject={props.setMetricObject}
      MetricObject={props.MetricObject}
      validPage={props.validPage}
      setValidPage={props.setValidPage}
    />,
    <MetricsPage3
      DataMetricsUser={props.DataMetricsUser}
      setMetricObject={props.setMetricObject}
      MetricObject={props.MetricObject}
      validPage={props.validPage}
      setValidPage={props.setValidPage}
    />,
    <MetricsPage4
      DataMetricsUser={props.DataMetricsUser}
      setMetricObject={props.setMetricObject}
      MetricObject={props.MetricObject}
      validPage={props.validPage}
      setValidPage={props.setValidPage}
    />,
  ];

  return !props.isMetricscollected ? (
    <Card
      style={{
        marginTop: '150px',
        color: '#8E8E8E',
        fontFamily: 'Roboto',
        lineHeight: '50px',
        padding: '40px',
        maxWidth: '900px',
      }}>
      {arr[props.registrationPage]}

      {props.registrationPage != 0 ? (
        <Button
          variant="contained"
          color="primary"
          style={{ width: '200px' }}
          onClick={() => {
            props.setregistrationPage((prevregistrationPage) => {
              props.setValidPage(false);
              return prevregistrationPage - 1;
            });
          }}>
          Назад
        </Button>
      ) : (
        <Button variant="contained" color="primary" disabled style={{ width: '200px' }}>
          Назад
        </Button>
      )}

      <Button
        variant="contained"
        color="primary"
        style={{ width: '200px', marginLeft: '20px' }}
        disabled={!props.validPage}
        onClick={handleSubmit}>
        {props.ButtonNextorEnd}
      </Button>
    </Card>
  ) : (
    <SideMenu user={props.user} setUser={props.setUser} />
  );
}

export default RegisterCardPage;
