'use client';
import { useState, useCallback } from 'react';

export default function UploadImage({ onUploaded }) {
  const [file, setFile] = useState(null);
  const [pct, setPct] = useState(0);
  const [busy, setBusy] = useState(false);
  const CLOUD_NAME = 'dl1itdrzi';          
  const UPLOAD_PRESET = 'SK-2025';  
  const FOLDER = 'images';                   

  const handleUpload = useCallback(async () => {
    if (!file) { alert('Dosya seçin'); return; }
    setBusy(true); setPct(0);

    // XHR ile progress
    const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
    const form = new FormData();
    form.append('file', file);
    form.append('upload_preset', UPLOAD_PRESET);
    form.append('folder', FOLDER); // opsiyonel

    await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', url);
      xhr.upload.onprogress = (e) => {
        if (e.lengthComputable) setPct(Math.round((e.loaded / e.total) * 100));
      };
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status >= 200 && xhr.status < 300) resolve();
          else reject(new Error(`Upload failed ${xhr.status}`));
        }
      };
      xhr.onload = () => {
        try {
          const res = JSON.parse(xhr.responseText);
          onUploaded?.(res.secure_url); // ← HTTPS URL
          setBusy(false);
        } catch (e) {
          reject(e);
        }
      };
      xhr.onerror = reject;
      xhr.send(form);
    });
  }, [file, onUploaded]);

  return (
    <div style={{border:'1px solid #ddd', padding:12, borderRadius:8}}>
      <h4>Medya Yükle</h4>
      <input type="file" accept="image/*" onChange={(e)=>setFile(e.target.files[0])}/>
      <button type="button" onClick={handleUpload} disabled={busy}>
        {busy ? `Yükleniyor %${pct}` : 'Yükle'}
      </button>
    </div>
  );
}
