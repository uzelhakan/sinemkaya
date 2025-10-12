'use client';

import React, { useState } from 'react';

export default function LoginPage({ onLogin }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (password === 'sk777') {
      setError('');
      onLogin();
    } else {
      setError('Hatalı Şifre Girişi');
      setTimeout(() => {
      window.location.reload();
    }, 1000); // 1 saniye bekleyip sayfayı yeniler
  }
  };

  return (
    <div className="login-container">
      <h2>Yönetici Girişi</h2>
      <input
        type="password"
        placeholder="Şifre"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Giriş Yap</button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}
