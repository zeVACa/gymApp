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
  isDisabled,
  setEnabledRows,
}) {
  const classes = useStyles();

  // const kgExists = ;
  // const quantityExists = ;

  // console.log('kgExists, quantityExists', kgExists, quantityExists);

  const [weightValue, setWeightValue] = useState(
    currentTrainingExercises[page][index] ? currentTrainingExercises[page][index].kg : '',
  );
  const [quantityValue, setQuantityValue] = useState(
    currentTrainingExercises[page][index] ? currentTrainingExercises[page][index].quantity : '',
  );

  const [weightIsDirty, setWeightIsDirty] = useState(false);
  const [quantityIsDirty, setQuantityIsDirty] = useState(false);

  const [isRowFilled, setIsRowFilled] = useState(false);

  useEffect(() => {
    setWeightValue(
      currentTrainingExercises[page][index] ? currentTrainingExercises[page][index].kg : '',
    );
    setQuantityValue(
      currentTrainingExercises[page][index] ? currentTrainingExercises[page][index].quantity : '',
    );

    setWeightIsDirty(currentTrainingExercises[page][index] ? true : false);
    setQuantityIsDirty(currentTrainingExercises[page][index] ? true : false);
    // setEnabledRows(1);
  }, [page]);

  const inputChangeHandle = (setStateHandle) => (e) => {
    const inputValue = e.currentTarget.value;
    // console.log('inputValue.len = ', inputValue.length);
    if (inputValue.length < 3) {
      setStateHandle(Math.floor(inputValue));
    }
  };

  return (
    <TableRow key={index} style={isDisabled ? { backgroundColor: '#f8f8f8' } : null}>
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
          onBlur={(e) => {
            setWeightIsDirty(true);
            if (quantityValue && !isRowFilled) {
              setIsRowFilled(true);
              setEnabledRows((prevEnabledRows) => prevEnabledRows + 1);
              const data = makeDataRow(weightValue || 0, quantityValue || 0, exerciseId);
              setCurrentTrainingExercises((prevArray) => {
                const cloneArray = JSON.parse(JSON.stringify(prevArray));

                // if (!cloneArray[page][index]) {
                //   cloneArray[page] = [];
                // }
                cloneArray[page].push(data);
                return cloneArray;
              });
            }
          }}
          // disabled={isDisabled}
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
          // disabled={isDisabled}
          //  disabled={quantityIsDirty}
          onBlur={(e) => {
            setQuantityIsDirty(true);
            if (weightValue && !isRowFilled) {
              setIsRowFilled(true);
              setEnabledRows((prevEnabledRows) => prevEnabledRows + 1);
              const data = makeDataRow(weightValue || 0, quantityValue || 0, exerciseId);
              setCurrentTrainingExercises((prevArray) => {
                const cloneArray = JSON.parse(JSON.stringify(prevArray));

                // if (!cloneArray[page][index]) {
                //   cloneArray[page] = [];
                // }
                cloneArray[page].push(data);
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
