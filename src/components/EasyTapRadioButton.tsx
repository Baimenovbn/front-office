import { RadioGroup, FormControlLabel, FormLabel, FormControl, Radio } from '@mui/material';
import { IRadioButtonProps } from '../models/interfaces/select.interface';
import { useContext } from 'react';
import { FormContext } from '../store/form-context';

export function EasyTapRadioButton({ buttons, label, valueKey }: IRadioButtonProps) {
  const btns = buttons.map((btn) => (
    <FormControlLabel value={btn.value} key={btn.label} sx={{ alignSelf: 'start'}} control={<Radio />} label={btn.label}/>
  ));
  const state = useContext(FormContext);

  return (
    <FormControl className="easy-input">
      <FormLabel>{label}</FormLabel>
      <RadioGroup className="easy-input"
        value={state[valueKey]}
        onChange={(e) => state.changeState(e.target.value, valueKey)}
      >
        {btns}
      </RadioGroup>
    </FormControl>
  )
}
