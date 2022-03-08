import { DatePicker } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterDayjs';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { TextField } from '@mui/material';
import { EStateKeys } from '../constants/enums/backend-fields.enum';
import { StateChanger } from '../models/types/function.type';
import { memo, useEffect } from 'react';
import { Dayjs } from 'dayjs';

export const DateInput = memo((props: { setStateByKey: StateChanger, value: Date }) => {
  useEffect(() => {
    console.log('DateInput');
  });

  const setDate = (date: Dayjs | null) => {
    props.setStateByKey(date?.toDate(), EStateKeys.DOCUMENT_ISSUED_AT);
  }

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
    <DatePicker value={props.value}
                onChange={setDate}
                label="Дата выдачи"
                renderInput={(params) => <TextField required margin="normal" {...params} />}
    />
  </LocalizationProvider>
  )
});
