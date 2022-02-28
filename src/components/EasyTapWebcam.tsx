import Button from '@mui/material/Button';
import React, { useContext, useState } from 'react';
import Webcam from "react-webcam";
// import { FormContext } from '../store/form-context';
// import { EBackendKeys } from '../constants/enums/backend-fields.enum';


export function EasyTapWebcam() {
  const webcamRef = React.useRef(null);
  const [isPhoto, setIsPhoto] = useState(false);
  const [isPhotoTaken, setIsPhotoTaken] = useState(false);
  const [imgSrc, setImgSrc] = useState('');
  // const { changeState } = useContext(FormContext);

  const capture = React.useCallback(
    () => {
      if (webcamRef.current) {
        setIsPhotoTaken(true);
        setImgSrc((webcamRef.current as any)?.getScreenshot());
      }
    },
    [webcamRef]
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {
        isPhotoTaken
          ? <img src={imgSrc} alt="photo" style={{width: '60%'}}/>
          : (isPhoto ? <Webcam audio={false} width="60%" ref={webcamRef} mirrored={true} /> : '')
      }
      <div>
        <Button onClick={() => setIsPhoto(!isPhoto)}
                variant="contained" style={{marginRight: '10px'}}
        >
          Toggle Camera
        </Button>
        {
          isPhoto && (isPhotoTaken
          ? <Button onClick={() => setIsPhotoTaken(false)} variant="contained">Retake A Photo</Button>
          : <Button onClick={capture} variant="contained">Take A Photo</Button>)
        }
      </div>
    </div>
  )
}
