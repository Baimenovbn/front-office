import { EStateKeys } from '../../constants/enums/backend-fields.enum';

export interface ISelect {
  value: any;
  label: string;
}

export interface IRadioButtonProps {
  label: string,
  buttons: ISelect[];
  valueKey: EStateKeys;
  setStateByKey?: <T>(newValue: T, key: EStateKeys) => void;
  value: string;
}
