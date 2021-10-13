import React, { useRef, useState } from 'react';
import { Measure } from 'react-measure';
import { useUserMedia } from './useUserMedia ';
import { useCardRatio } from './useCardRatio';
import { useOffsets } from './useOffsets';

const CAPTURE_OPTIONS = {
    audio: false,
    video: { facingMode: "environment" },
};

function Camera() {
  const videoRef = useRef();
  const mediaStream = useUserMedia(CAPTURE_OPTIONS);
  const [container, setContainer] = useState({ height: 0, width: 0 });
  const [aspectRatio, calculateRatio] = useCardRatio(1.586);
  const [isCanvasEmpty, setIsCanvasEmpty] = useState(true);
  const offsets = useOffsets(
    videoRef.current && videoRef.current.videoWidth,
    videoRef.current && videoRef.current.videoHeight,
    container.width,
    container.height
  );

  if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
    videoRef.current.srcObject = mediaStream;
  }

  function handleResize(contentRect) {
    setContainer({
      height: Math.round(contentRect.bounds.width / aspectRatio),
      width: contentRect.bounds.width
    });
  }

  function handleCanPlay() {
    calculateRatio(videoRef.current.videoHeight, videoRef.current.videoWidth);
    videoRef.current.play();
  }

  function handleCapture() {
    const context = canvasRef.current.getContext("2d");

    context.drawImage(
      videoRef.current,
      offsets.x,
      offsets.y,
      container.width,
      container.height,
      0,
      0,
      container.width,
      container.height
    );

    canvasRef.current.toBlob(blob => onCapture(blob), "image/jpeg", 1);
    setIsCanvasEmpty(false);
  }

  function handleClear() {
    const context = canvasRef.current.getContext("2d");
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    onClear();
    setIsCanvasEmpty(true);
  }

  return (
    <Measure bounds onResize={handleResize}>
      {({ measureRef }) => (
        <div>
            <div ref={measureRef} style={{ height: `${container.height}px` }}>
              <video 
                ref={videoRef}
                onCanPlay={handleCanPlay}
                style={{ top: `-${offsets.y}px`, left: `-${offsets.x}px` }} 
                autoPlay 
                playsInline 
                muted
              />
            </div>

          <button onClick={isCanvasEmpty ? handleCapture : handleClear}>
            {isCanvasEmpty ? "Take a picture" : "Take another picture"}
          </button>
        </div>
      )}
    </Measure>
  );
}
