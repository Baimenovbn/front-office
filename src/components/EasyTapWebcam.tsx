import Button from '@mui/material/Button';
import React, { memo, useEffect, useState } from 'react';
import Webcam from "react-webcam";

function EasyTapWebcam() {
  useEffect(() => {
    console.log('EasyTapWebcam');
  });
  const webcamRef = React.useRef(null);
  const [isPhoto, setIsPhoto] = useState(false);
  const [isPhotoTaken, setIsPhotoTaken] = useState(false);
  const [imgSrc, setImgSrc] = useState('');

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
      <div className="webcam-btns">
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

export default memo(EasyTapWebcam);
