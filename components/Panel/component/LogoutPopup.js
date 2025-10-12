// components/SimplePopup.js
import React from "react";

export default function SimplePopup() {

  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    }}>
      <div style={{
        backgroundColor: "#fff",
        padding: "20px 30px",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0,0,0,0.25)",
        fontSize: "18px",
        fontWeight: "500",
        color: "#000",
      }}>
        Başarı İle Çıkış Yapıldı
      </div>
    </div>
  );
}
