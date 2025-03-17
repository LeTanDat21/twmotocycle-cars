import React, { useState } from "react";
import "../css/SearchFilter.css";

const SearchFilter = ({ onSearch, onFilterByBrand }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState(null); // 🟢 Lưu brand được chọn

  const handleSearch = (term) => {
    setSearchTerm(term);
    onSearch(term); // 🟢 Gọi ngay khi nhập chữ
  };

  const handleBrandClick = (brand) => {
    if (selectedBrand === brand) {
      setSelectedBrand(null); // 🟢 Bỏ chọn brand nếu click lại
      onFilterByBrand(null);
    } else {
      setSelectedBrand(brand);
      onFilterByBrand(brand);
    }
  };

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Nhập tên loại xe"
        className="search-input"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)} // 🟢 Cập nhật ngay khi nhập
      />
      <button className="search-btn" onClick={() => onSearch(searchTerm)}>🔍</button>

      <button className="filter-btn">🔽</button>
      <button className="price-list-btn">BẢNG GIÁ SẢN PHẨM →</button>
      <button className="compare-btn">SO SÁNH SẢN PHẨM →</button>

      <button
        className={`brand-btn ${selectedBrand === "honda" ? "active" : ""}`}
        onClick={() => handleBrandClick("honda")}
      >
        Honda
      </button>
      <button
        className={`brand-btn ${selectedBrand === "yamaha" ? "active" : ""}`}
        onClick={() => handleBrandClick("yamaha")}
      >
        Yamaha
      </button>
      <button
        className={`brand-btn ${selectedBrand === "piaggio" ? "active" : ""}`}
        onClick={() => handleBrandClick("piaggio")}
      >
        Piaggio
      </button>
    </div>
  );
};

export default SearchFilter;
