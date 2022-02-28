import { IRadioButtonProps } from '../models/interfaces/select.interface';
import { EBackendKeys } from './enums/backend-fields.enum';

export const cities: IRadioButtonProps = {
  label: 'Город',
  valueKey: EBackendKeys.CITY,
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
