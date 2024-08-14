import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
// npm i @emailjs/browse
const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ivyn6ji", "template_x30gzvo", form.current, {
        publicKey: "EI4aEigA27kyVGAoh",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("success");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact">
      <div className="contact-header">
        <h3>Contact Us</h3>
      </div>
      <form ref={form} onSubmit={sendEmail} className="contact-items">
        <div className="contact-fields">
          <p>Your Name</p>
          <input
            type="text"
            placeholder="Your name"
            name="to_name"
            id=""
            required
          />
        </div>
        <div className="contact-fields">
          <p>Your Email</p>
          <input
            type="email"
            placeholder="Your email"
            name="from_name"
            id=""
            required
          />
        </div>
        <div className="contact-fields">
          <p>Subject</p>
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            id=""
            required
          />
        </div>
        <div className="contact-fields">
          <p>Your Message</p>
          <textarea
            placeholder="Your Message"
            rows="5"
            name="message"
            id=""
            required
          />
        </div>
        <div className="contact-fields">
          <p></p>
          <input className="btn" type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
