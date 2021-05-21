import { Container, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import React from 'react';

import { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { Line } from 'react-chartjs-2';

const useStyles = makeStyles((theme) => ({
  Loading: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  BootScreen: {
    margin: '20% auto',
  },
  Table: {
    display: 'block',
    minWidth: '1200px',
    minHeight: '500px',
    marginBottom: '50px',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Header: {
    textAlign: 'center',
    marginBottom: '45px',
  },
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

let state = {};

const ProgressPage = ({ user }) => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [tableState, setTableState] = useState({});

  const [tableStateWeight, setTableStateWeight] = useState({});

  const [loading, SetLoading] = useState(false);

  const [Step, setStep] = useState('Week');
  const [Period, setPeriod] = React.useState(7);
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleChange = (event) => {
    setPeriod(event.target.value);
  };

  const handleChangeStep = (event) => {
    setStep(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleOpen2 = () => {
    setOpen2(true);
  };

  useEffect(() => {
    let userData = {
      UserId: user.id,
      Period: Period,
      Step: Step,
    };

    fetch('http://fitness-app.germanywestcentral.cloudapp.azure.com/api/Tonnage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);

        let arrayLabels = [];
        let arrayData = [];

        for (let index = 0; index < data.length; index++) {
          arrayLabels.push(data[index].label);
          arrayData.push(data[index].value);
        }

        state = {
          labels: arrayLabels,
          datasets: [
            {
              label: 'Прогрессия нагрузки, кг',
              fill: false,
              lineTension: 0.5,
              backgroundColor: 'rgba(75,192,192,1)',
              borderColor: 'rgba(0,0,0,1)',
              borderWidth: 2,
              data: arrayData,
            },
          ],
        };
        setTableState(state);

        SetLoading(true);
      });
  }, [Period, Step]);

  useEffect(() => {
    let userData = {
      UserId: user.id,
      Period: Period,
      Step: 'Day',
    };

    fetch('http://fitness-app.germanywestcentral.cloudapp.azure.com/api/GetWeight', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);

        let arrayLabels = [];
        let arrayData = [];

        for (let index = 0; index < data.length; index++) {
          arrayLabels.push(data[index].label);
          arrayData.push(data[index].value);
        }

        state = {
          labels: arrayLabels,
          datasets: [
            {
              label: 'Изменение веса тела, кг',
              fill: false,
              lineTension: 0.5,
              backgroundColor: 'rgba(75,192,192,1)',
              borderColor: 'rgba(0,0,0,1)',
              borderWidth: 2,
              data: arrayData,
            },
          ],
        };
        setTableStateWeight(state);
        SetLoading(true);
      });
  }, [Period]);

  return (
    <div className="wrapper">
      {loading === true && Object.keys(data).length ? (
        <div>
          <Container className={classes.Header}>
            <h1>Прогресс</h1>
          </Container>
          <div>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-controlled-open-select-label">Period</InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={Period}
                defaultValue={7}
                onChange={handleChange}>
                <MenuItem value={7}>{Step === 'Week' ? '7' : 'Неделя'}</MenuItem>
                <MenuItem value={30}>{Step === 'Week' ? '30' : 'Месяц'} </MenuItem>
                <MenuItem value={90}>{Step === 'Week' ? '90' : 'Три месяца'} </MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-controlled-open-select-label">Step</InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open2}
                onClose={handleClose2}
                onOpen={handleOpen2}
                value={Step}
                defaultValue={'Week'}
                onChange={handleChangeStep}>
                <MenuItem value={'Day'}>Дни</MenuItem>
                <MenuItem value={'Week'}>Недели</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Line
            className={classes.Table}
            data={tableState}
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

          <Line
            className={classes.Table}
            data={tableStateWeight}
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
        </div>
      ) : (
        <div className={classes.Loading}>
          <CircularProgress className={classes.BootScreen} />
        </div>
      )}
    </div>
  );
};
export default ProgressPage;
