import React from 'react';
import './App.css';

import {FastField, Form} from 'formik'
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
    return (
        <Form className='app-container'>
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
