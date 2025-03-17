import React, { useEffect, useState } from "react";
import { db } from "../config/Firebase-Config";
import { collection, getDocs } from "firebase/firestore";
import SearchFilter from "../components/SearchFilter";
import VehicleCard from "../components/Vehicle";

function Scooter() {
  const [scooterList, setScooterList] = useState([]);
  const [filteredScooters, setFilteredScooters] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const brands = ["honda", "yamaha", "piaggio"];
        const categories = ["scoot", "manual", "clutch"];

        let queries = [];

        for (const brand of brands) {
          for (const category of categories) {
            const colRef = collection(db, "scooter", brand, category);
            queries.push(getDocs(colRef));
          }
        }

        const results = await Promise.all(queries);
        let allScooters = [];

        results.forEach((querySnapshot, index) => {
          const [brand, category] = [
            brands[Math.floor(index / categories.length)],
            categories[index % categories.length],
          ];
          const scooters = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            brand,
            category,
            name: doc.data().name,
            price: doc.data().price,
            type :doc.data().type,
            image: doc.data().image,
          }));
          allScooters = [...allScooters, ...scooters];
        });

        setScooterList(allScooters);
        setFilteredScooters(allScooters);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    };

    fetchData();
  }, []);

  // 🟢 Thêm hàm tìm kiếm xe máy theo tên
  const handleSearch = (query) => {
    console.log("Tìm kiếm với:", query);
    if (!query) {
      setFilteredScooters(scooterList);
      return;
    }

    const filtered = scooterList.filter((scooter) =>
      scooter.name?.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredScooters(filtered);
  };

  const handleFilterByBrand = (brand) => {
    if (selectedBrand === brand) {
      setSelectedBrand(""); // Bỏ chọn nếu bấm lại
      setFilteredScooters(scooterList); // Hiển thị tất cả xe
    } else {
      setSelectedBrand(brand);
      const filtered = scooterList.filter((scooter) => scooter.brand === brand);
      setFilteredScooters(filtered);
    }
  };

  return (
    <div>
      <h2>Danh sách xe máy</h2>
      <SearchFilter onSearch={handleSearch} onFilterByBrand={handleFilterByBrand} />
      
      {filteredScooters.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "18px", color: "red" }}>
          Không tìm thấy xe máy nào!
        </p>
      ) : (
        <div className="vehicle-list">
          {filteredScooters.map((scooter) => (
            <VehicleCard key={scooter.id} {...scooter} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Scooter;
