import { TextField } from "@mui/material"
import { useContext } from 'react';
import { FormContext } from '../store/form-context';
import { EBackendKeys } from '../constants/enums/backend-fields.enum';

export default function FullName() {
  const { changeState } = useContext(FormContext);
  return (
    <div className="full-name">
      <TextField onChange={e => changeState(e.target.value, EBackendKeys.LAST_NAME)} required className="full-name__item" label="Фамилия" variant="outlined"/>
      <TextField onChange={e => changeState(e.target.value, EBackendKeys.FIST_NAME)} required className="full-name__item" label="Имя" variant="outlined"/>
      <TextField onChange={e => changeState(e.target.value, EBackendKeys.MIDDLE_NAME)} required className="full-name__item" label="Отчество" variant="outlined"/>
    </div>
  )
};
