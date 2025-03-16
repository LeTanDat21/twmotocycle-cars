import React from "react";
import "./Home.css";

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
      <div className="category"><a href="Car.jsx">
        <img src="/images/car.jpg" alt="Ô tô" />
        <h3>Ô tô</h3></a>
        </div>

        <div className="category"><a href="Scooter.jsx">
        <img src="/images/scooter.jpg" alt="Xe máy" />
        <h3>Xe máy</h3></a>
        </div>

        <div className="category"><a href="Moto.jsx">
        <img src="/images/moto.jpg" alt="Phân khối lớn" />
        <h3>Phân khối lớn</h3></a>
        </div>
      </section>
    </div>
  );
};

export default Home;
