import React from "react";

function Header() {
  return (
    <header>
      <div className="full-container">
        <div className="container-header">
          <img className="company_logo" src="./images/logo.png" />
          <nav>
            <ul className="navigator">
              <li>
                <a href="../../index.html">Home</a>
              </li>
              <li>
                <a href="">Vehicle Model</a>
              </li>
              <li>
                <a href="">Testimonials</a>
              </li>
              <li>
                <a href="">Our Team</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
            </ul>
          </nav>
          <div className="sign-in">
            <div>
              <button className="btn">Sign in</button>
              <button className="btn btn-nav">Register</button>
            </div>
          </div>
          <div className="mobile-hamb">
            <svg
              id="menu-bar"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-menu-2"
            >
              <path d="M4 6l16 0"></path>
              <path d="M4 12l16 0"></path>
              <path d="M4 18l16 0"></path>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
