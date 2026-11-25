import { Link } from 'react-router-dom';

export default function FormsPage() {
  return (
    <>
      <div className="page-header">
        <div>
          <h1 className="page-title">Forms &amp; Input</h1>
          <p className="page-subtitle">Clean, modern form controls, switches, and validation elements.</p>
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
              Forms &amp; Input
            </li>
          </ol>
        </nav>
      </div>

      <div className="row g-4 mb-4">
        <div className="col-12 col-lg-6">
          <div className="card border-light shadow-sm p-4 h-100">
            <h5 className="card-title mb-4">Basic Fields</h5>

            <div className="mb-3">
              <label htmlFor="basicText" className="form-label-custom">
                Username
              </label>
              <input type="text" className="form-control-custom" id="basicText" placeholder="Enter username" />
            </div>

            <div className="mb-3">
              <label htmlFor="basicEmail" className="form-label-custom">
                Email Address
              </label>
              <input type="email" className="form-control-custom" id="basicEmail" placeholder="name@example.com" />
              <span className="text-muted">We&apos;ll never share your email with anyone else.</span>
            </div>

            <div className="mb-3">
              <label htmlFor="basicPassword" className="form-label-custom">
                Password
              </label>
              <input
                type="password"
                className="form-control-custom"
                id="basicPassword"
                placeholder="Enter your secure password"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="basicDisabled" className="form-label-custom">
                Disabled Input
              </label>
              <input
                type="text"
                className="form-control-custom"
                id="basicDisabled"
                defaultValue="This input field is disabled"
                disabled
              />
            </div>

            <div className="mb-0">
              <label htmlFor="basicReadonly" className="form-label-custom">
                Read-only Input
              </label>
              <input
                type="text"
                className="form-control-custom"
                id="basicReadonly"
                defaultValue="This field is read-only"
                readOnly
              />
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="card border-light shadow-sm p-4 h-100">
            <h5 className="card-title mb-4">Selection &amp; Validation</h5>

            <div className="mb-3">
              <label htmlFor="selectControl" className="form-label-custom">
                Preferred Theme
              </label>
              <select className="form-select-custom" id="selectControl" defaultValue="">
                <option value="" disabled>
                  Choose a visual theme...
                </option>
                <option value="light">Spark Light Theme</option>
                <option value="dark">Spark Dark Green Theme</option>
                <option value="forest">Forest Breeze Accent</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="textareaControl" className="form-label-custom">
                Description Bio
              </label>
              <textarea
                className="form-control-custom"
                id="textareaControl"
                rows={3}
                placeholder="Tell us about yourself..."
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="validInput" className="form-label-custom">
                Valid State Field
              </label>
              <input
                type="text"
                className="form-control-custom is-valid-custom"
                id="validInput"
                defaultValue="spark_admin_user"
              />
              <div className="form-feedback-custom valid-custom">
                <i className="bi bi-check-circle-fill"></i> Username is available!
              </div>
            </div>

            <div className="mb-0">
              <label htmlFor="invalidInput" className="form-label-custom">
                Invalid State Field
              </label>
              <input
                type="email"
                className="form-control-custom is-invalid-custom"
                id="invalidInput"
                defaultValue="invalid-email-format"
              />
              <div className="form-feedback-custom invalid-custom">
                <i className="bi bi-exclamation-circle-fill"></i> Please enter a valid email address.
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="card border-light shadow-sm p-4 h-100">
            <h5 className="card-title mb-4">Input Sizing &amp; Decorator Groups</h5>

            <div className="mb-4">
              <div className="mb-2">
                <label className="form-label-custom">Large Control</label>
                <input
                  type="text"
                  className="form-control-custom form-control-custom-lg"
                  placeholder="Large text box input"
                />
              </div>
              <div className="mb-2">
                <label className="form-label-custom">Default Control</label>
                <input type="text" className="form-control-custom" placeholder="Default text box input" />
              </div>
              <div>
                <label className="form-label-custom">Small Control</label>
                <input
                  type="text"
                  className="form-control-custom form-control-custom-sm"
                  placeholder="Small text box input"
                />
              </div>
            </div>

            <h6 className="mb-3">Input Groups</h6>

            <div className="mb-3">
              <div className="input-group-custom">
                <span className="input-group-text-custom">@</span>
                <input type="text" className="form-control-custom" placeholder="Username" />
              </div>
            </div>

            <div className="mb-3">
              <div className="input-group-custom">
                <input type="text" className="form-control-custom" placeholder="Recipient username" />
                <span className="input-group-text-custom">@sparkadmin.web.id</span>
              </div>
            </div>

            <div className="mb-0">
              <div className="input-group-custom">
                <span className="input-group-text-custom">
                  <i className="bi bi-wallet2"></i>
                </span>
                <input type="text" className="form-control-custom" placeholder="Billing Amount" />
                <span className="input-group-text-custom">USD</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="card border-light shadow-sm p-4 h-100">
            <h5 className="card-title mb-4">Checkboxes, Radios &amp; Switches</h5>

            <h6 className="mb-3">Custom Checkboxes</h6>
            <div className="mb-4">
              <div className="form-check-custom">
                <input className="form-check-input-custom" type="checkbox" id="checkActive" defaultChecked />
                <label className="form-check-label" htmlFor="checkActive">
                  Checked custom option
                </label>
              </div>
              <div className="form-check-custom">
                <input className="form-check-input-custom" type="checkbox" id="checkInactive" />
                <label className="form-check-label" htmlFor="checkInactive">
                  Unchecked custom option
                </label>
              </div>
              <div className="form-check-custom">
                <input className="form-check-input-custom" type="checkbox" id="checkDisabled" disabled defaultChecked />
                <label className="form-check-label" htmlFor="checkDisabled">
                  Disabled checked option
                </label>
              </div>
            </div>

            <h6 className="mb-3">Custom Radio Elements</h6>
            <div className="mb-4">
              <div className="form-check-custom">
                <input className="form-check-input-custom" type="radio" name="radioGroup" id="radioOne" defaultChecked />
                <label className="form-check-label" htmlFor="radioOne">
                  Radio option selection A
                </label>
              </div>
              <div className="form-check-custom">
                <input className="form-check-input-custom" type="radio" name="radioGroup" id="radioTwo" />
                <label className="form-check-label" htmlFor="radioTwo">
                  Radio option selection B
                </label>
              </div>
            </div>

            <h6 className="mb-3">Premium Switch Controls (iOS Style)</h6>
            <div>
              <div className="form-switch-custom">
                <input className="form-switch-input-custom" type="checkbox" id="switchOne" defaultChecked />
                <label className="form-switch-label" htmlFor="switchOne">
                  Enable email notifications
                </label>
              </div>
              <div className="form-switch-custom">
                <input className="form-switch-input-custom" type="checkbox" id="switchTwo" />
                <label className="form-switch-label" htmlFor="switchTwo">
                  Keep profile visibility public
                </label>
              </div>
              <div className="form-switch-custom">
                <input className="form-switch-input-custom" type="checkbox" id="switchThree" disabled />
                <label className="form-switch-label" htmlFor="switchThree">
                  Enable background synchronization (Disabled)
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
