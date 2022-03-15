import {Formik, FormikHelpers} from "formik";
import { initialState } from "../constants/initial-state";
import * as React from 'react';
import { validationSchema } from "../validation/validation-schema";
import {transformDataForBackend} from '../helpers/helpers';
import {API} from '../API';
import {IFormState} from '../models/interfaces/form-state.interface';
import {EStateKeys} from '../models/enums/state-keys.enum';
import {useState} from 'react';


const FormikForm = ({ children }: {children: React.ReactNode}) => {
  const [error, setError] = useState('');


  const onSubmit = async (values: IFormState, actions: FormikHelpers<IFormState>) => {
    const finalData = await transformDataForBackend(values);
    API.submitForm(finalData, finalData[EStateKeys.CODE])
      .then(() => actions.resetForm())
      .catch(() => {
        setError('Произошла ошибка при отправке данных');
        window.scrollTo(0, 0);
        setTimeout(() => setError(''), 3000);
      })
  }

    return (
      <div>
        {error && <h1 className="error-message main-error">{error}</h1>}
        <Formik
          initialValues={initialState}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {children}
        </Formik>
      </div>
    )
};

export default FormikForm;
