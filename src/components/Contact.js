import React from "react";
import Form from "./Form";
import { ToastContainer } from "react-toastify";

function Contact() {
  return (
    <section className="contact" id="contact">
      <ToastContainer />
      <div className="container">
        <div className="contact-card">
          <h2>
            Hi There I'm Abdellatif <span>Frontend Developer</span>
          </h2>
          <h3>Lets Talk 👇</h3>
          <Form />
        </div>
      </div>
    </section>
  );
}

export default Contact;
