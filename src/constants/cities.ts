import { IRadioButtonProps } from '../models/interfaces/select.interface';
import { EStateKeys } from '../models/enums/state-keys.enum';

export const cities: IRadioButtonProps = {
  label: 'Город / Қала',
  name: EStateKeys.CITY,
  options: [
    {
      value: 'almaty',
      label: 'Алматы'
    },
    {
      value: 'nur-sultan',
      label: 'Нур-Султан'
    },
  ],
};
