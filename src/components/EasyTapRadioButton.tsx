import { RadioGroup, FormControlLabel, FormLabel, FormControl, Radio } from '@mui/material';
import { IRadioButtonProps } from '../models/interfaces/select.interface';
import { memo, useEffect } from 'react';

export const EasyTapRadioButton = memo(({ buttons, label, valueKey, setStateByKey, value }: IRadioButtonProps) => {
  useEffect(() => {
    console.log('EasyTapRadioButton');
  });
  const btns = buttons.map((btn) => (
    <FormControlLabel value={btn.value} key={btn.label} sx={{ alignSelf: 'start'}} control={<Radio />} label={btn.label}/>
  ));

  return (
    <FormControl className="easy-input">
      <FormLabel>{label}</FormLabel>
      <RadioGroup className="easy-input"
        value={value}
        onChange={(e) => setStateByKey && setStateByKey(e.target.value, valueKey)}
      >
        {btns}
      </RadioGroup>
    </FormControl>
  )
});
