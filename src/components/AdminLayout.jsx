import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';

export default function AdminLayout() {
  const [sidebarMinimized, setSidebarMinimized] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.classList.toggle('sidebar-minimized', sidebarMinimized);
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
    return () => clearTimeout(timer);
  }, [sidebarMinimized]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    return () => {
      document.body.classList.remove('sidebar-minimized');
    };
  }, []);

  return (
    <>
      <Sidebar isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      <div
        className={`sidebar-overlay${mobileOpen ? ' show' : ''}`}
        onClick={() => setMobileOpen(false)}
      />

      <div className="main-wrapper">
        <Navbar
          sidebarMinimized={sidebarMinimized}
          onToggleDesktopSidebar={() => setSidebarMinimized((prev) => !prev)}
          onToggleMobileSidebar={() => setMobileOpen((prev) => !prev)}
        />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
