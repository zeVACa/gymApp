import React from 'react';
import Powerslap from '../components/Media/Landing.mp4';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  videoLanding: {
    // position: 'absolute',
    width: '100%',
    // height: '100%',
    // left: '50%',
    // top: '50%',
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div style={{ flexGrow: 1 }}>
      <video autoPlay loop muted className={classes.videoLanding}>
        <source src={Powerslap} type="video/mp4" />
      </video>
    </div>
  );
}
