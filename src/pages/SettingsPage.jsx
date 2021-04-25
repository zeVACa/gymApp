import {
  Button,
  Container,
  TextField,
  Box,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
} from '@material-ui/core';
import { LocalHospital } from '@material-ui/icons';
import React from 'react';

import AccountCircle from '@material-ui/icons/AccountCircle';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

import './Settings.css';

const useStyles = makeStyles((theme) => ({
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    padding: 76,
    fontSize: 86,
  },
  Container: {
    display: 'flex',
  },
  child: {
    width: '80%',
    marginTop: '10px',
    textAlign: 'end',
  },
  // contentMetrics: {
  //   marginLeft: 100,
  //   marginTop: 35,
  //   display: 'flex',
  //   flexWrap: 'wrap',
  // },
  Avatar: {
    padding: 50,
  },
  Buttons: {
    margin: '50px 30px',
  },
  ButtonExit: {
    input: { textAlign: 'end' },
    marginLeft: '200px',
  },
  FormControl: {
    marginTop: '15px',
  },
}));

let metricsUser = {
  Name: 'Андрей',
  Height: '130',
  Weight: '130',
  Age: '20',
  CalorieAllowance: '2200',
  gender: 'M',
  Goal: 'Похудение',
  Health: 'Ноги',
  indexBody: '7',
};

export default function SettingsPage({ setUser }) {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.Container}>
        <div className={classes.Avatar}>
          <Avatar className={classes.orange}>{metricsUser.Name[0]}</Avatar>
          <FormControl className={classes.FormControl}>
            <InputLabel htmlFor="input-with-icon-adornment">Имя</InputLabel>
            <Input
              id="input-with-icon-adornment"
              defaultValue={metricsUser.Name}
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>
        </div>

        <div
          className="contentMetrics"
          style={{ marginLeft: 100, marginTop: 35, display: 'flex', flexWrap: 'wrap' }}>
          <TextField
            className={classes.child}
            id="standard-basic"
            label="Возраст"
            defaultValue={metricsUser.Age}
            fullWidth
          />
          <TextField
            className={classes.child}
            id="standard-basic"
            label="Вес"
            defaultValue={metricsUser.Weight}
            fullWidth
          />
          <TextField
            className={classes.child}
            id="standard-basic"
            label="Рост"
            defaultValue={metricsUser.Height}
            fullWidth
          />
          <TextField
            className={classes.child}
            id="standard-basic"
            label="Цель"
            defaultValue={metricsUser.Goal}
            fullWidth
          />
          <TextField
            className={classes.child}
            id="standard-basic"
            label="Норма калорий в день"
            defaultValue={metricsUser.CalorieAllowance}
            fullWidth
          />
          <TextField
            className={classes.child}
            id="standard-basic"
            label="Пол"
            defaultValue={metricsUser.gender}
            fullWidth
          />
          <TextField
            className={classes.child}
            id="standard-basic"
            label="Единицы измения"
            defaultValue="Кг/см"
            fullWidth
          />
          <TextField
            className={classes.child}
            id="standard-basic"
            label="Язык интерфейса"
            defaultValue="RU"
            fullWidth
          />
          <TextField
            className={classes.child}
            id="standard-basic"
            label="Индекс массы тела"
            defaultValue={metricsUser.indexBody}
            fullWidth
          />

          <div className={classes.Buttons}>
            <Button
              onClick={() => {
                localStorage.setItem('user', null);
                setUser(null);
              }}
              style={{ padding: '10px' }}
              variant="contained"
              color="primary">
              Сменить пароль
            </Button>

            <Button
              className={classes.ButtonExit}
              style={{ padding: '7px 20px' }}
              onClick={() => {
                localStorage.setItem('user', null);
                setUser(null);
              }}
              variant="contained"
              color="primary">
              Выйти
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
