import React from 'react';
import { Box, Typography, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';

function MetricsPage2(props) {
  const [MetricGoal, setMetricGoal] = React.useState('');

  const onClickHandle = (e) => {
    e.preventDefault();
    console.log('tut');
    console.log(e.target.value);
    setMetricGoal(e.target.value);
  };

  React.useEffect(() => {
    props.DataMetricsUser['MetricGoal'] = MetricGoal;
    console.log(props.DataMetricsUser);
  }, [MetricGoal]);

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
          Ваша цель:
        </Typography>
      </Box>
      <RadioGroup aria-label="quiz" name="quiz">
        <FormControlLabel
          value="Похудение"
          control={<Radio size="medium" onClick={onClickHandle} />}
          label="Похудение"
          className="active"
        />
        <FormControlLabel
          value="Поддержание фигуры"
          control={<Radio size="medium" onClick={onClickHandle} />}
          label="Поддержание фигуры"
        />
        <FormControlLabel
          value="Набор мышечной массы"
          control={<Radio size="medium" onClick={onClickHandle} />}
          label="Набор мышечной массы"
        />
      </RadioGroup>
    </div>
  );
}

export default MetricsPage2;
