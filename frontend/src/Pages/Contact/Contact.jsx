import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";

function Contact() {
  // State to hold the form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State to manage submission status (e.g., for showing messages to the user)
  const [status, setStatus] = useState("");

  // Handler to update state when user types in an input field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default browser refresh
    setStatus("Sending..."); // Update status for user feedback

    try {
      // Make a POST request to your backend endpoint
      const response = await axios.post(
        "https://sanshi-h2o-backend.onrender.com/api/contact",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }
      );

      // Handle success
      if (response.status === 201 || response.status === 200) {
        setStatus("Message sent successfully!");
        // Clear the form
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      // Handle error
      console.error("Error sending message:", error);
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <div>
      <div className="title">
        <div>
          <h1>Contact Us</h1>
        </div>
        <div>
          <center>
            <p>
              We're always excited to connect with researchers, industry
              partners, and anyone curious about the future of computing and
              networking. Whether you're interested in collaboration, have
              questions about our work, or simply want to learn more, we'd love
              to hear from you. Reach out anytime, we'll respond promptly.
            </p>
          </center>
        </div>
      </div>
      <div className="contact-container">
        <div className="contact">
          {/* Use a <form> element and attach the handleSubmit function to its onSubmit event */}
          <form className="form" onSubmit={handleSubmit}>
            <h3>Send us a Message</h3>
            <p>Fill out the form below and we'll get back to you ASAP.</p>
            <div className="elements">
              <p>Your Name *</p>
              <input
                type="text"
                name="name" // The 'name' attribute must match the state property
                placeholder="Please input your full name"
                value={formData.name} // Control the input with state
                onChange={handleChange} // Update state on change
                required // Basic HTML validation
              />
            </div>
            <div className="elements">
              <p>Email *</p>
              <input
                type="email" // Use type="email" for better validation
                name="email"
                placeholder="Please enter your email address"
                value={formData.email}
                onChange={handleChange}
                // required
              />
            </div>
            <div className="elements">
              <p>Message *</p>
              <textarea
                name="message"
                id="msg"
                placeholder="Please enter your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="elements">
              {/* The button's default type is 'submit' inside a form */}
              <button type="submit">Send Message</button>
            </div>
            {/* Display the status message to the user */}
            {status && <p className="status-message">{status}</p>}
          </form>
          <div className="contact-info">
            {/* You can add contact info here later */}
          </div>
          <div
            className="detail-tiles social-links"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, var(--color-surface), var(--color-accent))",
            }}
          >
            <a href="https://www.linkedin.com/company/next-gen-computing-and-networking-ngcn/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            {/* <a href="https://github.com/Infiniper">
              <i className="fa-brands fa-github"></i>
            </a> */}
            <a href="https://x.com/NGCN_Group">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://www.instagram.com/ngcngroup">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="mailto:ngcngroup@gmail.com">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="details">
          <div className="details-title">
            <h3>Get in Touch</h3>
            <p>Currently, our research group is located in IIITDM Kurnool. We welcome visitors by appointment and encourage you to reach out in advance to schedule a meeting or tour of our facilities.</p>
          </div>
          <div>
            <div>
              <h4>Founder</h4>
            </div>
            <div
              className="detail-tiles"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, var(--color-surface), var(--color-accent))",
              }}
            >
              <h4>Dr. K. E. Srinivasa Desikan</h4>
              <p>Founder</p>
              <p style={{ "font-size": "1rem" }}>
                📧 srinivasadesikan@iiitk.ac.in
              </p>
              {/* <p>Inquiries, and general questions</p> */}
            </div>
            <div className="detail-tiles">
              <h4>Working Hours</h4>
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p>Saturday: 10:00 AM - 5:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
            <div className="detail-tiles">
              <h4>Email Support</h4>
              <p>
                ngcngroup@gmail.com, ngcnresearchgroup@iiitk.ac.in
              </p>
              <p>We typically respond within 24 hours</p>
            </div>
            <div className="detail-tiles">
              <h4>Office Location</h4>
              <p>CSE BLOCK, IIITDM Kurnool Jagannathagattu Hill </p>
              <p>Kurnool- 518 008, Andhra Pradesh, India.</p>
            </div>
          </div>
        </div>
      </div>
      <div>{/* {faq} */}</div>
    </div>
  );
}

export default Contact;
