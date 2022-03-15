import React, {useContext, useMemo} from 'react';
import './App.css';

import {FastField, Form, FormikContext} from 'formik'
import {TextField} from "formik-mui";
import {DatePicker} from "formik-mui-lab";
import DateAdapter from '@mui/lab/AdapterDayjs';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import {EStateKeys} from "./models/enums/state-keys.enum";
import {EasyTapRadioButton} from "./components/EasyTapRadioButton";
import {issuedBy} from "./constants/issued-by";
import {cities} from "./constants/cities";
import {banks} from "./constants/banks";
import {Button} from '@mui/material';
import EasyTapWebcam from "./components/EasyTapWebcam";
import {fileFields} from "./constants/file-fields";
import MaskedInput from "./components/MaskedInput";
import FileUpload from "./components/FileUpload";

function App() {
    const formik = useContext(FormikContext);

    return (
        <Form className='app-container'>
            {JSON.stringify(formik.values)}
            <h1 className="header-title">Оформление на работу</h1>
            <MaskedInput name={EStateKeys.PHONE} format="+7 (###) ###-##-##" />
            <div className="full-name">
                <FastField component={TextField} name={EStateKeys.LAST_NAME} className="full-name__item" label="Фамилия" required />
                <FastField component={TextField} name={EStateKeys.FIRST_NAME} className="full-name__item" label="Имя" required/>
                <FastField component={TextField} name={EStateKeys.MIDDLE_NAME} className="full-name__item" label="Отчество" required />
            </div>
            <FastField inputProps={{maxLength: 12}} component={TextField} name={EStateKeys.IIN} label="ИИН / ЖСН" required />
            <FastField inputProps={{maxLength: 9}}
                   component={TextField}
                   name={EStateKeys.DOCUMENT_NUMBER}
                   label="Номер удостоверения личности / Жеке куәліктің нөмері"
                   required
            />
            <EasyTapRadioButton {...issuedBy} />
            <LocalizationProvider dateAdapter={DateAdapter}>
                <FastField component={DatePicker} label="Дата выдачи / Берілген күні" required name={EStateKeys.DOCUMENT_ISSUED_AT} />
            </LocalizationProvider>

            <EasyTapRadioButton {...cities} />
            <FastField component={TextField} name={EStateKeys.ADDRESS} label="Адрес / Мекен-жай" required />
            <EasyTapRadioButton {...banks} />
            <div>
                <MaskedInput name={EStateKeys.IBAN} format="KZ ## #### #### #### ####" />
                <p>приложение Kaspi – Мой банк – Инфо – Реквизиты – Правый верхний угол кнопка «Поделиться» - Копировать</p>
            </div>

           
            {
              fileFields.map(field => (
                <FileUpload maxFiles={field.maxFiles} label={field.label}
                            helperText={field.helperText} name={field.name}
                            key={field.name}
                />
              ))
            }
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
