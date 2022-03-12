import * as Yup from 'yup';
import { setLocale } from 'yup';

import {EStateKeys} from "../models/enums/state-keys.enum";
import {MessageParams} from "yup/lib/types";

setLocale({
    mixed: {
        required: 'Это поле обязательно!',
    },
});

const minLength = ({length}: { length: number; } & MessageParams) => `Минимальное количество символов: ${length}`
const onlyNumbers = 'Поле должно состоять только из цифр';
const RESPECTIVELY_TO_MASK = 'Введите данные в соответствии с формой';
const ONLY_NUMBERS_REGEX = /^[0-9]+$/;
const IBAN_REGEX = /KZ[A-Za-z0-9]{18}/;

export const validationSchema = Yup.object({
    [EStateKeys.FIRST_NAME]: Yup.string().required(),
    [EStateKeys.LAST_NAME]: Yup.string().required(),
    [EStateKeys.MIDDLE_NAME]: Yup.string().required(),
    [EStateKeys.IIN]: Yup.string().matches(ONLY_NUMBERS_REGEX, onlyNumbers).length(12, minLength).required(),
    [EStateKeys.DOCUMENT_NUMBER]: Yup.string().matches(ONLY_NUMBERS_REGEX, onlyNumbers).length(9, minLength).required(),
    [EStateKeys.DOCUMENT_ISSUED_BY]: Yup.string().required(),
    [EStateKeys.CITY]: Yup.string().length(2, 'asd').required(),
    [EStateKeys.ADDRESS]: Yup.string().required(),
    [EStateKeys.BANK_NAME]: Yup.string().required(),
    [EStateKeys.IBAN]: Yup.string().matches(IBAN_REGEX, RESPECTIVELY_TO_MASK).required()

})
