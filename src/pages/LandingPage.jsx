import React from 'react';
import Powerslap from '../media/Landing.mp4';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  videoWrapper: {
    width: '100%',
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: '-10',
    height: '100vh',
    bachround: 'black',
  },
  overlay: {
    position: 'absolute',
    top: '0',
    left: '0',
    height: '100vh',
    width: '100vw',
    background: '#00000070',
    fontSize: '200px',
    zIndex: '-1',
  },
  video: {
    width: '100%',
    position: 'relative',
  },
  header: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  subHeader: {
    color: '#b2b2b2',
    fontWeight: '400',
  },
  Button: {
    padding: '15px 45px',
  },
  WrapperButton: {
    textAlign: 'center',
    marginTop: '72px',
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div className={classes.wholePage}>
      <div className={classes.overlay}></div>
      <Typography bold variant="h1" className={classes.header}>
        Hard work pays off
      </Typography>
      <Typography align="center" variant="h5" color="textSecondary" className={classes.subHeader}>
        Gym Helper - приложение для улучшения эффективности тренировок в спорт-зале
      </Typography>
      <div className={classes.WrapperButton}>
        <Link to="/register">
          <Button className={classes.Button} size="large" variant="contained" color="secondary">
            <Typography style={{ fontSize: '1.4rem' }} bold>
              НАЧАТЬ СЕЙЧАС
            </Typography>
          </Button>
        </Link>
      </div>

      <div className={classes.videoWrapper}>
        <video autoPlay loop muted className={classes.video}>
          <source src={Powerslap} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
