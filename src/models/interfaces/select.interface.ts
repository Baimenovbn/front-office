import { initialState } from '../../store/initial-state';

export interface ISelect {
  value: any;
  label: string;
}

export interface IRadioButtonProps {
  label: string,
  buttons: ISelect[];
  valueKey: keyof typeof initialState;
}
