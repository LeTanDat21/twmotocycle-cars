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
  
        const allPromises = brands.flatMap((brand) =>
          categories.map(async (category) => {
            const colRef = collection(db, `scooter/${brand}/${category}`);
            const querySnapshot = await getDocs(colRef);
            return querySnapshot.docs.map((doc) => ({
              id: doc.id,
              brand,
              category,
              ...doc.data(),
            }));
          })
        );
  
        const results = await Promise.all(allPromises);
        const allScooters = results.flat();
  
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
