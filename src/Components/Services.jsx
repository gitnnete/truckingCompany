import React from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";
import { useEffect } from "react";
import serviceImage1 from '../assets/ServiceDelivery.jpg'; // Replace with your image paths
import serviceImage2 from '../assets/TruckForHire.jpg'; // Replace with your image paths
import serviceImage3 from '../assets/repaireTruck.jpg';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: true, // Whether animation should happen only once
    });
  }, []);


  return (
    <>
      <section className="services bg-dark py-5">
        <div className="container">
          <h1 id="services" className="text-success text-center mb-5" data-aos="fade-up">Our Services</h1>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card service-card bg-secondary text-light" data-aos="fade-up">
                <img
                  src={serviceImage1}
                  className="card-img-top"
                  alt="Service 1"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Delivery</h5>
                  <p className="card-text text-center">
                    Description of Service 1.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card service-card bg-secondary text-light" data-aos="fade-up">
                <img
                  src={serviceImage2}
                  className="card-img-top"
                  alt="Service 2"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Truck For Hire</h5>
                  <p className="card-text text-center">
                    Description of Service 2.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card service-card bg-secondary text-light" data-aos="fade-up">
                <img
                  src={serviceImage3}
                  className="card-img-top"
                  alt="Service 3"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Truck Repaires</h5>
                  <p className="card-text text-center">
                    Description of Service 3.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
