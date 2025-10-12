'use client';

import React, { useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { database } from "@/lib/firebase";

export default function MakeComment({ postId }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const docRef = doc(database, "sinemkaya", "LQnIzobySlyS2BTHEPY9"); // kendi doküman ID'ni kullan

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const snapshot = await getDoc(docRef);
      const data = snapshot.data();
      const currentComments = data.comments || [];

      const newComment = {
        post_id: postId,
        name,
        email,
        comment,
        createdAt: new Date().toLocaleString(),
        isActive: 0
      };

      const updatedComments = [...currentComments, newComment];
      await updateDoc(docRef, { comments: updatedComments });

      setSuccessMsg("Yorum başarıyla gönderildi!");
      setName("");
      setEmail("");
      setComment("");
    } catch (err) {
      console.error("Yorum gönderme hatası:", err);
      setSuccessMsg("Yorum gönderilemedi.");
    }

    setLoading(false);
  };

  return (
    <div className="comment-one">
      <h3 className="comment-one__title">Bir yorum bırakın</h3>

      <form className="comment-one__form" onSubmit={handleSubmit} noValidate>
        <div className="row">
          <div className="col-xl-12">
            <div className="comment-one__input-box">
              <input
                type="text"
                name="name"
                placeholder="Adınız"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="col-xl-12">
            <div className="comment-one__input-box">
              <input
                type="email"
                name="email"
                placeholder="E-posta"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="col-xl-12">
            <div className="comment-one__input-box text-message-box">
              <textarea
                name="comment"
                placeholder="Yorumunuzu buraya yazın.."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="comment-one__btn-box">
              <button type="submit" className="thm-btn comment-one__btn" disabled={loading}>
                {loading ? "Gönderiliyor..." : "Yorumu Gönder"}
                <span className="icon-arrow-right"></span>
              </button>
            </div>
          </div>
        </div>
      </form>

      {successMsg && <div className="result">{successMsg}</div>}
    </div>
  );
}
