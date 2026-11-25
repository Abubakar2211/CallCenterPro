import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setValidated(true);

    if (form.checkValidity()) {
      navigate('/');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-bg-shape login-bg-shape-1"></div>
      <div className="login-bg-shape login-bg-shape-2"></div>

      <div className="login-card">
        <Link to="/" className="login-brand text-decoration-none">
          <i className="bi bi-asterisk"></i>
          <span>Spark Admin</span>
        </Link>

        <p className="login-subtitle">Please sign in to access your dashboard</p>

        <form
          id="loginForm"
          className={`needs-validation${validated ? ' was-validated' : ''}`}
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="login-form-group">
            <label htmlFor="email" className="login-form-label">
              Email Address
            </label>
            <div className="login-input-group">
              <i className="bi bi-envelope input-icon"></i>
              <input
                type="email"
                id="email"
                className="login-input"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="login-form-group">
            <label htmlFor="password" className="login-form-label">
              Password
            </label>
            <div className="login-input-group">
              <i className="bi bi-shield-lock input-icon"></i>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="login-input login-input-password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="password-toggle-btn"
                id="toggle-password"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                onClick={() => setShowPassword((prev) => !prev)}
              >
                <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
              </button>
            </div>
          </div>

          <div className="login-options">
            <label className="custom-control-label">
              <input
                type="checkbox"
                className="custom-checkbox-input"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span>Remember Me</span>
            </label>
            <a href="#forgot" className="forgot-password-link" onClick={(e) => e.preventDefault()}>
              Forgot Password?
            </a>
          </div>

          <button type="submit" className="btn-login" id="btn-submit">
            <span>Sign In to Dashboard</span>
            <i className="bi bi-arrow-right"></i>
          </button>
        </form>

        <div className="login-divider">Or sign in with</div>

        <div className="social-login-grid">
          <button className="btn-social" type="button" id="btn-google">
            <i className="bi bi-google text-danger"></i>
            <span>Google</span>
          </button>
          <button className="btn-social" type="button" id="btn-github">
            <i className="bi bi-github"></i>
            <span>GitHub</span>
          </button>
        </div>

        <p className="login-footer-text">
          Don&apos;t have an account?{' '}
          <a href="#register" id="link-register" onClick={(e) => e.preventDefault()}>
            Register Now
          </a>
        </p>
      </div>
    </div>
  );
}
