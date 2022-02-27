import Button from '@mui/material/Button';

export interface IFileUpload {
  multi: boolean;
}

export const EasyTapFileUpload = () => {
  return (
    <label htmlFor="upload-photo" style={{alignSelf: 'center'}} className="easy-tap-support">
      <input style={{ display: 'none' }} type="file" id="upload-photo" name="upload-photo"/>
      <Button color="primary" variant="contained" component="span">
        Загрузить файл
      </Button>
    </label>
  );
}
