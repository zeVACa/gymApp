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

function RegisterMetrics({ user, setUser, isMetricscollected, setisMetricscollected }) {
  const [registrationPage, setregistrationPage] = React.useState(0);
  const [ButtonNextorEnd, SetButtonNextorEnd] = React.useState('Далее');

  const [validPage, setValidPage] = React.useState(false);

  return (
    <div
      style={{
        display: ' flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <RegisterCardPage
        registrationPage={registrationPage}
        setregistrationPage={setregistrationPage}
        ButtonNextorEnd={ButtonNextorEnd}
        SetButtonNextorEnd={SetButtonNextorEnd}
        DataMetricsUser={DataMetricsUser}
        validPage={validPage}
        setValidPage={setValidPage}
        user={user}
        setUser={setUser}
        isMetricscollected={isMetricscollected}
        setisMetricscollected={setisMetricscollected}
      />
    </div>
  );
}

export default RegisterMetrics;
