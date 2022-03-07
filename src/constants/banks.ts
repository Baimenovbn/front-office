import { IRadioButtonProps } from '../models/interfaces/select.interface';
import { EStateKeys } from './enums/backend-fields.enum';

export const banks: IRadioButtonProps = {
  label: 'Ваш банк',
  valueKey: EStateKeys.BANK_NAME,
  buttons: [
    {
      value: 'kaspi',
      label: 'Kaspi Bank'
    },
    {
      value: 'halyk',
      label: 'Халык Банк'
    },
    {
      value: 'jusan',
      label: 'Jýsan Bank'
    },
    {
      value: 'sber',
      label: 'Сбербанк'
    },

    {
      value: 'alfa',
      label: 'Альфа Банк'
    },
    {
      value: 'eurasian',
      label: 'Евразийский Банк'
    },
    {
      value: 'other',
      label: 'Другой'
    },
  ],
  value: ''
};
