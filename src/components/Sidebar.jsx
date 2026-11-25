import { NavLink, Link } from 'react-router-dom';

export default function Sidebar({ isOpen, onClose }) {
  const navLinkClass = ({ isActive }) =>
    `sidebar-menu-link${isActive ? ' active' : ''}`;

  return (
    <div className={`sidebar-wrapper${isOpen ? ' show' : ''}`} id="sidebar">
      <Link to="/" className="sidebar-brand" onClick={onClose}>
        <i className="bi bi-asterisk"></i>
        <span>Spark Admin</span>
      </Link>

      <div className="flex-grow-1 overflow-y-auto">
        <div className="sidebar-menu-section">
          <div className="sidebar-menu-title">Menu</div>
          <ul className="sidebar-menu-list">
            <li className="sidebar-menu-item">
              <NavLink to="/" end className={navLinkClass} id="menu-overview" title="Overview" onClick={onClose}>
                <i className="bi bi-grid-fill"></i>
                <span>Dashboard</span>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="sidebar-menu-section">
          <div className="sidebar-menu-title">Components</div>
          <ul className="sidebar-menu-list">
            <li className="sidebar-menu-item">
              <NavLink to="/tables" className={navLinkClass} id="menu-basictables" title="Basic Tables" onClick={onClose}>
                <i className="bi bi-table"></i>
                <span>Basic Tables</span>
              </NavLink>
            </li>
            <li className="sidebar-menu-item">
              <NavLink to="/forms" className={navLinkClass} id="menu-uiforms" title="Forms and Input" onClick={onClose}>
                <i className="bi bi-input-cursor-text"></i>
                <span>Forms &amp; Input</span>
              </NavLink>
            </li>
            <li className="sidebar-menu-item">
              <NavLink to="/buttons" className={navLinkClass} id="menu-uibuttons" title="Buttons" onClick={onClose}>
                <i className="bi bi-menu-button-wide-fill"></i>
                <span>Buttons &amp; Alerts</span>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="sidebar-menu-section">
          <div className="sidebar-menu-title">Pages</div>
          <ul className="sidebar-menu-list">
            <li className="sidebar-menu-item">
              <NavLink to="/blank" className={navLinkClass} id="menu-blankpage" title="Blank Page" onClick={onClose}>
                <i className="bi bi-file-earmark"></i>
                <span>Blank Page</span>
              </NavLink>
            </li>
            <li className="sidebar-menu-item">
              <NavLink to="/login" className={navLinkClass} id="menu-loginpage" title="Login Page" onClick={onClose}>
                <i className="bi bi-box-arrow-in-right"></i>
                <span>Login Screen</span>
              </NavLink>
            </li>
            <li className="sidebar-menu-item">
              <NavLink to="/404" className={navLinkClass} id="menu-404" title="404 Page" onClick={onClose}>
                <i className="bi bi-slash-circle"></i>
                <span>Error 404</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="sidebar-profile">
        <img
          src="/assets/images/avatar.png"
          alt="Administrator"
          className="sidebar-profile-img"
          onError={(e) => {
            e.currentTarget.src =
              'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop';
          }}
        />
        <div className="sidebar-profile-info">
          <div className="sidebar-profile-name">Administrator</div>
          <div className="sidebar-profile-email">admin@email.com</div>
        </div>
      </div>
    </div>
  );
}
