const today = new Date();

export const initialState = {
  phone: '',

  lastName: '',
  middleName: '',
  firstName: '',
  iin: '',
  documentNumber: '',
  documentIssuedBy: today,

  issuedBy: '',
  city: '',
  bankName: '',
  address: '',
  changeState: (newValue: any, valueKey: string) => {},
  iban: '',
  code: '',
  document_files: [],
  vaccine_passport_files: [],
  medical_passport_files: [],
  badge_files: []
};
