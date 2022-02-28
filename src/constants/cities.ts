import { IRadioButtonProps } from '../models/interfaces/select.interface';

export const cities: IRadioButtonProps = {
  label: 'Город',
  valueKey: 'city',
  buttons: [
    {
      value: 'almaty',
      label: 'Алматы'
    },
    {
      value: 'nur-sultan',
      label: 'Нур-Султан'
    },
  ]
};
