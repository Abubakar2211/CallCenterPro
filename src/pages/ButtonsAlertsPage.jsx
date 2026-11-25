import { useState } from 'react';
import { Link } from 'react-router-dom';

const INITIAL_ALERTS = [
  {
    id: 'primary',
    variant: 'alert-custom-primary',
    icon: 'bi-info-circle-fill',
    dismissible: false,
    content: 'A simple custom primary warning alert. Feel free to customize its layout context.',
  },
  {
    id: 'success',
    variant: 'alert-custom-success',
    icon: 'bi-check-circle-fill',
    dismissible: true,
    content: (
      <>
        <strong>Success Alert:</strong> Your data synchronization completed with zero error results!
      </>
    ),
  },
  {
    id: 'danger',
    variant: 'alert-custom-danger',
    icon: 'bi-exclamation-triangle-fill',
    dismissible: true,
    content: (
      <>
        <strong>Danger Warning:</strong> There was an issue processing your subscription payment bounds.
      </>
    ),
  },
  {
    id: 'warning',
    variant: 'alert-custom-warning',
    icon: 'bi-exclamation-circle-fill',
    dismissible: false,
    content: (
      <>
        <strong>Notice Warning:</strong> Please check your local database connection variables immediately.
      </>
    ),
  },
  {
    id: 'info',
    variant: 'alert-custom-info',
    icon: 'bi-lightbulb-fill',
    dismissible: false,
    content: (
      <>
        <strong>Tip Accent:</strong> You can minimize the left-side navigational sidebar options using the toggle.
      </>
    ),
  },
];

export default function ButtonsAlertsPage() {
  const [alerts, setAlerts] = useState(INITIAL_ALERTS);

  const dismissAlert = (id) => {
    setAlerts((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="page-header">
        <div>
          <h1 className="page-title">Buttons &amp; Alerts</h1>
          <p className="page-subtitle">Interactive buttons, sizes, outline styles, and notification alerts.</p>
        </div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/" className="text-decoration-none text-muted-green">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item text-muted-green">Components</li>
            <li className="breadcrumb-item active text-main" aria-current="page">
              Buttons &amp; Alerts
            </li>
          </ol>
        </nav>
      </div>

      <div className="row g-4 mb-4">
        <div className="col-12 col-lg-6">
          <div className="card border-light shadow-sm p-4 h-100">
            <h5 className="card-title mb-4">Button Variants</h5>

            <h6 className="mb-3">Solid Color Buttons</h6>
            <div className="d-flex flex-wrap gap-2 mb-4">
              <button className="btn-custom btn-custom-primary" type="button">
                Primary Button
              </button>
              <button className="btn-custom btn-custom-secondary" type="button">
                Secondary Button
              </button>
              <button className="btn-custom btn-custom-light" type="button">
                Light Button
              </button>
              <button className="btn-custom btn-custom-danger" type="button">
                Danger Button
              </button>
              <button className="btn-custom btn-custom-warning" type="button">
                Warning Button
              </button>
            </div>

            <h6 className="mb-3">Outline Buttons</h6>
            <div className="d-flex flex-wrap gap-2 mb-4">
              <button className="btn-custom btn-custom-outline-primary" type="button">
                Outline Primary
              </button>
              <button className="btn-custom btn-custom-outline-secondary" type="button">
                Outline Secondary
              </button>
              <button className="btn-custom btn-custom-outline-danger" type="button">
                Outline Danger
              </button>
            </div>

            <h6 className="mb-3">Buttons with Icons</h6>
            <div className="d-flex flex-wrap gap-2 mb-4">
              <button className="btn-custom btn-custom-primary" type="button">
                <i className="bi bi-search"></i> Search
              </button>
              <button className="btn-custom btn-custom-secondary" type="button">
                <i className="bi bi-file-earmark-arrow-down"></i> Download Report
              </button>
              <button className="btn-custom btn-custom-light" type="button">
                <i className="bi bi-gear"></i> Settings
              </button>
            </div>

            <h6 className="mb-3">Button Sizing</h6>
            <div className="d-flex flex-wrap align-items-center gap-2">
              <button className="btn-custom btn-custom-primary btn-custom-lg" type="button">
                Large Action
              </button>
              <button className="btn-custom btn-custom-primary" type="button">
                Default Size
              </button>
              <button className="btn-custom btn-custom-primary btn-custom-sm" type="button">
                Small Action
              </button>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="card border-light shadow-sm p-4 h-100">
            <h5 className="card-title mb-4">Notification Alerts</h5>

            {alerts.map((alert) => (
              <div key={alert.id} className={`alert-custom ${alert.variant}`}>
                <i className={`bi ${alert.icon} alert-custom-icon`}></i>
                <div className="alert-custom-content">{alert.content}</div>
                {alert.dismissible && (
                  <button
                    className="alert-custom-close"
                    type="button"
                    aria-label="Close"
                    onClick={() => dismissAlert(alert.id)}
                  >
                    <i className="bi bi-x-lg"></i>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
