import React, { useState, FC } from 'react';
import { initialState } from './initial-state';
import { debounce } from '@mui/material';
import { EBackendKeys } from '../constants/enums/backend-fields.enum';

export const FormContext = React.createContext(initialState);

export const FormProvider: FC = ({ children }) => {
  const [state, setState] = useState(initialState);

  const changeState = debounce((newValue: any, valueKey: EBackendKeys | string) => {
    setState(oldState => ({...oldState, [valueKey]: newValue }));
  }, 100);
  const clearState = (() => {
    setState({...initialState, changeState, clearState});
  });

  return (
    <FormContext.Provider value={{
      ...state,
      changeState,
      clearState
    }}>
        {children}
    </FormContext.Provider>
  )
}
