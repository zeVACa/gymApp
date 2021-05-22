import React from 'react';
import { useState } from 'react';
import { Button, TextField, Box, Container, Card, Typography, Snackbar } from '@material-ui/core';
import './RegisterPageStyle/stylesheet.css';
import { Redirect } from 'react-router';
import MuiAlert from '@material-ui/lab/Alert';
import { isEmailValid, isPasswordValid } from '../Validation/Valid';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
    }).then((res) => res.text());

    // setRedirect(true);
    setOpen(true);
  }

  const [inputPassword1, setinputPassword1] = useState('');
  const [inputPassword2, setinputPassword2] = useState('');
  const [inputName, setInputName] = useState('');

  const [isValidEmail, setValidEmail] = useState('');
  const [isValidLogin, setValidLogin] = useState('');

  const [open, setOpen] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

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
            maxHeight: '486px',
            maxWidth: '500px',
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'center',
            justifyContent: 'center',
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
                error={inputPassword1 !== inputPassword2 && inputPassword2.length > 0}
                helperText={
                  inputPassword1 !== inputPassword2
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
                  inputPassword1 !== inputPassword2 ||
                  isValidLogin.length < 6 ||
                  inputPassword1.length < 1
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
            <Snackbar
              open={open}
              autoHideDuration={20000}
              anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
              onClose={handleClose}>
              <Alert onClose={handleClose} severity="success">
                Подтвердите регистрацию перейдя по ссылке отправленной на вашу почту
              </Alert>
            </Snackbar>
          </form>
        </Card>
      </div>
    </Container>
  );
}

export default RegistrationPage;
