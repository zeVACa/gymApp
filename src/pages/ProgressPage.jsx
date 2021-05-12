import { Container } from '@material-ui/core';
import React from 'react';

import { Line } from 'react-chartjs-2';

const data = [
  {
    x: '0',
    label: '09.04',
    value: '7000',
  },
  {
    x: '1',
    label: '09.04',
    value: '8000',
  },
  {
    x: '2',
    label: '09.04',
    value: '9000',
  },
  {
    x: '3',
    label: '09.04',
    value: '50000',
  },
];

let arrayLabels = [];
let arrayData = [];
for (let index = 0; index < data.length; index++) {
  arrayLabels.push(data[index].label);
  arrayData.push(data[index].value);
}
const state = {
  labels: arrayLabels,
  datasets: [
    {
      label: 'Дата тренировок',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: arrayData,
    },
  ],
};

const ProgressPage = () => {
  return (
    <div>
      <Line
        style={{
          maxWidth: '800px',
          maxHeight: '500px',
        }}
        data={state}
        options={{
          title: {
            display: true,
            text: 'Average Rainfall per month',
            fontSize: 20,
          },
          legend: {
            display: true,
            position: 'right',
          },
        }}
      />

      <Container>Progress</Container>
    </div>
  );
};
export default ProgressPage;
