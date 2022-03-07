import { IRadioButtonProps } from '../models/interfaces/select.interface';
import { EStateKeys } from './enums/backend-fields.enum';

export const cities: IRadioButtonProps = {
  label: 'Город',
  valueKey: EStateKeys.CITY,
  buttons: [
    {
      value: 'almaty',
      label: 'Алматы'
    },
    {
      value: 'nur-sultan',
      label: 'Нур-Султан'
    },
  ],
  value: ''
};
