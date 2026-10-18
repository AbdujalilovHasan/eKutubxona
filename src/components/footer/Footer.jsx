import "./Footer.css";
import "./Footer.css";
import logo from "../../assets/images/logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-left">
          <img
            src={logo}
            alt="Akademik litsey logotipi"
            className="footer-logo"
          />

          <h3>
            TOSHKENT ARXITEKTURA QURILISH
            UNIVERSITETI QOSHIDAGI
            AKADEMIK LITSEY
          </h3>
        </div>

        <div className="footer-right">
          <h4>Ijtimoiy tarmoqlar</h4>

          <div className="footer-socials">
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <i className="bi bi-telegram" />
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="bi bi-instagram" />
            </a>

            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i class="bi bi-facebook"></i>
            </a>
          </div>

          <div className="footer-line"></div>

          <p className="footer-contact-title">
            Bog‘lanish uchun tel:
          </p>

          <a
            className="footer-phone"
            href="tel:+998712483571"
          >
            +998 (71) 248-35-71
          </a>
        </div>
      </div>

      {/* Pastki yozuv */}
      <div className="footer-bottom">
        © 2025 Toshkent arxitektura qurilish universiteti akademik
        litseyi | Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
}

export default Footer;
