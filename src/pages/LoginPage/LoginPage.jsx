import React from 'react';
import classes from './LoginPage.module.css';

import { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import { Button, TextField, Box, Container, Checkbox } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { FilterCenterFocusTwoTone } from '@material-ui/icons';

export default function LoginPage({ setUser }) {
  const [emailValue, setEmailValue] = useState('Andrey');
  const [passwordValue, setPasswordValue] = useState('Admin1.');

  const [isEmailDirty, setIsEmailDirty] = useState(false);
  const [isPasswordDirty, setIsPasswordDirty] = useState(false);

  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
    if (isAuthed) {
      // alert(1);
    } else {
      // alert(0);
    }
  }, [isAuthed]);

  const isEmailValid = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email).toLowerCase());
    console.log(re.test(String(email).toLowerCase()));
    return true;
  };

  const isPasswordValid = (password) => {
    return password.length >= 6;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const requestBody = {
      UserLogin: emailValue,
      Password: passwordValue,
      // UserLogin: 'Andrey',
      // Password: 'Admin1.',
    };

    console.log(JSON.stringify(requestBody));

    fetch('http://fitness-app.germanywestcentral.cloudapp.azure.com/api/login', {
      method: 'POST',
      redirect: 'follow',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(requestBody),
    })
      // .then((res) => res.text())
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          // redirect
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

  const inputStyle = { width: '200px', height: '45px' };

  return (
    <div>
      <Container style={{ textAlign: 'center' }}>
        <h1>Авторизация</h1>

        <form action="/">
          <Box my={3}>
            <TextField
              value={emailValue}
              onChange={(e) => {
                setEmailValue(e.target.value);
              }}
              id="standard-basic"
              type="email"
              // required
              error={isEmailDirty && !isEmailValid(emailValue)}
              helperText={
                isEmailDirty && emailValue === ''
                  ? 'введите email'
                  : isEmailDirty && !isEmailValid(emailValue)
                  ? 'Введите корректный email'
                  : ''
              }
              variant="outlined"
              autoComplete="false"
              label="Почта"
              onBlur={(e) => {
                if (!isEmailDirty) setIsEmailDirty(true);
                // if (!isPasswordDirty) setIsPasswordDirty(true);
              }}
            />
          </Box>
          <Box mb={1}>
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
                if (!isEmailDirty) setIsEmailDirty(true);
                if (!isPasswordDirty) setIsPasswordDirty(true);
              }}
              id="standard-basic"
              variant="outlined"
              // type="password"
              type="text"
              label="Пароль"
            />
          </Box>
          <br />
          {/* <AuthButton buttonText="Log in"/> */}
          <Box mb={3}>
            <Button
              type="submit"
              onClick={submitHandler}
              className={classes.loginButton}
              variant="contained"
              color="primary"
              disabled={
                (isEmailDirty && !isEmailValid(emailValue)) ||
                (isPasswordDirty && !isPasswordValid(passwordValue))
              }
              style={{ width: '200px', height: '45px' }}>
              Войти
            </Button>
          </Box>
          {/* <FormControlLabel control={<Checkbox name="checkedA" />} label="Google" />
          <FormControlLabel control={<Checkbox name="checkedA" />} label="Facebook" />
          <FormControlLabel control={<Checkbox name="checkedA" />} label="VK" /> */}
        </form>
        <Box mt={3} mb={2}>
          <Link to="/recover">Восстановить пароль</Link>
        </Box>

        <Box>
          <Link to="/register">Регистрация</Link>
        </Box>

        {/* <Route path="/register"> */}
      </Container>
    </div>
  );
}
