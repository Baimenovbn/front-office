import { IFileUpload } from "../components/FileUpload";
import {useField} from "formik";
import { validFormats } from "../constants/valid-formats";
import {ErrorCode, FileRejection, useDropzone} from "react-dropzone";
import {useCallback} from "react";


export const useFileUpload = ({ name, maxFiles }: IFileUpload) => {
  const [field, meta, helpers] = useField<File[]>(name);

  const {
      fileRejections,
      getRootProps,
      getInputProps,
  } = useDropzone({
      accept: validFormats,
      maxFiles,
      onDropAccepted: acceptedFiles => {
          if (field.value.length >= maxFiles) {
              helpers.setError(`Допустимое количество файлов - ${maxFiles}`);
              return;
          }
          helpers.setValue([...field.value, ...acceptedFiles])
      }
  });

  const isTooManyFiles = useCallback((rejectedFiles: FileRejection[]) =>
    rejectedFiles.some(({errors}) =>
        errors.some(e => e.code === ErrorCode.TooManyFiles)
    ), 
    [fileRejections]
  );

  const removeFileByIndex = useCallback((index) => {
    helpers.setValue(field.value.filter((_, i) => i !== index))
  }, [field.value, helpers]);

  return {
    fileRejections,
    getRootProps,
    getInputProps,
    field, meta, helpers,
    isTooManyFiles,
    removeFileByIndex
  }
}