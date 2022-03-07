import React, { useMemo } from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { issuedBy } from './constants/issued-by';
import { cities } from './constants/cities';
import { banks } from './constants/banks';
import { EasyTapRadioButton } from './components/EasyTapRadioButton';
import EasyTapWebcam from './components/EasyTapWebcam';
import { UploadButton } from './components/UploadButton';

import { PhoneInput } from './components/PhoneInput';
import { DateInput } from './components/DateInput';
import { fileFields } from './constants/file-fields';
import { EStateKeys } from './constants/enums/backend-fields.enum';
import useFormState from './store/useFormState';



function App() {
  const { formState, setStateByKey, submitForm } = useFormState();
  const memoedChanger = useMemo(() => setStateByKey, []);
  const uploadBtns = useMemo(() => fileFields.map(fileMeta =>
    <UploadButton key={fileMeta.stateKey} {...fileMeta} setStateByKey={setStateByKey}/>
  ), []);

  return (
    <form className="app-container" onSubmit={submitForm}>
      <h1 className="header-title">Оформление на работу</h1>
      <PhoneInput mask="+{7}(000) 000-00-00"
                  required
                  defaultValue={''}
                  onComplete={(_, mask) => setStateByKey(mask.unmaskedValue, EStateKeys.PHONE)}
                  lazy={false} pattern="[0-9]{11}"
      />
      <div className="full-name">
        <TextField defaultValue={''} onChange={e => setStateByKey(e.target.value, EStateKeys.LAST_NAME)}
                   required className="full-name__item" label="Фамилия" variant="outlined"/>

        <TextField defaultValue={''} onChange={e => setStateByKey(e.target.value, EStateKeys.FIST_NAME)}
                   required className="full-name__item" label="Имя" variant="outlined"/>

        <TextField defaultValue={''} onChange={e => setStateByKey(e.target.value, EStateKeys.MIDDLE_NAME)}
                   required className="full-name__item" label="Отчество" variant="outlined"/>
      </div>
      <TextField inputProps={{ pattern: "[0-9]{12}", title: 'ИИН должен состоять из 12 цифр' }} defaultValue={''}
                 onChange={e => setStateByKey(e.target.value, EStateKeys.IIN)} required label="ИИН" variant="outlined"/>
      <TextField inputProps={{ pattern: "[0-9]{9}", title: 'Номер удостоверения личности должен состоять из 9 цифр' }}
                 onChange={e => setStateByKey(e.target.value, EStateKeys.DOCUMENT_NUMBER)}
                 required label="Номер удостоверения личности" variant="outlined"
      />
      <EasyTapRadioButton {...issuedBy} setStateByKey={memoedChanger} value={formState[EStateKeys.DOCUMENT_ISSUED_BY]} />
      <DateInput setStateByKey={memoedChanger} />
      <EasyTapRadioButton {...cities} setStateByKey={memoedChanger} value={formState[EStateKeys.CITY]} />
      <TextField onChange={e => setStateByKey(e.target.value, EStateKeys.ADDRESS)}
                 required label="Адрес / Мекен-жай" variant="outlined"
      />
      <EasyTapRadioButton {...banks} setStateByKey={memoedChanger} value={formState[EStateKeys.BANK_NAME]} />
      <PhoneInput mask="KZ******************"
                  required pattern="KZ[A-Za-z0-9]{18}"
                  defaultValue={''}
                  onComplete={(_, mask) => setStateByKey(mask.unmaskedValue, EStateKeys.IBAN)}
                  lazy={false} label="IBAN счет" placeholder="приложение Kaspi – Мой банк – Инфо – Реквизиты – Правый верхний угол кнопка «Поделиться» - Копировать"
      />
      {uploadBtns}
      <EasyTapWebcam setStateByKey={memoedChanger} />
      <div style={{textAlign: 'center'}}>
        <Button variant="contained" type="submit" color="success">
          Отправить
        </Button>
      </div>
    </form>
  );
}

export default App;
