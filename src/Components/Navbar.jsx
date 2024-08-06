import React from "react";
import { useEffect } from 'react';
import logo from "../assets/truckLogo.png";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";

const Navbar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: true, // Whether animation should happen only once
    });
  }, []);

  const handleNavLinkClick = () => {
    // Collapse the navbar after clicking a link
    const navBarToggler = document.querySelector(".navbar-toggler");
    const navBarCollapse = document.querySelector(".navbar-collapse");
    if (navBarCollapse.classList.contains("show")) {
      navBarToggler.click();
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand position-relative" href="#home" data-aos="fade-right">
            <img
              src={logo}
              alt="Logo"
              className="img-fluid logo"
              style={{ height: "60px" }}
            />
            <span className="company-title position-absolute fw-bold text-success ms-2">
              Trucking Company
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mt-2" data-aos="fade-right">
              <li className="nav-item">
                <a
                  className="nav-link fs-5 mx-3"
                  href="#home"
                  onClick={handleNavLinkClick}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fs-5 mx-3"
                  href="#whoarewe"
                  onClick={handleNavLinkClick}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fs-5 mx-3"
                  href="#services"
                  onClick={handleNavLinkClick}
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fs-5 mx-3"
                  href="#location"
                  onClick={handleNavLinkClick}
                >
                  Location
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fs-5 mx-3"
                  href="#contact"
                  onClick={handleNavLinkClick}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
