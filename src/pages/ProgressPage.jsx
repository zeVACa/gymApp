import { Container } from '@material-ui/core';
import React from 'react';
<<<<<<< Updated upstream
=======
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
    // margin: '0 auto',
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

  const [Period, setPeriod] = React.useState(7);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setPeriod(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    let userData = {
      UserId: user.id,
      Period: Period,
      Step: 'Day',
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
  }, [Period]);

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
>>>>>>> Stashed changes

export default function ProgressPage() {
  return (
    <div>
      <Container>Progress</Container>
    </div>
  );
}
