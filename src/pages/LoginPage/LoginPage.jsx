import React from 'react';
import classes from './LoginPage.module.css';

import { useState, useEffect } from 'react';

import { Link, Route } from 'react-router-dom';
import {
  Button,
  TextField,
  Box,
  Container,
  Checkbox,
  InputAdornment,
  IconButton,
  Paper,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

export default function LoginPage({ setUser }) {
  const [loginValue, setLoginValue] = useState('Andrey');
  const [isLoginDirty, setIsLoginDirty] = useState(false);

  const [passwordValue, setPasswordValue] = useState('Admin1.');
  const [isPasswordDirty, setIsPasswordDirty] = useState(false);
  const [isPasswordShowing, setIsPasswordShowing] = useState(false);

  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
    if (isAuthed) {
      // alert(1);
    } else {
      // alert(0);
    }
  }, [isAuthed]);

  // const isEmailValid = (email) => {
  //   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   // return re.test(String(email).toLowerCase());
  //   return true;
  // };

  const isPasswordValid = (password) => {
    return password.length >= 6;
  };

  const isLoginValid = (login) => {
    return login.length > 6;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const requestBody = {
      UserLogin: loginValue,
      Password: passwordValue,
    };

    fetch('http://fitness-app.germanywestcentral.cloudapp.azure.com/api/login', {
      method: 'POST',
      redirect: 'follow',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(requestBody),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.text();
        }
      })
      .then((data) => {
        try {
          const candidate = JSON.parse(data);

          if (candidate) {
            setUser(candidate);
            localStorage.setItem('user', JSON.stringify(candidate));
          }

          if (candidate.name) {
            setIsAuthed(true);
          }
        } catch (error) {
          throw error;
        }
      });
  };

  return (
    <div>
      <Container style={{ textAlign: 'center', padding: '48px 64x' }}>
        <h1>Авторизация</h1>

        <form action="/">
          <Box my={3}>
            <TextField
              value={loginValue}
              onChange={(e) => {
                setLoginValue(e.target.value);
              }}
              id="standard-basic"
              type="email"
              fullWidth={true}
              error={isLoginDirty && !isLoginValid(loginValue)}
              helperText={
                isLoginDirty && loginValue === ''
                  ? 'введите логин'
                  : isLoginDirty && !isLoginValid(loginValue)
                  ? 'Введите корректный логин'
                  : ''
              }
              variant="outlined"
              autoComplete="false"
              label="Логин"
              onBlur={(e) => {
                if (!isLoginDirty) setIsLoginDirty(true);
              }}
            />
          </Box>
          <Box mb={2}>
            <TextField
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
              error={isPasswordDirty && !isPasswordValid(passwordValue)}
              helperText={
                isPasswordDirty && passwordValue === ''
                  ? 'введите пароль'
                  : isPasswordDirty && !isPasswordValid(passwordValue)
                  ? 'Введите корректный пароль'
                  : ''
              }
              onBlur={(e) => {
                if (!isLoginDirty) setIsLoginDirty(true);
                if (!isPasswordDirty) setIsPasswordDirty(true);
              }}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton
                      onClick={() =>
                        setIsPasswordShowing((isPasswordShowing) => !isPasswordShowing)
                      }>
                      {isPasswordShowing ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              type={isPasswordShowing ? 'text' : 'password'}
              label="Пароль"
            />
          </Box>
          <br />
          <Box mb={3}>
            <Button
              type="submit"
              onClick={submitHandler}
              className={classes.loginButton}
              variant="contained"
              color="primary"
              disabled={
                (isLoginDirty && !isLoginValid(loginValue)) ||
                (isPasswordDirty && !isPasswordValid(passwordValue))
              }
              style={{ width: '200px', height: '45px' }}>
              Войти
            </Button>
          </Box>
        </form>
        <Box mt={3} mb={2}>
          <Link to="/recover">Восстановить пароль</Link>
        </Box>

        <Box>
          <Link to="/register">Регистрация</Link>
        </Box>
      </Container>
    </div>
  );
}
