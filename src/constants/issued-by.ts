import { IRadioButtonProps } from '../models/interfaces/select.interface';
import { EStateKeys } from './enums/backend-fields.enum';

export const issuedBy: IRadioButtonProps = {
  label: 'Орган выдачи',
  valueKey: EStateKeys.DOCUMENT_ISSUED_BY,
  buttons: [
    {
      value: 'MIAK',
      label: 'МВД РК'
    },
    {
      value: 'DOJ',
      label: 'МинЮст'
    },
  ],
  value: ''
};
