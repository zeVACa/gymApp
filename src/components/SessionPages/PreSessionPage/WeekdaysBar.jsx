import { Button, ButtonGroup } from '@material-ui/core';
import React, { useState } from 'react';

export default function WeekdaysBar({ currentDayIndex, setCurrentDayIndex }) {
  const [weekDays, setWeekDays] = useState([
    { text: 'ПН', isPlanDay: true, isActive: true },
    { text: 'ВТ', isPlanDay: false, isActive: false },
    { text: 'СР', isPlanDay: true, isActive: false },
    { text: 'ЧТ', isPlanDay: false, isActive: false },
    { text: 'ПТ', isPlanDay: true, isActive: false },
    { text: 'СБ', isPlanDay: false, isActive: false },
    { text: 'ВС', isPlanDay: false, isActive: false },
  ]);

  return (
    <ButtonGroup
      size="large"
      variant="outlined"
      color="primary"
      aria-label="large outlined primary button group"
      style={{ marginTop: '24px', color: 'red' }}>
      {weekDays.map((item, index) => {
        return (
          <Button
            key={item.text}
            onClick={(e) => {
              setCurrentDayIndex(index);

              // setWeekDays((prevDays) => {
              //   const daysClone = JSON.parse(JSON.stringify(prevDays));

              //   for (let i = 0; i < daysClone.length; i++) {
              //     if (i === currentDayIndex) {
              //       daysClone[i].isActive = true;
              //     } else {
              //       daysClone[i].isActive = false;
              //     }
              //   }

              //   console.log('daysClone', daysClone);

              //   return daysClone;
              // });
            }}
            style={
              item.isPlanDay
                ? item.isActive
                  ? { backgroundColor: '#3f51b5', color: 'white' }
                  : { borderRightColor: '#3f51b580' }
                : { color: '#c3c3c3' }
            }
            disabled={!item.isPlanDay}>
            {item.text}
          </Button>
        );
      })}
    </ButtonGroup>
  );
}
