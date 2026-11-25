import { Link } from 'react-router-dom';

export default function BlankPage() {
  return (
    <>
      <div className="page-header">
        <div>
          <h1 className="page-title">Blank Page</h1>
          <p className="page-subtitle">A blank starter template page for custom extensions.</p>
        </div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/" className="text-decoration-none text-muted-green">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item active text-main" aria-current="page">
              Blank Page
            </li>
          </ol>
        </nav>
      </div>

      <div className="card p-4 border-light shadow-sm text-center">
        <div>
          <div className="mb-4 text-lime empty-state-icon">
            <i className="bi bi-file-earmark-fill"></i>
          </div>
          <h3 className="mb-2">Your Content Starts Here</h3>
          <p className="text-muted-green mb-4">
            Use this blank page starter template to build custom dashboard views, tables, forms, or any modules
            required for your Spark Admin system.
          </p>
        </div>
      </div>
    </>
  );
}
