import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../config/Firebase-Config";
import { doc, getDoc } from "firebase/firestore";

function ScooterDetail() {
  const { id } = useParams();
  const [scooter, setScooter] = useState(null);

  useEffect(() => {
    const fetchScooter = async () => {
      try {
        const docRef = doc(db, "scooter", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setScooter({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("Không tìm thấy xe máy!");
        }
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu chi tiết:", error);
      }
    };

    fetchScooter();
  }, [id]);

  if (!scooter) return <p>Đang tải...</p>;

  return (
    <div>
      <h2>{scooter.name}</h2>
      <img src={scooter.image} alt={scooter.name} />
      <p>Giá: {scooter.price} VNĐ</p>
      <p>Loại xe: {scooter.type}</p>
    </div>
  );
}

export default ScooterDetail;
