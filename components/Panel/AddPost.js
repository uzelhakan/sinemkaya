'use client';

import React, { useState } from 'react';
import { Editor } from "@tinymce/tinymce-react";
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { database } from '@/lib/firebase';


export default function AddPostForm({ onPostAdded }) {
  const [uploadedUrl, setUploadedUrl] = useState('');
  const [newPost, setNewPost] = useState({
    title: '',
    category_id: '1',
    createdAt: '',
    video_url: '',
    img_url: '',
    user_id: '1',
    display_count: '0',
    isActive: '1',
    length: '0',
    post_type: '1',
    description: ''
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const docRef = doc(database, 'sinemkaya', 'LQnIzobySlyS2BTHEPY9');

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };



  const getNextPostId = (posts) => {
    if (!Array.isArray(posts)) return '1';
    const maxId = posts.reduce((max, item) => {
      const idNum = Number(item.id);
      return !isNaN(idNum) && idNum > max ? idNum : max;
    }, 0);
    return String(maxId + 1);
  };

  const handleAddPost = async () => {
    if (!newPost.title || !newPost.category_id) {
      alert('Başlık ve Kategori ID zorunludur.');
      return;
    }

    const snapshot = await getDoc(docRef);
    const postItems = snapshot.exists() ? snapshot.data().post || [] : [];
    const nextId = getNextPostId(postItems);

    const postWithId = {
      ...newPost,
      id: nextId,
      createdAt: new Date().toISOString(),
    };

    postItems.push(postWithId);
    await updateDoc(docRef, { post: postItems });
    onPostAdded();

    setNewPost({
      title: '',
      category_id: '1',
      createdAt: '',
      video_url: '',
      img_url: '',
      user_id: '1',
      display_count: '0',
      isActive: '1',
      length: '0',
      post_type: '1',
      description: ''
    });
    setSelectedFile(null);
    setUploadedUrl('');
  };

  return (
    <div className='__panel__add__container'>
      <div className='__panel__add__post' style={{ marginBottom: '2rem', width: '100%' }}>
        <h3>Yeni Yazı Ekle</h3>
        <input
          type="text"
          placeholder="Başlık"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <Editor
          apiKey="x8mmvv8hjne00754wquxh3qfcsth4n1pazj2jsvmyywhyml5"
          init={{
            height: 400,
            menubar: true,
            plugins: "link image code table lists",
            toolbar:
              "undo redo | formatselect | bold italic underline | alignleft aligncenter alignright | bullist numlist | link image | code",
          }}
          value={newPost.description}
          onEditorChange={(content) =>
            setNewPost({ ...newPost, description: content })
          }
        />

        {/* Upload Alanı */}
        <div style={{ padding: '20px' }}>
          <h5 className="text-black">Görsel Yükle</h5>
          <input type="file" onChange={handleFileChange} />
          <button type="button" onClick={handleUpload}>Yükle</button>
          {uploadedUrl && (
            <div>
              <p>Yüklendi:</p>
              <img src={uploadedUrl} alt="preview" width="200" />
            </div>
          )}
        </div>

        {/* Kategori, yazar, tip vs. */}
        <div style={{display: 'flex', justifyContent: 'space-between', padding: '20px'}}>
          <div className='d-flex flex-column'>
            <h5 className='text-black'>Kategori</h5>
            <select
              value={newPost.category_id}
              onChange={(e) => setNewPost({ ...newPost, category_id: e.target.value })}
            >
              <option value="1">Yazı</option>
              <option value="2">Şiir</option>
              <option value="3">Makale</option>
              <option value="4">Astroloji</option>
              <option value="5">Şifa ve Farkındalık Yazıları</option>
              <option value="6">Karma Astroloji</option>
              <option value="7">Astroloji ve Şifa Etiği</option>
              <option value="8">Şifa Çalışmaları</option>
              <option value="9">Haberler</option>
              <option value="10">Articles in English</option>
            </select>
          </div>
          <div className='d-flex flex-column text-gray-500'>
            <h5>Yazar</h5>
            <select
              value={newPost.user_id}
              onChange={(e) => setNewPost({ ...newPost, user_id: e.target.value })}
            >
              <option value="1">Sinem Kaya</option>
            </select>
          </div>
        </div>

        <input
          type="text"
          placeholder="Video URL"
          value={newPost.video_url}
          onChange={(e) => setNewPost({ ...newPost, video_url: e.target.value })}
        />
        <input
          type="number"
          placeholder="Gösterim"
          value={newPost.display_count}
          onChange={(e) => setNewPost({ ...newPost, display_count: e.target.value })}
        />
        <br />
        <button onClick={handleAddPost} style={{position: 'relative', width: '100%'}}>
          Ekle
        </button>
      </div>
    </div>
  );
}
