import { makeStyles, TableCell, TableRow, TextField } from '@material-ui/core';
import React, { useState, useEffect } from 'react';

const useStyles = makeStyles({
  customTextField: {
    '& input::placeholder': {
      // fontSize: '20px',
      color: 'green',
      fontWeight: 'bolder',
    },
  },
});

const makeDataRow = (kg = 0, quantity = 0, exerciseId) => {
  const stamp = new Date();

  const fullDate = `${stamp.getFullYear()}-${
    stamp.getMonth() + 1
  }-${stamp.getDate()}T${stamp.getHours()}:${stamp.getMinutes()}:${stamp.getSeconds()}`;
  return {
    exerciseId,
    kg,
    quantity,
    startTime: fullDate,
    endTime: fullDate,
  };
};

export default function DataRow({
  index,
  prevWeight = 50,
  prevQuantity = 12,
  exerciseId,
  currentTrainingExercises,
  setCurrentTrainingExercises,
  page,
}) {
  const classes = useStyles();

  const kgExists = currentTrainingExercises[page][index]
    ? currentTrainingExercises[page][index].kg
    : '';
  const quantityExists = currentTrainingExercises[page][index]
    ? currentTrainingExercises[page][index].quantity
    : '';

  console.log('kgExists, quantityExists', kgExists, quantityExists);

  const [weightValue, setWeightValue] = useState(kgExists || '');
  const [quantityValue, setQuantityValue] = useState(quantityExists || '');

  const [weightIsDirty, setWeightIsDirty] = useState(false);
  const [quantityIsDirty, setQuantityIsDirty] = useState(false);

  const [isRowFilled, setIsRowFilled] = useState(false);

  useEffect(() => {
    setWeightValue(kgExists || '');
    setQuantityValue(quantityExists || '');
  }, [page]);

  const inputChangeHandle = (setStateHandle) => (e) => {
    const inputValue = e.currentTarget.value;
    console.log('inputValue.len = ', inputValue.length);
    if (inputValue.length < 3) {
      setStateHandle(Math.floor(inputValue));
    }
  };

  return (
    <TableRow key={index}>
      <TableCell component="th" scope="row">
        {index + 1}
      </TableCell>
      <TableCell align="right">
        <TextField
          //  disabled={weightIsDirty}
          onBlur={(e) => {
            if (quantityValue) {
              console.log(makeDataRow(weightValue || 0, quantityValue || 0, exerciseId));
            }

            setWeightIsDirty(true);
          }}
          onChange={inputChangeHandle(setWeightValue)}
          //  classes={weightIsDirty ? { root: classes.customTextField } : null}
          placeholder={prevWeight}
          type="number"
          value={weightValue}
          InputProps={{
            inputProps: {
              max: 100,
              min: 10,
            },
          }}
          variant="outlined"
          style={{ width: '80px' }}
        />
      </TableCell>
      <TableCell align="right">
        <TextField
          placeholder={prevQuantity}
          value={quantityValue}
          //  disabled={quantityIsDirty}
          onBlur={(e) => {
            setQuantityIsDirty(true);
            if (weightValue && !isRowFilled) {
              setIsRowFilled(true);
              const data = makeDataRow(weightValue || 0, quantityValue || 0, exerciseId);
              setCurrentTrainingExercises((prevArray) => {
                const cloneArray = JSON.parse(JSON.stringify(prevArray));

                cloneArray[page][index] = data;
                return cloneArray;
              });
            }
          }}
          onChange={inputChangeHandle(setQuantityValue)}
          //  classes={quantityIsDirty ? { root: classes.customTextField } : null}
          type="number"
          InputProps={{
            inputProps: {
              max: 100,
              min: 10,
            },
          }}
          variant="outlined"
          style={{ width: '80px' }}
        />
      </TableCell>
    </TableRow>
  );
}
