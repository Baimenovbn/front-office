import { EBackendKeys } from '../constants/enums/backend-fields.enum';

const today = new Date();

export const initialState = {
  [EBackendKeys.PHONE]: '',

  [EBackendKeys.LAST_NAME]: '',
  [EBackendKeys.MIDDLE_NAME]: '',
  [EBackendKeys.FIST_NAME]: '',
  [EBackendKeys.IIN]: '',
  [EBackendKeys.DOCUMENT_NUMBER]: '',
  [EBackendKeys.DOCUMENT_ISSUED_BY]: '',
  [EBackendKeys.DOCUMENT_ISSUED_AT]: today,

  [EBackendKeys.CITY]: '',
  [EBackendKeys.BANK_NAME]: '',
  [EBackendKeys.ADDRESS]: '',
  changeState: (newValue: any, valueKey: EBackendKeys) => {},
  clearState: () => {},
  [EBackendKeys.IBAN]: '',
  [EBackendKeys.CODE]: '',
  [EBackendKeys.DOCUMENT_FILES]: [],
  [EBackendKeys.VACCINE_PASSPORT_FILES]: [],
  [EBackendKeys.MEDICAL_PASSPORT_FILES]: [],
  [EBackendKeys.BADGE_FILES]: []
};
