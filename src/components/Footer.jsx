import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer-custom">
      <div className="footer-left">
        <span className="footer-logo">
          <i className="bi bi-asterisk"></i> Spark Admin
        </span>
        <span className="footer-separator">|</span>
        <span className="footer-copy">
          &copy; 2026 Made with <i className="bi bi-heart-fill text-danger footer-heart"></i> by{' '}
          <a href="https://sparkadminpro.gumroad.com/" target="_blank" rel="noreferrer">
            Spark Admin
          </a>{' '}
          &bull; Distributed by{' '}
          <a href="https://www.themewagon.com/" target="_blank" rel="noreferrer">
            ThemeWagon
          </a>
        </span>
      </div>
      <div className="footer-right">
        <ul className="footer-links">
          <li>
            <Link to="/" className="footer-link">
              Overview
            </Link>
          </li>
          <li>
            <a href="#statistics" className="footer-link" onClick={(e) => e.preventDefault()}>
              Statistics
            </a>
          </li>
          <li>
            <a href="#docs" className="footer-link" onClick={(e) => e.preventDefault()}>
              Help &amp; Documentation
            </a>
          </li>
          <li>
            <a href="#status" className="footer-link" onClick={(e) => e.preventDefault()}>
              Status <span className="status-dot"></span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
