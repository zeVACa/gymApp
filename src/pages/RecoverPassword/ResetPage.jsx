import { Button, TextField, Box } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import { isPasswordValid } from '../Validation/Valid';

const useStyles = makeStyles((theme) => ({
  Loading: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  BootScreen: {
    margin: '5% auto',
  },
}));

export default function RecoverPasswordPage({ page, setPage, email }) {
  const classes = useStyles();

  const [inputCodeFromEmail, setInputCodeFromEmail] = useState('');
  const [inputPassword1, setinputPassword1] = useState('');
  const [inputPassword2, setinputPassword2] = useState('');

  const [status, setStatus] = useState(false);
  const [statusSend, setstatusSend] = useState(501);

  const handleChangePassword = (e) => {
    let body = {
      Email: email,
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
      setTimeout(() => setstatusSend(res.status), 600);
    });

    setStatus(true);
  };

  return (
    <div>
      <Button
        style={{ margin: '35px', background: 'slategray' }}
        size="large"
        onClick={() => setPage(page - 1)}
        variant="contained"
        color="primary">
        Назад
      </Button>
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
            helperText={
              status === true ? (
                statusSend === 501 ? (
                  <div className={classes.Loading}>
                    <CircularProgress className={classes.BootScreen} />
                  </div>
                ) : statusSend === 200 ? (
                  <h1 style={{ color: '#239546', textAlign: 'center' }}> Успешно </h1>
                ) : (
                  <h1 style={{ color: 'rgb(232 35 35)' }}>
                    Неверный код <br />
                  </h1>
                )
              ) : (
                ''
              )
            }
          />
        </Box>
        <Box my={5}>
          <TextField
            error={isPasswordValid(inputPassword1) ? (inputPassword1 === '' ? false : true) : false}
            onChange={(e) => {
              isPasswordValid(setinputPassword1(e.target.value));
            }}
            helperText={
              isPasswordValid(inputPassword1) && inputPassword1 !== '' ? (
                <p>
                  Пароль должен быть не короче
                  <br /> 8 символов и содержать строч-
                  <br />
                  ную и заглавную буквы и цифру
                </p>
              ) : (
                ''
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
            error={inputPassword1 !== inputPassword2 && inputPassword2.length > 0 ? true : false}
            helperText={inputPassword1 !== inputPassword2 ? 'Пароли не совпадают' : false}
            variant="outlined"
          />
        </Box>

        <Button
          size="large"
          onClick={handleChangePassword}
          disabled={
            inputPassword1 === inputPassword2 &&
            status !== true &&
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
      </form>
    </div>
  );
}
