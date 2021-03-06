import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Grid,
} from '@material-ui/core';
import React from 'react';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FitnessCenterTwoToneIcon from '@material-ui/icons/FitnessCenterTwoTone';

import AlarmIcon from '@material-ui/icons/Alarm';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default function TemplateHistoryTrain({ date, tonnage, excercises, timeInSeconds }) {
  return (
    <Accordion>
      <AccordionSummary
        style={{ backgroundColor: '#65666a' }}
        expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
        aria-controls="panel1a-content"
        id="panel1a-header">
        <Typography style={{ color: '#fff' }}>Число: {date}</Typography>
      </AccordionSummary>
      <AccordionDetails style={{ padding: '48px 56px' }}>
        <Grid container>
          <Box style={{ width: '100%' }}>
            <Box>
              <Typography component="h6" variant="h4" color="textSecondary">
                <FitnessCenterTwoToneIcon
                  style={{ verticalAlign: 'initial', color: '#aaa', marginRight: '8px' }}
                />
                Общий вес: {tonnage} кг
              </Typography>
            </Box>
            <Box my={2}>
              <Typography component="h6" variant="h4" color="textSecondary">
                <AlarmIcon
                  style={{ verticalAlign: 'initial', color: '#999', marginRight: '8px' }}
                />
                {Math.floor(timeInSeconds / 3600)}:
                {timeInSeconds / 60 >= 60 ? timeInSeconds / 60 - 60 : timeInSeconds / 60}:
                {timeInSeconds.toString()[0] + timeInSeconds.toString()[1]}
              </Typography>
            </Box>
          </Box>

          <Box style={{ width: '100%' }} px={4}>
            <TableContainer>
              <Table style={{ width: '100%' }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Упражнение</TableCell>
                    <TableCell align="right">Вес, кг</TableCell>
                    <TableCell align="right">Количество повторений</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {excercises.map((excerciseItem) => {
                    return (
                      <TableRow>
                        <TableCell component="th" scope="row">
                          {excerciseItem.exserciseName}
                        </TableCell>
                        <TableCell align="right">{excerciseItem.quantity}</TableCell>
                        <TableCell align="right">{excerciseItem.weight}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}
