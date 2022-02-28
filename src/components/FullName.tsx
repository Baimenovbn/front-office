import { TextField } from "@mui/material"
import { useContext } from 'react';
import { FormContext } from '../store/form-context';
import { EBackendKeys } from '../constants/enums/backend-fields.enum';

export default function FullName() {
  const state = useContext(FormContext);
  return (
    <div className="full-name">
      <TextField value={state[EBackendKeys.LAST_NAME]} onChange={e => state.changeState(e.target.value, EBackendKeys.LAST_NAME)}
                 required className="full-name__item" label="Фамилия" variant="outlined"/>

      <TextField value={state[EBackendKeys.FIST_NAME]} onChange={e => state.changeState(e.target.value, EBackendKeys.FIST_NAME)}
                 required className="full-name__item" label="Имя" variant="outlined"/>

      <TextField value={state[EBackendKeys.MIDDLE_NAME]} onChange={e => state.changeState(e.target.value, EBackendKeys.MIDDLE_NAME)}
                 required className="full-name__item" label="Отчество" variant="outlined"/>
    </div>
  )
};
