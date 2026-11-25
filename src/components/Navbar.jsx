import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const INITIAL_NOTIFICATIONS = [
  {
    id: 1,
    icon: 'bi-wallet2',
    iconBg: 'bg-success text-white',
    text: (
      <>
        New sale received: <strong>$150.00</strong>
      </>
    ),
    time: '2 mins ago',
    unread: true,
  },
  {
    id: 2,
    icon: 'bi-person-plus-fill',
    iconBg: 'bg-primary text-white',
    text: (
      <>
        New user registered: <strong>John Doe</strong>
      </>
    ),
    time: '1 hour ago',
    unread: true,
  },
  {
    id: 3,
    icon: 'bi-box-seam-fill',
    iconBg: 'bg-warning text-dark',
    text: (
      <>
        Stock running low: <strong>Hoodie</strong>
      </>
    ),
    time: '3 hours ago',
    unread: false,
  },
];

export default function Navbar({ sidebarMinimized, onToggleDesktopSidebar, onToggleMobileSidebar }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen mode: ${err.message}`);
      });
    } else {
      document.exitFullscreen().catch((err) => {
        console.error(`Error attempting to exit fullscreen mode: ${err.message}`);
      });
    }
  };

  const markAllRead = () => {
    setNotifications((prev) => prev.map((item) => ({ ...item, unread: false })));
  };

  const hasUnread = notifications.some((n) => n.unread);

  return (
    <header className="navbar-custom">
      <div className="navbar-left">
        <button
          className="btn-desktop-toggle d-none d-xl-flex align-items-center justify-content-center me-3"
          id="desktop-sidebar-toggle"
          aria-label="Minimize Sidebar"
          type="button"
          onClick={onToggleDesktopSidebar}
        >
          <i className={`bi ${sidebarMinimized ? 'bi-chevron-bar-right' : 'bi-chevron-bar-left'}`}></i>
        </button>

        <button
          className="sidebar-toggle-btn me-2"
          id="sidebar-toggle"
          aria-label="Toggle Navigation"
          type="button"
          onClick={onToggleMobileSidebar}
        >
          <i className="bi bi-list"></i>
        </button>

        <div className="dropdown ms-2">
          <button
            className="btn-quick-action dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            id="quick-actions-dropdown"
          >
            <i className="bi bi-plus-lg"></i>
            <span>Create</span>
          </button>
          <ul className="dropdown-menu dropdown-menu-quick-action" aria-labelledby="quick-actions-dropdown">
            <li className="dropdown-header">Quick Action Shortcuts</li>
            <li>
              <a className="dropdown-item" href="#invoice" onClick={(e) => e.preventDefault()}>
                <i className="bi bi-file-earmark-plus"></i> New Invoice
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#user" onClick={(e) => e.preventDefault()}>
                <i className="bi bi-person-plus"></i> New User
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#product" onClick={(e) => e.preventDefault()}>
                <i className="bi bi-box-seam"></i> New Product
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#settings" onClick={(e) => e.preventDefault()}>
                <i className="bi bi-gear"></i> System Settings
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-search-wrapper">
        <input
          type="text"
          className="navbar-search-input"
          placeholder="Search anything in Spark..."
          id="main-search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="navbar-search-btn" aria-label="Search" type="button">
          <i className="bi bi-search"></i>
        </button>
      </div>

      <div className="navbar-actions">
        <button
          className="navbar-action-btn me-1"
          aria-label="Toggle Fullscreen"
          id="btn-fullscreen"
          type="button"
          onClick={toggleFullscreen}
        >
          <i className={`bi ${isFullscreen ? 'bi-fullscreen-exit' : 'bi-arrows-fullscreen'}`}></i>
        </button>

        <div className="dropdown">
          <button
            className="navbar-action-btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            id="btn-notifications"
            data-bs-auto-close="outside"
          >
            <i className="bi bi-bell"></i>
            {hasUnread && <span className="navbar-action-badge"></span>}
          </button>
          <div className="dropdown-menu dropdown-menu-end dropdown-menu-notification p-0" aria-labelledby="btn-notifications">
            <div className="notification-header">
              <h6 className="notification-title">Notifications</h6>
              <button className="btn-clear-all" type="button" onClick={markAllRead}>
                Mark all read
              </button>
            </div>
            <div className="notification-list">
              {notifications.map((item) => (
                <a
                  key={item.id}
                  href="#notification"
                  className="notification-item"
                  onClick={(e) => e.preventDefault()}
                >
                  <div className={`notification-icon ${item.iconBg}`}>
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <div className="notification-content">
                    <p className="notification-text">{item.text}</p>
                    <span className="notification-time">{item.time}</span>
                  </div>
                  {item.unread && <span className="notification-unread-dot"></span>}
                </a>
              ))}
            </div>
            <a href="#all-notifications" className="notification-footer" onClick={(e) => e.preventDefault()}>
              View All Notifications
            </a>
          </div>
        </div>

        <div className="dropdown ms-2">
          <button
            className="navbar-profile-btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            id="profile-dropdown"
          >
            <img src="/assets/images/avatar.png" alt="Profile" className="navbar-profile-img" />
            <span className="navbar-profile-name d-none d-md-inline">Administrator</span>
            <i className="bi bi-chevron-down navbar-profile-caret"></i>
          </button>
          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-profile" aria-labelledby="profile-dropdown">
            <li className="dropdown-header">Welcome !</li>
            <li>
              <a className="dropdown-item" href="#account" onClick={(e) => e.preventDefault()}>
                <i className="bi bi-person"></i> My Account
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#settings" onClick={(e) => e.preventDefault()}>
                <i className="bi bi-gear"></i> Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#lock" onClick={(e) => e.preventDefault()}>
                <i className="bi bi-lock"></i> Lock Screen
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item text-danger" to="/login">
                <i className="bi bi-box-arrow-right"></i> Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
