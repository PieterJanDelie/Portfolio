import React, { useState } from "react";

const ContactForm = ({ setResult }) => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("Versturen...");

    const formData = new FormData(event.target);
    formData.append("access_key", "295314b2-1e7b-49d6-922c-2ffac04a7ae2");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setLoading(false);

      if (data.success) {
        setResult(
          "Email verzonden! Ik neem zo snel mogelijk contact met je op."
        );
        event.target.reset();
      } else {
        setResult("Er ging iets mis, probeer opnieuw.");
      }
    } catch (error) {
      setLoading(false);
      setResult("Er is een fout opgetreden.");
    }
  };

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <label htmlFor="name">Naam:</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="message">Bericht:</label>
      <textarea id="message" name="message" rows="4" required></textarea>

      <button type="submit" disabled={loading}>
        {loading ? "Versturen..." : "Verstuur"}
      </button>
    </form>
  );
};

export default ContactForm;
