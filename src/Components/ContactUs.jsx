import React from "react";
import contactUsImage from "../assets/contactTruck.jpg";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";
import { useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <section id="contact" className="contact-us-section py-5 bg-dark">
        <div className="container">
          <h1 className="text-center text-success mb-5" data-aos="fade-up">Contact Us</h1>
          <div className="row">
            <div className="col-md-6 mb-4" data-aos="fade-right">
              <div className="fade-right">
                <img
                  src={contactUsImage}
                  alt="Contact Us"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-6 mb-4" data-aos="fade-left">
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-light">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label text-light">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
