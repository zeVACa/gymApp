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
  MenuItem,
  Card,
} from '@material-ui/core';
import React from 'react';
import { useState, useEffect } from 'react';

import AccountCircle from '@material-ui/icons/AccountCircle';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';
import HelpTwoToneIcon from '@material-ui/icons/HelpTwoTone';
import Image from 'material-ui-image';
import CircularProgress from '@material-ui/core/CircularProgress';
import StatusChangePassword from './ChangePasswordPage/StatusChangePassword';

import { isPasswordValid } from './Validation/Valid';

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
    background: '#239546',
  },
  Card: {
    margin: '0 auto',
    color: '#8E8E8E',
    fontFamily: 'Roboto',
    lineHeight: '50px',
    padding: '40px',
    maxWidth: '900px',
    textAlign: 'center',
  },
  ChangeYourPassword: {
    padding: '10px',
    backgroundColor: 'slategray',
  },
}));

const Goals = [
  { title: 'Похудение' },
  { title: 'Набор мышечной массы' },
  { title: 'Поддержание фигуры' },
];

export default function SettingsPage({ user, setUser }) {
  const classes = useStyles();

  const [UserMetrics, setUserMetrics] = useState({});

  const [loading, SetLoading] = useState(false);

  const [SaveUpdateButton, setSaveUpdateButton] = useState(false);

  const [isComponentChangePassword, setIsComponentChangePage] = useState(false);

  const [inputCodeFromEmail, setInputCodeFromEmail] = useState('');
  const [inputPassword1, setinputPassword1] = useState('');
  const [inputPassword2, setinputPassword2] = useState('');

  const [statusChangePassword, setStatusChangePassword] = useState(false);

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
        setTimeout(() => SetLoading(true), 800),
      );
  }, [isComponentChangePassword]);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const updateDataOfUSer = (label, e) => {
    switch (label) {
      case 'Age':
        UserMetrics.metricAge = e.target.value;
        break;
      case 'Weight':
        UserMetrics.metricWeight = e.target.value;
        break;
      case 'Height':
        UserMetrics.metricHeight = e.target.value;
        break;
      case 'Name':
        UserMetrics.name = e.target.value;
        break;
      case 'Goal':
        UserMetrics.metricGoal = e.target.value;
        break;
      default:
        break;
    }
    setSaveUpdateButton(e.target.value);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleOpenPageCHangePassword = () => {
    let body = {
      Email: user.email,
    };
    fetch(`http://fitness-app.germanywestcentral.cloudapp.azure.com/api/ForgotPassword`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(body),
    });

    setIsComponentChangePage((previsComponentChangePassword) => !previsComponentChangePassword);
  };

  const handleChangePassword = (e) => {
    // e.preventDefault();
    let body = {
      Email: user.email,
      Password: inputPassword1,
      ConfirmPassword: inputPassword1,
      Code: inputCodeFromEmail,
    };
    fetch(`http://fitness-app.germanywestcentral.cloudapp.azure.com/api/ResetPassword`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(body),
    }).then((res) => {
      setStatusChangePassword(res.status);
    });
  };

  const sendUpdateDate = (e) => {
    let MetricHealth = [];

    if (UserMetrics.healthProblems !== null) {
      for (let index = 0; index < UserMetrics.healthProblems.length; index++) {
        let collectingHealthMetricsInObject = {
          Problem: UserMetrics.healthProblems[index],
        };
        MetricHealth.push(collectingHealthMetricsInObject);
      }
      UserMetrics.healthProblems = MetricHealth;
    }
    fetch(`http://fitness-app.germanywestcentral.cloudapp.azure.com/api/UserMetrics/${user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(UserMetrics),
    }).then((res) => {
      res.text();
    });

    setTimeout(() => window.location.reload(), 200);
  };

  const open = Boolean(anchorEl);

  if (!isComponentChangePassword) {
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
                  defaultValue={UserMetrics.name}
                  // value={UserMetrics.name}
                  onChange={(e) => updateDataOfUSer('Name', e)}
                  startAdornment={
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <div className={classes.Buttons}>
                <Button
                  className={classes.ChangeYourPassword}
                  onClick={handleOpenPageCHangePassword}
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
                onChange={(e) => updateDataOfUSer('Age', e)}
                fullWidth
              />
              <TextField
                className={classes.child}
                id="standard-basic"
                label="Вес"
                defaultValue={UserMetrics.metricWeight}
                onChange={(e) => updateDataOfUSer('Weight', e)}
                fullWidth
              />
              <TextField
                className={classes.child}
                id="standard-basic"
                label="Рост"
                defaultValue={UserMetrics.metricHeight}
                onChange={(e) => updateDataOfUSer('Height', e)}
                fullWidth
              />
              <TextField
                className={classes.child}
                id="standard-select-currency"
                select
                label="Текущая цель"
                defaultValue={UserMetrics.metricGoal}
                onChange={(e) => updateDataOfUSer('Goal', e)}>
                {Goals.map((option) => (
                  <MenuItem key={option.title} value={option.title}>
                    {option.title}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                className={classes.child}
                id="standard-basic"
                label="Необходимое количество суточной нормы калорий для поставленной цели"
                value={
                  UserMetrics.metricGoal === 'Похудение'
                    ? UserMetrics.metricWeight * 34 - 900
                    : UserMetrics.metricGoal === 'Набор мышечной массы'
                    ? UserMetrics.metricWeight * 37
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
                disabled={!SaveUpdateButton}
                className={classes.SaveButton}
                size="large"
                onClick={sendUpdateDate}
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
  } else {
    return (
      <div>
        <Card style={{ height: '900px' }}>
          <Button
            style={{ margin: '35px', background: 'slategray' }}
            size="large"
            onClick={() => {
              setIsComponentChangePage(
                (previsComponentChangePassword) => !previsComponentChangePassword,
              );
              setStatusChangePassword(false);
            }}
            variant="contained"
            color="primary">
            Назад
          </Button>

          {statusChangePassword !== false ? (
            <div style={{ margin: '0 27%', textAlign: 'center', marginTop: '15%' }}>
              <StatusChangePassword status={statusChangePassword} />
            </div>
          ) : (
            <div className={classes.Card}>
              <h2>
                Хей! <br /> На вашу почту направлен код для подтвержления смены пароля :){' '}
              </h2>
              <form autoComplete="off">
                <Box my={5}>
                  <TextField
                    onChange={(e) => {
                      setInputCodeFromEmail(e.target.value);
                    }}
                    id="outlined-basic"
                    label="Код с вашей почты"
                    variant="outlined"
                    value={inputCodeFromEmail}
                  />
                </Box>
                <Box my={5}>
                  <TextField
                    error={
                      isPasswordValid(inputPassword1)
                        ? inputPassword1 === ''
                          ? false
                          : true
                        : false
                    }
                    onChange={(e) => {
                      isPasswordValid(setinputPassword1(e.target.value));
                    }}
                    helperText={
                      isPasswordValid(inputPassword1) ? (
                        inputPassword1 === '' ? (
                          false
                        ) : (
                          <p>
                            Пароль должен быть не короче
                            <br /> 8 символов и содержать строч-
                            <br />
                            ную и заглавную буквы и цифру
                          </p>
                        )
                      ) : (
                        false
                      )
                    }
                    value={inputPassword1}
                    id="outlined-basic"
                    label="Новый пароль"
                    type="password"
                    variant="outlined"
                  />
                </Box>
                <Box my={5}>
                  <TextField
                    onChange={(e) => {
                      setinputPassword2(e.target.value);
                    }}
                    id="outlined-basic"
                    label="Повторите пароль"
                    type="password"
                    value={inputPassword2}
                    error={
                      inputPassword1 !== inputPassword2 && inputPassword2.length > 0 ? true : false
                    }
                    helperText={inputPassword1 !== inputPassword2 ? 'Пароли не совпадают' : false}
                    variant="outlined"
                  />
                </Box>
              </form>

              <Button
                size="large"
                onClick={handleChangePassword}
                disabled={
                  inputPassword1 === inputPassword2 &&
                  inputCodeFromEmail.length > 5 &&
                  !isPasswordValid(inputPassword1)
                    ? inputPassword1 === ''
                      ? true
                      : false
                    : true
                }
                variant="contained"
                color="primary">
                Изменить пароль
              </Button>
            </div>
          )}
        </Card>
      </div>
    );
  }
}
