import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <main className="homepage">
      <section className="hero-section">
        <div className="hero-text">
          <h1>Welcome to <span className="highlight">CareConnect</span></h1>
          <p>
            Empowering <strong>persons with disabilities</strong> by connecting them 
            to vital <span className="highlight">resources</span>, <span className="highlight">aid</span>, 
            and <span className="highlight">donations</span>. Join us in creating a more inclusive world!
          </p>
          <button className="cta-button"> <Link
      to="/user_registration"
      style={{
        color: "#fff", // white color
        textDecoration: "none", // Remove underline
        fontWeight: "bold",
        fontSize: "1.2rem",
        padding: "10px 15px",
        borderRadius: "5px",
        transition: "background-color 0.3s ease",
      }}
      onMouseEnter={(e) => (e.target.style.backgroundColor = "#e64a19")}
      onMouseLeave={(e) => (e.target.style.backgroundColor = "#333")}
    >
      Register User Now
    </Link></button>
        </div>
        <div className="hero-image">
          <img
            src="/hero.jpg" 
            alt="Inclusive Support" 
            className="responsive-image"
          />
        </div>
      </section>
    </main>
  );
}

export default HomePage;
