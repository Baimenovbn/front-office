import React from 'react';
import RadioGroup, { FormControlLabel, FormLabel, FormControl } from '@mui/material';

export interface ISelect {
  value: any;
  label: string;
}

export interface IRadioProps {
  label: string,
  buttons: ISelect[];
}

function IssuedBy({ buttons, label }: IRadioProps) {

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>

    </FormControl>
  )
}
