import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const WebcamToggle = () => {
  const [isCameraOn, setIsCameraOn] = useState(false);
  const webcamRef = useRef(null);

  return (
    <div className="flex flex-col items-center gap-4">
      {isCameraOn && (
        <Webcam
          ref={webcamRef}
          width={640}
          height={480}
          screenshotFormat="image/jpeg"
        />
      )}

      <button
        onClick={() => setIsCameraOn((prev) => !prev)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        {isCameraOn ? "Turn Off" : "Turn On"}
      </button>
    </div>
  );
};

export default WebcamToggle;
