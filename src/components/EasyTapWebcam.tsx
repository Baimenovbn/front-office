import Button from '@mui/material/Button';
import React, { useContext, useState } from 'react';
import Webcam from "react-webcam";
// import { FormContext } from '../store/form-context';
// import { EBackendKeys } from '../constants/enums/backend-fields.enum';


export function EasyTapWebcam() {
  const webcamRef = React.useRef(null);
  const [isPhoto, setIsPhoto] = useState(false);
  // const { changeState } = useContext(FormContext);

  const capture = React.useCallback(
    () => {
      if (webcamRef.current) {
        const imageSrc = (webcamRef.current as any)?.getScreenshot();
      }
    },
    [webcamRef]
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {isPhoto ? <Webcam audio={false} ref={webcamRef} /> : ''}
      <div>
        <Button onClick={() => setIsPhoto(!isPhoto)}
                variant="contained" style={{marginRight: '10px'}}
        >
          Toggle Camera
        </Button>
        { isPhoto && <Button onClick={capture} variant="contained">Take A Photo</Button> }
      </div>
    </div>
  )
}
