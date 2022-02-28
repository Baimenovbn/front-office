import { IRadioButtonProps } from '../models/interfaces/select.interface';

export const issuedBy: IRadioButtonProps = {
  label: 'Орган выдачи',
  valueKey: 'issuedBy',
  buttons: [
    {
      value: 'MIAK',
      label: 'МВД РК'
    },
    {
      value: 'DOJ',
      label: 'МинЮст'
    },
  ]
};
