import React from "react";
import "../css/SearchFilter.css"; // Chứa CSS riêng cho phần này

const SearchFilter = () => {
  return (
    <div className="search-filter">
      <input type="text" placeholder="Nhập tên loại xe" className="search-input" />
      <button className="search-btn">🔍</button>
      
      <button className="filter-btn">🔽</button>

      <button className="price-list-btn">BẢNG GIÁ SẢN PHẨM →</button>
      <button className="compare-btn">SO SÁNH SẢN PHẨM →</button>
    </div>
  );
};

export default SearchFilter;
