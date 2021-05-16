import React from 'react';
import Powerslap from '../media/Landing.mp4';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

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
  video: {
    width: '100%',
    position: 'relative',
  },
  header: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: '500',
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div className="landing">
      <Typography bold variant="h1" className={classes.header}>
        Hard work pays off
      </Typography>
      <div className={classes.videoWrapper}>
        <video autoPlay loop muted className={classes.video}>
          <source src={Powerslap} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
