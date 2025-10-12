'use client';
import { useEffect, useState } from "react";
import "@/public/assets/css/admin.css";
import Posts from "@/components/Panel/Posts";
import Comments from "@/components/Panel/Comment";
import Categories from "@/components/Panel/Categories";
import LoginPage from "@/components/Panel/LoginPage";
import SimplePopup from "@/components/Panel/component/LogoutPopup";

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("posts");
  const [logoutTimer, setLogoutTimer] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

    // Oturum süresi: 2 saat (ms)
  const SESSION_TIME = 2 * 60 * 60 * 1000;

  useEffect(() => {
    if (loggedIn) {
      // Oturum süresi bittiğinde otomatik çıkış yap
      const timer = setTimeout(() => {
        handleLogout('Oturum süresi doldu.');
      }, SESSION_TIME);
      setLogoutTimer(timer);

      // Temizlik
      return () => clearTimeout(timer);
    }
  }, [loggedIn]);

  if (!loggedIn) {
    return <LoginPage onLogin={() => setLoggedIn(true)} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case "posts":
        return <Posts />;
      case "comments":
        return <Comments />;
      case "categories":
        return <Categories />;
      default:
        return null;
    }
  };

const handleLogout = () => {
  if (isLoggingOut) return; // Çıkış işlemi zaten başlatıldıysa tekrar çalıştırma

  setShowPopup(true);
  setIsLoggingOut(true);

  if (logoutTimer) {
    clearTimeout(logoutTimer);
  }

  setTimeout(() => {
    setShowPopup(false);
    setLoggedIn(false);
    setIsLoggingOut(false);
    window.location.href = "/"; // Anasayfaya yönlendir
  }, 1000); // 1 saniye sonra yönlendirme
};

  return (
    <div className="admin-container">
      <header className="admin-header">
        <h1>Sinem Kaya Yönetim Paneli</h1>
        <button
        onClick={() => handleLogout("Çıkış Başarı ile Gerçekleştirildi.")}
        className="panel-exit bg-red-600 text-white px-4 py-2 rounded"
      >
        Çıkış
      </button>
      {showPopup && <SimplePopup />}
      </header>
      <div className="admin-body">
        <aside className="admin-sidebar">
          <ul>
            <li onClick={() => setActiveTab("posts")} className={activeTab === "posts" ? "active" : ""}>Yazılarım</li>
            <li onClick={() => setActiveTab("comments")} className={activeTab === "menu" ? "active" : ""}>Yorumlar</li>
            <li hidden onClick={() => setActiveTab("categories")} className={activeTab === "categories" ? "active" : ""}>Kategori</li>
          </ul>
        </aside>
        <main className="admin-content">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
