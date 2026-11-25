import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

const ORDERS = [
  { id: '#ORD-9982', name: 'Eleanor Pena', email: 'eleanor.pena@example.com', avatar: '/assets/images/user_1.jpg', product: 'Oversized Hoodie', category: 'Apparel', amount: '$89.90', date: 'Feb 14, 2026', status: 'Paid', statusType: 'success' },
  { id: '#ORD-9981', name: 'Wade Warren', email: 'wade.warren@example.com', avatar: '/assets/images/user_2.jpg', product: 'Gaming Console', category: 'Electronics', amount: '$499.00', date: 'Feb 13, 2026', status: 'Processing', statusType: 'pending' },
  { id: '#ORD-9980', name: 'Jane Cooper', email: 'jane.cooper@example.com', avatar: '/assets/images/user_3.jpg', product: 'Premium T-Shirt', category: 'Apparel', amount: '$35.00', date: 'Feb 12, 2026', status: 'Paid', statusType: 'success' },
  { id: '#ORD-9979', name: 'Robert Fox', email: 'robert.fox@example.com', avatar: '/assets/images/user_4.jpg', product: 'Wireless Headset', category: 'Accessories', amount: '$129.99', date: 'Feb 11, 2026', status: 'Failed', statusType: 'failed' },
  { id: '#ORD-9978', name: 'Albert Flores', email: 'albert.flores@example.com', avatar: '/assets/images/user_5.jpg', product: 'Leather Wallet', category: 'Accessories', amount: '$45.00', date: 'Feb 10, 2026', status: 'Paid', statusType: 'success' },
  { id: '#ORD-9977', name: 'Kristin Watson', email: 'kristin.watson@example.com', avatar: '/assets/images/user_6.jpg', product: 'Ergonomic Chair', category: 'Furniture', amount: '$249.00', date: 'Feb 09, 2026', status: 'Processing', statusType: 'pending' },
  { id: '#ORD-9976', name: 'Cody Fisher', email: 'cody.fisher@example.com', avatar: '/assets/images/user_7.jpg', product: 'Mechanical Keyboard', category: 'Accessories', amount: '$119.00', date: 'Feb 08, 2026', status: 'Paid', statusType: 'success' },
  { id: '#ORD-9975', name: 'Bessie Cooper', email: 'bessie.cooper@example.com', avatar: '/assets/images/user_8.jpg', product: 'Fitness Tracker', category: 'Electronics', amount: '$79.99', date: 'Feb 07, 2026', status: 'Cancelled', statusType: 'failed' },
  { id: '#ORD-9974', name: 'Dianne Russell', email: 'dianne.russell@example.com', avatar: '/assets/images/user_1.jpg', product: 'Coffee Mug Set', category: 'Home', amount: '$24.50', date: 'Feb 06, 2026', status: 'Paid', statusType: 'success' },
  { id: '#ORD-9973', name: 'Devon Lane', email: 'devon.lane@example.com', avatar: '/assets/images/user_2.jpg', product: 'Desk Organizer', category: 'Office', amount: '$39.99', date: 'Feb 05, 2026', status: 'Paid', statusType: 'success' },
];

export default function TablesBasicPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredOrders = useMemo(() => {
    const q = search.trim().toLowerCase();
    return ORDERS.filter((row) => {
      const matchesStatus = statusFilter === 'all' || row.statusType === statusFilter;
      const matchesSearch =
        !q ||
        row.id.toLowerCase().includes(q) ||
        row.name.toLowerCase().includes(q) ||
        row.product.toLowerCase().includes(q) ||
        row.category.toLowerCase().includes(q);
      return matchesStatus && matchesSearch;
    });
  }, [search, statusFilter]);

  return (
    <>
      <div className="page-header">
        <div>
          <h1 className="page-title">Basic Tables</h1>
          <p className="page-subtitle">Highly customizable, responsive tabular data component templates.</p>
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
              Basic Tables
            </li>
          </ol>
        </nav>
      </div>

      <div className="table-card-custom">
        <div className="table-header-control">
          <div className="table-search-box">
            <i className="bi bi-search table-search-icon"></i>
            <input
              type="text"
              className="table-search-input"
              placeholder="Search orders or products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="table-filter-group">
            <div className="dropdown">
              <button
                className="btn-table-action dropdown-toggle"
                type="button"
                id="dropdownFilterStatus"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-funnel"></i> Status Filter
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownFilterStatus">
                <li>
                  <button className="dropdown-item" type="button" onClick={() => setStatusFilter('all')}>
                    All Statuses
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button" onClick={() => setStatusFilter('success')}>
                    Paid / Success
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button" onClick={() => setStatusFilter('pending')}>
                    Processing
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button" onClick={() => setStatusFilter('failed')}>
                    Cancelled / Failed
                  </button>
                </li>
              </ul>
            </div>
            <button className="btn-table-action" type="button">
              <i className="bi bi-file-earmark-arrow-down"></i> Export
            </button>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table-custom">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Product Info</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Order Date</th>
                <th>Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((row) => (
                <tr key={row.id}>
                  <td className="table-order-id">{row.id}</td>
                  <td>
                    <div className="table-user-cell">
                      <img
                        src={row.avatar}
                        alt={row.name}
                        className="table-user-avatar"
                        onError={(e) => {
                          e.currentTarget.src = '/assets/images/avatar.png';
                        }}
                      />
                      <div>
                        <div className="table-user-name">{row.name}</div>
                        <div className="table-user-sub">{row.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="table-product-name">{row.product}</td>
                  <td>{row.category}</td>
                  <td className="table-amount">{row.amount}</td>
                  <td>{row.date}</td>
                  <td>
                    <span className={`badge-table ${row.statusType}`}>{row.status}</span>
                  </td>
                  <td>
                    <div className="d-flex justify-content-center gap-1">
                      <a href="#view" className="table-btn-action" title="View details" onClick={(e) => e.preventDefault()}>
                        <i className="bi bi-eye"></i>
                      </a>
                      <a href="#edit" className="table-btn-action" title="Edit row" onClick={(e) => e.preventDefault()}>
                        <i className="bi bi-pencil"></i>
                      </a>
                      <a href="#delete" className="table-btn-action delete" title="Delete row" onClick={(e) => e.preventDefault()}>
                        <i className="bi bi-trash"></i>
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredOrders.length === 0 && (
                <tr>
                  <td colSpan={8} className="text-center py-4 text-muted">
                    No matching orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="table-footer-control">
          <span className="table-pagination-info">
            Showing {filteredOrders.length === 0 ? 0 : 1} to {filteredOrders.length} of 50 entries
          </span>
          <nav aria-label="Page navigation">
            <ul className="pagination mb-0 gap-1">
              <li className="page-item disabled">
                <a className="page-link border-0" href="#prev" onClick={(e) => e.preventDefault()}>
                  <i className="bi bi-chevron-left"></i>
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link border-0" href="#1" onClick={(e) => e.preventDefault()}>
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link border-0" href="#2" onClick={(e) => e.preventDefault()}>
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link border-0" href="#3" onClick={(e) => e.preventDefault()}>
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link border-0" href="#next" onClick={(e) => e.preventDefault()}>
                  <i className="bi bi-chevron-right"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
