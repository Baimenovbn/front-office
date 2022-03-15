import {EStateKeys} from "../../models/enums/state-keys.enum";
import {ErrorCode} from "react-dropzone";
import {FormControl, FormHelperText, FormLabel} from "@mui/material";
import AcceptedFileInfo from "./AcceptedFileInfo";
import "./index.css";
import { useFileUpload } from "../../hooks/use-file-upload";

export interface IFileUpload {
    name: EStateKeys;
    label: string;
    maxFiles: number;
    helperText: string;
}
const FileUpload = (props: IFileUpload) => {
  const { label, helperText, maxFiles } = props;  
  
  const {
    fileRejections,
    getRootProps,
    getInputProps,
    field, meta,
    isTooManyFiles,
    removeFileByIndex
  } = useFileUpload(props);

    return (
      <FormControl>
          <FormLabel>
              <h3 className="file-upload__label">{label}</h3>
          </FormLabel>

          <div className="dropzone-container" {...getRootProps()}>
              <input {...getInputProps()}/>
              <p>Выберите файл(ы)</p>
              <p>Drag and drop files here</p>
          </div>

          <FormHelperText className="file-upload__helper-text">{helperText}</FormHelperText>

          {
            field.value.map((file, i) => 
              (
                <AcceptedFileInfo
                  onDelete={() => removeFileByIndex(i)}
                  file={file}
                  key={file.name}
                />
              )
            )
          }

{/* Errors */}
          <div className="error-message">{ meta.error }</div>
          {
            fileRejections.map(({file, errors}) => (
              errors.map(e => (
                  e.code === ErrorCode.FileInvalidType
                  ? <li className="error-message">{file.name}: Недопустимый формат файла</li> 
                  : null
              ))
            ))
          }

          {
            isTooManyFiles(fileRejections)
            ? <div className="error-message">Допустимое количество файлов: {maxFiles}</div>
            : null
          }
{/* Errors */}

      </FormControl>
    )
}

export default FileUpload;
