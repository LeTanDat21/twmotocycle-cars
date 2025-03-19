import React, { useEffect, useState } from "react";
import { db } from "../config/Firebase-Config";
import { collection, getDocs } from "firebase/firestore";
import SearchFilter from "../components/SearchFilter";
import VehicleCard from "../components/Vehicle";

const Car = () => {
    return <div>Trang ô tô</div>;
};

export default Car; // Đảm bảo export mặc định