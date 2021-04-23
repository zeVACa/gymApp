import React from 'react';
import { Container } from '@material-ui/core';
import RegisterCardPage from './RegisterCardPage';

const DataMetricsUser = {
  MetricHeight: '',
  MetricWeight: '',
  MetricAge: '',
  MetricGoal: '',
  MetricHealth: '',
  MetricPushUps: '',
  MetricPullUps: '',
};

function RegisterMetrics() {
  const [registrationPage, setregistrationPage] = React.useState(0);
  const [ButtonNextorEnd, SetButtonNextorEnd] = React.useState('Далее');

  return (
    <Container>
      <RegisterCardPage
        registrationPage={registrationPage}
        setregistrationPage={setregistrationPage}
        ButtonNextorEnd={ButtonNextorEnd}
        SetButtonNextorEnd={SetButtonNextorEnd}
        DataMetricsUser={DataMetricsUser}
      />
    </Container>
  );
}

export default RegisterMetrics;
