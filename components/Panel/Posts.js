'use client';

import React, { useEffect, useState } from 'react';
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { database } from '@/lib/firebase';
import UpdatePost from './UpdatePost';
import AddPostForm from './AddPost';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showModal, setShowModal] = useState(false);

  const docRef = doc(database, 'sinemkaya', 'LQnIzobySlyS2BTHEPY9');

  useEffect(() => {
    const unsubscribe = onSnapshot(docRef, (snapshot) => {
      if (snapshot.exists()) {
        const postItems = snapshot.data().post || [];
        setPosts(postItems);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleDelete = async (index) => {
    if (!window.confirm('Bu yazıyı silmek istiyor musunuz?')) return;
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    await updateDoc(docRef, { post: updatedPosts });
  };

  const filteredPosts = selectedCategory === 'all'
    ? posts
    : posts.filter((post) => post.category_id === selectedCategory);

  const handleEdit = (filteredIndex) => {
    const postToEdit = filteredPosts[filteredIndex];
    const realIndex = posts.findIndex((p) => p.id === postToEdit.id);
    setEditIndex(realIndex);
    setEditData(postToEdit);
    setTimeout(() => {
      const el = document.getElementById("edit-form");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleUpdate = async () => {
    const updatedPosts = [...posts];
    updatedPosts[editIndex] = editData;
    await updateDoc(docRef, { post: updatedPosts });
    setEditIndex(null);
    setEditData({});
  };

  return (
    <div className='__panel__container'>
      <div className='admin-title-container'>
        <h2>Post Listesi</h2>
        <button className='add-post-popup' onClick={() => setShowModal(true)}>
          <h5>Yeni Yazı Ekle</h5>
          <span className='add-post-icon'></span>
        </button>
      </div>

      <div className='show-post-form'>
        {showModal && (
          <div className="modal-overlay" onClick={() => setShowModal(false)} style={{position: 'relative', width: '100%'}}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button onClick={() => setShowModal(false)}>Kapat</button>
              <AddPostForm onPostAdded={() => console.log("Post eklendi!")} />
            </div>
          </div>
        )}
      </div>

      <div className='admin-filter-container'>
        <label>Filtrele: </label>
        <select className='admin-filter-list' value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="all">Tüm Kategoriler</option>
          <option value="1">Yazılar</option>
          <option value="2">Şiirler</option>
          <option value="3">Makaleler</option>
          <option value="4">Astroloji Yazıları</option>
          <option value="5">Şifa ve Farkındalık Yazıları</option>
          <option value="6">Karma Astroloji</option>
          <option value="7">Astroloji ve Şifa Etiği</option>
          <option value="8">Şifa Çalışmaları</option>
          <option value="9">Haberler</option>
          <option value="10">Articles in English</option>
        </select>
      </div>

      {loading ? (
        <p>Yükleniyor...</p>
      ) : (
        <>
          <table className="admin-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Cat</th>
                <th>Başlık</th>
                <th>Tarih</th>
                <th hidden>Video URL</th>
                <th>Resim</th>
                <th hidden>User</th>
                <th>Gösterim</th>
                <th>Aktif</th>
                <th hidden>Uzunluk</th>
                <th hidden>Post Tipi</th>
                <th className='__panel_post_btn'>İşlem</th>
              </tr>
            </thead>
            <tbody>
              {filteredPosts.map((post, index) => (
                <tr key={post.id ?? index}>
                  <td>{post.id}</td>
                  <td>{post.category_id}</td>
                  <td>{post.title}</td>
                  <td>{post.createdAt?.slice(0, 10)}</td>
                  <td hidden>{post.video_url || '-'}</td>
                  <td>
                    {/* ↓ Firebase URL’yi direkt kullan. assets/uploads ÖNEKİNİ SİL */}
<img
  src={
    (() => {
      const v = post?.img_url;
      const s = typeof v === "string" ? v.trim() : "";
      if (!s) return "/assets/uploads/nonphoto.png"; // varsayılan
      if (/^(https?:)?\/\//i.test(s)) return s;      // Cloudinary veya tam URL
      return `/assets/uploads/${s.replace(/^\/+/, "")}`; // eski yüklemeler
    })()
  }
  alt={post?.title || "img"}
  width="40"
/>

                  </td>
                  <td hidden>{post.user_id}</td>
                  <td>{post.display_count}</td>
                  <td>{post.isActive === '1' ? '✅' : '❌'}</td>
                  <td hidden>{post.length}</td>
                  <td hidden>{post.post_type}</td>
                  <td className='__panel_post_btn'>
                    <button onClick={() => handleEdit(index)}>Düzenle</button>
                    <button onClick={() => handleDelete(index)}>Sil</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {editIndex !== null && (
            <UpdatePost
              editData={editData}
              setEditData={setEditData}
              handleUpdate={handleUpdate}
              cancelEdit={() => setEditIndex(null)}
            />
          )}
        </>
      )}
    </div>
  );
}
