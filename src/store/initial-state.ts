import { EStateKeys } from '../constants/enums/backend-fields.enum';

const today = new Date();

export const initialState = {
  [EStateKeys.PHONE]: '',
  [EStateKeys.LAST_NAME]: '',
  [EStateKeys.MIDDLE_NAME]: '',
  [EStateKeys.FIST_NAME]: '',

  [EStateKeys.IIN]: '',
  [EStateKeys.DOCUMENT_NUMBER]: '',
  [EStateKeys.DOCUMENT_ISSUED_BY]: '',
  [EStateKeys.DOCUMENT_ISSUED_AT]: today,

  [EStateKeys.CITY]: '',
  [EStateKeys.ADDRESS]: '',

  [EStateKeys.BANK_NAME]: '',
  [EStateKeys.IBAN]: '',

  [EStateKeys.CODE]: '',

  [EStateKeys.DOCUMENT_FILES]: [] as any[],
  [EStateKeys.VACCINE_PASSPORT_FILES]: [] as any[],
  [EStateKeys.MEDICAL_PASSPORT_FILES]: [] as any[],

  [EStateKeys.BADGE_FILES]: [] as any[]
};
