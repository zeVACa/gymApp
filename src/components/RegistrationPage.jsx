import React from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField, Box, Container, Checkbox, Card, Typography } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function RegistrationPage() {
  function handleSubmit(e) {
    e.preventDefault();
    // alert('Имя:');
    // let data = await fetch('http://fitness-app.germanywestcentral.cloudapp.azure.com//api/TrainingPlans', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8',
    //   },
    //   body: {
    //     UserLogin: 'Testik',
    //     Password: 'testfrombrow',
    //   },
    // });
    // console.log(data);
  }

  return (
    <Container>
      <Card
        style={{
          marginTop: '150px',
          color: '#8E8E8E',
          fontFamily: 'Roboto',
          lineHeight: '50px',
          fontSize: '18px',
          padding: '40px',
          maxWidth: '500px',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
        }}>
        <Typography variant="h5" component="h2">
          Добро пожаловать
        </Typography>
        <form action="POST">
          <Box my={2}>
            <TextField
              required
              id="standard-basic"
              variant="outlined"
              autoComplete="off"
              label="Имя"
            />
          </Box>

          <Box my={2}>
            <TextField
              required
              id="standard-basic"
              variant="outlined"
              autoComplete="off"
              label="Почта"
            />
          </Box>
          <Box my={2}>
            <TextField
              required
              id="standard-basic"
              variant="outlined"
              autoComplete="off"
              label="Пароль"
              type="password"
            />
          </Box>
          <Box my={2}>
            <TextField
              required
              id="standard-basic"
              variant="outlined"
              autoComplete="false"
              label="Повторите пароль"
              type="password"
            />
          </Box>
          <div>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleSubmit}
              style={{ width: '200px', height: '45px', marginTop: '30px' }}>
              Зарегестрироваться
            </Button>
          </div>
        </form>
      </Card>
    </Container>
  );
}

export default RegistrationPage;
