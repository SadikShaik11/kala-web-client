import React, { useState } from "react";
import axios from "axios";

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedImage) {
      alert("Please select an image file.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedImage);

    axios
      .post("/upload", formData)
      .then((response) => {
        setUploadStatus(
          `Image uploaded successfully. Link: ${response.data.link}`
        );
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
        alert("Error uploading image. Please try again.");
      });
  };

  return (
    <div>
      <h1>Image Upload</h1>
      <input type="file" onChange={handleImageChange} accept="image/*" />
      <button onClick={handleUpload}>Upload Image</button>
      <p>{uploadStatus}</p>
    </div>
  );
};

export default ImageUpload;
