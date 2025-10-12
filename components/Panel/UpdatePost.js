// UpdatePost.js
'use client';

import React from 'react';

export default function UpdatePost({ editIndex, editData, setEditData, handleUpdate, setEditIndex }) {
  if (editIndex === null) return null;

  return (
    <div id="edit-form" className="edit-form">
      <div className='d-flex' style={{ width: '100%', justifyContent: 'space-between' }}>
        <h3>Yazıyı Düzenle</h3>
        <td>
          <select
            value={editData.isActive || ''}
            onChange={(e) => setEditData({ ...editData, isActive: e.target.value })}
          >
            <option value="1">Aktif</option>
            <option value="0">Pasif</option>
          </select>
        </td>
      </div>
      <table style={{ width: '100%' }}>
        <tbody>
          <tr>
            <td><label>Display Count:</label></td>
            <td><input type="text" value={editData.display_count || ''} onChange={(e) => setEditData({ ...editData, display_count: e.target.value })} /></td>

            <td><label>Length:</label></td>
            <td><input type="text" value={editData.length || ''} onChange={(e) => setEditData({ ...editData, length: e.target.value })} /></td>

            <td><label>Post Type:</label></td>
            <td><input type="text" value={editData.post_type || ''} onChange={(e) => setEditData({ ...editData, post_type: e.target.value })} /></td>

            <td><label>User ID:</label></td>
            <td><input type="text" value={editData.user_id || ''} onChange={(e) => setEditData({ ...editData, user_id: e.target.value })} /></td>

            <td><label>Image URL:</label></td>
            <td><input type="text" value={editData.img_url || ''} onChange={(e) => setEditData({ ...editData, img_url: e.target.value })} /></td>
          </tr>

          <tr>
            <td><label>Created At:</label></td>
            <td><input type="text" value={editData.createdAt || ''} onChange={(e) => setEditData({ ...editData, createdAt: e.target.value })} /></td>

            <td><label>ID:</label></td>
            <td><input type="text" value={editData.id || ''} readOnly /></td>

            <td><label>Title:</label></td>
            <td><input type="text" value={editData.title || ''} onChange={(e) => setEditData({ ...editData, title: e.target.value })} /></td>

            <td><label>Video URL:</label></td>
            <td><input type="text" value={editData.video_url || ''} onChange={(e) => setEditData({ ...editData, video_url: e.target.value })} /></td>

            <td><label>Category ID:</label></td>
            <td><input type="text" value={editData.category_id || ''} onChange={(e) => setEditData({ ...editData, category_id: e.target.value })} /></td>
          </tr>
        </tbody>
      </table>
      <div style={{ width: '100%' }}>
        <label>Description:</label>
        <textarea
          value={editData.description || ''}
          onChange={(e) => setEditData({ ...editData, description: e.target.value })}
          rows={10}
          style={{ width: '100%' }}
        />
      </div>
      <br />
      <button onClick={handleUpdate}>Güncelle</button>
      <button onClick={() => setEditIndex(null)}>İptal</button>
    </div>
  );
}
