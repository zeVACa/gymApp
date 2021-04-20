import React from 'react';
import { Box, FormControlLabel, Typography, Checkbox, RadioGroup } from '@material-ui/core';

function MetricsPage3(props) {
  let MetricHealth = [];
  // const [MetricHealth, setMetricHealth] = React.useState([]);

  const onClickHandle = (e) => {
    // e.preventDefault();

    if (e.target.checked) {
      MetricHealth.push(e.target.value);
      console.log(MetricHealth.indexOf(e.target.value));
      props.DataMetricsUser['MetricHealth'] = MetricHealth;
      console.log(props.DataMetricsUser);
    } else {
      MetricHealth.splice(MetricHealth.indexOf(e.target.value), 1);
      props.DataMetricsUser['MetricHealth'] = MetricHealth;
      console.log(props.DataMetricsUser);
    }

    // console.log(e.target.value);
    // console.log(e.target.checked);

    // console.log(MetricHealth);
  };

  // React.useEffect(() => {
  //   props.DataMetricsUser['MetricHealth'] = MetricHealth;
  //   console.log(props.DataMetricsUser);
  // }, [MetricHealth]);

  return (
    <div>
      <Box
        style={{
          maxWidth: '600px',
          fontSize: '20px',
        }}>
        <Typography variant="span" component="h4">
          Имеютя ли у вас какие либо проблемы со здоровьем?
        </Typography>
        <Typography variant="span" component="h4">
          Если есть, укажите их в поле ниже.
        </Typography>
        <Box my={6}>
          <RadioGroup aria-label="quiz" name="quiz">
            <FormControlLabel
              value="Спина"
              control={<Checkbox size="medium" onChange={onClickHandle} />}
              label="Спина"
              className="active"
            />
            <FormControlLabel
              value="Поясница"
              control={<Checkbox size="medium" onChange={onClickHandle} />}
              label="Поясница"
            />
            <FormControlLabel
              value="Ноги"
              control={<Checkbox size="medium" onChange={onClickHandle} />}
              label="Ноги"
            />
            <FormControlLabel
              value="Руки"
              control={<Checkbox size="medium" onChange={onClickHandle} />}
              label="Руки"
            />
            <FormControlLabel
              value="Отсутствуют"
              control={<Checkbox size="medium" onChange={onClickHandle} />}
              label="Отсутствуют"
            />
          </RadioGroup>
        </Box>
      </Box>
    </div>
  );
}

export default MetricsPage3;
