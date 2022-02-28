import { TextField } from '@mui/material';
import { IMaskMixin } from 'react-imask';
import React from 'react';

export const PhoneInput = IMaskMixin((props) => (
  <TextField helperText={props.placeholder} label={props.label}
             inputProps={{ pattern: props.pattern, title: props.title }}  required inputRef={props.inputRef}
  />)
);
