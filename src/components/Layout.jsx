import React from "react";
import { Link } from "react-router-dom";
// import "./Layout.css"; // Import custom CSS for additional styles

function Layout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Sticky Navbar */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Your Company Name
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/user_registration">
                    User Registration
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow-1 container my-4 pt-5">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-light text-center py-3 mt-auto">
        <a
          href="https://lzyw1gvy.status.cron-job.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none"
        >
          Check Server Status
        </a>
        <p className="mb-0">&copy; 2024 Your Company Name</p>
      </footer>
    </div>
  );
}

export default Layout;
