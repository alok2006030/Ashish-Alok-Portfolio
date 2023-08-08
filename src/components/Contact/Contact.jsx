import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser"; // Import the emailjs library
import { themeContext } from "../../Context"; // Import the theme context

const Contact = () => {
  const theme = useContext(themeContext); // Access the theme context to apply dark mode styling
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false) // State to track if email is sent successfully

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    emailjs
      .sendForm(
        "service_nt1lev3",
        "template_anl93k6",
        form.current,
        "WioWqszLWdr3AyTuL"
      )
      .then(
        (result) => {
          console.log(result.text); // Log the result message to the console
          setDone(true); // Update state to show success message
          form.current.reset(); // Reset the form fields after successful email sending
        },
        (error) => {
          console.log(error.text); // Log any error messages to the console
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* Left side of the form */}
      <div className="w-left">
        <div className="awesome">
          {/* Apply dark mode styling to the text */}
          <span style={{color: darkMode?'yellow': ''}}>Get in Touch</span>
          <span style={{ color: darkMode ? "blue" : "" }}>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* Right side of the form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          {/* Input fields for name, email, and message */}
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          {/* Submit button to trigger the sendEmail function */}
          <input type="submit" value="Send" className="button"/>
          {/* Show success message when the email is sent successfully */}
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
