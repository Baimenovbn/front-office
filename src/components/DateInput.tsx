import { DatePicker } from '@mui/lab';import DateAdapter from '@mui/lab/AdapterDayjs';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { TextField } from '@mui/material';
import { useContext } from 'react';
import { FormContext } from '../store/form-context';
import { EBackendKeys } from '../constants/enums/backend-fields.enum';

export const DateInput = () => {
  const state = useContext(FormContext);

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
    <DatePicker value={state[EBackendKeys.DOCUMENT_ISSUED_AT]}
                onChange={date => state.changeState(date, EBackendKeys.DOCUMENT_ISSUED_AT)}
                label="Дата выдачи"
                renderInput={(params) => <TextField required margin="normal" {...params} />}
    />
  </LocalizationProvider>
  )
};
