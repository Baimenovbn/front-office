import Button from '@mui/material/Button';
import { ChangeEvent, useContext } from 'react';
import { getBase64 } from '../helpers/helpers';
import { FormContext } from '../store/form-context';
import { FormLabel } from '@mui/material';
import { EBackendKeys } from '../constants/enums/backend-fields.enum';

export interface IFileUpload {
  multi?: boolean;
  stateKey: EBackendKeys;
  label: string;
  helpText: string;
  sx?: object;
}

export const UploadButton = ({ helpText, stateKey, label, multi = false, sx = {} }: IFileUpload) => {
  const { changeState } = useContext(FormContext);
  const handleFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const formattedFiles: (string | ArrayBuffer | null)[] = [];
    const length = e.target.files?.length || 0;
    for (let i = 0; i < length; i++) {
      const base64 = await getBase64(e.target.files?.item(i));
      formattedFiles.push(base64);
    }
    e.target.value = '';
    changeState(formattedFiles, stateKey);
  }

  return (
    <div className="upload-btn">
      <FormLabel>{label}</FormLabel>
      <input onChange={handleFile} multiple={multi} style={{ display: 'none' }}
             type="file" id="upload-photo" name="upload-photo"
      />
      <div>
        <label htmlFor="upload-photo">
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
