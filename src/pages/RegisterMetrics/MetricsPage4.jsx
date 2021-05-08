import React from 'react';
import { Box, Typography, TextField } from '@material-ui/core';

function MetricsPage4(props) {
  const [MetricPushUps, setMetricPushUps] = React.useState('');
  const [MetricPullUps, setMetricPullUps] = React.useState('');

  React.useEffect(() => {
    props.DataMetricsUser['MetricPushUps'] = MetricPushUps;
    props.DataMetricsUser['MetricPullUps'] = MetricPullUps;

    if ((MetricPushUps !== '') & (MetricPullUps !== '')) {
      props.setValidPage(true);
    } else {
      props.setValidPage(false);
    }
  }, [MetricPushUps, MetricPullUps]);

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
          Пожалуйста, укажите данные в поле ниже:
        </Typography>
        <Box my={6}>
          <TextField
            value={MetricPushUps}
            onChange={(e) => {
              setMetricPushUps(e.target.value);
            }}
            required
            id="standard-basic"
            variant="outlined"
            type="number"
            autoComplete="false"
            fullWidth
            label="Максимальное количество отжимания от пола"
          />
        </Box>
        <Box my={6}>
          <TextField
            value={MetricPullUps}
            onChange={(e) => {
              setMetricPullUps(e.target.value);
            }}
            required
            id="standard-basic"
            variant="outlined"
            type="number"
            autoComplete="false"
            fullWidth
            label="Максимальное количество подтягивания от перекладины"
          />
        </Box>
      </Box>
    </div>
  );
}

export default MetricsPage4;
