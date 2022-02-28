import React, { FormEvent, useContext } from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { issuedBy } from './constants/issued-by';
import { cities } from './constants/cities';
import { banks } from './constants/banks';
import { EasyTapRadioButton } from './components/EasyTapRadioButton';
import { EasyTapWebcam } from './components/EasyTapWebcam';
import { UploadButton } from './components/UploadButton';

import { FormContext } from './store/form-context';
import FullName from './components/FullName';
import { PhoneInput } from './components/PhoneInput';
import { DateInput } from './components/DateInput';
import { fileFields } from './constants/file-fields';
import { EBackendKeys } from './constants/enums/backend-fields.enum';


function App() {
  const state = useContext(FormContext);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  }
  const uploadBtns = fileFields.map(fileMeta => <UploadButton key={fileMeta.stateKey} {...fileMeta}/>);

  return (
    <form className="app-container" onSubmit={submit}>
      <h1 className="header-title">Оформление на работу</h1>
      <PhoneInput mask="+{7}(000) 000-00-00"
                  required
                  value={state.phone}
                  onComplete={(_, mask) => state.changeState(mask.unmaskedValue, EBackendKeys.PHONE)}
                  lazy={false}
      />
      <FullName key='key' />
      <TextField onChange={e => state.changeState(e.target.value, EBackendKeys.IIN)} required label="ИИН" variant="outlined"/>
      <TextField onChange={e => state.changeState(e.target.value, EBackendKeys.DOCUMENT_NUMBER)} required label="Номер удостоверения личности" variant="outlined"/>
      <EasyTapRadioButton {...issuedBy} />
      <DateInput />
      <EasyTapRadioButton {...cities} />
      <TextField onChange={e => state.changeState(e.target.value, EBackendKeys.ADDRESS)} required label="Адрес / Мекен-жай" variant="outlined"/>
      <EasyTapRadioButton {...banks} />
      <TextField onChange={e => state.changeState(e.target.value, EBackendKeys.IBAN)}
                 required label="IBAN счет" variant="outlined"
                 helperText="приложение Kaspi – Мой банк – Инфо – Реквизиты – Правый верхний угол кнопка «Поделиться» - Копировать"/>
      {uploadBtns}
      <EasyTapWebcam />
      <div style={{textAlign: 'center'}}>
        <Button variant="contained" type="submit" color="success">
          Отправить
        </Button>
      </div>
    </form>
  );
}

export default App;
