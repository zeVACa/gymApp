import { Container } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  Container: {
    display: 'flex',
  },
}));

export default function PlanViewer({ idPlan }) {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.Container}></Container>
    </div>
  );
}
