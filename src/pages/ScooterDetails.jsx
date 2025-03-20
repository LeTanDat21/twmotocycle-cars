import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../config/Firebase-Config";
import { doc, getDoc } from "firebase/firestore";
import "../css/ScooterDetails.css";

function ScooterDetails() {
  const { brand, category, id, version } = useParams();
  const [scooter, setScooter] = useState(null);
  const [selectedVersion, setSelectedVersion] = useState(null);
  const [versions, setVersions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScooterDetails = async () => {
      if (!brand || !category || !id) {
        console.warn("⚠️ Thiếu thông tin URL!");
        return;
      }

      try {
        const docRef = doc(db, "scooter", brand, category, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setScooter(data);

          const versionKeys = [
            { key: "sportver", priceKey: "sportprice" ,imgKey :"sportimg"},
            { key: "standardver", priceKey: "standardprice",imgKey :"standardimg" },
            { key: "highver", priceKey: "highprice",imgKey :"highimg" },
            { key: "specialver", priceKey: "specialprice",imgKey :"specialimg" },
          ];
          
          const extractedVersions = versionKeys
            .map(({ key, priceKey , imgKey }) =>
              data[key] ? { name: data[key], price: data[priceKey] , image:data[imgKey]|| "N/A" } : null
            )
            .filter(Boolean); // Loại bỏ các giá trị null
          
          setVersions(extractedVersions);

          // Chọn phiên bản dựa trên URL hoặc mặc định là phiên bản đầu tiên
          const initialVersion = extractedVersions.find((v) => v.name === version) || extractedVersions[0];
          setSelectedVersion(initialVersion);
        } else {
          console.warn("❌ Không tìm thấy dữ liệu trong Firestore!");
        }
      } catch (error) {
        console.error("🔥 Lỗi khi lấy chi tiết xe máy:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchScooterDetails();
  }, [brand, category, id, version]);

  if (loading) return <p>Đang tải dữ liệu...</p>;
  if (!scooter) return <p>Không có dữ liệu xe.</p>;

  return (
    <div className="scooter-container">
      <h2 className="scooter-title">{scooter.name || "Chưa có tên"}</h2>

      {/* Thông tin xe */}
      <div className="scooter-info">
        <h3>Thông tin xe</h3>
        <div className="colors">
          <strong>Màu sắc:</strong>
          <div className="color-box" style={{ backgroundColor: scooter.colorHex || "#ccc" }}></div>
          <span>{scooter.colorName || "Không xác định"}</span>
        </div>

        <div className="price">
          <p>Giá bán lẻ đề xuất:</p>
          <h3>
            {selectedVersion?.price?.toLocaleString() || "Đang cập nhật"} VNĐ
          </h3>

          {/* Dropdown chọn phiên bản */}
          <select
            value={selectedVersion?.name || ""}
            onChange={(e) => {
              const selected = versions.find((v) => v.name === e.target.value);
              setSelectedVersion(selected || null);
            }}
          >
            {versions.map((versionItem) => (
              <option key={versionItem.name} value={versionItem.name}>
                {versionItem.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Hình ảnh xe */}
      <div className="scooter-image">
        <img
          src={selectedVersion?.image || scooter.image || "https://via.placeholder.com/500"}
          alt={scooter.name || "Xe máy"}
          width="500"
        />
      </div>

      {/* Bảng thông số kỹ thuật */}
      <div className="scooter-specs">
        <h3>Thông số kỹ thuật</h3>
        <table className="specs-table">
          <tbody>
            {[
              { label: "Khối lượng bản thân", key: "weight" },
              { label: "Dài x Rộng x Cao", key: "dimensions" },
              { label: "Khoảng cách trục bánh xe", key: "wheelbase" },
              { label: "Độ cao yên", key: "seat_height" },
              { label: "Khoảng sáng gầm xe", key: "ground_clearance" },
              { label: "Dung tích bình xăng", key: "fuel_tank_capacity" },
              { label: "Kích cỡ lốp trước/sau", key: "tire_size" },
              { label: "Phuộc trước", key: "front_suspension" },
              { label: "Phuộc sau", key: "rear_suspension" },
              { label: "Loại động cơ", key: "engine_type" },
              { label: "Công suất tối đa", key: "max_power" },
              { label: "Dung tích nhớt máy", key: "oil_capacity" },
              { label: "Loại truyền động", key: "transmission_type" },
              { label: "Hệ thống khởi động", key: "starting_system" },
              { label: "Moment cực đại", key: "max_torque" },
              { label: "Mức tiêu thụ nhiên liệu", key: "fuel_consumption" },
              { label: "Dung tích xy-lanh", key: "engine_displacement" },
              { label: "Đường kính x Hành trình pít tông", key: "bore_stroke" },
              { label: "Tỷ số nén", key: "compression_ratio" },
            ].map((spec) => (
              <tr key={spec.key}>
                <td>{spec.label}</td>
                <td>{scooter[spec.key] || "Đang cập nhật"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

        {/* Hình ảnh về xe */}
      <div className="vehicle-images">
        <h3>Hình ảnh về xe</h3>
        <div className="image-gallery">
          <img
            src={selectedVersion?.headimg || scooter.headimg || "https://via.placeholder.com/400"}
            alt="Hình ảnh đầu xe"
            width="400"
          />
          <img
            src={selectedVersion?.bodyimg || scooter.bodyimg || "https://via.placeholder.com/400"}
            alt="Hình ảnh thân xe"
            width="400"
          />
          <img
            src={selectedVersion?.engineimg || scooter.engineimg  || "https://via.placeholder.com/400"}
            alt="Hình ảnh động cơ"
            width="400"
          />
          <img
            src={selectedVersion?.modernimg || scooter.modernimg || "https://via.placeholder.com/400"}
            alt="Hình ảnh hiện đại"
            width="400"
          />
        </div>
  
      </div>

      {/* Hình ảnh bổ sung */}
      <div className="scooter-extra-images">
        <h3>Hình ảnh khác</h3>
        <div className="extra-images">
          <img
            src={selectedVersion?.ad1 || scooter.ad1 || "https://via.placeholder.com/400"}
            alt="Hình ảnh bổ sung 1"
            width="400"
          />
          <img
            src={selectedVersion?.ad2 || scooter.ad2 || "https://via.placeholder.com/400"}
            alt="Hình ảnh bổ sung 2"
            width="400"
          />
        </div>
      </div>
    </div>
  );
}

export default ScooterDetails;
