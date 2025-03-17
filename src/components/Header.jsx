import React from "react";
import "../css/Header.css"; // Import file CSS

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">TWMotocycle&Cars</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="/">Trang chủ</a></li>
          <li><a href="/Car">Ô tô</a></li>
          <li><a href="/Scooter">Xe máy</a></li>
          <li><a href="/Moto">Phân khối lớn</a></li>
          <li><a href="/contact">Về chúng tôi</a></li>
          <li><a href="/news">Tin tức - Khuyến mãi</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
