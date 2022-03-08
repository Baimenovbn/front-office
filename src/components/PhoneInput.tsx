import { TextField } from '@mui/material';
import { IMaskMixin } from 'react-imask';
import React, { useState } from 'react';


export const PhoneInput = IMaskMixin(props => {
  const [isError, setIsError] = useState(false);
  const [helperText, setHelperText] = useState(props.placeholder || '');

  const checkForError = (e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>) => {
    const valueLength = (props.data as string).length;
    const isEmpty = valueLength <= (props && props.minLength) || 1;
    const isFilled = valueLength === props.maxLength;
    setHelperText(isEmpty ? 'Это поле обязательно к заполнению'
                  : isFilled ? '' : 'Заполните поле соответственно маске');
    setIsError(isEmpty || !isFilled);
  }

  return (
    <TextField required
               helperText={helperText}
               error={isError}
               label={props.label}
               inputProps={{ pattern: props.pattern, title: props.title }}
               inputRef={props.inputRef}
               onBlur={checkForError}
    />
  );
});
