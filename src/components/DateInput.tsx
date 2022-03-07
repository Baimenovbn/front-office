import { DatePicker } from '@mui/lab';import DateAdapter from '@mui/lab/AdapterDayjs';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { TextField } from '@mui/material';
import { EStateKeys } from '../constants/enums/backend-fields.enum';
import { StateChanger } from '../models/types/function.type';
import React, { useEffect } from 'react';

export const DateInput = React.memo((props: { setStateByKey: StateChanger }) => {
  useEffect(() => {
    console.log('DateInput');
  });
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
    <DatePicker value={new Date()}
                onChange={date => props.setStateByKey(date, EStateKeys.DOCUMENT_ISSUED_AT)}
                label="Дата выдачи"
                renderInput={(params) => <TextField required margin="normal" {...params} />}
    />
  </LocalizationProvider>
  )
});
