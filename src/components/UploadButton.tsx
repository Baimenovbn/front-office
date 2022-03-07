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
}

export const UploadButton = ({ helpText, stateKey, label, multi = false, sx = {}, setStateByKey }: IFileUpload) => {
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
    setStateByKey && setStateByKey(formattedFiles, stateKey);
  }

  return (
    <div className="upload-btn">
      <FormLabel>{label}</FormLabel>
      <input onChange={handleFile} multiple={multi} style={{ display: 'none' }}
             type="file" id={"upload-photo" + stateKey} name={"upload-photo" + stateKey}
      />
      <div>
        <label htmlFor={"upload-photo" + stateKey}>
          <Button color="primary" variant="contained" component="span" {...sx}>
            Загрузить файл
          </Button>
        </label>
      </div>
      <p>
        {helpText}
      </p>
    </div>
  );
}
