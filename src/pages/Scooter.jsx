import React from "react";
import SearchFilter from "../components/SearchFilter"; // Import component vừa tạo
import VehicleCard from "../components/Vehicle";

const scooterList = [
  { name: "SH350i", price: "151.190.000", image: "/images/sh350i.png", isNew: true, type: "Xe Tay Ga" },
  { name: "Vario 160", price: "51.990.000", image: "/images/vario160.png", isNew: false, type: "Xe Tay Ga" },
  { name: "SH350i", price: "151.190.000", image: "/images/sh350i.png", isNew: true, type: "Xe Tay Ga" },
  { name: "Vario 160", price: "51.990.000", image: "/images/vario160.png", isNew: false, type: "Xe Tay Ga" },
  { name: "SH350i", price: "151.190.000", image: "/images/sh350i.png", isNew: true, type: "Xe Tay Ga" },
  { name: "Vario 160", price: "51.990.000", image: "/images/vario160.png", isNew: false, type: "Xe Tay Ga" },
  { name: "SH350i", price: "151.190.000", image: "/images/sh350i.png", isNew: true, type: "Xe Tay Ga" },
  { name: "Vario 160", price: "51.990.000", image: "/images/vario160.png", isNew: false, type: "Xe Tay Ga" },
  { name: "SH350i", price: "151.190.000", image: "/images/sh350i.png", isNew: true, type: "Xe Tay Ga" },
  { name: "Vario 160", price: "51.990.000", image: "/images/vario160.png", isNew: false, type: "Xe Tay Ga" },
  { name: "SH350i", price: "151.190.000", image: "/images/sh350i.png", isNew: true, type: "Xe Tay Ga" },
  { name: "Vario 160", price: "51.990.000", image: "/images/vario160.png", isNew: false, type: "Xe Tay Ga" },
];

function Scooter() {
  return (
    <div>
      <h2>Danh sách xe máy</h2>
      <SearchFilter /> {/* Thêm thanh tìm kiếm */}
      <div className="vehicle-list">
        {scooterList.map((scooter, index) => (
          <VehicleCard key={index} {...scooter} />
        ))}
      </div>
    </div>
  );
}

export default Scooter;
