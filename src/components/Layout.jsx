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
                {/* <li>
                  <Link className="nav_text" to="/user_registration">
                    User Registration
                  </Link>
                </li> */}
              </ul>
              </div> 
            <button>
            <div>
             <a style={{
        textDecoration: "none",
        color: "white",
        fontWeight: "bolder",
        fontSize: "1rem"
      }}
          href="https://lzyw1gvy.status.cron-job.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none"
        >
          Check Status of CareConnect Database
        </a>
             </div>
            </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow-1 container my-4 pt-5">
        {children}
      </main>

      {/* Footer */}
      <footer>
      <button>
      <a style={{
        textDecoration: "none",
        color: "white",
        fontWeight: "bolder"
      }}
          href="https://lzyw1gvy.status.cron-job.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none"
        >
          Check Status of CareConnect Database
        </a>
      </button>
        <p className="mb-0">&copy; 2024 Care Connect</p>
      </footer>
    </div>
  );
}

export default Layout;
