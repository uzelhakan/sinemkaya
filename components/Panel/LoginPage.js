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
      setError('Hatalı şifre');
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
        onKeyDown={(e) => e.key === 'Enter' && handleLogin()} // Enter tuşu
        autoComplete="current-password"
      />
      <button onClick={handleLogin}>Giriş Yap</button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}
