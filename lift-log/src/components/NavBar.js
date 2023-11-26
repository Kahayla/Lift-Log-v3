import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

export default function NavBar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-md navbar-dark d-flex justify-content-between align-items-center">
            <button
              className="navbar-toggler mx-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mx-auto text-center">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/AddSession" className="nav-link">
                    Add Session
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/ViewSessions" className="nav-link">
                    View Session
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
