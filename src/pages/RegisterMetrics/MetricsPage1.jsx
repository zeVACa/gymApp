import React from 'react';
import { Box, Typography, TextField } from '@material-ui/core';

function MetricsPage1(props) {
  const [MetricHeight, setMetricHeight] = React.useState('');
  const [MetricWeight, setMetricWeight] = React.useState('');
  const [MetricAge, setMetricAge] = React.useState('');

  React.useEffect(() => {
    props.DataMetricsUser['MetricHeight'] = MetricHeight;
    props.DataMetricsUser['MetricWeight'] = MetricWeight;
    props.DataMetricsUser['MetricAge'] = MetricAge;

    // props.setMetricObject(props.DataMetricsUser);
  }, [MetricHeight, MetricWeight, MetricAge]);
  // props.DataMetricsUser['MetricHeight'] = MetricHeight;
  // props.DataMetricsUser['MetricWeight'] = MetricWeight;
  // props.DataMetricsUser['MetricAge'] = MetricAge;
  console.log(props.DataMetricsUser);

  return (
    <div>
      <Box
        style={{
          maxWidth: '600px',
          fontSize: '20px',
        }}>
        <Typography variant="span" component="h4">
          Введите данные о себе, чтоб мы могли рассчитать ваши показатели.
        </Typography>
        <Typography variant="span" component="h4">
          Меня создали, чтоб тебе было легче отслеживать свой прогресс.
        </Typography>
        <Typography variant="span" component="h4">
          Расскажите о себе:
        </Typography>
      </Box>

      <Box my={3}>
        <TextField
          value={MetricHeight}
          onChange={(e) => {
            setMetricHeight(e.target.value);
          }}
          required
          id="standard-basic"
          variant="outlined"
          autoComplete="false"
          label="Рост"
        />
      </Box>
      <Box my={3}>
        <TextField
          value={MetricWeight}
          onChange={(e) => {
            setMetricWeight(e.target.value);
          }}
          required
          id="standard-basic"
          variant="outlined"
          autoComplete="false"
          label="Вес"
        />
      </Box>
      <Box my={3}>
        <TextField
          value={MetricAge}
          onChange={(e) => {
            setMetricAge(e.target.value);
          }}
          required
          id="standard-basic"
          variant="outlined"
          autoComplete="false"
          label="Возраст"
        />
      </Box>
    </div>
  );
}

export default MetricsPage1;
