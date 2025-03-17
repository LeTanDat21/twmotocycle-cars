import React from "react";
import "../css/Style.css";

function VehicleCard({ name, price, image, isNew, type }) {
  return (
    <div className="vehicle-card">
      <img src={image} alt={name} className="vehicle-image" />
      {isNew && <span className="new-badge">MỚI</span>}
      <h3 className="vehicle-name">{name}</h3>
      <p className="vehicle-type">{type}</p>
      <p className="vehicle-price">Giá từ: <span>{price} VNĐ</span></p>
    </div>
  );
}

export default VehicleCard;
