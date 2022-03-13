import * as Yup from 'yup';
import { setLocale } from 'yup';

import {EStateKeys} from "../models/enums/state-keys.enum";
import {MessageParams} from "yup/lib/types";
import {base64} from "../models/types/base64.type";

setLocale({
    mixed: {
        required: 'Это поле обязательно!',
    },
});

const minLength = ({length}: { length: number; } & MessageParams) => `Минимальное количество символов: ${length}`
const onlyNumbers = 'Поле должно состоять только из цифр';
const RESPECTIVELY_TO_MASK = 'Введите данные в соответствии с формой';
const ONLY_NUMBERS_REGEX = /^[0-9]+$/;

export const validationSchema = Yup.object({
    [EStateKeys.PHONE]: Yup.string().required().length(11, RESPECTIVELY_TO_MASK),
    [EStateKeys.FIRST_NAME]: Yup.string().required(),
    [EStateKeys.LAST_NAME]: Yup.string().required(),
    [EStateKeys.MIDDLE_NAME]: Yup.string().required(),

    [EStateKeys.IIN]: Yup.string().matches(ONLY_NUMBERS_REGEX, onlyNumbers).length(12, minLength).required(),
    [EStateKeys.DOCUMENT_NUMBER]: Yup.string().matches(ONLY_NUMBERS_REGEX, onlyNumbers).length(9, minLength).required(),
    [EStateKeys.DOCUMENT_ISSUED_BY]: Yup.string().required(),
    [EStateKeys.DOCUMENT_ISSUED_AT]: Yup.date().required(),
    [EStateKeys.CITY]: Yup.string().required(),
    [EStateKeys.ADDRESS]: Yup.string().required(),
    [EStateKeys.BANK_NAME]: Yup.string().required(),
    [EStateKeys.IBAN]: Yup.string().length(18, RESPECTIVELY_TO_MASK).required(),

    [EStateKeys.DOCUMENT_FILES]:  Yup.array().length(1).required(),
    [EStateKeys.VACCINE_PASSPORT_FILES]:  Yup.array().length(1).required(),
    [EStateKeys.MEDICAL_PASSPORT_FILES]:  Yup.array().length(1).required(),
    [EStateKeys.BADGE_FILES]: Yup.array().length(1).required(),
})
