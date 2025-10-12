"use client"; // App Router kullanıyorsan ekle

import { useState } from "react";

export default function FileUpload() {
  const [file, setFile] = useState(null);
  const [uploadedUrl, setUploadedUrl] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert("Lütfen dosya seç!");

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/lib/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setUploadedUrl(data.fileUrl);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Yükle</button>

      {uploadedUrl && (
        <div>
          <p>Yüklendi:</p>
          <a href={uploadedUrl} target="_blank" rel="noopener noreferrer">
            {uploadedUrl}
          </a>
          <br />
          {uploadedUrl.match(/\.(jpeg|jpg|png|gif|webp)$/) && (
            <img src={uploadedUrl} alt="preview" width="200" />
          )}
        </div>
      )}
    </div>
  );
}
