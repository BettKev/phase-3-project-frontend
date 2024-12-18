import React from "react";
import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/user_registration">User Registration</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <a href="https://lzyw1gvy.status.cron-job.org/" target="blank">check server status</a>
        <p>&copy; 2024 Your Company Name</p>
      </footer>
    </div>
  );
}

export default Layout;
