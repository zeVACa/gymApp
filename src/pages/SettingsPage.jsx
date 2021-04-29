import {
  Button,
  Container,
  TextField,
  Typography,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  Popover,
  Box,
} from '@material-ui/core';
import { LocalHospital } from '@material-ui/icons';
import React from 'react';
import { useState, useEffect } from 'react';

import AccountCircle from '@material-ui/icons/AccountCircle';
import CardMedia from '@material-ui/core/CardMedia';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import Autocomplete from '@material-ui/lab/Autocomplete';
import HelpTwoToneIcon from '@material-ui/icons/HelpTwoTone';
import Image from 'material-ui-image';
import CircularProgress from '@material-ui/core/CircularProgress';

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
    padding: '50px  40px',
  },
  Buttons: {
    margin: '50px 0px',
  },
  ButtonExit: {
    input: { textAlign: 'end' },
    marginTop: 15,
    padding: '10px 50px',
    background: ' slategray',
  },
  FormControl: {
    marginTop: '15px',
  },
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
  Box: {
    width: '100%',
    display: 'flex',
  },
  HintToMetrica: {
    margin: '28px 14px 0px',
  },
  Loading: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  BootScreen: {
    margin: '20% auto',
  },
  SaveButton: {
    margin: '25px 27%',
  },
}));

let metricsUser = {
  Name: 'Никита',
  Height: '180',
  Weight: '100',
  Age: '25',
  CalorieAllowance: '2200',
  gender: 'M',
  Goal: 'Похудение',
  Health: 'Ноги',
  indexBody: '7',
};

const Goals = [
  { title: 'Похудение' },
  { title: 'Набор мышечной массы' },
  { title: 'Поддержание фигуры' },
];
export default function SettingsPage({ user, setUser }) {
  const classes = useStyles();

  const [UserMetrics, setUserMetrics] = useState({});

  const [loading, SetLoading] = useState(false);

  useEffect(() => {
    fetch(`http://fitness-app.germanywestcentral.cloudapp.azure.com/api/UserMetrics/${user.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then((res) => res.json())
      .then(
        (data) => setUserMetrics(data),
        setTimeout(() => SetLoading(true), 1100),
      );
  }, []);

  console.log('Data', UserMetrics);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const updateDataOfUSer = (e) => {
    console.log(e);
    UserMetrics.name = 'Dima';
    console.log(UserMetrics);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      {loading === true && Object.keys(UserMetrics).length ? (
        <Container className={classes.Container}>
          <div className={classes.Avatar}>
            <Avatar className={classes.orange}>{UserMetrics.name[0]}</Avatar>
            <FormControl className={classes.FormControl}>
              <InputLabel htmlFor="input-with-icon-adornment">Имя</InputLabel>
              <Input
                id="input-with-icon-adornment"
                defaultValue={'Данные загружаются...'}
                value={UserMetrics.name}
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </FormControl>
            <div className={classes.Buttons}>
              <Button
                onClick={() => {
                  localStorage.setItem('user', null);
                  setUser(null);
                }}
                style={{ padding: '10px', background: 'slategray' }}
                variant="contained"
                color="primary">
                Сменить пароль
              </Button>

              <Button
                className={classes.ButtonExit}
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

          <div
            className="contentMetrics"
            style={{ marginLeft: 100, marginTop: 35, display: 'flex', flexWrap: 'wrap' }}>
            <TextField
              className={classes.child}
              id="standard-basic"
              label="Возраст"
              defaultValue={UserMetrics.metricAge}
              // value={UserMetrics.metricAge}
              // type="number"
              onChange={(e) => updateDataOfUSer(e)}
              fullWidth
            />
            <TextField
              className={classes.child}
              id="standard-basic"
              label="Вес"
              defaultValue={UserMetrics.metricWeight}
              // value={UserMetrics.metricWeight}
              // type="number"
              fullWidth
            />
            <TextField
              className={classes.child}
              id="standard-basic"
              label="Рост"
              defaultValue={UserMetrics.metricHeight}
              // value={UserMetrics.metricHeight}
              // type="number"
              fullWidth
            />
            <Autocomplete
              fullWidth
              className={classes.child}
              id="free-solo-demo"
              freeSolo
              defaultValue={metricsUser.Goal}
              clearOnEscape="true"
              options={Goals.map((option) => option.title)}
              renderInput={(params) => (
                <TextField
                  className="Auxiliary-class-for-AutoComplete-component"
                  {...params}
                  style={{ input: { marginRight: '-25px' } }}
                  label="Цель"
                  margin="normal"
                />
              )}
            />
            <TextField
              className={classes.child}
              id="standard-basic"
              label="Необходимое количество суточной нормы калорий для поставленной цели"
              value={
                metricsUser.Goal === 'Похудение'
                  ? UserMetrics.metricWeight * 34 - 900
                  : metricsUser.Goal === 'Набор мышечной массы'
                  ? UserMetrics.metricWeight * 36
                  : 'Не определено'
              }
              fullWidth
            />

            <Box className={classes.Box}>
              <TextField
                className={classes.child}
                id="standard-basic"
                label="Индекс массы тела"
                value={(
                  (UserMetrics.metricWeight * 10000) /
                  (UserMetrics.metricHeight * UserMetrics.metricHeight)
                ).toFixed(1)}
                fullWidth
              />

              <HelpTwoToneIcon
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                className={classes.HintToMetrica}>
                <Typography
                  aria-owns={open ? 'mouse-over-popover' : undefined}
                  aria-haspopup="true"
                />
              </HelpTwoToneIcon>

              <Popover
                id="mouse-over-popover"
                className={classes.popover}
                classes={{
                  paper: classes.paper,
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus>
                <Image
                  style={{ height: '100px', width: '380px' }}
                  src="https://cf.ppt-online.org/files2/slide/a/AeZGfbFXwigaBvpkrCJM1E6NzmKq4sc3Y8SWtQ0PT5/slide-16.jpg"
                />
              </Popover>
            </Box>

            <TextField
              className={classes.child}
              id="standard-basic"
              label="Пол"
              defaultValue={UserMetrics.metricGender}
              fullWidth
            />
            <TextField
              className={classes.child}
              id="standard-basic"
              label="Единицы измения"
              value="Кг/см"
              fullWidth
            />
            <TextField
              className={classes.child}
              id="standard-basic"
              label="Язык интерфейса"
              value="RU"
              fullWidth
            />

            <Button
              disabled
              className={classes.SaveButton}
              size="large"
              variant="contained"
              color="primary">
              Сохранить измнения
            </Button>
          </div>
        </Container>
      ) : (
        <div className={classes.Loading}>
          <CircularProgress className={classes.BootScreen} />
        </div>
      )}
    </div>
  );
}
