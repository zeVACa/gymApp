import { TableCell, TableRow, TextField } from '@material-ui/core';
import React, { useState, useEffect } from 'react';

const makeDataRow = (kg = 0, quantity = 0, exerciseId) => {
  let stamp = new Date();

  stamp.setDate(stamp.getDate());

  const fullDate = `${stamp.getFullYear()}-${
    stamp.getMonth() + 1 < 10 ? '0' + (stamp.getMonth() + 1) : stamp.getMonth() + 1
  }-${stamp.getDate() < 10 ? '0' + stamp.getDate() : stamp.getDate()}T${
    stamp.getHours() < 10 ? '0' + stamp.getHours() : stamp.getHours()
  }:${stamp.getMinutes() < 10 ? '0' + stamp.getMinutes() : stamp.getMinutes()}:${
    stamp.getSeconds() < 10 ? '0' + stamp.getSeconds() : stamp.getSeconds()
  }`;
  return {
    exerciseId,
    kg,
    quantity,
    startTime: fullDate,
    endTime: fullDate,
  };
};

export default function DataRow({
  rowIndex,
  prevWeight = 0,
  prevQuantity = 0,
  exerciseId,
  currentTrainingExercises,
  setCurrentTrainingExercises,
  page,
  isDisabled,
  setEnabledRows,
}) {
  const rowData = currentTrainingExercises[page][rowIndex];
  const [weightValue, setWeightValue] = useState(rowData ? rowData.kg : '');
  const [quantityValue, setQuantityValue] = useState(rowData ? rowData.quantity : '');

  useEffect(() => {
    setWeightValue(rowData ? rowData.kg : '');
    setQuantityValue(rowData ? rowData.quantity : '');
  }, [page]);

  const inputChangeHandle = (setStateHandle) => (e) => {
    const inputValue = e.currentTarget.value;

    if (inputValue.length < 4) setStateHandle(Math.floor(inputValue));
  };

  return (
    <TableRow key={rowIndex} style={isDisabled ? { backgroundColor: '#f8f8f8' } : null}>
      <TableCell component="th" scope="row">
        {rowIndex + 1}
      </TableCell>
      <TableCell align="right">
        <TextField
          disabled={isDisabled}
          onBlur={() => {
            if (weightValue && quantityValue) {
              setEnabledRows((prevEnabledRows) => prevEnabledRows + 1);
            }

            setCurrentTrainingExercises((prevArray) => {
              const cloneArray = JSON.parse(JSON.stringify(prevArray));
              const data = makeDataRow(weightValue || 0, quantityValue || 0, exerciseId);
              cloneArray[page][rowIndex] = data;
              return cloneArray;
            });
          }}
          onChange={inputChangeHandle(setWeightValue)}
          placeholder={prevWeight}
          type="number"
          value={weightValue}
          InputProps={{
            inputProps: {
              max: 999,
              min: 0,
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
          disabled={isDisabled}
          onBlur={() => {
            if (weightValue && quantityValue) {
              setEnabledRows((prevEnabledRows) => prevEnabledRows + 1);
            }

            const data = makeDataRow(weightValue || 0, quantityValue || 0, exerciseId);
            setCurrentTrainingExercises((prevArray) => {
              const cloneArray = JSON.parse(JSON.stringify(prevArray));
              cloneArray[page][rowIndex] = data;
              return cloneArray;
            });
          }}
          onChange={inputChangeHandle(setQuantityValue)}
          type="number"
          InputProps={{
            inputProps: {
              max: 99,
              min: 0,
            },
          }}
          variant="outlined"
          style={{ width: '80px' }}
        />
      </TableCell>
    </TableRow>
  );
}
