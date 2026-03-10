import React, { useRef, useEffect } from "react";
import Webcam from "react-webcam";
import { Pose } from "@mediapipe/pose";
import { Camera } from "@mediapipe/camera_utils";

function PoseDetector() {

  const webcamRef = useRef(null);

  const videoConstraints = {
    width: 640,
    height: 480,
    facingMode: "user"
  };

  useEffect(() => {

    const pose = new Pose({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`,
    });

    pose.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    pose.onResults((results) => {
      console.log("Body points:", results.poseLandmarks);
    });

    if (webcamRef.current && webcamRef.current.video) {

      const camera = new Camera(webcamRef.current.video, {
        onFrame: async () => {
          await pose.send({
            image: webcamRef.current.video,
          });
        },
        width: 640,
        height: 480,
      });

      camera.start();
    }

  }, []);

  return (
    <div style={{ textAlign: "center" }}>

      <h2>Exercise Posture Detection</h2>

      <Webcam
        ref={webcamRef}
        audio={false}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        style={{
          width: "640px",
          borderRadius: "10px"
        }}
      />

      <p>Stand in front of the camera and perform the exercise.</p>

    </div>
  );
}

export default PoseDetector;