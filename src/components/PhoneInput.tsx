import { TextField } from '@mui/material';
import { IMaskMixin } from 'react-imask';
import React from 'react';

export const PhoneInput = IMaskMixin(({inputRef}) => (<TextField inputRef={inputRef} />));
