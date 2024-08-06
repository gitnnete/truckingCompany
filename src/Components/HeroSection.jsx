import React from "react";
import image1 from "../assets/truck1.jpg";
import image2 from "../assets/trailers.jpg";
import image3 from "../assets/delivery.jpg";

const HeroSection = () => {
  return (
    <>
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={image1} className="d-block w-100" alt="Slide 1" />
          <div className="carousel-caption d-none d-md-block">
            <h1 className="display-4 text-center fw-bold">Welcome to Our Website</h1>
          </div>
        </div>
        <div className="carousel-item">
          <img src={image2} className="d-block w-100" alt="Slide 2" />
          <div className="carousel-caption d-none d-md-block">
            <h1 className="display-4 text-center fw-bold">Premium Trailers</h1>
          </div>
        </div>
        <div className="carousel-item">
          <img src={image3} className="d-block w-100" alt="Slide 3" />
          <div className="carousel-caption d-none d-md-block">
            <h1 className="display-4 text-center fw-bold">Contact Us Today</h1>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </>
  );
};

export default HeroSection;
