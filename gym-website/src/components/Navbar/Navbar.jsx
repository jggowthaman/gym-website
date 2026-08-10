import "./Navbar.css";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setProgramOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <img src={logo} alt="NextGoal Fitness" />
        </NavLink>

        {/* Navigation Menu */}
        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>


          <button
            className="close-menu"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <i className="bi bi-x-lg"></i>
          </button>

          <ul>
            <li>
              <NavLink to="/" onClick={closeMenu}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" onClick={closeMenu}>
                About
              </NavLink>
            </li>

            {/* Programs Dropdown */}
            <li className="dropdown">
              <span onClick={() => setProgramOpen(!programOpen)}>
                Programs
                <i
                  className={`bi ${
                    programOpen
                      ? "bi-chevron-up"
                      : "bi-chevron-down"
                  }`}
                ></i>
              </span>

              <ul
                className={`dropdown-menu ${
                  programOpen ? "show" : ""
                }`}
              >
                <li>
                  <NavLink to="/gym" onClick={closeMenu}>
                    Gym
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/sports-academy"
                    onClick={closeMenu}
                  >
                    Sports Academy
                  </NavLink>
                </li>
              </ul>
            </li>


            <li>
              <NavLink to="/fees" onClick={closeMenu}>
                Fees & Offers
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" onClick={closeMenu}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Right Section */}
        <div className="nav-right">
          <div className="call-box">
            <div className="call-icon">
              <i className="bi bi-telephone-fill"></i>
            </div>

            <div className="call-text">
              <span>Call Anytime</span>
              <h4>+91 95788 52900</h4>
            </div>
          </div>

          <Link to="/cta" className="join-btn">
            JOIN NOW
            <i className="bi bi-arrow-right"></i>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <i className="bi bi-list"></i>
        </button>
      </div>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div
          className="overlay"
          onClick={closeMenu}
        ></div>
      )}
    </header>
  );
}

export default Navbar;