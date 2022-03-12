import React, {useContext, useMemo} from 'react';
import './App.css';

import {Form, FormikContext} from 'formik'
import { Field } from "formik";
import {SimpleFileUpload, TextField} from "formik-mui";
import {DatePicker} from "formik-mui-lab";
import DateAdapter from '@mui/lab/AdapterDayjs';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import {EStateKeys} from "./models/enums/state-keys.enum";
import {EasyTapRadioButton} from "./components/EasyTapRadioButton";
import {issuedBy} from "./constants/issued-by";
import {cities} from "./constants/cities";
import {banks} from "./constants/banks";
import { Button } from '@mui/material';
import EasyTapWebcam from "./components/EasyTapWebcam";
import {fileFields} from "./constants/file-fields";
import {UploadButton} from "./components/UploadButton";

function App() {
    const formik = useContext(FormikContext);
    const uploadBtns = useMemo(() => fileFields.map(fileMeta =>
        <UploadButton key={fileMeta.stateKey} {...fileMeta}/>
    ), [])

    return (
        <Form className='app-container'>
            {JSON.stringify(formik.values)}
            <h1 className="header-title">Оформление на работу</h1>
            {/*<Field component={MaskedInput} PhoneInput/>*/}
            <div className="full-name">
                <Field component={TextField} name={EStateKeys.LAST_NAME} className="full-name__item" label="Фамилия" required />
                <Field component={TextField} name={EStateKeys.FIRST_NAME} className="full-name__item" label="Имя" required/>
                <Field component={TextField} name={EStateKeys.MIDDLE_NAME} className="full-name__item" label="Отчество" required />
            </div>
            <Field inputProps={{maxLength: 12}} component={TextField} name={EStateKeys.IIN} label="ИИН / ЖСН" required />
            <Field inputProps={{maxLength: 9}}
                   component={TextField}
                   name={EStateKeys.DOCUMENT_NUMBER}
                   label="Номер удостоверения личности / Жеке куәліктің нөмері"
                   required
            />
            <EasyTapRadioButton {...issuedBy} />
            <LocalizationProvider dateAdapter={DateAdapter}>
                <Field component={DatePicker} label="Дата выдачи / Берілген күні" required name={EStateKeys.DOCUMENT_ISSUED_AT} />
            </LocalizationProvider>

            <EasyTapRadioButton {...cities} />
            <Field component={TextField} name={EStateKeys.ADDRESS} label="Адрес / Мекен-жай" required />
            <EasyTapRadioButton {...banks} />
            <div>
                {/*<Field component={MaskedInput} IBAN/>*/}
                <p>приложение Kaspi – Мой банк – Инфо – Реквизиты – Правый верхний угол кнопка «Поделиться» - Копировать</p>
            </div>
            {uploadBtns}
            <EasyTapWebcam />
            <Button  sx={{alignSelf: 'center'}} variant="contained" type="submit" color="success">
                Отправить
            </Button>
        </Form>
    )
}

export default App;
// return (
//         <div className="full-name">
//             <TextField defaultValue={''} onChange={e => setStateByKey(e.target.value, EStateKeys.LAST_NAME)}
//                        required className="full-name__item" label="Фамилия" variant="outlined"/>
//
//             <TextField defaultValue={''} onChange={e => setStateByKey(e.target.value, EStateKeys.FIST_NAME)}
//                        required className="full-name__item" label="Имя" variant="outlined"/>
//
//             <TextField defaultValue={''} onChange={e => setStateByKey(e.target.value, EStateKeys.MIDDLE_NAME)}
//                        required className="full-name__item" label="Отчество" variant="outlined"/>
//         </div>
//
//         <TextField inputProps={{ pattern: "[0-9]{12}", title: 'ИИН должен состоять из 12 цифр' }} defaultValue={''}
//                    onChange={e => setStateByKey(e.target.value, EStateKeys.IIN)} required label="ИИН" variant="outlined"/>
//         <TextField inputProps={{ pattern: "[0-9]{9}", title: 'Номер удостоверения личности должен состоять из 9 цифр' }}
//                    onChange={e => setStateByKey(e.target.value, EStateKeys.DOCUMENT_NUMBER)}
//                    required label="Номер удостоверения личности" variant="outlined"
//         />
//
//         <EasyTapRadioButton {...issuedBy} setStateByKey={memoedChanger} value={formState[EStateKeys.DOCUMENT_ISSUED_BY]} />
//
//         <DateInput setStateByKey={memoedChanger} value={formState[EStateKeys.DOCUMENT_ISSUED_AT]} />
//
//         <EasyTapRadioButton {...cities} setStateByKey={memoedChanger} value={formState[EStateKeys.CITY]} />
//
//         <TextField onChange={e => setStateByKey(e.target.value, EStateKeys.ADDRESS)}
//                    required label="Адрес / Мекен-жай" variant="outlined"
//         />
//         <EasyTapRadioButton {...banks} setStateByKey={memoedChanger} value={formState[EStateKeys.BANK_NAME]} />
//
//         <PhoneInput mask="KZ******************"
//                     data={formState[EStateKeys.IBAN]}
//                     pattern="KZ[A-Za-z0-9]{18}"
//                     maxLength={20}
//                     minLength={2}
//                     onAccept={(_, mask) => setStateByKey('KZ' + mask.unmaskedValue, EStateKeys.IBAN)}
//                     lazy={false} label="IBAN счет"
//                     placeholder="приложение Kaspi – Мой банк – Инфо – Реквизиты – Правый верхний угол кнопка «Поделиться» - Копировать"
//         />
//
//         {uploadBtns}
//
//         <EasyTapWebcam setStateByKey={memoedChanger} />
//
//         <Button  sx={{alignSelf: 'center'}} variant="contained" type="submit" color="success">
//             Отправить
//         </Button>
//     </form>
// );
