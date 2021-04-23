import { Typography, Accordion, AccordionSummary, AccordionDetails, Box } from '@material-ui/core';
import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import WhatshotTwoToneIcon from '@material-ui/icons/WhatshotTwoTone';
import FitnessCenterTwoToneIcon from '@material-ui/icons/FitnessCenterTwoTone';
import TimelapseTwoToneIcon from '@material-ui/icons/TimelapseTwoTone';
import TodayTwoToneIcon from '@material-ui/icons/TodayTwoTone';

export default function TemplateHistoryTrain(props) {
  return (
    <div>
      <Box mb={2}>
        <Accordion>
          <AccordionSummary
            style={{ backgroundColor: '#d8d2d2' }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header">
            <Typography>{props.toTrain.endTime.substr(0, 10)}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <FitnessCenterTwoToneIcon /> Мышечная группа: {props.toTrain.excercise.name}
              <br />
              <WhatshotTwoToneIcon /> Соженно калорий: {props.toTrain.quantity}
              <br />
              <TimelapseTwoToneIcon /> Продолжительность тренировки: {props.toTrain.quantity}
              <br />
              <TodayTwoToneIcon /> Дата : {props.toTrain.endTime.substr(0, 10)}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
}
