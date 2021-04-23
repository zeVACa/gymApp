import { Button, Container } from '@material-ui/core';
import { LocalHospital } from '@material-ui/icons';
import React from 'react';

export default function SettingsPage({ setUser }) {
  return (
    <div>
      <Container>
        <Button
          onClick={() => {
            localStorage.setItem('user', null);
            setUser(null);
          }}
          variant="contained"
          color="primary">
          Сменить пользователя
        </Button>
      </Container>
    </div>
  );
}
