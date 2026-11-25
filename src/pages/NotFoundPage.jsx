import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="login-wrapper">
      <div className="login-bg-shape login-bg-shape-1"></div>
      <div className="login-bg-shape login-bg-shape-2"></div>

      <div className="login-card text-center">
        <Link to="/" className="login-brand text-decoration-none">
          <i className="bi bi-asterisk"></i>
          <span>Spark Admin</span>
        </Link>

        <div className="error-title-huge">
          <span>4</span>
          <i className="bi bi-asterisk"></i>
          <span>4</span>
        </div>

        <h2 className="error-subtitle">Page Not Found</h2>
        <p className="error-desc">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div className="error-actions-group">
          <Link to="/" className="btn-custom btn-custom-primary">
            <i className="bi bi-house"></i> Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
