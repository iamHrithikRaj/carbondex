import React from 'react';
import Webcam from "react-webcam";

const videoConstraints = {
  facingMode: { exact: "environment" }
};
export default function camera() {
  return (
    <div>
      <Webcam height={600} videoConstraints={videoConstraints}/>
    </div>
  )
}
