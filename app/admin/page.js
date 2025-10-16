'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import '@/public/assets/css/admin.css';
import Posts from '@/components/Panel/Posts';
import Comments from '@/components/Panel/Comment';
import Categories from '@/components/Panel/Categories';
import LoginPage from '@/components/Panel/LoginPage';
import SimplePopup from '@/components/Panel/component/LogoutPopup';

const SESSION_MS = 2 * 60 * 60 * 1000;
const STORAGE_KEY = 'adminSession'; // { expiresAt: number }

export default function AdminPage() {
  // 1) İlk render’da localStorage’tan oku
  const initial = useMemo(() => {
    if (typeof window === 'undefined') return { loggedIn: false, ttl: 0 };
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { loggedIn: false, ttl: 0 };
      const { expiresAt } = JSON.parse(raw);
      const ttl = Math.max(0, (expiresAt ?? 0) - Date.now());
      return { loggedIn: ttl > 0, ttl };
    } catch { return { loggedIn: false, ttl: 0 }; }
  }, []);

  const [loggedIn, setLoggedIn] = useState(initial.loggedIn);
  const [activeTab, setActiveTab] = useState('posts');
  const [showPopup, setShowPopup] = useState(false);
  const [popupMsg, setPopupMsg] = useState('');
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const logoutTimerRef = useRef(null);

  // 2) Geriye kalan süre kadar zamanlayıcı kur
  useEffect(() => {
    if (!loggedIn) return;
    const raw = localStorage.getItem(STORAGE_KEY);
    const { expiresAt } = raw ? JSON.parse(raw) : { expiresAt: 0 };
    const ms = Math.max(0, expiresAt - Date.now());
    if (logoutTimerRef.current) clearTimeout(logoutTimerRef.current);
    logoutTimerRef.current = setTimeout(() => handleLogout('Oturum süresi doldu.'), ms);
    return () => clearTimeout(logoutTimerRef.current);
  }, [loggedIn]);

  const handleLogin = () => {
    const expiresAt = Date.now() + SESSION_MS;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ expiresAt }));
    setLoggedIn(true);
  };

  const handleLogout = (reason = 'Çıkış yapıldı.') => {
    if (isLoggingOut) return;
    setIsLoggingOut(true);
    if (logoutTimerRef.current) clearTimeout(logoutTimerRef.current);
    localStorage.removeItem(STORAGE_KEY);
    setPopupMsg(reason);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      setLoggedIn(false);
      setIsLoggingOut(false);
      // window.location.href = '/';
    }, 800);
  };

  if (!loggedIn) return <LoginPage onLogin={handleLogin} />;

  return (
    <div className="admin-container">
      <header className="admin-header">
        <h1>Sinem Kaya Yönetim Paneli</h1>
        <button onClick={() => handleLogout('Çıkış başarıyla gerçekleştirildi.')}
                className="panel-exit bg-red-600 text-white px-4 py-2 rounded">
          Çıkış
        </button>
        {showPopup && <SimplePopup message={popupMsg} />}
      </header>
      <div className="admin-body">
        <aside className="admin-sidebar">
          <ul>
            <li onClick={() => setActiveTab('posts')}     className={activeTab === 'posts' ? 'active' : ''}>Yazılarım</li>
            <li onClick={() => setActiveTab('comments')}  className={activeTab === 'comments' ? 'active' : ''}>Yorumlar</li>
            <li hidden onClick={() => setActiveTab('categories')} className={activeTab === 'categories' ? 'active' : ''}>Kategori</li>
          </ul>
        </aside>
        <main className="admin-content">
          {activeTab === 'posts' && <Posts />}
          {activeTab === 'comments' && <Comments />}
          {activeTab === 'categories' && <Categories />}
        </main>
      </div>
    </div>
  );
}
