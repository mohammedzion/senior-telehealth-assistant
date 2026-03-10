import React, { useState } from "react";
import Navbar from "../components/Navbar";
import PoseDetector from "../components/PoseDetector";

function Exercise() {

  const [video, setVideo] = useState(null);

  const handleVideoUpload = (e) => {
  const file = e.target.files[0];

  if (file) {
    const videoURL = URL.createObjectURL(file);
    setVideo(videoURL);
  }
};

  return (
    <div>

      <Navbar />

      <div style={{ textAlign: "center", padding: "40px" }}>
        <h1>Exercise Session</h1>

        <h3>Live Camera Analysis</h3>
        <PoseDetector />

        <hr style={{ margin: "40px" }} />

        <h3>Upload Exercise Video</h3>

        <input
          type="file"
          accept="video/*"
          onChange={handleVideoUpload}
        />

        {video && (
          <div style={{ marginTop: "20px" }}>
            <video
              src={video}
              width="500"
              controls
              autoPlay
              muted
            />
          </div>
)}

      </div>

    </div>
  );
}

export default Exercise;