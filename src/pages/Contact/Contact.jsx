import React, { useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import Contactinfo from "../../components/Contactinfo/Contactinfo";
import ContactForm from "../../components/Contactform/Contactform";
import ResultMessage from "../../components/Resultmessage/Resultmessage";
import "./Contact.css";

const Contact = () => {
  const [result, setResult] = useState("");

  return (
    <DefaultLayout>
      <div className="hero contacthero">
        <h1>Contact</h1>
        <p>Aarzel niet om mij te contacteren bij vragen of opmerkingen.</p>
      </div>
      <div className="contact-container">
        <Contactinfo />
        <ContactForm setResult={setResult} />
        <ResultMessage result={result} />
      </div>
    </DefaultLayout>
  );
};

export default Contact;
