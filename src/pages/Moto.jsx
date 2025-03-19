import React, { useEffect, useState } from "react";
import { db } from "../config/Firebase-Config";
import { collection, getDocs } from "firebase/firestore";
import SearchFilter from "../components/SearchFilter";
import VehicleCard from "../components/Vehicle";
const Moto = () => {
    return <div>Danh sách xe phân khối lớn</div>;
};

export default Moto; // Đảm bảo export mặc định