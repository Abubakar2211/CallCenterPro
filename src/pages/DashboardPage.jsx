import { useEffect, useRef, useState } from 'react';
import flatpickr from 'flatpickr';
import ApexChart from '../components/ApexChart';

const INCOME_SPARK_OPTIONS = {
  series: [
    {
      name: 'Net Income',
      data: [45, 51, 46, 58, 50, 62, 55, 72, 65, 79, 70, 85],
    },
  ],
  chart: {
    type: 'area',
    height: 45,
    sparkline: { enabled: true },
    fontFamily: 'Plus Jakarta Sans, sans-serif',
  },
  stroke: { curve: 'smooth', width: 2 },
  fill: { opacity: 0.1, type: 'solid' },
  colors: ['#22C55E'],
  tooltip: {
    fixed: { enabled: false },
    x: { show: false },
    y: {
      title: {
        formatter: () => '',
      },
    },
    marker: { show: false },
  },
};

const RETURN_SPARK_OPTIONS = {
  series: [
    {
      name: 'Total Return',
      data: [50, 48, 55, 45, 40, 38, 42, 35, 30, 28, 32, 24],
    },
  ],
  chart: {
    type: 'area',
    height: 45,
    sparkline: { enabled: true },
    fontFamily: 'Plus Jakarta Sans, sans-serif',
  },
  stroke: { curve: 'smooth', width: 2 },
  fill: { opacity: 0.1, type: 'solid' },
  colors: ['#EF4444'],
  tooltip: {
    fixed: { enabled: false },
    x: { show: false },
    y: {
      title: {
        formatter: () => '',
      },
    },
    marker: { show: false },
  },
};

const REVENUE_CHART_OPTIONS = {
  series: [
    {
      name: 'Income',
      data: [44, 55, 41, 67, 52, 70, 61, 85],
    },
    {
      name: 'Expenses',
      data: [23, 33, 30, 48, 34, 45, 40, 45],
    },
  ],
  chart: {
    type: 'bar',
    height: 220,
    stacked: false,
    toolbar: { show: false },
    zoom: { enabled: false },
    fontFamily: 'Plus Jakarta Sans, sans-serif',
  },
  colors: ['#072F1F', '#B4F105'],
  states: {
    hover: {
      filter: { type: 'none' },
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '48%',
      borderRadius: 0,
    },
  },
  dataLabels: { enabled: false },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent'],
  },
  legend: { show: false },
  grid: {
    borderColor: '#E9EFEF',
    strokeDashArray: 4,
    yaxis: { lines: { show: true } },
    xaxis: { lines: { show: false } },
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    labels: {
      style: {
        colors: '#6C7E75',
        fontSize: '11px',
        fontWeight: 500,
      },
    },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: {
    labels: { show: false },
  },
  fill: { opacity: 1 },
  tooltip: {
    y: {
      formatter: (val) => `$ ${val}.000`,
    },
    theme: 'dark',
  },
};

const VIEWS_CHART_OPTIONS = {
  series: [68, 23, 16],
  chart: {
    type: 'donut',
    height: 250,
    fontFamily: 'Plus Jakarta Sans, sans-serif',
  },
  labels: ['View Count', 'Percentage', 'Sales'],
  colors: ['#B4F105', '#051C12', '#F97316'],
  states: {
    hover: {
      filter: { type: 'none' },
    },
  },
  legend: { show: false },
  dataLabels: { enabled: false },
  plotOptions: {
    pie: {
      donut: {
        size: '72%',
        background: 'transparent',
        labels: {
          show: true,
          name: {
            show: true,
            fontSize: '12px',
            fontWeight: 500,
            color: '#6C7E75',
            offsetY: -8,
          },
          value: {
            show: true,
            fontSize: '26px',
            fontWeight: 800,
            color: '#0B130F',
            offsetY: 8,
            formatter: (val) => `${val}%`,
          },
          total: {
            show: true,
            label: 'Total Count',
            fontSize: '11px',
            fontWeight: 500,
            color: '#6C7E75',
            formatter: () => '565K',
          },
        },
      },
    },
  },
  tooltip: { theme: 'dark' },
};

const TRANSACTIONS = [
  {
    id: 1,
    icon: 'bi-spotify',
    name: 'Spotify Subscription',
    date: 'Feb 14, 2026 • 12:40 PM',
    amount: '-$15.00',
    amountClass: 'text-main',
  },
  {
    id: 2,
    icon: 'bi-paypal',
    name: 'Paypal Transfer',
    date: 'Feb 13, 2026 • 08:15 AM',
    amount: '+$1,250.00',
    amountClass: 'text-success',
  },
  {
    id: 3,
    icon: 'bi-stripe',
    name: 'Stripe Payout',
    date: 'Feb 11, 2026 • 04:30 PM',
    amount: '+$3,400.00',
    amountClass: 'text-success',
  },
  {
    id: 4,
    icon: 'bi-slack',
    name: 'Slack Pro Workspace',
    date: 'Feb 09, 2026 • 09:20 AM',
    amount: '-$45.00',
    amountClass: 'text-main',
  },
];

const PRODUCT_OVERVIEW = [
  { label: 'Product Launched', value: '233', now: 65, barClass: 'bg-lime-accent w-65' },
  { label: 'Ongoing Product', value: '23', now: 20, barClass: 'bg-lime-accent opacity-50 w-50' },
  { label: 'Product Sold', value: '482', now: 85, barClass: 'bg-lime-accent w-85' },
  { label: 'Product Returned', value: '8', now: 10, barClass: 'bg-brand-orange w-38' },
  { label: 'Product In Stock', value: '1,420', now: 75, barClass: 'bg-lime-accent w-75' },
  { label: 'Pending Shipment', value: '64', now: 45, barClass: 'bg-lime-accent opacity-50 w-45' },
];

export default function DashboardPage() {
  const datePickerRef = useRef(null);
  const [dateRangeText, setDateRangeText] = useState('January 12, 2026 - January 23, 2026');

  useEffect(() => {
    if (!datePickerRef.current) return;

    const fp = flatpickr(datePickerRef.current, {
      mode: 'range',
      dateFormat: 'Y-m-d',
      defaultDate: ['2026-01-12', '2026-01-23'],
      onValueUpdate: (selectedDates, _dateStr, instance) => {
        if (selectedDates.length === 2) {
          const startStr = instance.formatDate(selectedDates[0], 'F j, Y');
          const endStr = instance.formatDate(selectedDates[1], 'F j, Y');
          setDateRangeText(`${startStr} - ${endStr}`);
        } else if (selectedDates.length === 1) {
          const startStr = instance.formatDate(selectedDates[0], 'F j, Y');
          setDateRangeText(startStr);
        }
      },
    });

    return () => {
      fp.destroy();
    };
  }, []);

  return (
    <>
      <div className="page-header">
        <div>
          <h1 className="page-title">Dashboard</h1>
          <p className="page-subtitle">An easy way to manage sales with care and precision.</p>
        </div>
        <button ref={datePickerRef} className="btn-date-picker" type="button" id="date-picker-trigger">
          <i className="bi bi-calendar4-event"></i>
          <span id="selected-date-range">{dateRangeText}</span>
          <i className="bi bi-chevron-down ms-1"></i>
        </button>
      </div>

      <div className="row g-4">
        <div className="col-12">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card alert-green-card">
                <div className="position-relative z-index-2">
                  <span className="alert-green-badge">Update</span>
                  <div className="alert-green-date">Feb 14th 2026</div>
                  <div className="alert-green-text">Sales revenue increased 40% in 1 week</div>
                </div>
                <a href="#statistics" className="alert-green-link z-index-2" id="alert-link-statistics" onClick={(e) => e.preventDefault()}>
                  <span>See Statistics</span>
                  <i className="bi bi-arrow-right"></i>
                </a>

                <svg className="alert-green-bg-shape" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g transform="translate(50,50)">
                    <rect x="-6" y="-45" width="12" height="90" rx="6" ry="6" fill="#B4F105" />
                    <rect x="-6" y="-45" width="12" height="90" rx="6" ry="6" fill="#B4F105" transform="rotate(60)" />
                    <rect x="-6" y="-45" width="12" height="90" rx="6" ry="6" fill="#B4F105" transform="rotate(120)" />
                  </g>
                </svg>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card card-stat d-flex flex-column justify-content-between">
                <div>
                  <div className="card-header">
                    <span className="stat-label">Net Income</span>
                    <div className="dropdown">
                      <button
                        className="card-more-btn"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        aria-label="More Options"
                        id="btn-more-income"
                      >
                        <i className="bi bi-three-dots"></i>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-custom">
                        <li>
                          <a className="dropdown-item" href="#refresh" onClick={(e) => e.preventDefault()}>
                            <i className="bi bi-arrow-repeat"></i> Refresh
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#export" onClick={(e) => e.preventDefault()}>
                            <i className="bi bi-file-earmark-arrow-down"></i> Export Report
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item text-danger" href="#hide" onClick={(e) => e.preventDefault()}>
                            <i className="bi bi-eye-slash"></i> Hide Details
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="stat-value">$196.000</div>
                  <div className="trend-badge trend-up">
                    <i className="bi bi-arrow-up-right"></i>
                    <span>+35% from last month</span>
                  </div>
                </div>
                <div className="sparkline-container sparkline-card-footer">
                  <ApexChart id="income-sparkline" options={INCOME_SPARK_OPTIONS} />
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card card-stat d-flex flex-column justify-content-between">
                <div>
                  <div className="card-header">
                    <span className="stat-label">Total Return</span>
                    <div className="dropdown">
                      <button
                        className="card-more-btn"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        aria-label="More Options"
                        id="btn-more-return"
                      >
                        <i className="bi bi-three-dots"></i>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-custom">
                        <li>
                          <a className="dropdown-item" href="#refresh" onClick={(e) => e.preventDefault()}>
                            <i className="bi bi-arrow-repeat"></i> Refresh
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#export" onClick={(e) => e.preventDefault()}>
                            <i className="bi bi-file-earmark-arrow-down"></i> Export Report
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item text-danger" href="#hide" onClick={(e) => e.preventDefault()}>
                            <i className="bi bi-eye-slash"></i> Hide Details
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="stat-value">$32.000</div>
                  <div className="trend-badge trend-down">
                    <i className="bi bi-arrow-down-left"></i>
                    <span>-24% from last month</span>
                  </div>
                </div>
                <div className="sparkline-container sparkline-card-footer">
                  <ApexChart id="return-sparkline" options={RETURN_SPARK_OPTIONS} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-9 col-lg-8">
          <div className="row g-4">
            <div className="col-12">
              <div className="card mb-0">
                <div className="card-header mb-2">
                  <h2 className="card-title">Revenue</h2>
                  <div className="d-flex gap-3 align-items-center">
                    <div className="chart-legend-item">
                      <span className="legend-dot bg-forest-medium"></span>
                      <span className="chart-legend-label">Income</span>
                    </div>
                    <div className="chart-legend-item">
                      <span className="legend-dot bg-lime-accent"></span>
                      <span className="chart-legend-label">Expenses</span>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-baseline gap-2 mb-3">
                  <span className="stat-value-amount">$196.000</span>
                  <span className="trend-badge trend-up fs-xs">+35% from last month</span>
                </div>
                <ApexChart id="revenue-chart" options={REVENUE_CHART_OPTIONS} />
              </div>
            </div>

            <div className="col-md-7 d-flex flex-column">
              <div className="card h-100 flex-grow-1">
                <div className="card-header">
                  <h2 className="card-title">Transaction</h2>
                  <div className="dropdown">
                    <button
                      className="card-more-btn"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      aria-label="More Options"
                      id="btn-more-transaction"
                    >
                      <i className="bi bi-three-dots"></i>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-custom">
                      <li>
                        <a className="dropdown-item" href="#filter" onClick={(e) => e.preventDefault()}>
                          <i className="bi bi-funnel"></i> Filter Status
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#csv" onClick={(e) => e.preventDefault()}>
                          <i className="bi bi-file-earmark-arrow-down"></i> Export CSV
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="transaction-list">
                  {TRANSACTIONS.map((tx) => (
                    <div className="transaction-item" key={tx.id}>
                      <div className="transaction-icon bg-forest-light text-lime">
                        <i className={`bi ${tx.icon}`}></i>
                      </div>
                      <div className="transaction-info">
                        <div className="transaction-name">{tx.name}</div>
                        <div className="transaction-date">{tx.date}</div>
                      </div>
                      <div className={`transaction-amount ${tx.amountClass}`}>{tx.amount}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-md-5 d-flex flex-column">
              <div className="card h-100 flex-grow-1">
                <div className="card-header">
                  <h2 className="card-title">Product Overview</h2>
                  <div className="dropdown">
                    <button
                      className="card-more-btn"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      aria-label="More Options"
                      id="btn-more-products"
                    >
                      <i className="bi bi-three-dots"></i>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-custom">
                      <li>
                        <a className="dropdown-item" href="#add-product" onClick={(e) => e.preventDefault()}>
                          <i className="bi bi-plus-lg"></i> Add Product
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#manage" onClick={(e) => e.preventDefault()}>
                          <i className="bi bi-gear"></i> Manage
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {PRODUCT_OVERVIEW.map((item) => (
                  <div className="progress-container" key={item.label}>
                    <div className="progress-label-row">
                      <span className="progress-label">{item.label}</span>
                      <span className="progress-value">{item.value}</span>
                    </div>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label={`${item.label} Progress`}
                      aria-valuenow={item.now}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div className={`progress-bar ${item.barClass}`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4">
          <div className="right-panel-wrapper d-flex flex-column gap-4 h-100">
            <div className="card flex-grow-1 d-flex flex-column justify-content-between mb-0">
              <div className="card-header mb-1">
                <h2 className="card-title">Total View Performance</h2>
              </div>

              <ApexChart id="views-chart" options={VIEWS_CHART_OPTIONS} />

              <div className="chart-legends-container">
                <div className="chart-legend-item">
                  <span className="legend-dot bg-lime-accent"></span>
                  <span className="text-muted-green">View Count</span>
                </div>
                <div className="chart-legend-item">
                  <span className="legend-dot bg-forest-medium"></span>
                  <span className="text-muted-green">Percentage</span>
                </div>
                <div className="chart-legend-item">
                  <span className="legend-dot bg-brand-orange"></span>
                  <span className="text-muted-green">Sales</span>
                </div>
              </div>
            </div>

            <div className="promo-banner-card">
              <svg className="promo-banner-bg-shape" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(50,50)">
                  <rect x="-6" y="-45" width="12" height="90" rx="6" ry="6" fill="#B4F105" />
                  <rect x="-6" y="-45" width="12" height="90" rx="6" ry="6" fill="#B4F105" transform="rotate(60)" />
                  <rect x="-6" y="-45" width="12" height="90" rx="6" ry="6" fill="#B4F105" transform="rotate(120)" />
                </g>
              </svg>

              <h3 className="promo-title">Level up your sales managing to the next level.</h3>
              <p className="promo-desc">An easy way to manage sales with care and precision.</p>
              <button className="btn-promo" id="btn-promo-action" type="button">
                Check the updates now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
