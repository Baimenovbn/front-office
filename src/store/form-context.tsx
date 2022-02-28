import React, { useState, FC } from 'react';
import { initialState } from './initial-state';
import { debounce } from '@mui/material';

export const FormContext = React.createContext(initialState);

export const FormProvider: FC = ({ children }) => {
  const [state, setState] = useState(initialState);

  const changeState = debounce((newValue: any, valueKey: keyof typeof initialState | string) => {
    setState(oldState => ({...oldState, [valueKey]: newValue }));
  }, 500);

  return (
    <FormContext.Provider value={{
      ...state,
      changeState
    }}>
        {children}
    </FormContext.Provider>
  )
}
