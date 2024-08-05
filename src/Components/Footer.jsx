import React from "react";
import logo from "../assets/truckLogo.png";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-black text-white py-4">
        <div className="container text-center">
          <div className="d-flex justify-content-center align-items-center mb-3">
            <img src={logo} alt="Company Logo" className="footer-logo me-4" />
            <span className="fw-bold text-success ms-2">Trucking Company</span>
          </div>
          <div className="mb-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white me-3"
            >
              <box-icon
                type="logo"
                color="grey"
                name="facebook-circle"
              ></box-icon>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <box-icon
                type="logo"
                color="grey"
                name="instagram-alt"
              ></box-icon>
            </a>
          </div>
          <p>Website designed and built by Nnete Phasha</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
