import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField, Box, Container, Checkbox, Card, Typography } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './RegisterPageStyle/stylesheet.css';
import ReactDOM from 'react-dom';
import { Redirect, Route } from 'react-router';
import { isEmailValid, isPasswordValid } from '../Validation/Valid';

function RegistrationPage() {
  function handleSubmit(e) {
    let userData = {
      UserLogin: isValidLogin,
      Password: inputPassword1,
      Name: inputName,
      Email: isValidEmail,
    };

    e.preventDefault();
    fetch('http://fitness-app.germanywestcentral.cloudapp.azure.com/api/reg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.text())
      .then((data) => console.log(data));

    setRedirect(true);
  }

  const [inputPassword1, setinputPassword1] = useState('');

  const [inputPassword2, setinputPassword2] = useState('');

  const [inputName, setInputName] = useState('');

  const [isValidEmail, setValidEmail] = useState('');

  const [isValidLogin, setValidLogin] = useState('');

  const [redirect, setRedirect] = useState(false);

  return (
    <Container>
      <div className="Card">
        <Card
          style={{
            margin: '0 auto',
            color: '#8E8E8E',
            fontFamily: 'Roboto',
            lineHeight: '50px',
            fontSize: '18px',
            padding: '50px 105px',
            maxHeight: '487px',
            maxWidth: '500px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center',
          }}>
          <Typography variant="h5" component="h2" style={{ color: 'black' }}>
            Добро пожаловать
          </Typography>
          <form action="POST">
            <Box my={2}>
              <TextField
                required
                id="standard-basic"
                variant="outlined"
                autoComplete="off"
                value={inputName}
                onChange={(e) => {
                  setInputName(e.target.value);
                }}
                label="Имя"
              />
            </Box>

            <Box my={2}>
              <TextField
                required
                id="standard-basic"
                variant="outlined"
                autoComplete="off"
                value={isValidLogin}
                onChange={(e) => {
                  setValidLogin(e.target.value);
                }}
                error={isValidLogin.length < 6 ? (isValidLogin === '' ? false : true) : false}
                helperText={
                  isValidLogin.length < 6
                    ? isValidLogin === ''
                      ? true
                      : 'Укажите более 6 символов'
                    : true
                }
                label="Логин"
              />
            </Box>

            <Box my={2}>
              <TextField
                required
                id="standard-basic"
                variant="outlined"
                autoComplete="off"
                label="Почта"
                value={isValidEmail}
                error={isEmailValid(isValidEmail) ? (isValidEmail === '' ? false : true) : false}
                onChange={(e) => {
                  isEmailValid(setValidEmail(e.target.value));
                }}
                helperText={
                  isEmailValid(isValidEmail)
                    ? isValidEmail === ''
                      ? false
                      : 'Формат example@mail.ru'
                    : false
                }
              />
            </Box>
            <Box my={2}>
              <TextField
                required
                id="standard-basic"
                variant="outlined"
                autoComplete="off"
                label="Пароль"
                value={inputPassword1}
                onChange={(e) => {
                  setinputPassword1(e.target.value);
                }}
                error={
                  isPasswordValid(inputPassword1) ? (inputPassword1 === '' ? false : true) : false
                }
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
                type="password"
              />
            </Box>
            <Box my={2} dis>
              <TextField
                required
                id="standard-basic"
                variant="outlined"
                autoComplete="false"
                label="Повторите пароль"
                value={inputPassword2}
                onChange={(e) => {
                  setinputPassword2(e.target.value);
                }}
                type="password"
                error={
                  inputPassword1 !== inputPassword2 && inputPassword2.length > 0 ? true : false
                }
                helperText={
                  inputPassword1 != inputPassword2
                    ? inputPassword2 !== ''
                      ? 'Пароли не совпадают'
                      : ''
                    : false
                }
              />
            </Box>
            <div>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={
                  inputPassword1 != inputPassword2 ||
                  isValidLogin.length < 6 ||
                  inputPassword1.length < 1
                    ? true
                    : false
                }
                onClick={handleSubmit}
                style={{ width: '200px', height: '45px', marginTop: '30px' }}>
                Зарегестрироваться
              </Button>
              {redirect === true ? (
                <Box>
                  <Redirect to="/login" />
                </Box>
              ) : (
                ''
              )}
            </div>
          </form>
        </Card>
      </div>
    </Container>
  );
}

const styleCard = {};

export default RegistrationPage;
