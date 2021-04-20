import React from 'react';
import MetricsPage1 from './MetricsPage1';
import MetricsPage2 from './MetricsPage2';
import MetricsPage3 from './MetricsPage3';
import MetricsPage4 from './MetricsPage4';
import { Card, Button } from '@material-ui/core';

function RegisterCardPage(props) {
  if (props.registrationPage === 3) {
    props.SetButtonNextorEnd('Завершить');
  } else {
    props.SetButtonNextorEnd('Далее');
  }

  const arr = [
    <MetricsPage1
      DataMetricsUser={props.DataMetricsUser}
      setMetricObject={props.setMetricObject}
      MetricObject={props.MetricObject}
    />,
    <MetricsPage2
      DataMetricsUser={props.DataMetricsUser}
      setMetricObject={props.setMetricObject}
      MetricObject={props.MetricObject}
    />,
    <MetricsPage3
      DataMetricsUser={props.DataMetricsUser}
      setMetricObject={props.setMetricObject}
      MetricObject={props.MetricObject}
    />,
    <MetricsPage4
      DataMetricsUser={props.DataMetricsUser}
      setMetricObject={props.setMetricObject}
      MetricObject={props.MetricObject}
    />,
  ];

  return (
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
        onClick={() => {
          props.setregistrationPage((prevregistrationPage) => {
            return prevregistrationPage + 1;
          });
        }}>
        {props.ButtonNextorEnd}
      </Button>
    </Card>
  );
}

export default RegisterCardPage;
