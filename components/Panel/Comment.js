'use client';

import React, { useEffect, useState } from 'react';
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { database } from '@/lib/firebase';
import UpdateComment from './UpdateComment';

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editCommentIndex, setEditCommentIndex] = useState(null);
  const [editCommentData, setEditCommentData] = useState({});
  const [selectedComment, setSelectedComment] = useState(0);

  const docRef = doc(database, 'sinemkaya', 'LQnIzobySlyS2BTHEPY9');

  useEffect(() => {
    const unsubscribe = onSnapshot(docRef, (snapshot) => {
      if (snapshot.exists()) {
        const commentItems = snapshot.data().comments || [];
        setComments(commentItems);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleCommentDelete = async (index) => {
    if (!window.confirm('Bu yazıyı silmek istiyor musunuz?')) return;
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    await updateDoc(docRef, { comments: updatedComments });
  };

const handleCommentEdit = (filteredIndexComments) => {
  const commentToEdit = filteredComments[filteredIndexComments];
  const realCommentIndex = comments.findIndex((p) => p.id === commentToEdit.id); // Gerçek index
  setEditCommentIndex(realCommentIndex);
  setEditCommentData(commentToEdit);
  setTimeout(() => {
    const el = document.getElementById("edit-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, 100);
};

  const handleCommentUpdate = async () => {
    const updatedComments = [...comments];
    updatedComments[editCommentIndex] = editCommentData;
    await updateDoc(docRef, { comments: updatedComments });
    setEditCommentIndex(null);
    setEditCommentData({});
  };

    const filteredComments = selectedComment === 'all'
    ? comments
    : comments.filter((comments) => comments.isActive === Number(selectedComment));


  return (
    <div>
      <h2>Yorum Listesi</h2>
      <div className='admin-filter-container'>
        <label>Onay: </label>
        <select className='admin-filter-list' value={selectedComment} onChange={(e) => setSelectedComment(e.target.value)}>
          <option value="all">Tüm Yorumlar</option>
          <option value="1">Aktif Yorumlar</option>
          <option value="0">Onaylanmamış Yorumlar</option>
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
                <th>Post ID</th>
                <th>İsim</th>
                <th>Yorum</th>
                <th>Tarih</th>
                <th>Aktif</th>
                <th>Email</th>
                <th>İşlem</th>
              </tr>
            </thead>
            <tbody>
              {filteredComments.map((comments, index) => (
                <tr key={index}>
                  <td>{comments.id}</td>
                  <td>{comments.post_id}</td>
                  <td>{comments.name}</td>
                  <td>{comments.comment}</td>
                  <td>{comments.createdAt?.slice(0, 10)}</td>
                  <td>{comments.isActive === 1 ? '✅' : '❌'}</td>
                  <td>{comments.email}</td>
                  <td>
                    <button onClick={() => handleCommentEdit(index)}>Düzenle</button>
                    <button onClick={() => handleCommentDelete(index)}>Sil</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {editCommentIndex !== null && (
            <UpdateComment
              editCommentData={editCommentData}
              setEditCommentData={setEditCommentData}
              handleCommentUpdate={handleCommentUpdate}
              cancelEdit={() => setEditCommentIndex(null)}
            />
          )}
        </>
      )}
    </div>
  );
}
