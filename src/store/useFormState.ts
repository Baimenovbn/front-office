import { FormEvent, useState } from 'react';
import { initialState } from './initial-state';
import { EStateKeys } from '../constants/enums/backend-fields.enum';
import { generateCode, getFormattedDate } from '../helpers/helpers';
import { API } from '../API';
import { StateChanger } from '../models/types/function.type';

const useFormState = () => {
  const [formState, setFormState] = useState(initialState);

  const setStateByKey: StateChanger = <T>(newValue: T, key: EStateKeys) => {
    setFormState(old => ({...old, [key]: newValue}));
  }

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO (@Baimenovbn): call for code field
    console.log(formState[EStateKeys.DOCUMENT_ISSUED_AT]);
    const stateForBackend = {
      ...formState,
      [EStateKeys.CODE]: generateCode(),
      [EStateKeys.DOCUMENT_ISSUED_AT]: getFormattedDate(formState[EStateKeys.DOCUMENT_ISSUED_AT])
    }

    console.log(stateForBackend);
    // const response = await API.submitForm(stateForBackend);
    // if (response.status === 200) {
    //   alert('Ваши данные были успешно обработаны');
    //   setFormState({...initialState})
    // } else {
    //   alert('Произошла какая-то ошибка при обработке ваших данных')
    // }
  }

  return { formState, setStateByKey, submitForm };
};

export default useFormState;
