import React from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";
import { useEffect } from "react";

const Location = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <section id="location" className="location-section bg-dark text-light py-5">
        <div className="container">
          <h1  className="text-center text-success mb-5" data-aos="fade-up">Location</h1>
          <div className="row">
            <div className="col-md-6 mb-4 lead align-items-center justify-content-center">
              <div className="text-center" data-aos="fade-right">
                <h4 className="mb-3">Our Address</h4>
                <p>
                  123 Logistics St.
                  <br />
                  Pretoria, Gauteng
                  <br />
                  South Africa, 0001
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-4" data-aos="fade-left">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.7689412125674!2d28.248089025397555!3d-25.67895307740394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebfdf00f1493a13%3A0x9428c8c189c0a784!2sKolonnade%20Shopping%20Centre!5e0!3m2!1sen!2sza!4v1722886472920!5m2!1sen!2sza"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
