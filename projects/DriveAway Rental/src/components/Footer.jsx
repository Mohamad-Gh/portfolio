import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-box">
          <h3>Car Rental</h3>
          <p>
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs.
          </p>
          <div>
            <i className="fa-solid fa-phone"></i> (123) -456-789
          </div>
          <div>
            <i className="fa-regular fa-envelope"></i>
            <a href=""> carrental@gmail.com</a>
          </div>
          <div>
            Design by <span>MGH</span> 2024
          </div>
        </div>
        <div className="footer-box">
          <h3>COMPANY</h3>
          <div>
            <a href="">Location</a>
          </div>
          <div>
            <a href="">Careers</a>
          </div>
          <div>
            <a href="">Mobile</a>
          </div>
          <div>
            <a href="">Blog</a>
          </div>
          <div>
            <a href="">How We Work</a>
          </div>
        </div>
        <div className="footer-box">
          <h3>WORKING HOURS</h3>
          <div>Mon - Fri: 9:00AM - 9:00PM</div>
          <div>Sat: 9:00AM - 19:00PM</div>
          <div>Sun: Closed</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
