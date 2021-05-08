import { Button, ButtonGroup } from '@material-ui/core';
import React from 'react';

export default function WeekdaysBar({ currentDayIndex, setCurrentDayIndex }) {
  // const weekDays = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
  const weekDays = [
    { text: 'ПН', isPlanDay: true, isActive: true },
    { text: 'ВТ', isPlanDay: false, isActive: false },
    { text: 'СР', isPlanDay: true, isActive: false },
    { text: 'ЧТ', isPlanDay: false, isActive: false },
    { text: 'ПТ', isPlanDay: true, isActive: false },
    { text: 'СБ', isPlanDay: false, isActive: false },
    { text: 'ВС', isPlanDay: false, isActive: false },
  ];

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
            onClick={(e) => setCurrentDayIndex(index)}
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
