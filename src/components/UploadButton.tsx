import Button from '@mui/material/Button';
import { ChangeEvent, useEffect } from 'react';
import { getBase64 } from '../helpers/helpers';
import { FormLabel } from '@mui/material';
import { EStateKeys } from '../constants/enums/backend-fields.enum';
import { StateChanger } from '../models/types/function.type';

export interface IFileUpload {
  multi?: boolean;
  stateKey: EStateKeys;
  label: string;
  helpText: string;
  sx?: object;
  setStateByKey?: StateChanger;

  errorText?: string,
  isError?: boolean;
}

export const UploadButton = (props: IFileUpload) => {
  useEffect(() => {
    console.log('UploadButton')
  });
  const handleFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const formattedFiles: (string | ArrayBuffer | null)[] = [];
    const length = e.target.files?.length || 0;
    for (let i = 0; i < length; i++) {
      const base64 = await getBase64(e.target.files?.item(i));
      formattedFiles.push(base64);
    }
    e.target.value = '';
    props.setStateByKey && props.setStateByKey(formattedFiles, props.stateKey);
  }

  return (
    <div className="upload-btn">
      <FormLabel>{props.label}</FormLabel>
      <input onChange={handleFile} multiple={props.multi} style={{ display: 'none' }}
             type="file" id={"upload-photo" + props.stateKey} name={"upload-photo" + props.stateKey}
      />
      <div>
        <label htmlFor={"upload-photo" + props.stateKey}>
          <Button color="primary" variant="contained" component="span" {...props.sx}>
            Загрузить файл
          </Button>
        </label>
      </div>
      <p>
        {props.helpText}
      </p>
    </div>
  );
}
