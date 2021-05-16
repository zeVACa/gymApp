import { Button, TextField, Box } from '@material-ui/core';
import React from 'react';
import { isEmailValid } from '../Validation/Valid';

export default function RecoverPasswordPage({ email, setEmail, page, setPage }) {
  const handleSendEmail = () => {
    let body = {
      Email: email,
    };
    fetch(`http://fitness-app.germanywestcentral.cloudapp.azure.com/api/ForgotPassword`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(body),
    });

    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <h2>Укажите вашу почту:</h2>
      <Box my={2}>
        <TextField
          required
          id="standard-basic"
          variant="outlined"
          autoComplete="off"
          label="Почта"
          value={email}
          error={isEmailValid(email) ? (email === '' ? false : true) : false}
          onChange={(e) => {
            isEmailValid(setEmail(e.target.value));
          }}
          helperText={
            isEmailValid(email) ? (email === '' ? false : 'Формат example@mail.ru') : false
          }
        />
      </Box>

      <Button
        size="large"
        onClick={handleSendEmail}
        disabled={!isEmailValid(email) ? (email === '' ? true : false) : true}
        variant="contained"
        color="primary">
        Отправить
      </Button>
    </div>
  );
}
