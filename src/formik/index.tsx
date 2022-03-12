import {Formik, FormikHelpers} from "formik";
import { initialState } from "../constants/initial-state";
import * as React from 'react';
import { validationSchema } from "../validation/validation-schema";

const FormikForm = ({ children }: {children: React.ReactNode}) => {
    return (
        <Formik
            initialValues={initialState}
            onSubmit={(values) => {
                console.log(values)
            }}
            validationSchema={validationSchema}
        >
            {children}
        </Formik>
    )
};

export default FormikForm;
