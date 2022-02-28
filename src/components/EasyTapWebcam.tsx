import Button from '@mui/material/Button';
import React, { useState } from 'react';
import Webcam from "react-webcam";


export function EasyTapWebcam() {
  const webcamRef = React.useRef(null);
  const [isPhoto, setIsPhoto] = useState(false);

  const capture = React.useCallback(
    () => {
      if (webcamRef.current) {
        const imageSrc = (webcamRef.current as any).getScreenshot();
      }
    },
    [webcamRef]
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {isPhoto ? <Webcam audio={false} ref={webcamRef} /> : ''}
      <div>
        <Button onClick={e => setIsPhoto(!isPhoto)} variant="contained" style={{marginRight: '10px'}}>
          Toggle Camera
        </Button>
        { isPhoto && <Button onClick={capture} variant="contained">Take A Photo</Button> }
      </div>
    </div>
  )
}
