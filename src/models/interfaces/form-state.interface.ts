import {EStateKeys} from "../enums/state-keys.enum";
import {IBackendDate} from "../../API";
import { base64 } from "../types/base64.type";

export interface IFormState {
    [EStateKeys.PHONE]: string;
    [EStateKeys.FIRST_NAME]: string;
    [EStateKeys.MIDDLE_NAME]: string;
    [EStateKeys.LAST_NAME]: string;

    [EStateKeys.IIN]: string;
    [EStateKeys.DOCUMENT_NUMBER]: string;
    [EStateKeys.DOCUMENT_ISSUED_BY]: string;
    [EStateKeys.DOCUMENT_ISSUED_AT]: Date;
    [EStateKeys.CITY]: string;
    [EStateKeys.ADDRESS]: string;
    [EStateKeys.BANK_NAME]: string;
    [EStateKeys.IBAN]: string;
    [EStateKeys.CODE]: string;
    [EStateKeys.DOCUMENT_FILES]: base64[];
    [EStateKeys.VACCINE_PASSPORT_FILES]: base64[];
    [EStateKeys.MEDICAL_PASSPORT_FILES]: base64[];
    [EStateKeys.BADGE_FILES]: base64[];
}

export interface IFinalFormState extends Omit<IFormState, EStateKeys.DOCUMENT_ISSUED_AT> {
    [EStateKeys.DOCUMENT_ISSUED_AT]: IBackendDate;
}
