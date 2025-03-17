import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Scooter from "./pages/Scooter";
import Moto from "./pages/Moto";
import Car from "./pages/Car";

function App() {
  return (
    <Router>
      <title>TWMotocycle&Cars</title>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scooter" element={<Scooter />} />
        <Route path="/moto" element={<Moto />} />
        <Route path="/car" element={<Car />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
