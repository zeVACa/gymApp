import { Typography, Accordion, AccordionSummary, AccordionDetails, Box } from '@material-ui/core';
import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import WhatshotTwoToneIcon from '@material-ui/icons/WhatshotTwoTone';
import FitnessCenterTwoToneIcon from '@material-ui/icons/FitnessCenterTwoTone';
import TimelapseTwoToneIcon from '@material-ui/icons/TimelapseTwoTone';
import TodayTwoToneIcon from '@material-ui/icons/TodayTwoTone';

export default function TemplateHistoryTrain(props) {
  console.log(props.toTrain);
  return (
    <div>
      <Box mb={2}>
        <Accordion>
          <AccordionSummary
            style={{ backgroundColor: '#d8d2d2' }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header">
            <Typography>{props.toTrain.nameTrain}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <FitnessCenterTwoToneIcon /> Мышечная группа: {props.toTrain.MuscleGroup}
              <br />
              <WhatshotTwoToneIcon /> Соженно калорий: {props.toTrain.calories}
              <br />
              <TimelapseTwoToneIcon /> Продолжительность тренировки: {props.toTrain.time}
              <br />
              <TodayTwoToneIcon /> Дата : {props.toTrain.data}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
}
