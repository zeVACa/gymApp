import React from 'react';
import { Container } from '@material-ui/core';
import RegisterCardPage from './RegisterCardPage';

const DataMetricsUser = {
  MetricHeight: '',
  MetricWeight: '',
  MetricAge: '',
  MetricGoal: '',
  MetricHealth: [],
  MetricPushUps: '',
  MetricPullUps: '',
};

function RegisterMetrics(props) {
  const [registrationPage, setregistrationPage] = React.useState(0);
  const [ButtonNextorEnd, SetButtonNextorEnd] = React.useState('Далее');

  const [validPage, setValidPage] = React.useState(false);

  const [isMetricscollected, setisMetricscollected] = React.useState(false);

  return (
    <Container>
      <RegisterCardPage
        registrationPage={registrationPage}
        setregistrationPage={setregistrationPage}
        ButtonNextorEnd={ButtonNextorEnd}
        SetButtonNextorEnd={SetButtonNextorEnd}
        DataMetricsUser={DataMetricsUser}
        validPage={validPage}
        setValidPage={setValidPage}
        user={props.user}
        setUser={props.setUser}
        isMetricscollected={isMetricscollected}
        setisMetricscollected={setisMetricscollected}
      />
    </Container>
  );
}

export default RegisterMetrics;
