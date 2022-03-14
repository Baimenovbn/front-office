import React, {useCallback, useState} from "react";
import {EStateKeys} from "../../models/enums/state-keys.enum";
import {ErrorCode, FileRejection, useDropzone} from "react-dropzone";
import {FormControl, FormHelperText, FormLabel} from "@mui/material";
import {FieldArray, useField} from "formik";

export interface IFileUpload {
    name: EStateKeys;
    label: string;
    maxFiles?: number;
    helperText?: string;
}

const fileErrorMapper: { [code: string]: string } = {
    [ErrorCode.FileInvalidType]: 'Недопустимый формат файла',
    [ErrorCode.TooManyFiles]: 'Недопустимое количество файлов'
}

const FileUpload = ({ name, label, maxFiles = 1, helperText = '' }: IFileUpload) => {
    const [files, setFiles] = useState<File[]>([]);
    const [field, meta, helpers] = useField(name);

    const {
        acceptedFiles,
        fileRejections,
        getRootProps,
        getInputProps,
    } = useDropzone({
        accept: '.pdf, .doc, .docx, .xls, .xlsx, .csv, .txt, .rtf, .html, .zip, .mp3, .wma, .mpg, .flv, .avi, .jpg, .jpeg, .png, .gif',
        maxFiles,
        onDropAccepted: acceptedFiles => {
            if (field.value > maxFiles) {
                helpers.setError(`Превышено допустимое количество файлов - ${maxFiles}`);
                return;
            }
            helpers.setValue([...field.value, ...acceptedFiles])
        }
    });

    const isTooManyFiles = useCallback(
    (rejectedFiles: FileRejection[]) =>
        rejectedFiles.some(({errors}) =>
            errors.some(e => e.code === ErrorCode.TooManyFiles)
        ),
    [fileRejections]);

    return (
            <FieldArray name={name} render={props => (
                <FormControl>
                    <FormLabel>
                        <h3 className="file-upload__label">{props.name}</h3>
                    </FormLabel>
                    <div className="dropzone-container" {...getRootProps()}>
                        <input {...getInputProps()} name={EStateKeys.DOCUMENT_FILES}/>
                        <p>Выберите файл(ы)</p>
                        <p>Drag and drop files here</p>
                    </div>
                    {props.form.values[name].map((file: File) => (<div>{file.name}</div>))}
                    <p className="file-upload__helper-text">{helperText}</p>
                    <div className="error-message">{ meta.error }</div>
                    {fileRejections.map(({file, errors}) => (
                        <div>
                            <ul>
                                {errors.map(e => (
                                    e.code === ErrorCode.FileInvalidType ? <li>{file.name}: {fileErrorMapper[e.code]}</li> : null
                                ))}
                            </ul>
                        </div>
                    ))}
                    {
                        isTooManyFiles(fileRejections) ? <div className="error-message">Допустимое количество файлов: 2</div> : null
                    }
                </FormControl>

            )} />
    )
}

export default FileUpload;
