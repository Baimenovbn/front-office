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


function App() {
  const state = useContext(FormContext);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  }
  const uploadBtns = fileFields.map(fileMeta => <UploadButton {...fileMeta}/>);

  return (
    <form className="app-container" onSubmit={submit}>
      { state.city }
      <h1 className="header-title">Оформление на работу</h1>
      <div className="easy-tap-support">
        <p>
          В случае проблем и вопросов мы ждем Вас здесь
        </p>
        <a href="https://t.me/easytap_support_bot">
          easytap_support_bot
        </a>
      </div>
      <PhoneInput mask="+{7}(000) 000-00-00"
                  required
                  value={state.phone}
                  onComplete={(_, mask) => state.changeState(mask.unmaskedValue, 'phone')}
                  lazy={false}
      />
      <FullName key='key' />
      <TextField onChange={e => state.changeState(e.target.value, 'iin')} required label="ИИН" variant="outlined"/>
      <TextField onChange={e => state.changeState(e.target.value, 'documentNumber')} required label="Номер удостоверения личности" variant="outlined"/>
      <EasyTapRadioButton {...issuedBy} />
      <DateInput />
      <EasyTapRadioButton {...cities} />
      <TextField required label="Адрес / Мекен-жай" variant="outlined"/>
      <EasyTapRadioButton {...banks} />
      <TextField required label="IBAN счет" variant="outlined" helperText="приложение Kaspi – Мой банк – Инфо – Реквизиты – Правый верхний угол кнопка «Поделиться» - Копировать"/>
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
