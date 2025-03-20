import React from "react";
import "../css/Footer.css"; // Import file CSS


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>TWMotocycle&Cars</h3>
          <p>Chất lượng vượt trội - Công nghệ tiên phong - Phục vụ tận tâm</p>
          <h3>Liên hệ</h3>
          <p>📞 Hotline: 1800 9001</p>
          <p>📧 Email: support@TWMotocycle.com.vn</p>
          <a href="https://moit.gov.vn/" target="_blank"><img src="/images/bct.png"></img></a>
        </div>
        <div className="footer-section">
          <h3>Chi nhánh TP. Hà Nội</h3>
          <p>📍 Showroom xe máy: 87 P. Láng Hạ, Chợ Dừa, Ba Đình, Hà Nội</p>
          <p>📍 Showroom ô tô: 54A Đ. Nguyễn Chí Thanh, Láng Thượng, Đống Đa, Hà Nội</p>
          <p>📍 Showroom xe phân khối lớn: 66 P. Nguyễn Thái Học, Điện Biên, Ba Đình, Hà Nội</p>
        </div>
        <div className="footer-section">
          <h3>Chi nhánh TP. Hồ Chí Minh</h3>
          <p>📍 Showroom xe máy: 34 Lê Duẩn, Bến Nghé, Quận 1, TP. Hồ Chí Minh</p>
          <p>📍 Showroom ô tô: 161 Võ Nguyên Giáp, Thảo Điền, Thủ Đức , TP. Hồ Chí Minh</p>
          <p>📍 Showroom xe phân khối lớn: 469 Nguyễn Hữu Thọ, Tân Hưng ,Quận 7, TP. Hồ Chí Minh</p>
        </div>
        <div className="footer-section">
          <h3>Theo dõi chúng tôi</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/le.at.358654" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.facebook.com/le.at.358654" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href="https://www.facebook.com/le.at.358654" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.facebook.com/le.at.358654" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
            <div class="policy-buttons">
              <a href="/dang-ky-lai-thu/" class="policy-btn">Đăng ký lái thử</a>
              <a href="/dat-lich-bao-duong/" class="policy-btn">Đặt lịch bảo dưỡng</a>
              <a href="/dang-ky-ban-tin/" class="policy-btn">Đăng ký nhận bản tin</a>
              <a href="/tuyen-dung/" class="policy-btn">Tuyển dụng</a>
            </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 TWM. All rights reserved.</p>
        <p>&copy; A website made by Tan Dat Le</p>
      </div>
    </footer>
  );
};

export default Footer;
