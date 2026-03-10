import React, { useState } from "react";

function ExerciseUpload() {

  const [video, setVideo] = useState(null);

  const handleUpload = () => {
    if (!video) {
      alert("Please select a video");
      return;
    }

    alert("Video uploaded successfully!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Upload Exercise Video</h3>

      <input
        type="file"
        accept="video/*"
        onChange={(e) => setVideo(e.target.files[0])}
      />

      <br /><br />

      <button onClick={handleUpload}>
        Upload
      </button>
    </div>
  );
}

export default ExerciseUpload;