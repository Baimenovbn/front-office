import { EStateKeys } from '../enums/state-keys.enum';

export interface ISelect {
  value: any;
  label: string;
}

export interface IRadioButtonProps {
  label: string;
  name: EStateKeys | string;
  options: ISelect[];
}
