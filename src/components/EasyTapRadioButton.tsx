import { IRadioButtonProps } from '../models/interfaces/select.interface';
import {memo, useMemo} from 'react';
import {FastField} from 'formik';
import { RadioGroup } from "formik-mui";
import {FormControl, FormControlLabel, FormLabel, Radio} from "@mui/material";

export const EasyTapRadioButton = memo((props: IRadioButtonProps) => {
    const options = useMemo(() => props.options.map(option => (
        <FormControlLabel control={<Radio />} key={option.value} label={option.label} value={option.value} />
    )), []);

    return (
        <FormControl className="easy-input">
            <FormLabel required>{props.label}</FormLabel>
            <FastField component={RadioGroup} name={props.name} label={props.label}>
                {options}
            </FastField>
        </FormControl>
    )
});
