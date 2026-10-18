import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => setMenuOpen(false);

  const goToBooks = () => {
    closeMenu();

    if (window.location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        document.getElementById("books-section")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 300);

      return;
    }

    document.getElementById("books-section")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const goHome = () => {
    closeMenu();

    if (window.location.pathname !== "/") {
      navigate("/");
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-row">
          <Link
            to="/"
            onClick={goHome}
            className="navbar-brand"
          >
            <img
              src={logo}
              alt="TAQU Akademik litseyi"
              className="navbar-logo"
            />

            <p className="navbar-title">
              TAQU AKADEMIK LITSEY
              <br />
              ELEKTRON KUTUBXONASI
            </p>
          </Link>

          <div className="navbar-icons">
            <button
              type="button"
              aria-label="Qidiruv"
              title="Qidiruv"
              className="navbar-icon"
              onClick={goToBooks}
            >
              <i className="bi bi-search" />
            </button>

            <Link
              to="/history"
              aria-label="O‘qish tarixi"
              title="O‘qish tarixi"
              className="navbar-icon"
              onClick={closeMenu}
            >
              <i className="bi bi-clock-history" />
            </Link>

            <button
              type="button"
              aria-label="Bosh sahifa"
              title="Bosh sahifa"
              className="navbar-icon"
              onClick={goHome}
            >
              <i className="bi bi-house-door" />
            </button>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Menyuni yopish" : "Menyuni ochish"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="navbar-toggle"
          >
            <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"}`} />
          </button>
        </div>
      </div>

      <div className={`navbar-mobile-menu ${menuOpen ? "open" : ""}`}>
        <button type="button" onClick={goHome}>
          <i className="bi bi-house-door" />
          Bosh sahifa
        </button>

        <button type="button" onClick={goToBooks}>
          <i className="bi bi-search" />
          Qidiruv
        </button>

        <Link to="/history" onClick={closeMenu}>
          <i className="bi bi-clock-history" />
          O‘qish tarixi
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;