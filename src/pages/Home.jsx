import React from "react";
import { Link } from "react-router-dom"; // Thêm Link từ react-router-dom
import "../css/Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="banner">
        <h2>Chào mừng bạn đến với TWMotocycle&Cars</h2>
        <p>Khám phá các dòng sản phẩm xe máy, phân khối lớn và ô tô</p>
      </section>

      <div className="background-img">
        <img src="images/car2.webp" alt="Car Background" />
      </div>
      
      <section className="categories">
        <div className="category">
          <Link to="/car">
            <img src="/images/car.jpg" alt="Ô tô" />
            <h3>Ô tô</h3>
          </Link>
        </div>

        <div className="category">
          <Link to="/scooter"> 
            <img src="/images/scooter.jpg" alt="Xe máy" />
            <h3>Xe máy</h3>
          </Link>
        </div>

        <div className="category">
          <Link to="/moto">
            <img src="/images/moto.jpg" alt="Phân khối lớn" />
            <h3>Phân khối lớn</h3>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
