// updateComment.js
'use client';

import React from 'react';

export default function UpdateComment({ editCommentIndex, editCommentData, setEditCommentData, handleCommentUpdate, setEditCommentIndex }) {
  if (editCommentIndex === null) return null;

  return (
    <div id="edit-form" className="edit-form">
      <div className='d-flex' style={{ width: '100%', justifyContent: 'space-between' }}>
        <h3>Yazıyı Düzenle</h3>
      <td>
        <select
          value={editCommentData.isActive ?? ''} // null/undefined ise boş görün
          onChange={(e) =>
            setEditCommentData({
              ...editCommentData,
              isActive: Number(e.target.value), // değeri number olarak kaydet
            })
          }
        >
          <option value="">Görünme</option>
          <option value="1">Aktif</option>
          <option value="0">Pasif</option>
        </select>
      </td>
      </div>
      <table style={{ width: '100%' }}>
        <tbody>
          <tr>
            <td><label>ID:</label></td>
            <td><input type="text" value={editCommentData.id || ''} onChange={(e) => setEditCommentData({ ...editCommentData, id: e.target.value })} /></td>

            <td><label>Post ID:</label></td>
            <td><input type="text" value={editCommentData.post_id || ''} onChange={(e) => setEditCommentData({ ...editCommentData, post_id: e.target.value })} /></td>
            <td><label>Created At:</label></td>
            <td><input type="text" value={editCommentData.createdAt || ''} onChange={(e) => setEditCommentData({ ...editCommentData, createdAt: e.target.value })} /></td>
          </tr>

          <tr>

            <td><label>Name:</label></td>
            <td><input type="text" value={editCommentData.name || ''} onChange={(e) => setEditCommentData({ ...editCommentData, name: e.target.value })} /></td>

            <td><label>Email:</label></td>
            <td><input type="text" value={editCommentData.email || ''} onChange={(e) => setEditCommentData({ ...editCommentData, email: e.target.value })} /></td>
          </tr>
        </tbody>
      </table>
      <div style={{ width: '100%' }}>
        <label>Comment:</label>
        <textarea
          value={editCommentData.comment || ''}
          onChange={(e) => setEditCommentData({ ...editCommentData, comment: e.target.value })}
          rows={10}
          style={{ width: '100%' }}
        />
      </div>
      <br />
      <button onClick={handleCommentUpdate}>Güncelle</button>
      <button onClick={() => setEditCommentIndex(null)}>İptal</button>
    </div>
  );
}
