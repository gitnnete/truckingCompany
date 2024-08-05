import React from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";
import { useEffect } from "react";

const WhoAreWe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: true, // Whether animation should happen only once
    });
  }, []);


  return (
    <>
      <section id="whoarewe" className="who-are-we bg-dark py-5">
        <div className="container" data-aos="fade-up">
          <h1 className="text-success text-center mb-4">Who Are We</h1>
          <p className="text-center text-light lead" >
            We are a logistics and transportation company based in Pretoria,
            founded in the year 2000. Over the past two decades, we have grown
            and expanded our services across various regions.
          </p>
          <p className="text-center text-light lead">
            Our operations span across Gauteng, Mpumalanga, Limpopo, and the
            North West, providing reliable and efficient logistics solutions to
            meet the diverse needs of our clients. We pride ourselves on our
            commitment to excellence and customer satisfaction.
          </p>
        </div>
      </section>
    </>
  );
};

export default WhoAreWe;
