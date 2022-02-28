import { TextField } from "@mui/material"
import { useContext } from 'react';
import { FormContext } from '../store/form-context';

export default function FullName() {
  const { changeState } = useContext(FormContext);
  return (
    <div className="full-name">
      <TextField onChange={e => changeState(e.target.value, 'lastName')} required className="full-name__item" label="Фамилия" variant="outlined"/>
      <TextField onChange={e => changeState(e.target.value, 'firstName')} required className="full-name__item" label="Имя" variant="outlined"/>
      <TextField onChange={e => changeState(e.target.value, 'middleName')} required className="full-name__item" label="Отчество" variant="outlined"/>
    </div>
  )
};
