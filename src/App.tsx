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
import {API, backendData} from './API';
import {generateCode, getFormattedDate} from './helpers/helpers';



function App() {
  const state = useContext(FormContext);
  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const code = generateCode();
    const date = state[EBackendKeys.DOCUMENT_ISSUED_AT];

    state.changeState(code, EBackendKeys.CODE);

    const newState = {...state, [EBackendKeys.DOCUMENT_ISSUED_AT]: getFormattedDate(date)} as unknown as backendData;

    const response = await API.sumbitForm(newState, code);
    state.clearState();
    console.log(response);
  }
  const uploadBtns = fileFields.map(fileMeta => <UploadButton key={fileMeta.stateKey} {...fileMeta}/>);

  return (
    <form className="app-container" onSubmit={submit}>
      <h1 className="header-title">Оформление на работу</h1>
      <PhoneInput mask="+{7}(000) 000-00-00"
                  required
                  value={state[EBackendKeys.PHONE]}
                  onComplete={(_, mask) => state.changeState(mask.unmaskedValue, EBackendKeys.PHONE)}
                  lazy={false} pattern="[0-9]{11}"
      />
      <FullName/>
      <TextField inputProps={{ pattern: "[0-9]{12}", title: 'ИИН должен состоять из 12 цифр' }} value={EBackendKeys.IIN}
                 onChange={e => state.changeState(e.target.value, EBackendKeys.IIN)} required label="ИИН" variant="outlined"/>
      <TextField inputProps={{ pattern: "[0-9]{9}", title: 'Номер удостоверения личности должен состоять из 9 цифр' }} value={state[EBackendKeys.DOCUMENT_NUMBER]}
                 onChange={e => state.changeState(e.target.value, EBackendKeys.DOCUMENT_NUMBER)}
                 required label="Номер удостоверения личности" variant="outlined"
      />
      <EasyTapRadioButton {...issuedBy} />
      <DateInput />
      <EasyTapRadioButton {...cities} />
      <TextField onChange={e => state.changeState(e.target.value, EBackendKeys.ADDRESS)}
                 required label="Адрес / Мекен-жай" variant="outlined"
                 value={EBackendKeys.ADDRESS}
      />
      <EasyTapRadioButton {...banks} />
      <PhoneInput mask="KZ******************"
                  required pattern="KZ[A-Za-z0-9]{18}"
                  value={state[EBackendKeys.IBAN]}
                  onComplete={(_, mask) => state.changeState(mask.unmaskedValue, EBackendKeys.IBAN)}
                  lazy={false} label="IBAN счет" placeholder="приложение Kaspi – Мой банк – Инфо – Реквизиты – Правый верхний угол кнопка «Поделиться» - Копировать"
      />
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
