import { Container, Card } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputEmailPage from './InputEmailPage';
import ResetPage from './ResetPage';

const useStyles = makeStyles((theme) => ({
  Container: {
    display: 'flex',
  },
  Card: {
    margin: '0 auto',
    color: '#8E8E8E',
    fontFamily: 'Roboto',
    lineHeight: '50px',
    padding: '40px',
    maxWidth: '900px',
    textAlign: 'center',
    height: '900px',
  },
}));

export default function RecoverPasswordPage() {
  const classes = useStyles();

  const [email, setEmail] = useState('lol');
  const [page, setPage] = useState(0);

  const isPasswordValid = (password) => {
    const re = /(?=.*\d)(?=.*[A-ZА-ЯЁ])(?=.*[a-zа-яё]).{8,}/;
    // return re.test(String(email).toLowerCase());
    return !re.test(String(password));
  };

  const arr = [
    <InputEmailPage email={email} setEmail={setEmail} page={page} setPage={setPage} />,
    <ResetPage page={page} setPage={setPage} email={email} />,
  ];

  return (
    <div>
      <Container className={classes.Container}>
        <Card className={classes.Card}>{arr[page]}</Card>
      </Container>
    </div>
  );
}
