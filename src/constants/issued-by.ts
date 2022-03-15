import { IRadioButtonProps } from '../models/interfaces/select.interface';
import { EStateKeys } from '../models/enums/state-keys.enum';

export const issuedBy: IRadioButtonProps = {
  label: 'Орган выдачи / Берген орган',
  name: EStateKeys.DOCUMENT_ISSUED_BY,
  options: [
    {
      value: 'MIAK',
      label: 'МВД РК'
    },
    {
      value: 'DOJ',
      label: 'МинЮст'
    },
  ],
};
