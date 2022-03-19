import React from "react";
import Navbar from "../Navbar/Navbar";
import "../styles/Contact.css";

function Contact() {
  return (
    <div>
      <Navbar />
      <section className="contact-me" id="contact-me">
        <div className="contact-content">
          <h2 className="contact-heading">
            <span>Contact Me</span>
          </h2>
          <p>I'd love to hear from you.</p>
          <div className="contact-form">
            <form>
              <label for="name">Full Name </label>
              <input
                type="text"
                placeholder=""
                id="name"
                name="name"
                class="form-input"
              />
              <label for="email">Email</label>
              <input
                type="email"
                placeholder=""
                id="email"
                name="email"
                class="form-input"
              />

              <label for="message">Message</label>
              <input
                type="text"
                placeholder=""
                name="message"
                id="message"
                class="form-input"
              />
              <input type="submit" />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
