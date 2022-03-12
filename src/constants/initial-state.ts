import { EStateKeys } from '../models/enums/state-keys.enum';
import {IFormState} from "../models/interfaces/form-state.interface";

const today = new Date();

export const initialState: IFormState = {
  [EStateKeys.PHONE]: '',
  [EStateKeys.LAST_NAME]: '',
  [EStateKeys.MIDDLE_NAME]: '',
  [EStateKeys.FIRST_NAME]: '',

  [EStateKeys.IIN]: '',
  [EStateKeys.DOCUMENT_NUMBER]: '',
  [EStateKeys.DOCUMENT_ISSUED_BY]: '',
  [EStateKeys.DOCUMENT_ISSUED_AT]: today,

  [EStateKeys.CITY]: '',
  [EStateKeys.ADDRESS]: '',

  [EStateKeys.BANK_NAME]: '',
  [EStateKeys.IBAN]: '',

  [EStateKeys.CODE]: '',

  [EStateKeys.DOCUMENT_FILES]: [],
  [EStateKeys.VACCINE_PASSPORT_FILES]: [],
  [EStateKeys.MEDICAL_PASSPORT_FILES]: [],

  [EStateKeys.BADGE_FILES]: []
};
