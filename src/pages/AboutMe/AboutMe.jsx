import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <DefaultLayout>
      <div className="hero">
        <div className="hero-content">
          <img
            src={require(`../../assets/Images/AboutMe/Portretfoto.png`)}
            alt="Portretfoto"
            className="portrait"
          />
          <div>
            <p>
              Hallo! Ik ben Pieter-Jan Delie, een gepassioneerde
              softwareontwikkelaar en AI enthousiast.
            </p>
          </div>
        </div>
      </div>

      <div className="about-content">
        <section>
          <h2>Wie ben ik?</h2>
          <p>
            Ik heb een sterke passie voor softwareontwikkeling en geniet ervan
            om projecten van concept tot implementatie uit te werken. Mijn
            ervaring ligt voornamelijk in React, Java en C#, maar ik sta altijd
            open voor nieuwe technologieën. Meestal als ik programmeer, is dat
            met een aflevering van <strong>FC De Kampioenen</strong>.
          </p>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/cuW9ZpoVNgs?si=vG9w6MBx38KukmDJ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section>
          <h2>Opleiding</h2>
          <p>
            Momenteel volg ik de Banaba International Management en de Bachelor
            Toegepaste Informatica Artificiële Intelligentie. In 2024 studeerde
            ik af in de Bachelor Toegepaste Informatica Software Development aan
            Hogeschool VIVES.
          </p>
        </section>

        <section>
          <h2>Werkervaring</h2>
          <p>
            Doorheen mijn loopbaan heb ik bij bedrijven zoals{" "}
            <strong>Skyline Communications, Barco</strong> en
            <strong> Filou Oostende</strong> gewerkt als student. Ik heb diverse
            applicaties gebouwd, gaande van mail-analyse tools tot interactieve
            gamecenters (zie ook de pagina projecten).
          </p>
        </section>

        <section className="sports-section">
          <h2>Vrije tijd</h2>
          <p>
            Naast mijn passie voor programmeren ben ik een grote sportfan. Ik
            kijk graag naar voetbal, basketbal en rugby. Ik speel niet alleen
            zelf, maar coach ook, zodat ik mijn spelplezier kan overbrengen op
            opkomend talent.
          </p>
          <div className="sports-image">
            <img
              src={require(`../../assets/Images/AboutMe/basket.jpg`)}
              alt="Basketbal"
              className="basket-image"
            />
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
};

export default AboutMe;
