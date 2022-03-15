import NumberFormat from "react-number-format";
import {FormHelperText, TextField as MuiTextField} from "@mui/material";
import React from "react";
import {useField} from "formik";
import {IMaskedInputProps} from "../models/interfaces/masked-input-props.interface";

const MaskedInput = ({ name, format, mask = '_' }: IMaskedInputProps) => {
    const [field, meta, helpers] = useField(name);

    return (
        <div>
            <NumberFormat
                customInput={MuiTextField}
                format={format}
                allowEmptyFormatting mask={mask}
                onValueChange={values => helpers.setValue(values.floatValue)}
                onBlur={field.onBlur}
                name={name}
                className="masked-input"
                error={meta.touched && Boolean(meta.error)}
            />
            <FormHelperText className="error-message">{meta.touched && meta.error}</FormHelperText>
        </div>
    )
};

export default MaskedInput;
