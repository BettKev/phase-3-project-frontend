import React from "react";

function AboutUsPage() {
  return (
    <div style={{
      backgroundColor: "white",
      opacity: "80%",
      margin: "2%",
      textAlign: "center"
    }}>
      {/* Purpose of the App Section */}
      <section style={{ padding: "20px", backgroundColor: "#f9f9f9" }}>
        <h2 style={{ fontSize: "24px", color: "#2c3e50" }}>What is Care Connect?</h2>
        <p style={{ fontSize: "18px", color: "#333", lineHeight: "1.6" }}>
          Care Connect is a platform that connects caregivers, patients, and healthcare providers. Our goal is to improve
          collaboration, enhance communication, and provide easy access to resources. Whether you're a caregiver supporting
          a loved one, a healthcare professional offering services, or someone seeking help, Care Connect is here to
          simplify your experience and create a more connected healthcare environment.
        </p>
      </section>

      {/* How to Join and Contribute Section */}
      <section style={{ padding: "20px" }}>
        <h2 style={{ fontSize: "24px", color: "#2c3e50" }}>How to Join and Contribute</h2>
        <ul style={{ fontSize: "18px", color: "#333", lineHeight: "1.6", paddingLeft: "20px", listStyle: "none" }}>
          <li style={{ marginBottom: "10px" }}>
            Create an account to connect with other caregivers, patients, and healthcare professionals.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Contribute by sharing resources, offering feedback, or getting involved in open-source projects.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Participate in community discussions and provide support to others.
          </li>
        </ul>
      </section>

      {/* Example Projects Section */}
      <section style={{ padding: "20px" }}>
        <h2 style={{ fontSize: "24px", color: "#2c3e50" }}>Example Projects</h2>
        <div
          style={{
            backgroundColor: "#ecf0f1",
            padding: "15px",
            borderRadius: "8px",
            marginBottom: "20px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ fontSize: "20px", color: "#2c3e50" }}>Caregiver Resource Sharing</h3>
          <p style={{ fontSize: "18px", color: "#333", lineHeight: "1.6" }}>
            A centralized library where caregivers can find tips, advice, and helpful resources to better support their
            loved ones.
          </p>
        </div>
        <div
          style={{
            backgroundColor: "#ecf0f1",
            padding: "15px",
            borderRadius: "8px",
            marginBottom: "20px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ fontSize: "20px", color: "#2c3e50" }}>Patient Communication Hub</h3>
          <p style={{ fontSize: "18px", color: "#333", lineHeight: "1.6" }}>
            A secure platform for patients and healthcare providers to communicate, track treatment plans, and collaborate
            on care strategies.
          </p>
        </div>
        <div
          style={{
            backgroundColor: "#ecf0f1",
            padding: "15px",
            borderRadius: "8px",
            marginBottom: "20px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ fontSize: "20px", color: "#2c3e50" }}>Mental Health Support Network</h3>
          <p style={{ fontSize: "18px", color: "#333", lineHeight: "1.6" }}>
            A network connecting mental health professionals and peer support groups to provide care for caregivers and
            patients.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutUsPage;
