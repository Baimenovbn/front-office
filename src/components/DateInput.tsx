import { DatePicker } from '@mui/lab';import DateAdapter from '@mui/lab/AdapterDayjs';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { TextField } from '@mui/material';
import { useContext } from 'react';
import { FormContext } from '../store/form-context';

export const DateInput = () => {
  const state = useContext(FormContext);

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
    <DatePicker value={state.documentIssuedBy}
                onChange={date => state.changeState(date, 'documentIssuedBy')}
                label="Дата выдачи"
                renderInput={(params) => <TextField required margin="normal" {...params} />}
    />
  </LocalizationProvider>
  )
};