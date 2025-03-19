import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Style.css";

function VehicleCard({ id, name, price, image, isNew, type, brand, category }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!brand || !category || !id) {
      console.error("❌ Lỗi: Thiếu thông tin brand, category hoặc id", { brand, category, id });
      return;
    }

    navigate(`/scooter/${brand}/${category}/${id}`); // Điều hướng đến trang chi tiết xe máy
  };

  return (
    <div className="vehicle-card" onClick={handleClick} style={{ cursor: "pointer" }}>
      <img src={image} alt={name} className="vehicle-image" />
      {isNew && <span className="new-badge">MỚI</span>}
      <h3 className="vehicle-name">{name}</h3>
      <p className="vehicle-type">{type}</p>
      <p className="vehicle-price">Giá từ: <span>{price} VNĐ</span></p>
    </div>
  );
}

export default VehicleCard;
