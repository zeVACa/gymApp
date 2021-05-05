import { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles, TextField } from '@material-ui/core';
import DataRow from './DataRow';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

let mockData = [
  {
    exerciseId: 1,
    kg: 60,
    quantity: 1,
    startTime: '2019-01-06T17:16:40',
    endTime: '2019-01-08T17:16:40',
  },
];

export default function TableSession({
  page,
  trainingPlan,
  currentTrainingExercises,
  setCurrentTrainingExercises,
}) {
  const classes = useStyles();

  const [enabledRows, setEnabledRows] = useState(1);

  useEffect(() => {
    console.log('exercises on page', currentTrainingExercises[page]);
    setEnabledRows(currentTrainingExercises[page].length + 1);
  }, [page]);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Подход</TableCell>
            <TableCell align="right">Вес, кг</TableCell>
            <TableCell align="right">Количество повторений</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from({ length: trainingPlan.excercises[page].setsNumber }).map((row, index) => (
            <DataRow
              exerciseId={trainingPlan.excercises[page].id}
              index={index}
              page={page}
              currentTrainingExercises={currentTrainingExercises}
              setCurrentTrainingExercises={setCurrentTrainingExercises}
              isDisabled={index + 1 > enabledRows}
              setEnabledRows={setEnabledRows}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
