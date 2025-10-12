import React, { useState } from "react";

function AdminPanel() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);

  const handleAdd = () => {
    if (!title || !content) return alert("Boş bırakılamaz.");
    setPosts([...posts, { title, content }]);
    setTitle("");
    setContent("");
  };

  const handleEdit = (i) => {
    const post = posts[i];
    setTitle(post.title);
    setContent(post.content);
    setPosts(posts.filter((_, idx) => idx !== i));
  };

  return (
    <div className="container __panel__container">
      <h2>Yazı Ekle / Düzenle</h2>
      <input
        type="text"
        placeholder="Başlık"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        rows="5"
        placeholder="İçerik"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleAdd}>Kaydet</button>

      <hr style={{ margin: "2rem 0" }} />
      <h3>Mevcut Yazılar</h3>
      {posts.map((p, i) => (
        <div key={i}>
          <strong>{p.title}</strong>
          <p>{p.content}</p>
          <button className="panel-change" onClick={() => handleEdit(i)}>Düzenle</button>
        </div>
      ))}
    </div>
  );
}

export default AdminPanel;
