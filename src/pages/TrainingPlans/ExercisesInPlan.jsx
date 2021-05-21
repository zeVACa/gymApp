import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import FitnessCenterOutlinedIcon from '@material-ui/icons/FitnessCenterOutlined';
import BathtubIcon from '@material-ui/icons/Bathtub';

import Paper from '@material-ui/core/Paper';

import ExercisesAccordion from './ExercisesAccordion';

import './ExerciseslnPlan.css';

const useStyles = makeStyles((theme) => ({
  Container: {
    display: 'flex',
  },
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function ExercisesInPlan({ index, day, trainingPlan }) {
  const classes = useStyles();

  return (
    <div className="content">
      <TimelineItem>
        <TimelineSeparator>
          {trainingPlan.trainings[index].length !== 0 ? (
            <TimelineDot style={{ backgroundColor: '#5f66b1' }}>
              <FitnessCenterOutlinedIcon />
            </TimelineDot>
          ) : (
            <TimelineDot style={{ backgroundColor: 'rgb(60 169 144)' }}>
              <BathtubIcon style={{}} />
            </TimelineDot>
          )}
          {trainingPlan.trainings.length - 1 !== index ? <TimelineConnector /> : ''}
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              {day}
            </Typography>
            <Typography>
              {trainingPlan.trainings[index].length !== 0 ? (
                trainingPlan.trainings[index].map((exercises) => {
                  return <ExercisesAccordion exercises={exercises} />;
                })
              ) : (
                <Typography>Отдых</Typography>
              )}
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </div>
  );
}
