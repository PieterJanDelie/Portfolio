import React, { useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import "./Contact.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Versturen....");
    const formData = new FormData(event.target);

    formData.append("access_key", "295314b2-1e7b-49d6-922c-2ffac04a7ae2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email verzonden! Ik neem zo snel mogelijk contact met je op.");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("Er ging spijtig genoeg iets verkeerd");
    }
  };

  return (
    <DefaultLayout>
      <div className="contact-container">
        <h2>Contact</h2>
        <form className="contact-form" onSubmit={onSubmit}>
          <label htmlFor="name">Naam:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Bericht:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Verstuur</button>
        </form>
        {result && <p className="result-message">{result}</p>}
        <div className="contact-info">
          <p>
            Email:{" "}
            <a href="mailto:pieterjan.delie@gmail.com">
              pieterjan.delie@gmail.com
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/pieter-jan-delie/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="white">
                <LinkedInIcon />
              </span>{" "}
              Pieter-Jan Delie
            </a>
          </p>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Contact;
