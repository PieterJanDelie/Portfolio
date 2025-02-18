import React, { useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import "./Contact.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

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
      <div className="hero contacthero">
        <h1>Contact</h1>
        <p>
          Aarzel niet om mij te contacteren bij vragen, opmerkingen of gewoon
          voor een gezellige babbel.
        </p>
      </div>
      <div className="contact-container">
        <div className="contact-box">
          <div className="contact-item">
            <EmailIcon />
            <span className="contact-text">pieterjan.delie@gmail.com</span>
          </div>
          <div className="contact-item">
            <CallIcon />
            <span className="contact-text">+32478739144</span>
          </div>
          <div className="contact-item">
            <LinkedInIcon />
            <span className="contact-text">Pieter-Jan Delie</span>
          </div>
        </div>
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
      </div>
    </DefaultLayout>
  );
};

export default Contact;
