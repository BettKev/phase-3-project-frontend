import React from "react";
import { Link } from "react-router-dom";
// import "./Layout.css"; // Import custom CSS for additional styles

function Layout({ children }) {
  return (
    <div>
      {/* Sticky Navbar */}
      <header className="navbar">
        <nav>
            <Link className="nav_text" to="/">
              CareConnect
            </Link>
              <div className="link_text">
              <ul>
                <li>
                  <Link className="nav_text" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="nav_text" to="/about">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="nav_text" to="/user_registration">
                    User Registration
                  </Link>
                </li>
              </ul>
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
